'use client'

import { useEffect, useRef } from 'react'

const COLORS = ['#8B00FF', '#FF1493', '#00FFFF', '#FF6600', '#BF00FF', '#FF69B4']

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
