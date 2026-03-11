'use client'

import { useEffect, useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useStore } from '@/store/StoreContext'
import { assetPath } from '@/lib/assetPath'

export default function Navbar() {
  const { state, toggleCart } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = document.getElementById('navbar')
    const handler = () => {
      if (nav) nav.style.background = window.scrollY > 60 ? 'rgba(5,5,8,0.98)' : 'rgba(5,5,8,0.88)'
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath('/logo.svg')} alt="HypergeeRPC" className="nav-logo-img" />
        </div>
        <div className="nav-links">
          <a href="#prebuilt" className="nav-link cursor-target">Calculatoare</a>
          <a href="#builder" className="nav-link cursor-target">PC Builder</a>
          <a href="#contact" className="nav-link cursor-target">Contact</a>
        </div>
        <div className="nav-right">
          <button className="cart-btn" onClick={toggleCart}>
            <ShoppingCart size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            {' '}<span className="cart-count">{state.cart.length}</span>
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Inchide meniu' : 'Deschide meniu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#prebuilt" className="mobile-nav-link" onClick={closeMenu}>Calculatoare</a>
          <a href="#builder" className="mobile-nav-link" onClick={closeMenu}>PC Builder</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </>
  )
}
