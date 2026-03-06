export default function CircuitBg() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tglow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="tglow-soft">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── RADIATOR (top) ───────────────────────── */}
        <rect x="60" y="20" width="280" height="90" rx="6"
          fill="rgba(30,30,50,.6)" stroke="#2a2a4a" strokeWidth="1.5"/>
        {[0,1,2,3,4].map(i => (
          <line key={i} x1="60" y1={33 + i*16} x2="340" y2={33 + i*16}
            stroke="#1a1a30" strokeWidth="10" strokeLinecap="square"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={i} x1="60" y1={33 + i*16} x2="340" y2={33 + i*16}
            strokeWidth="5" strokeLinecap="square"
            className={`tube-inner rgb-tube rgb-tube-${(i%3)+1}`}/>
        ))}
        <text x="200" y="122" textAnchor="middle" fontSize="7"
          fill="#555" fontFamily="monospace" letterSpacing="3">RADIATOR</text>

        {/* ── CPU BLOCK (left-center) ───────────────── */}
        <rect x="50" y="220" width="90" height="70" rx="5"
          fill="rgba(20,20,40,.8)" stroke="#2a2a4a" strokeWidth="1.5"/>
        {[0,1,2,3,4,5].map(i => (
          <line key={i} x1="54" y1={228 + i*10} x2="136" y2={228 + i*10}
            stroke="#1a1a30" strokeWidth="5" strokeLinecap="square"/>
        ))}
        {[0,1,2,3,4,5].map(i => (
          <line key={i} x1="54" y1={228 + i*10} x2="136" y2={228 + i*10}
            strokeWidth="2.5" strokeLinecap="square"
            className={`tube-inner rgb-tube rgb-tube-${(i%3)+1}`}/>
        ))}
        <text x="95" y="302" textAnchor="middle" fontSize="7"
          fill="#555" fontFamily="monospace" letterSpacing="2">CPU</text>

        {/* ── GPU BLOCK (right-center) ─────────────── */}
        <rect x="260" y="200" width="110" height="120" rx="5"
          fill="rgba(20,20,40,.8)" stroke="#2a2a4a" strokeWidth="1.5"/>
        {[0,1,2,3,4,5,6].map(i => (
          <line key={i} x1="265" y1={212 + i*14} x2="365" y2={212 + i*14}
            stroke="#1a1a30" strokeWidth="7" strokeLinecap="square"/>
        ))}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={i} x1="265" y1={212 + i*14} x2="365" y2={212 + i*14}
            strokeWidth="3.5" strokeLinecap="square"
            className={`tube-inner rgb-tube rgb-tube-${(i%3)+1}`}/>
        ))}
        <text x="315" y="332" textAnchor="middle" fontSize="7"
          fill="#555" fontFamily="monospace" letterSpacing="2">GPU</text>

        {/* ── RESERVOIR ────────────────────────────── */}
        <rect x="155" y="400" width="50" height="100" rx="25"
          fill="rgba(20,20,40,.8)" stroke="#2a2a4a" strokeWidth="1.5"/>
        <ellipse cx="180" cy="400" rx="25" ry="8"
          fill="rgba(30,30,50,.9)" stroke="#2a2a4a" strokeWidth="1.5"/>
        <rect x="163" y="412" width="34" height="76" rx="3"
          className="tube-inner rgb-tube rgb-tube-1" strokeWidth="0" style={{fill:'rgba(0,0,0,0)'}}/>
        <rect x="163" y="412" width="34" height="76" rx="3"
          fill="none" strokeWidth="3"
          className="rgb-tube rgb-tube-2"/>
        <text x="180" y="515" textAnchor="middle" fontSize="7"
          fill="#555" fontFamily="monospace" letterSpacing="2">RES</text>

        {/* ── MAIN TUBES (outer dark shell) ─────────── */}
        {/* Left down: radiator → CPU */}
        <path d="M 80,110 V 175 Q 80,220 95,220" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        {/* CPU → bottom-left → reservoir */}
        <path d="M 95,290 Q 80,310 80,340 H 155 Q 170,340 170,355 V 400" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Reservoir → GPU bottom */}
        <path d="M 205,450 Q 240,450 260,390 V 320" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        {/* GPU top → radiator right */}
        <path d="M 315,200 V 140 Q 315,110 310,110" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        {/* CPU top → radiator left */}
        <path d="M 100,220 Q 100,155 110,140 H 90" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        {/* CPU → GPU horizontal */}
        <path d="M 140,255 Q 200,255 260,255" fill="none" stroke="#1e1e38" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>

        {/* ── MAIN TUBES (rgb inner glow) ────────────── */}
        <path d="M 80,110 V 175 Q 80,220 95,220" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-1"/>
        <path d="M 95,290 Q 80,310 80,340 H 155 Q 170,340 170,355 V 400" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-2"/>
        <path d="M 205,450 Q 240,450 260,390 V 320" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-3"/>
        <path d="M 315,200 V 140 Q 315,110 310,110" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-1"/>
        <path d="M 100,220 Q 100,155 110,140 H 90" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-2"/>
        <path d="M 140,255 Q 200,255 260,255" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="rgb-tube rgb-tube-3"/>

        {/* ── FITTINGS (junction circles) ───────────── */}
        {[
          [80,110],[95,220],[95,290],[170,400],[205,450],
          [260,320],[315,200],[310,110],[140,255],[260,255],
        ].map(([cx,cy],i) => (
          <g key={i} filter="url(#tglow-soft)">
            <circle cx={cx} cy={cy} r="7" fill="#111122" stroke="#2a2a4a" strokeWidth="1.5"/>
            <circle cx={cx} cy={cy} r="3" className={`fitting rgb-tube rgb-tube-${(i%3)+1}`}/>
          </g>
        ))}
      </svg>
    </div>
  )
}
