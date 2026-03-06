'use client'

// Each row: array of [width, colDelay] — colDelay drives the RGB wave offset
const KEY_H = 24
const GAP = 3
const ROW_DEFS: Array<{ y: number; keys: Array<[number, number]> }> = [
  // ESC + F-keys
  { y: 14, keys: [[26,0],[1,0],[26,1.4],[26,1.7],[26,2],[26,2.3],[1,0],[26,2.9],[26,3.2],[26,3.5],[26,3.8],[1,0],[26,4.4],[26,4.7],[26,5],[26,5.3]] },
  // Number row
  { y: 46, keys: [[26,0],[26,0.4],[26,0.8],[26,1.2],[26,1.6],[26,2],[26,2.4],[26,2.8],[26,3.2],[26,3.6],[26,4],[26,4.4],[26,4.8],[52,5.4]] },
  // QWERTY
  { y: 73, keys: [[40,0],[26,0.6],[26,1],[26,1.4],[26,1.8],[26,2.2],[26,2.6],[26,3],[26,3.4],[26,3.8],[26,4.2],[26,4.6],[26,5],[38,5.6]] },
  // ASDF
  { y: 100, keys: [[48,0],[26,0.7],[26,1.1],[26,1.5],[26,1.9],[26,2.3],[26,2.7],[26,3.1],[26,3.5],[26,3.9],[26,4.3],[26,4.7],[46,5.5]] },
  // ZXCV
  { y: 127, keys: [[62,0],[26,0.9],[26,1.3],[26,1.7],[26,2.1],[26,2.5],[26,2.9],[26,3.3],[26,3.7],[26,4.1],[26,4.5],[62,5.3]] },
  // Space row
  { y: 154, keys: [[40,0],[32,0.8],[40,1.4],[170,2.8],[40,4.2],[32,4.8],[32,5.2],[40,5.8]] },
]

export default function CircuitBg() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <svg viewBox="0 0 500 195" xmlns="http://www.w3.org/2000/svg">
        {/* Keyboard body */}
        <rect x="6" y="6" width="488" height="183" rx="10"
          fill="rgba(8,8,20,.95)" stroke="rgba(255,255,255,.08)" strokeWidth="1.5"/>
        <rect x="8" y="8" width="484" height="179" rx="9"
          fill="none" stroke="rgba(255,255,255,.04)" strokeWidth=".5"/>

        {/* Keys */}
        {ROW_DEFS.map((row, rowIdx) => {
          let x = 14
          return row.keys.map(([w, delay], keyIdx) => {
            if (w === 1) { x += GAP * 3; return null } // spacer
            const kx = x
            x += w + GAP
            return (
              <g key={`${rowIdx}-${keyIdx}`}>
                {/* Key shadow/base */}
                <rect x={kx} y={row.y + 3} width={w} height={KEY_H} rx="3"
                  fill="rgba(0,0,0,.6)"/>
                {/* Key face */}
                <rect x={kx} y={row.y} width={w} height={KEY_H} rx="3"
                  fill="rgba(18,18,36,.9)" stroke="rgba(255,255,255,.06)" strokeWidth=".5"
                  className="kb-key"
                  style={{ animationDelay: `${delay}s` }}/>
                {/* RGB glow layer */}
                <rect x={kx} y={row.y} width={w} height={KEY_H} rx="3"
                  className="kb-glow"
                  style={{ animationDelay: `${delay}s` }}/>
              </g>
            )
          })
        })}

        {/* Reflection line on body */}
        <line x1="20" y1="8" x2="480" y2="8"
          stroke="rgba(255,255,255,.06)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    </div>
  )
}
