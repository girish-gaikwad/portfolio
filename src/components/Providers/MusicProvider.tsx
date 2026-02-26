'use client'

import { myself } from '@/data/myself'
import React, { createContext, useContext, useState, useRef, useEffect } from 'react'

interface Track {
  name: string
  artist: string
  src: string
  duration?: number
}


// ----------------------------------------------------

interface MusicContextType {
  isPlaying: boolean
  isMuted: boolean
  currentTrack: Track
  togglePlay: () => void
  toggleMute: () => void
  playNext: () => void
  playPrev: () => void
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Track if music has ever started to prevent "auto-resume" after manual pause
  const [hasStarted, setHasStarted] = useState(false)

  const currentTrack = myself.playlist[currentTrackIndex]

  // Handle Play/Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => console.log("Playback prevented:", error))
        }
      }
      setIsPlaying(!isPlaying)
      // Once manually toggled, we consider it "started" so auto-logic doesn't interfere
      if (!hasStarted) setHasStarted(true)
    }
  }

  // Handle Mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle Next
  const playNext = () => {
    if (myself.playlist.length <= 1) return
    setCurrentTrackIndex((prev) => (prev + 1) % myself.playlist.length)
    // If we skip, we usually want it to play immediately
    setIsPlaying(true)
  }

  // Handle Prev
  const playPrev = () => {
    if (myself.playlist.length <= 1) return
    setCurrentTrackIndex((prev) => (prev - 1 + myself.playlist.length) % myself.playlist.length)
    setIsPlaying(true)
  }

  // Effect: When track changes, update source and play if needed
  useEffect(() => {
    if (audioRef.current) {
      // Pause current
      audioRef.current.pause()

      // Force update the src attribute directly on the DOM element to ensure it's in sync
      // before we call load/play
      audioRef.current.src = myself.playlist[currentTrackIndex].src

      // Load new src
      audioRef.current.load()

      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Auto-play next failed", e))
        }
      }
    }
  }, [currentTrackIndex, isPlaying])


  // Initial Autoplay Logic (User Interaction Listener)
  useEffect(() => {
    // If already started (or manually interacted), don't attach listeners
    if (hasStarted) return

    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              setHasStarted(true)
            })
            .catch((error) => console.log("Autoplay prevented:", error))
        }
      }
    }

    const removeInteractionListeners = () => {
      window.removeEventListener('click', startAudio)
      window.removeEventListener('keydown', startAudio)
      window.removeEventListener('scroll', startAudio)
      window.removeEventListener('mousemove', startAudio)
      window.removeEventListener('touchstart', startAudio)
    }

    // Add listeners
    window.addEventListener('click', startAudio)
    window.addEventListener('keydown', startAudio)
    window.addEventListener('scroll', startAudio)
    window.addEventListener('mousemove', startAudio)
    window.addEventListener('touchstart', startAudio)

    return () => removeInteractionListeners()
  }, [hasStarted, isPlaying])

  return (
    <MusicContext.Provider value={{
      isPlaying,
      isMuted,
      currentTrack,
      togglePlay,
      toggleMute,
      playNext,
      playPrev,
      audioRef
    }}>
      {children}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={playNext} // Auto-advance playlist
        className="hidden"
      />
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
