'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/experience', label: 'Experiências' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={closeMobileMenu}
            >
              Caio Velten
            </Link>

            <div className="flex items-center gap-4">
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                        pathname === link.href
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
            onClick={closeMobileMenu}
          />

          <div className="fixed top-[72px] right-0 bottom-0 w-64 bg-white dark:bg-slate-900 z-40 md:hidden shadow-2xl animate-slide-in-right">
            <nav className="flex flex-col p-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        pathname === link.href
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

