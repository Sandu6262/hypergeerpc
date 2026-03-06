'use client'

const CORES = Array.from({ length: 16 }, (_, i) => i)
const DELAYS = [0, 0.7, 1.4, 2.1, 0.3, 1.1, 1.8, 0.5, 1.6, 0.2, 0.9, 1.3, 2.4, 0.6, 1.9, 0.4]

export default function CircuitBg() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="die-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="core-glow">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── DIE OUTER SHELL ─────────────────────── */}
        <rect x="20" y="20" width="320" height="320" rx="6"
          fill="rgba(4,4,16,.95)" stroke="rgba(0,255,208,.35)" strokeWidth="1.5"
          filter="url(#die-glow)" />
        <rect x="24" y="24" width="312" height="312" rx="4"
          fill="none" stroke="rgba(0,255,208,.1)" strokeWidth=".5"/>

        {/* ── L3 CACHE (left strip) ───────────────── */}
        {[0,1,2,3].map(i => (
          <rect key={i} x="28" y={30 + i * 72} width="36" height="62" rx="2"
            fill="rgba(0,255,208,.05)" stroke="rgba(0,255,208,.25)" strokeWidth=".8"
            className="cache-block"/>
        ))}
        <text x="46" y="308" textAnchor="middle" fontSize="6"
          fill="rgba(0,255,208,.4)" fontFamily="monospace" letterSpacing="1">L3$</text>

        {/* ── L3 CACHE (right strip) ──────────────── */}
        {[0,1,2,3].map(i => (
          <rect key={i} x="296" y={30 + i * 72} width="36" height="62" rx="2"
            fill="rgba(123,47,255,.05)" stroke="rgba(123,47,255,.25)" strokeWidth=".8"
            className="cache-block-v"/>
        ))}

        {/* ── MEMORY CONTROLLER (bottom) ──────────── */}
        {[0,1,2,3].map(i => (
          <rect key={i} x={74 + i * 54} y="314" width="44" height="22" rx="2"
            fill="rgba(0,170,255,.05)" stroke="rgba(0,170,255,.25)" strokeWidth=".8"
            className="mc-block"/>
        ))}
        <text x="180" y="325" textAnchor="middle" fontSize="6"
          fill="rgba(0,170,255,.4)" fontFamily="monospace" letterSpacing="1">MEM CTRL</text>

        {/* ── IO CONTROLLER (top) ─────────────────── */}
        {[0,1].map(i => (
          <rect key={i} x={74 + i * 110} y="24" width="90" height="22" rx="2"
            fill="rgba(255,102,0,.04)" stroke="rgba(255,102,0,.2)" strokeWidth=".8"/>
        ))}

        {/* ── DATA BUSES ──────────────────────────── */}
        <g stroke="rgba(0,255,208,.12)" strokeWidth=".8" fill="none">
          <line x1="64" y1="46" x2="64" y2="314"/>
          <line x1="296" y1="46" x2="296" y2="314"/>
          <line x1="74" y1="310" x2="74" y2="46"/>
          <line x1="286" y1="310" x2="286" y2="46"/>
          <line x1="28" y1="180" x2="332" y2="180"/>
        </g>

        {/* ── COMPUTE CORES 4×4 ───────────────────── */}
        {CORES.map(i => {
          const col = i % 4
          const row = Math.floor(i / 4)
          const x = 78 + col * 54
          const y = 50 + row * 54
          return (
            <g key={i}>
              {/* core bg */}
              <rect x={x} y={y} width="44" height="44" rx="3"
                fill="rgba(0,255,208,.04)" stroke="rgba(0,255,208,.2)" strokeWidth=".8"/>
              {/* core inner detail */}
              <rect x={x+4} y={y+4} width="16" height="16" rx="1"
                fill="rgba(0,255,208,.06)" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>
              <rect x={x+24} y={y+4} width="16" height="16" rx="1"
                fill="rgba(0,255,208,.06)" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>
              <rect x={x+4} y={y+24} width="16" height="16" rx="1"
                fill="rgba(0,255,208,.06)" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>
              <rect x={x+24} y={y+24} width="16" height="16" rx="1"
                fill="rgba(0,255,208,.06)" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>
              {/* active glow overlay */}
              <rect x={x} y={y} width="44" height="44" rx="3"
                fill="rgba(0,255,208,.0)" stroke="rgba(0,255,208,.0)" strokeWidth="0"
                filter="url(#core-glow)"
                className="core-active"
                style={{ animationDelay: `${DELAYS[i]}s` }}/>
            </g>
          )
        })}

        {/* ── DIE LABEL ───────────────────────────── */}
        <text x="180" y="14" textAnchor="middle" fontSize="7"
          fill="rgba(0,255,208,.3)" fontFamily="monospace" letterSpacing="3">HYPERGEE-X1</text>
      </svg>
    </div>
  )
}
