'use client'

const KH = 24
const G  = 2

function row(keys, base = 0) {
  let col = 0
  return keys.map(([label, w]) => ({ label, w, delay: +(base + col++ * 0.15).toFixed(2) }))
}

// Keyboard centered at x=260 of viewBox (width=520), kb total width ~390
const KB_X = 66
const ROWS = [
  { y: 302, x: KB_X, keys: row([['`',24],['1',24],['2',24],['3',24],['4',24],['5',24],['6',24],['7',24],['8',24],['9',24],['0',24],['-',24],['=',24],['⌫',40]], 0) },
  { y: 328, x: KB_X, keys: row([['TAB',36],['Q',24],['W',24],['E',24],['R',24],['T',24],['Y',24],['U',24],['I',24],['O',24],['P',24],['[',24],[']',24],['\\',36]], 0.1) },
  { y: 354, x: KB_X, keys: row([['CAPS',44],['A',24],['S',24],['D',24],['F',24],['G',24],['H',24],['J',24],['K',24],['L',24],[';',24],["'",24],['↵',44]], 0.2) },
  { y: 380, x: KB_X, keys: row([['⇧',56],['Z',24],['X',24],['C',24],['V',24],['B',24],['N',24],['M',24],[',',24],['.',24],['/',24],['⇧',56]], 0.3) },
  { y: 406, x: KB_X, keys: row([['CTRL',36],['⊞',28],['ALT',28],['',136],['ALT',28],['⊞',28],['CTRL',36]], 0.4) },
]

