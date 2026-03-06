'use client'

const KH = 28 // key height
const G = 3   // gap

type Key = { label: string; w: number; delay: number }

function makeRow(keys: [string, number][], startDelay = 0): Key[] {
  let col = 0
  return keys.map(([label, w]) => ({ label, w, delay: startDelay + col++ * 0.18 }))
}

const ROWS: { y: number; x: number; keys: Key[] }[] = [
  { y: 14, x: 14, keys: makeRow([['ESC',38],[' ',12],['F1',30],['F2',30],['F3',30],['F4',30],[' ',8],['F5',30],['F6',30],['F7',30],['F8',30],[' ',8],['F9',30],['F10',30],['F11',30],['F12',30]], 0) },
  { y: 52, x: 14, keys: makeRow([['`',30],['1',30],['2',30],['3',30],['4',30],['5',30],['6',30],['7',30],['8',30],['9',30],['0',30],['-',30],['=',30],['⌫',52]], 0) },
  { y: 83, x: 14, keys: makeRow([['TAB',48],['Q',30],['W',30],['E',30],['R',30],['T',30],['Y',30],['U',30],['I',30],['O',30],['P',30],['[',30],[']',30],['\\',46]], 0.1) },
  { y: 114, x: 14, keys: makeRow([['CAPS',56],['A',30],['S',30],['D',30],['F',30],['G',30],['H',30],['J',30],['K',30],['L',30],[';',30],["'",30],['↵',56]], 0.2) },
  { y: 145, x: 14, keys: makeRow([['⇧',72],['Z',30],['X',30],['C',30],['V',30],['B',30],['N',30],['M',30],[',',30],['.',30],['/',30],['⇧',72]], 0.3) },
  { y: 176, x: 14, keys: makeRow([['CTRL',46],['⊞',36],['ALT',36],['',170],['ALT',36],['⊞',36],['▤',36],['CTRL',46]], 0.4) },
]

export default function FansBg() {
  return (
    <div className="fans-bg" aria-hidden="true">
      <svg viewBox="0 0 530 215" xmlns="http://www.w3.org/2000/svg" className="fans-svg">
        {/* Keyboard shell */}
        <rect x="8" y="6" width="514" height="203" rx="10"
          fill="rgba(2,2,9,.55)" stroke="rgba(0,255,208,.18)" strokeWidth="1"/>
        <rect x="10" y="8" width="510" height="199" rx="9"
          fill="none" stroke="rgba(0,255,208,.06)" strokeWidth=".5"/>

        {ROWS.map((row, ri) => {
          let cx = row.x
          return row.keys.map((key, ki) => {
            if (key.label === ' ') { cx += key.w; return null }
            const kx = cx
            const kw = key.w
            cx += kw + G
            const isSpace = key.label === ''
            return (
              <g key={`${ri}-${ki}`}>
                {/* key base shadow */}
                <rect x={kx} y={row.y + 3} width={kw} height={KH} rx="3"
                  fill="rgba(0,0,0,.4)"/>
                {/* key face */}
                <rect x={kx} y={row.y} width={kw} height={KH} rx="3"
                  fill="rgba(0,255,208,.04)"
                  stroke="rgba(0,255,208,.2)" strokeWidth=".7"
                  className="kb-key"
                  style={{ animationDelay: `${key.delay.toFixed(2)}s` }}/>
                {/* glow layer */}
                <rect x={kx} y={row.y} width={kw} height={KH} rx="3"
                  fill="transparent"
                  className="kb-glow"
                  style={{ animationDelay: `${key.delay.toFixed(2)}s` }}/>
                {/* label */}
                {!isSpace && (
                  <text
                    x={kx + kw / 2} y={row.y + KH / 2 + 4}
                    textAnchor="middle"
                    fontSize={kw > 40 ? 7 : 9}
                    fontFamily="monospace"
                    fill="rgba(0,255,208,.65)"
                    className="kb-label"
                    style={{ animationDelay: `${key.delay.toFixed(2)}s` }}
                  >{key.label}</text>
                )}
              </g>
            )
          })
        })}
      </svg>
    </div>
  )
}
