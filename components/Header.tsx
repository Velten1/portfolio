'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [{ href: '/about', label: 'Sobre' }, { href: '/experience', label: 'Experiência' }, { href: '/projects', label: 'Projetos' }]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <Link href="/" className="brand"><span><Image src="/caio-profile.png" alt="" width={27} height={27} priority /></span><b>Caio Velten</b></Link>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(link => <Link key={link.href} href={link.href} className={pathname.startsWith(link.href) ? 'active' : ''}>{link.label}</Link>)}
          <Link href="/contact" className="nav-contact">Contato <span>↗</span></Link>
        </div>
        <div className="nav-tools"><ThemeToggle /><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button></div>
      </nav>
    </header>
  )
}
