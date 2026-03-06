'use client'

const KH = 24
const G  = 2

type Key = { label: string; w: number; delay: number }

function row(keys: [string, number][], base = 0): Key[] {
  let col = 0
  return keys.map(([label, w]) => ({ label, w, delay: +(base + col++ * 0.15).toFixed(2) }))
}

const ROWS: { y: number; x: number; keys: Key[] }[] = [
  { y: 310, x: 54, keys: row([['`',26],['1',26],['2',26],['3',26],['4',26],['5',26],['6',26],['7',26],['8',26],['9',26],['0',26],['-',26],['=',26],['⌫',44]], 0) },
  { y: 336, x: 54, keys: row([['TAB',40],['Q',26],['W',26],['E',26],['R',26],['T',26],['Y',26],['U',26],['I',26],['O',26],['P',26],['[',26],[']',26],['\\',40]], 0.1) },
  { y: 362, x: 54, keys: row([['CAPS',48],['A',26],['S',26],['D',26],['F',26],['G',26],['H',26],['J',26],['K',26],['L',26],[';',26],["'",26],['↵',48]], 0.2) },
  { y: 388, x: 54, keys: row([['⇧',62],['Z',26],['X',26],['C',26],['V',26],['B',26],['N',26],['M',26],[',',26],['.',26],['/',26],['⇧',62]], 0.3) },
  { y: 414, x: 54, keys: row([['CTRL',38],['⊞',30],['ALT',30],['',148],['ALT',30],['⊞',30],['CTRL',38]], 0.4) },
]

