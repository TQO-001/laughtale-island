'use client'

import { useEffect } from 'react'

export default function ThemeProvider() {
  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    const setDark = (isDark: boolean) => {
      if (isDark) root.classList.add('dark')
      else root.classList.remove('dark')
    }

    // Apply on first load
    setDark(prefersDark.matches)

    // Listen to changes
    const handler = (e: MediaQueryListEvent) => setDark(e.matches)
    if (prefersDark.addEventListener) {
      prefersDark.addEventListener('change', handler)
    } else if ((prefersDark as any).addListener) {
      // older browsers
      ;(prefersDark as any).addListener(handler)
    }

    return () => {
      if (prefersDark.removeEventListener) {
        prefersDark.removeEventListener('change', handler)
      } else if ((prefersDark as any).removeListener) {
        ;(prefersDark as any).removeListener(handler)
      }
    }
  }, [])

  return null
}
