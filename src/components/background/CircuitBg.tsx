export default function CircuitBg() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <svg viewBox="0 0 480 600" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
        <defs>
          <filter id="cglow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── CPU DIE ──────────────────────────────── */}
        <g filter="url(#cglow)">
          <rect x="148" y="208" width="168" height="168" rx="5"
            fill="rgba(0,255,208,.04)" stroke="#00FFD0" strokeWidth="1.5" />
          <rect x="156" y="216" width="152" height="152" rx="3"
            fill="none" stroke="#00FFD0" strokeWidth=".4" opacity=".4" />
          {/* CPU cores 4×4 */}
          {[0,1,2,3].flatMap(r => [0,1,2,3].map(c => (
            <rect key={`${r}-${c}`}
              x={163 + c * 34} y={223 + r * 34}
              width="22" height="22" rx="2"
              fill="rgba(0,255,208,.07)" stroke="#00FFD0" strokeWidth=".6" />
          )))}
          {/* CPU label */}
          <text x="232" y="296" textAnchor="middle" fontSize="9"
            fill="#00FFD0" fontFamily="monospace" opacity=".5" letterSpacing="2">CPU</text>
        </g>

        {/* ── RAM SLOTS ────────────────────────────── */}
        {[0,1,2,3].map(i => (
          <g key={i} filter="url(#cglow)">
            <rect x="22" y={90 + i * 36} width="80" height="20" rx="2"
              fill="rgba(0,255,208,.05)" stroke="#00FFD0" strokeWidth=".9" />
            {[0,1,2,3,4,5,6,7].map(p => (
              <rect key={p} x={26 + p * 9} y={94 + i * 36} width="4" height="12" rx="1"
                fill="#00FFD0" opacity=".3" />
            ))}
          </g>
        ))}
        <text x="62" y="82" textAnchor="middle" fontSize="8"
          fill="#00FFD0" fontFamily="monospace" opacity=".4" letterSpacing="2">RAM</text>

        {/* ── GPU SLOT ──────────────────────────────── */}
        <g filter="url(#cglow)">
          <rect x="358" y="190" width="100" height="200" rx="3"
            fill="rgba(0,255,208,.04)" stroke="#00FFD0" strokeWidth="1" />
          <rect x="364" y="198" width="88" height="184" rx="2"
            fill="none" stroke="#00FFD0" strokeWidth=".3" opacity=".3" />
          {/* GPU cores 2×4 */}
          {[0,1].flatMap(r => [0,1,2,3].map(c => (
            <rect key={`g-${r}-${c}`}
              x={368 + c * 20} y={206 + r * 20}
              width="14" height="14" rx="1"
              fill="rgba(0,255,208,.06)" stroke="#00FFD0" strokeWidth=".5" />
          )))}
          <text x="408" y="290" textAnchor="middle" fontSize="8"
            fill="#00FFD0" fontFamily="monospace" opacity=".45" letterSpacing="2">GPU</text>
        </g>

        {/* ── PCH CHIP ─────────────────────────────── */}
        <g filter="url(#cglow)">
          <rect x="170" y="450" width="90" height="60" rx="3"
            fill="rgba(0,255,208,.05)" stroke="#00FFD0" strokeWidth=".9" />
          <text x="215" y="484" textAnchor="middle" fontSize="8"
            fill="#00FFD0" fontFamily="monospace" opacity=".45" letterSpacing="1">PCH</text>
        </g>

        {/* ── CAPACITORS (top area) ─────────────────── */}
        {[40, 80, 120, 380, 420].map((x, i) => (
          <g key={i} filter="url(#cglow)">
            <circle cx={x} cy={30} r="8"
              fill="rgba(0,255,208,.05)" stroke="#00FFD0" strokeWidth=".8" />
            <circle cx={x} cy={30} r="3" fill="#00FFD0" opacity=".3" />
          </g>
        ))}

        {/* ── STATIC TRACES ────────────────────────── */}
        <g stroke="#00FFD0" strokeWidth=".8" fill="none" opacity=".22">
          {/* RAM → CPU */}
          <path d="M 102 100 H 130 V 230 H 148" />
          <path d="M 102 136 H 125 V 248 H 148" />
          {/* CPU → GPU */}
          <path d="M 316 260 H 340 V 230 H 358" />
          <path d="M 316 280 H 345 V 300 H 358" />
          {/* CPU → PCH */}
          <path d="M 200 376 V 420 H 190 V 450" />
          <path d="M 260 376 V 410 H 240 V 450" />
          {/* CPU top traces */}
          <path d="M 200 208 V 170 H 60 V 60" />
          <path d="M 260 208 V 160 H 380 V 50" />
          <path d="M 280 208 V 150 H 420 V 50" />
          {/* GPU right traces */}
          <path d="M 458 260 H 470" />
          <path d="M 458 300 H 475" />
          <path d="M 458 340 H 465" />
        </g>

        {/* Junction dots */}
        {[
          [130, 230],[125, 248],[340, 230],[345, 300],
          [190, 420],[240, 410],[60, 60],[380, 50],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5"
            fill="#00FFD0" opacity=".35" filter="url(#cglow)" />
        ))}

        {/* ── ANIMATED PULSES ──────────────────────── */}
        <g stroke="#00FFD0" strokeWidth="1.8" fill="none" filter="url(#cglow)">
          {/* RAM → CPU pulse */}
          <path d="M 102 100 H 130 V 230 H 148"
            strokeDasharray="60 400" className="cpulse cpulse-1" />
          {/* CPU → GPU pulse */}
          <path d="M 316 260 H 340 V 230 H 358"
            strokeDasharray="50 300" className="cpulse cpulse-2" />
          {/* CPU → PCH pulse */}
          <path d="M 200 376 V 420 H 190 V 450"
            strokeDasharray="40 250" className="cpulse cpulse-3" />
          {/* Top trace pulse */}
          <path d="M 260 208 V 160 H 380 V 50"
            strokeDasharray="55 350" className="cpulse cpulse-4" />
          {/* RAM → CPU second lane */}
          <path d="M 102 136 H 125 V 248 H 148"
            strokeDasharray="45 300" className="cpulse cpulse-5" />
        </g>
      </svg>
    </div>
  )
}