export default function FansBg() {
  return (
    <div className="fans-bg" aria-hidden="true">
      <svg viewBox="0 0 580 480" xmlns="http://www.w3.org/2000/svg" className="fans-svg">

        {/* ── MONITOR ───────────────────────────────── */}
        {/* Outer bezel */}
        <rect x="105" y="10" width="280" height="200" rx="10"
          fill="rgba(8,8,20,.85)" stroke="rgba(0,255,208,.3)" strokeWidth="1.2"/>
        {/* Screen */}
        <rect x="114" y="18" width="262" height="174" rx="4"
          fill="rgba(2,2,12,.9)" className="screen-bg"/>
        {/* Screen glow */}
        <rect x="114" y="18" width="262" height="174" rx="4"
          fill="none" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>

        {/* Screen content — game HUD bars */}
        <rect x="124" y="28" width="80" height="6" rx="2" fill="rgba(0,255,208,.12)" className="hud-bar hud-1"/>
        <rect x="124" y="28" width="55" height="6" rx="2" fill="rgba(0,255,208,.5)" className="hud-fill hud-fill-1"/>
        <rect x="124" y="38" width="80" height="6" rx="2" fill="rgba(123,47,255,.12)" className="hud-bar"/>
        <rect x="124" y="38" width="35" height="6" rx="2" fill="rgba(123,47,255,.5)" className="hud-fill hud-fill-2"/>
        <rect x="124" y="48" width="80" height="6" rx="2" fill="rgba(255,45,85,.12)" className="hud-bar"/>
        <rect x="124" y="48" width="65" height="6" rx="2" fill="rgba(255,45,85,.5)" className="hud-fill hud-fill-3"/>

        {/* FPS counter */}
        <text x="348" y="34" textAnchor="end" fontSize="10" fontFamily="monospace"
          fill="rgba(0,255,208,.7)" className="fps-text">144 FPS</text>
        <text x="348" y="46" textAnchor="end" fontSize="8" fontFamily="monospace"
          fill="rgba(0,255,208,.35)">1440p · MAX</text>

        {/* Crosshair */}
        <line x1="245" y1="95" x2="245" y2="115" stroke="rgba(0,255,208,.4)" strokeWidth="1"/>
        <line x1="235" y1="105" x2="255" y2="105" stroke="rgba(0,255,208,.4)" strokeWidth="1"/>
        <circle cx="245" cy="105" r="8" fill="none" stroke="rgba(0,255,208,.25)" strokeWidth=".8"/>

        {/* Scan line effect on screen */}
        <rect x="114" y="18" width="262" height="2" rx="0"
          fill="rgba(0,255,208,.04)" className="scan-line"/>

        {/* Monitor bottom bezel */}
        <rect x="105" y="210" width="280" height="12" rx="0"
          fill="rgba(6,6,18,.9)" stroke="rgba(0,255,208,.15)" strokeWidth=".5"/>
        {/* Power LED */}
        <circle cx="245" cy="216" r="2.5" fill="rgba(0,255,208,.9)" className="power-led"/>

        {/* Stand neck */}
        <rect x="231" y="222" width="28" height="35" rx="2"
          fill="rgba(8,8,20,.9)" stroke="rgba(0,255,208,.15)" strokeWidth=".8"/>
        {/* Stand base */}
        <rect x="185" y="255" width="120" height="12" rx="6"
          fill="rgba(8,8,20,.9)" stroke="rgba(0,255,208,.2)" strokeWidth=".8"/>

        {/* Monitor RGB underglow */}
        <ellipse cx="245" cy="270" rx="110" ry="8"
          fill="none" stroke="rgba(0,255,208,.0)" className="monitor-glow"/>

        {/* ── KEYBOARD ──────────────────────────────── */}
        {/* Shell */}
        <rect x="46" y="302" width="436" height="144" rx="8"
          fill="rgba(6,6,18,.8)" stroke="rgba(0,255,208,.2)" strokeWidth=".8"/>
        <rect x="48" y="304" width="432" height="140" rx="7"
          fill="none" stroke="rgba(0,255,208,.05)" strokeWidth=".4"/>

        {ROWS.map((r, ri) => {
          let cx = r.x
          return r.keys.map((key, ki) => {
            if (!key.label && key.w < 40) { cx += key.w + G; return null }
            const kx = cx
            cx += key.w + G
            return (
              <g key={`${ri}-${ki}`}>
                <rect x={kx} y={r.y + 2} width={key.w} height={KH} rx="3"
                  fill="rgba(0,0,0,.5)"/>
                <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                  fill="rgba(0,255,208,.04)" stroke="rgba(0,255,208,.18)" strokeWidth=".6"
                  className="kb-key" style={{ animationDelay: `${key.delay}s` }}/>
                <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                  fill="transparent" className="kb-glow"
                  style={{ animationDelay: `${key.delay}s` }}/>
                {key.label && (
                  <text x={kx + key.w / 2} y={r.y + KH / 2 + 4}
                    textAnchor="middle" fontSize={key.w > 36 ? 6 : 8}
                    fontFamily="monospace" className="kb-label"
                    style={{ animationDelay: `${key.delay}s` }}>
                    {key.label}
                  </text>
                )}
              </g>
            )
          })
        })}

        {/* ── MOUSE ─────────────────────────────────── */}
        {/* Body */}
        <path d="M 508 330 Q 508 310 524 308 Q 548 306 554 320 Q 560 334 558 370 Q 556 400 532 402 Q 508 402 506 370 Q 504 350 508 330 Z"
          fill="rgba(8,8,20,.88)" stroke="rgba(0,255,208,.25)" strokeWidth="1"/>
        {/* Left/right click split */}
        <line x1="531" y1="308" x2="530" y2="340"
          stroke="rgba(0,255,208,.2)" strokeWidth=".8"/>
        {/* Scroll wheel */}
        <rect x="526" y="318" width="9" height="16" rx="4"
          fill="rgba(0,255,208,.15)" stroke="rgba(0,255,208,.4)" strokeWidth=".8"
          className="scroll-wheel"/>
        {/* Side buttons */}
        <rect x="505" y="350" width="6" height="12" rx="2"
          fill="rgba(0,255,208,.1)" stroke="rgba(0,255,208,.2)" strokeWidth=".5"/>
        {/* RGB underglow */}
        <ellipse cx="531" cy="402" rx="24" ry="5"
          fill="none" stroke="rgba(0,255,208,.0)" className="mouse-glow"/>
        {/* Mouse DPI indicator dot */}
        <circle cx="531" cy="395" r="2" fill="rgba(0,255,208,.6)" className="power-led"/>

      </svg>
    </div>
  )
}
