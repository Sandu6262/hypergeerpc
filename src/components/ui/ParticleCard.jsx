'use client'
import { useRef, useEffect, useCallback, useState, createContext, useContext } from 'react'
import { gsap } from 'gsap'
import './ParticleCard.css'

// ── Brand color RGB ──────────────────────────────────────────────────────────
const GLOW_COLOR = '237, 182, 0'
const PARTICLE_COUNT = 10
const SPOTLIGHT_RADIUS = 280

// ── Spotlight context (shares gridRef across cards) ──────────────────────────
const GridRefContext = createContext({ current: null })

// ── GlobalSpotlight ──────────────────────────────────────────────────────────
export function MagicBentoSpotlight({ gridRef }) {
  useEffect(() => {
    const spotlight = document.createElement('div')
    spotlight.className = 'global-spotlight'
    spotlight.style.background = `radial-gradient(circle,
      rgba(${GLOW_COLOR}, 0.18) 0%,
      rgba(${GLOW_COLOR}, 0.09) 20%,
      rgba(${GLOW_COLOR}, 0.04) 35%,
      transparent 65%
    )`
    document.body.appendChild(spotlight)

    const proximity = SPOTLIGHT_RADIUS * 0.5
    const fadeDistance = SPOTLIGHT_RADIUS * 0.75

    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      if (!gridRef.current) return
      const section = gridRef.current.closest('.bento-section')
      const rect = section?.getBoundingClientRect()
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      const cards = gridRef.current.querySelectorAll('.particle-card')

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 })
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'))
        return
      }

      let minDist = Infinity
      cards.forEach(card => {
        const cr = card.getBoundingClientRect()
        const cx = cr.left + cr.width / 2
        const cy = cr.top + cr.height / 2
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2)
        minDist = Math.min(minDist, dist)
        const rel = { x: ((e.clientX - cr.left) / cr.width) * 100, y: ((e.clientY - cr.top) / cr.height) * 100 }
        card.style.setProperty('--glow-x', `${rel.x}%`)
        card.style.setProperty('--glow-y', `${rel.y}%`)
        card.style.setProperty('--glow-radius', `${SPOTLIGHT_RADIUS}px`)
        const intensity = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance - dist) / (fadeDistance - proximity) : 0
        card.style.setProperty('--glow-intensity', intensity.toString())
      })

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 })
      const targetOpacity = minDist <= proximity ? 0.9 : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.9 : 0
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5 })
    }

    const onLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.3 })
      gridRef.current?.querySelectorAll('.particle-card').forEach(c => c.style.setProperty('--glow-intensity', '0'))
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlight.parentNode?.removeChild(spotlight)
    }
  }, [gridRef])

  return null
}

// ── ParticleCard ─────────────────────────────────────────────────────────────
export function ParticleCard({ children, className = '', style }) {
  const cardRef = useRef(null)
  const particlesRef = useRef([])
  const timeoutsRef = useRef([])
  const isHovered = useRef(false)
  const magnetAnim = useRef(null)
  const [, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    magnetAnim.current?.kill()
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => { p.parentNode?.removeChild(p) } })
    })
    particlesRef.current = []
  }, [])

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHovered.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const tid = setTimeout(() => {
        if (!isHovered.current || !cardRef.current) return
        const p = document.createElement('div')
        p.className = 'pc-particle'
        p.style.cssText = `
          left:${Math.random() * width}px;top:${Math.random() * height}px;
          background:rgba(${GLOW_COLOR},1);
          box-shadow:0 0 6px rgba(${GLOW_COLOR},0.7);
        `
        cardRef.current.appendChild(p)
        particlesRef.current.push(p)
        gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })
        gsap.to(p, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true })
        gsap.to(p, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true })
      }, i * 100)
      timeoutsRef.current.push(tid)
    }
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onEnter = () => {
      isHovered.current = true
      spawnParticles()
      gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 })
    }
    const onLeave = () => {
      isHovered.current = false
      clearParticles()
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' })
    }
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2, cy = rect.height / 2
      gsap.to(el, { rotateX: ((y - cy) / cy) * -8, rotateY: ((x - cx) / cx) * 8, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 })
      magnetAnim.current = gsap.to(el, { x: (x - cx) * 0.04, y: (y - cy) * 0.04, duration: 0.3, ease: 'power2.out' })
    }
    const onClick = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      const maxD = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height))
      const ripple = document.createElement('div')
      ripple.style.cssText = `position:absolute;width:${maxD * 2}px;height:${maxD * 2}px;border-radius:50%;background:radial-gradient(circle,rgba(${GLOW_COLOR},0.35) 0%,rgba(${GLOW_COLOR},0.15) 30%,transparent 70%);left:${x - maxD}px;top:${y - maxD}px;pointer-events:none;z-index:1000;`
      el.appendChild(ripple)
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() })
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)
    return () => {
      isHovered.current = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
      clearParticles()
    }
  }, [spawnParticles, clearParticles])

  return (
    <div
      ref={cardRef}
      className={`particle-card ${className}`}
      style={{ ...style, '--glow-color': GLOW_COLOR }}
    >
      {children}
    </div>
  )
}
