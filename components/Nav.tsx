'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const path = usePathname()
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/fitness', label: 'Fitness' },
    { href: '/golf', label: 'Golf' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
  ]

  const active = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href)

  return (
    <>
      <nav className="nav">
        {/* Desktop links */}
        <div className="nav-left">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${active(l.href) ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Wordmark */}
        <div className="nav-brand">
          <div className="nav-wm">Dog House</div>
          <div className="nav-est">— Est 2026 —</div>
        </div>

        {/* Right side */}
        <div className="nav-right">
          {/* Cart icon */}
          <svg className="nav-icon" viewBox="0 0 24 24" onClick={openCart} aria-label="Cart">
            <path d="M6 7h12l-1 13H7L6 7z"/>
            <path d="M9 7a3 3 0 0 1 6 0"/>
          </svg>
          <span className="cart-badge" onClick={openCart}>{count}</span>

          {/* Hamburger (mobile) */}
          <div
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`mobile-link${active(l.href) ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
