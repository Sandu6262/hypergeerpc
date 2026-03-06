'use client'

import { useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useStore } from '@/store/StoreContext'
import { assetPath } from '@/lib/assetPath'

export default function Navbar() {
  const { state, toggleCart } = useStore()

  useEffect(() => {
    const nav = document.getElementById('navbar')
    const handler = () => {
      if (nav) nav.style.background = window.scrollY > 60 ? 'rgba(5,5,8,0.98)' : 'rgba(5,5,8,0.88)'
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath('/logo.svg')} alt="HypergeeRPC" className="nav-logo-img" />
      </div>
      <div className="nav-links">
        <a href="#prebuilt" className="nav-link">Calculatoare</a>
        <a href="#builder" className="nav-link">PC Builder</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button className="cart-btn" onClick={toggleCart}>
        <ShoppingCart size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
        {' '}<span className="cart-count">{state.cart.length}</span>
      </button>
    </nav>
  )
}
