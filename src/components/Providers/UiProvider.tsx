'use client'

import React, { createContext, useContext, useState } from 'react'

interface UiContextType {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const UiContext = createContext<UiContextType | undefined>(undefined)

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <UiContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUi() {
  const context = useContext(UiContext)
  if (context === undefined) {
    throw new Error('useUi must be used within a UiProvider')
  }
  return context
}