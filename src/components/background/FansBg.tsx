export default function FansBg() {
  return (
    <div className="fans-bg" aria-hidden="true">
      <svg className="fans-svg" viewBox="0 0 560 580" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fhV" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(210,130,255,1)" />
            <stop offset="100%" stopColor="rgba(80,0,190,0.85)" />
          </radialGradient>
          <radialGradient id="fhP" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,150,220,1)" />
            <stop offset="100%" stopColor="rgba(200,0,100,0.85)" />
          </radialGradient>
          <radialGradient id="fhC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(130,240,255,1)" />
            <stop offset="100%" stopColor="rgba(0,160,220,0.85)" />
          </radialGradient>
          <radialGradient id="fhM" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,200,100,1)" />
            <stop offset="100%" stopColor="rgba(200,80,0,0.85)" />
          </radialGradient>
        </defs>

        {/* FAN 1: 160mm — top center, VIOLET */}
        <g transform="translate(270,155)">
          <circle r="128" fill="rgba(4,1,10,0.32)" stroke="rgba(139,0,255,0.45)" strokeWidth="3" strokeDasharray="14,7" />
          <circle r="121" fill="rgba(6,1,14,0.2)" stroke="rgba(139,0,255,0.1)" strokeWidth="1" />
          <g className="fan-spin-main">
            {[0,60,120,180,240,300].map(rot => (
              <ellipse key={rot} cx="0" cy="-63" rx="40" ry="72" fill="rgba(130,0,240,0.58)" stroke="rgba(200,100,255,0.48)" strokeWidth="1.3" transform={rot ? `rotate(${rot})` : undefined} />
            ))}
            <circle r="30" fill="rgba(40,0,90,0.95)" stroke="rgba(139,0,255,0.75)" strokeWidth="3" />
            <circle r="15" fill="url(#fhV)" />
            <circle r="6" fill="rgba(240,200,255,1)" />
          </g>
        </g>

        {/* FAN 2: 140mm — bottom-left, PINK */}
        <g transform="translate(110,390)">
          <circle r="108" fill="rgba(4,1,10,0.32)" stroke="rgba(255,20,147,0.4)" strokeWidth="2.5" strokeDasharray="12,6" />
          <circle r="102" fill="rgba(6,1,14,0.2)" stroke="rgba(255,20,147,0.08)" strokeWidth="1" />
          <g className="fan-spin-small">
            {[0,60,120,180,240,300].map(rot => (
              <ellipse key={rot} cx="0" cy="-54" rx="34" ry="62" fill="rgba(220,0,115,0.55)" stroke="rgba(255,90,170,0.44)" strokeWidth="1.2" transform={rot ? `rotate(${rot})` : undefined} />
            ))}
            <circle r="26" fill="rgba(70,0,45,0.95)" stroke="rgba(255,20,147,0.7)" strokeWidth="2.5" />
            <circle r="13" fill="url(#fhP)" />
            <circle r="5" fill="rgba(255,210,238,1)" />
          </g>
        </g>

        {/* FAN 3: 140mm — bottom-right, CYAN */}
        <g transform="translate(440,400)">
          <circle r="105" fill="rgba(4,1,10,0.32)" stroke="rgba(0,220,255,0.38)" strokeWidth="2.5" strokeDasharray="12,6" />
          <circle r="99" fill="rgba(6,1,14,0.2)" stroke="rgba(0,220,255,0.08)" strokeWidth="1" />
          <g className="fan-spin-third">
            {[0,60,120,180,240,300].map(rot => (
              <ellipse key={rot} cx="0" cy="-52" rx="33" ry="60" fill="rgba(0,185,230,0.5)" stroke="rgba(0,235,255,0.42)" strokeWidth="1.2" transform={rot ? `rotate(${rot})` : undefined} />
            ))}
            <circle r="25" fill="rgba(0,25,45,0.95)" stroke="rgba(0,220,255,0.68)" strokeWidth="2.5" />
            <circle r="12" fill="url(#fhC)" />
            <circle r="5" fill="rgba(210,248,255,1)" />
          </g>
        </g>

        {/* FAN 4: 120mm — top-right, ORANGE */}
        <g transform="translate(490,155)">
          <circle r="78" fill="rgba(4,1,10,0.28)" stroke="rgba(255,140,0,0.32)" strokeWidth="2" strokeDasharray="9,5" />
          <circle r="73" fill="rgba(6,1,14,0.18)" stroke="rgba(255,140,0,0.07)" strokeWidth="1" />
          <g className="fan-spin-main" style={{ animationDuration: '2.2s', animationDirection: 'reverse' }}>
            {[0,60,120,180,240,300].map(rot => (
              <ellipse key={rot} cx="0" cy="-38" rx="24" ry="45" fill="rgba(200,80,0,0.45)" stroke="rgba(255,160,60,0.38)" strokeWidth="1" transform={rot ? `rotate(${rot})` : undefined} />
            ))}
            <circle r="19" fill="rgba(40,15,0,0.95)" stroke="rgba(255,140,0,0.6)" strokeWidth="2" />
            <circle r="9" fill="url(#fhM)" />
            <circle r="3.5" fill="rgba(255,230,180,1)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
