'use client'

import { useEffect, useRef } from 'react'

const COLORS = ['#8B00FF', '#FF1493', '#00FFFF', '#BF00FF', '#FF69B4', '#ffffff']

export default function BgStars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div')
      const size = Math.random() * 16 + 8
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const dur = 3 + Math.random() * 5
      const delay = Math.random() * 8
      const opacity = 0.3 + Math.random() * 0.6
      s.textContent = '✦'
      s.style.cssText = `
        position:fixed;
        font-size:${size}px;
        color:${color};
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:star-twinkle ${dur}s ease-in-out infinite;
        animation-delay:-${delay}s;
        opacity:${opacity};
        text-shadow:0 0 6px ${color},0 0 14px ${color},0 0 28px ${color}88;
        pointer-events:none;
        z-index:0;
        line-height:1;
        user-select:none;
      `
      container.appendChild(s)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return <div ref={ref} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" suppressHydrationWarning />
}
