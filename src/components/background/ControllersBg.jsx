'use client'

import { useEffect, useRef } from 'react'

const XBOX = `<svg viewBox="0 0 100 58" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 52 C14 52 3 36 6 22 C9 10 21 7 33 12 C39 14 45 18 50 18 C55 18 61 14 67 12 C79 7 91 10 94 22 C97 36 86 52 50 52Z" fill="currentColor"/>
  <ellipse cx="21" cy="46" rx="16" ry="10" fill="currentColor"/>
  <ellipse cx="79" cy="46" rx="16" ry="10" fill="currentColor"/>
  <rect x="13" y="7" width="23" height="7" rx="3.5" fill="currentColor" opacity="0.6"/>
  <rect x="64" y="7" width="23" height="7" rx="3.5" fill="currentColor" opacity="0.6"/>
  <circle cx="33" cy="31" r="9" fill="rgba(0,0,0,0.45)"/>
  <circle cx="33" cy="31" r="5.5" fill="currentColor" opacity="0.5"/>
  <circle cx="63" cy="40" r="9" fill="rgba(0,0,0,0.45)"/>
  <circle cx="63" cy="40" r="5.5" fill="currentColor" opacity="0.5"/>
  <rect x="20" y="37" width="14" height="4" rx="2" fill="rgba(0,0,0,0.5)"/>
  <rect x="24" y="33" width="4" height="14" rx="2" fill="rgba(0,0,0,0.5)"/>
  <circle cx="71" cy="26" r="4.5" fill="#FFD700" opacity="0.85"/>
  <circle cx="79" cy="20" r="4.5" fill="#5EC45E" opacity="0.85"/>
  <circle cx="79" cy="32" r="4.5" fill="#E05050" opacity="0.85"/>
  <circle cx="63" cy="20" r="4.5" fill="#5090E0" opacity="0.85"/>
  <circle cx="50" cy="9" r="7" fill="currentColor" opacity="0.35"/>
</svg>`

const PS = `<svg viewBox="0 0 100 58" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 52 C14 52 3 36 6 22 C9 10 21 7 33 12 C39 14 45 18 50 18 C55 18 61 14 67 12 C79 7 91 10 94 22 C97 36 86 52 50 52Z" fill="currentColor"/>
  <ellipse cx="19" cy="47" rx="18" ry="12" fill="currentColor"/>
  <ellipse cx="81" cy="47" rx="18" ry="12" fill="currentColor"/>
  <rect x="11" y="6" width="23" height="7" rx="3.5" fill="currentColor" opacity="0.6"/>
  <rect x="66" y="6" width="23" height="7" rx="3.5" fill="currentColor" opacity="0.6"/>
  <circle cx="35" cy="42" r="9" fill="rgba(0,0,0,0.45)"/>
  <circle cx="35" cy="42" r="5.5" fill="currentColor" opacity="0.5"/>
  <circle cx="65" cy="42" r="9" fill="rgba(0,0,0,0.45)"/>
  <circle cx="65" cy="42" r="5.5" fill="currentColor" opacity="0.5"/>
  <rect x="19" y="29" width="14" height="4" rx="2" fill="rgba(0,0,0,0.5)"/>
  <rect x="23" y="25" width="4" height="14" rx="2" fill="rgba(0,0,0,0.5)"/>
  <circle cx="70" cy="26" r="4.5" fill="#5EC45E" opacity="0.85"/>
  <circle cx="78" cy="20" r="4.5" fill="#E05050" opacity="0.85"/>
  <circle cx="78" cy="32" r="4.5" fill="#5090E0" opacity="0.85"/>
  <circle cx="62" cy="26" r="4.5" fill="#C070C0" opacity="0.85"/>
  <rect x="44" y="8" width="12" height="5" rx="1.5" fill="currentColor" opacity="0.4"/>
</svg>`

const DRIFTS = ['ctrl-drift-1','ctrl-drift-2','ctrl-drift-3','ctrl-drift-4','ctrl-drift-5']

export default function ControllersBg() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = [
      ...Array(14).fill('xbox'),
      ...Array(14).fill('ps'),
    ]

    items.forEach((type) => {
      const size  = 55 + Math.random() * 70
      const left  = Math.random() * 98
      const top   = Math.random() * 98
      const rot   = -65 + Math.random() * 130
      const opacity = 0.055 + Math.random() * 0.1
      const dur   = 10 + Math.random() * 16
      const delay = -(Math.random() * dur)
      const drift = DRIFTS[Math.floor(Math.random() * DRIFTS.length)]

      // outer wrapper: positions the controller + applies initial rotation
      const wrapper = document.createElement('div')
      wrapper.style.cssText = `
        position:fixed;
        left:${left}%;
        top:${top}%;
        width:${size}px;
        height:auto;
        pointer-events:none;
        z-index:0;
        transform:rotate(${rot}deg);
        opacity:${opacity};
        color:#EDB600;
      `

      // inner: does the drift animation (translate only)
      const inner = document.createElement('div')
      inner.style.cssText = `
        animation:${drift} ${dur}s ease-in-out ${delay}s infinite;
        color:inherit;
      `
      inner.innerHTML = type === 'xbox' ? XBOX : PS
      inner.querySelector('svg').style.cssText = `
        width:${size}px;
        height:auto;
        display:block;
        filter:drop-shadow(0 0 6px rgba(237,182,0,0.4));
      `

      wrapper.appendChild(inner)
      container.appendChild(wrapper)
    })

    return () => { container.innerHTML = '' }
  }, [])

  return (
    <div
      ref={ref}
      className="controllers-bg"
      style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0 }}
      aria-hidden="true"
      suppressHydrationWarning
    />
  )
}
