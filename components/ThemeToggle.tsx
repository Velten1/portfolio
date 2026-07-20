'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="theme-toggle" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      {theme === 'dark' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  )
}
