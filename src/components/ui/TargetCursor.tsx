'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './TargetCursor.css'

interface Props {
  targetSelector?: string
  spinDuration?: number
  hoverDuration?: number
  hideDefaultCursor?: boolean
}

const CORNER_SIZE = 10
const IDLE_GAP = 14
const HOVER_PADDING = 8

export default function TargetCursor({
  targetSelector = '.cursor-target',
  spinDuration = 4,
  hoverDuration = 0.25,
  hideDefaultCursor = true,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cornersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const wrapper = wrapperRef.current
    if (!wrapper) return

    if (hideDefaultCursor) document.body.style.cursor = 'none'

    const corners = cornersRef.current.filter(Boolean) as HTMLDivElement[]

    const idlePos = [
      { x: -IDLE_GAP, y: -IDLE_GAP },
      { x: IDLE_GAP - CORNER_SIZE, y: -IDLE_GAP },
      { x: -IDLE_GAP, y: IDLE_GAP - CORNER_SIZE },
      { x: IDLE_GAP - CORNER_SIZE, y: IDLE_GAP - CORNER_SIZE },
    ]

    corners.forEach((c, i) => gsap.set(c, idlePos[i]))
    gsap.set(wrapper, { opacity: 0 })

    let spinTween = gsap.to(wrapper, {
      rotation: '+=360',
      duration: spinDuration,
      repeat: -1,
      ease: 'none',
    })

    let delayedSpin: gsap.core.Tween | null = null
    let isHovering = false

    const onMouseMove = (e: MouseEvent) => {
      gsap.set(wrapper, { opacity: 1 })
      if (!isHovering) {
        gsap.to(wrapper, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.08,
          ease: 'none',
          overwrite: 'auto',
        })
      }
    }

    const onMouseEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      const rect = el.getBoundingClientRect()
      isHovering = true

      spinTween.kill()
      delayedSpin?.kill()

      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const hw = rect.width / 2 + HOVER_PADDING
      const hh = rect.height / 2 + HOVER_PADDING

      gsap.to(wrapper, {
        x: cx,
        y: cy,
        rotation: 0,
        duration: hoverDuration,
        ease: 'power2.out',
        overwrite: true,
      })

      const hoverPos = [
        { x: -hw, y: -hh },
        { x: hw - CORNER_SIZE, y: -hh },
        { x: -hw, y: hh - CORNER_SIZE },
        { x: hw - CORNER_SIZE, y: hh - CORNER_SIZE },
      ]
      corners.forEach((c, i) => {
        gsap.to(c, { ...hoverPos[i], duration: hoverDuration, ease: 'power2.out' })
      })
    }

    const onMouseLeave = () => {
      isHovering = false
      corners.forEach((c, i) => {
        gsap.to(c, { ...idlePos[i], duration: hoverDuration, ease: 'power2.out' })
      })
      delayedSpin = gsap.delayedCall(hoverDuration, () => {
        spinTween = gsap.to(wrapper, {
          rotation: '+=360',
          duration: spinDuration,
          repeat: -1,
          ease: 'none',
        })
      })
    }

    const attachEvents = () => {
      document.querySelectorAll<HTMLElement>(targetSelector).forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
        el.addEventListener('mouseenter', onMouseEnter)
        el.addEventListener('mouseleave', onMouseLeave)
      })
    }

    attachEvents()
    window.addEventListener('mousemove', onMouseMove)

    const observer = new MutationObserver(attachEvents)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.querySelectorAll<HTMLElement>(targetSelector).forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
      observer.disconnect()
      spinTween.kill()
      delayedSpin?.kill()
      gsap.killTweensOf(wrapper)
      if (hideDefaultCursor) document.body.style.cursor = ''
    }
  }, [targetSelector, spinDuration, hoverDuration, hideDefaultCursor])

  return (
    <div ref={wrapperRef} className="target-cursor-wrapper">
      <div className="target-cursor-dot" />
      {(['tl', 'tr', 'bl', 'br'] as const).map((pos, i) => (
        <div
          key={pos}
          className={`target-cursor-corner ${pos}`}
          ref={el => { cornersRef.current[i] = el }}
        />
      ))}
    </div>
  )
}
