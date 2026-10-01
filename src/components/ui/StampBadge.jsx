'use client';

import { useId } from 'react';

export default function StampBadge({
  text = 'AVAILABLE FOR PROJECTS • AVAILABLE FOR PROJECTS • ',
  fill = '#ea767d',
  fontSize = '10.3',
  letterSpacing = '2.5',
  coreStyle = {},
}) {
  const pathId = useId();

  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path
            id={pathId}
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text
          fontFamily="JetBrains Mono, monospace"
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          fill={fill}
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <div className="core" style={coreStyle} />
    </div>
  );
}