export default function FansBg() {
  return (
    <div className="fans-bg" aria-hidden="true">
      <svg viewBox="0 0 540 470" xmlns="http://www.w3.org/2000/svg" className="fans-svg">

        {/* ── MONITOR — centered at x=260 ───────────── */}
        <rect x="110" y="10" width="260" height="185" rx="10"
          fill="rgba(2,0,16,.88)" stroke="rgba(237,182,0,.3)" strokeWidth="1.2"/>
        <rect x="118" y="18" width="244" height="160" rx="4"
          fill="rgba(3,3,3,.92)" className="screen-bg"/>
        <rect x="118" y="18" width="244" height="160" rx="4"
          fill="none" stroke="rgba(237,182,0,.12)" strokeWidth=".5"/>

        {/* HUD bars */}
        <rect x="127" y="27" width="72" height="5" rx="2" fill="rgba(237,182,0,.1)"/>
        <rect x="127" y="27" width="50" height="5" rx="2" fill="rgba(237,182,0,.5)" className="hud-fill hud-fill-1"/>
        <rect x="127" y="36" width="72" height="5" rx="2" fill="rgba(123,47,255,.1)"/>
        <rect x="127" y="36" width="32" height="5" rx="2" fill="rgba(123,47,255,.5)" className="hud-fill hud-fill-2"/>
        <rect x="127" y="45" width="72" height="5" rx="2" fill="rgba(255,45,85,.1)"/>
        <rect x="127" y="45" width="60" height="5" rx="2" fill="rgba(255,45,85,.5)" className="hud-fill hud-fill-3"/>

        {/* FPS */}
        <text x="354" y="31" textAnchor="end" fontSize="10" fontFamily="monospace"
          fill="rgba(237,182,0,.7)" className="fps-text">144 FPS</text>
        <text x="354" y="42" textAnchor="end" fontSize="7" fontFamily="monospace"
          fill="rgba(237,182,0,.35)">1440p · MAX</text>

        {/* Crosshair */}
        <line x1="240" y1="90" x2="240" y2="108" stroke="rgba(237,182,0,.35)" strokeWidth="1"/>
        <line x1="231" y1="99" x2="249" y2="99" stroke="rgba(237,182,0,.35)" strokeWidth="1"/>
        <circle cx="240" cy="99" r="7" fill="none" stroke="rgba(237,182,0,.2)" strokeWidth=".7"/>

        {/* Scan line */}
        <rect x="118" y="18" width="244" height="2"
          fill="rgba(237,182,0,.04)" className="scan-line"/>

        {/* Bottom bezel */}
        <rect x="110" y="195" width="260" height="10" rx="0"
          fill="rgba(4,4,4,.9)" stroke="rgba(237,182,0,.12)" strokeWidth=".5"/>
        <circle cx="240" cy="200" r="2.5" fill="rgba(237,182,0,.9)" className="power-led"/>

        {/* Stand */}
        <rect x="228" y="205" width="24" height="32" rx="2"
          fill="rgba(2,0,16,.9)" stroke="rgba(237,182,0,.15)" strokeWidth=".7"/>
        <rect x="188" y="235" width="104" height="10" rx="5"
          fill="rgba(2,0,16,.9)" stroke="rgba(237,182,0,.18)" strokeWidth=".7"/>

        {/* Monitor RGB underglow */}
        <ellipse cx="240" cy="248" rx="100" ry="7"
          fill="none" className="monitor-glow"/>

        {/* ── KEYBOARD — centered at x=260 ──────────── */}
        <rect x="58" y="294" width="406" height="140" rx="8"
          fill="rgba(4,4,4,.82)" stroke="rgba(237,182,0,.2)" strokeWidth=".8"/>
        <rect x="60" y="296" width="402" height="136" rx="7"
          fill="none" stroke="rgba(237,182,0,.04)" strokeWidth=".4"/>

        {ROWS.map((r, ri) => {
          let cx = r.x
          return r.keys.map((key, ki) => {
            const kx = cx
            cx += key.w + G
            if (key.label === '' && key.w > 50) {
              // spacebar
              return (
                <g key={`${ri}-${ki}`}>
                  <rect x={kx} y={r.y + 2} width={key.w} height={KH} rx="3" fill="rgba(0,0,0,.5)"/>
                  <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                    fill="rgba(237,182,0,.04)" stroke="rgba(237,182,0,.18)" strokeWidth=".6"
                    className="kb-key" style={{ animationDelay: `${key.delay}s` }}/>
                  <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                    fill="transparent" className="kb-glow" style={{ animationDelay: `${key.delay}s` }}/>
                </g>
              )
            }
            return (
              <g key={`${ri}-${ki}`}>
                <rect x={kx} y={r.y + 2} width={key.w} height={KH} rx="3" fill="rgba(0,0,0,.5)"/>
                <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                  fill="rgba(237,182,0,.04)" stroke="rgba(237,182,0,.18)" strokeWidth=".6"
                  className="kb-key" style={{ animationDelay: `${key.delay}s` }}/>
                <rect x={kx} y={r.y} width={key.w} height={KH} rx="3"
                  fill="transparent" className="kb-glow" style={{ animationDelay: `${key.delay}s` }}/>
                <text x={kx + key.w / 2} y={r.y + KH / 2 + 4}
                  textAnchor="middle" fontSize={key.w > 34 ? 6 : 8}
                  fontFamily="monospace" className="kb-label"
                  style={{ animationDelay: `${key.delay}s` }}>
                  {key.label}
                </text>
              </g>
            )
          })
        })}

        {/* ── MOUSE — right of keyboard, vertically centered ── */}
        <path d="M 476 340 Q 476 322 490 320 Q 512 318 518 330 Q 524 342 522 374 Q 520 400 498 402 Q 476 402 474 374 Q 472 356 476 340 Z"
          fill="rgba(2,0,16,.88)" stroke="rgba(237,182,0,.25)" strokeWidth="1"
          className="mouse-body"/>
        <line x1="498" y1="320" x2="497" y2="350"
          stroke="rgba(237,182,0,.2)" strokeWidth=".7"/>
        <rect x="493" y="330" width="8" height="14" rx="4"
          fill="rgba(237,182,0,.15)" stroke="rgba(237,182,0,.4)" strokeWidth=".7"
          className="scroll-wheel"/>
        <rect x="473" y="358" width="5" height="10" rx="2"
          fill="rgba(237,182,0,.1)" stroke="rgba(237,182,0,.2)" strokeWidth=".5"/>
        <circle cx="498" cy="395" r="2" fill="rgba(237,182,0,.6)" className="power-led"/>
        <ellipse cx="498" cy="402" rx="22" ry="5"
          fill="none" className="mouse-glow"/>

      </svg>
    </div>
  )
}
