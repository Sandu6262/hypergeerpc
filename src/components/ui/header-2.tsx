'use client'

import { useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useStore } from '@/store/StoreContext'
import { assetPath } from '@/lib/assetPath'
import { MenuToggleIcon } from './menu-toggle-icon'
import { useScroll } from './use-scroll'

const navLinks = [
  { label: 'Calculatoare', href: '#prebuilt' },
  { label: 'PC Builder', href: '#builder' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const { state, toggleCart } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScroll(60)
  const menuRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-2 bg-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(237,182,0,0.15)]'
          : 'py-4 bg-black/80'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath('/logo.svg')}
            alt="HypergeeRPC"
            className={cn(
              'transition-all duration-300',
              scrolled ? 'h-7' : 'h-9'
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-target nav-link text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: cart + hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="cart-btn cursor-target"
            onClick={toggleCart}
            aria-label="Cos cumparaturi"
          >
            <ShoppingCart size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            {' '}<span className="cart-count">{state.cart.length}</span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-[var(--teal)] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Inchide meniu' : 'Deschide meniu'}
            aria-expanded={menuOpen}
          >
            <MenuToggleIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 border-t border-[var(--teal)]/20">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link cursor-target"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
