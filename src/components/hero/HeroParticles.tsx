'use client'

import { useEffect, useRef } from 'react'

const COLORS = ['#EDB600', '#FFD740', '#FFFFFF', '#FFE680', '#B88A00', '#FFF5CC']

export default function HeroParticles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 5 + 2
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const dur = 4 + Math.random() * 6
      const delay = Math.random() * 6
      p.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        background:${color};
        border-radius:50%;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:float ${dur}s ease-in-out infinite;
        animation-delay:-${delay}s;
        opacity:${0.25 + Math.random() * 0.55};
        box-shadow:0 0 ${size * 2.5}px ${color},0 0 ${size * 5}px ${color}40;
        pointer-events:none;
      `
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return <div ref={ref} className="hero-particles" suppressHydrationWarning />
}
