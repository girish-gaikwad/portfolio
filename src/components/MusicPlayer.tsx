'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMusic } from '@/components/Providers/MusicProvider'
import { useUi } from '@/components/Providers/UiProvider'

export default function MusicPlayer() {
    // 1. ADDED 'playNext' TO THE DESTRUCTURED VARIABLES
    const { isPlaying, isMuted, currentTrack, togglePlay, toggleMute, playNext } = useMusic()
    const { isMobileMenuOpen } = useUi()
    const [mounted, setMounted] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const shouldShow = !isMobileMenuOpen

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 md:gap-4 touch-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 'auto', opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                className="overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center pr-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="px-4 py-2 whitespace-nowrap">
                                    <div className="text-xs font-bold text-white uppercase tracking-wider">{currentTrack.name}</div>
                                    <div className="text-[10px] text-white/60 uppercase tracking-wider">{currentTrack.artist}</div>
                                </div>

                                <div className="h-8 w-px bg-white/10 mx-2" />

                                <div className="flex items-center gap-2">
                                    {/* 2. ADDED onClick HANDLER WITH stopPropagation */}
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            playNext()
                                        }}
                                        className="p-2 hover:text-white text-white/60 transition-colors"
                                    >
                                        <SkipForward size={14} />
                                    </button>
                                    
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMute()
                                        }}
                                        className="p-2 hover:text-white text-white/60 transition-colors"
                                    >
                                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            togglePlay()
                        }}
                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden group shadow-lg shadow-white/10"
                    >
                        {isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-20 group-hover:opacity-10 transition-opacity">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-black"
                                        animate={{ height: ['20%', '80%', '20%'] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        <div className="relative z-10">
                            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}