'use client';

import { useState, useRef, useEffect } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$*';

export default function ScrambleText({
  text,
  as: Component = 'span',
  className = '',
  speed = 28,
  step = 0.5,
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const originalText = text;

  const handleMouseEnter = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((ch, i) => {
            if (ch === ' ' || ch === '&') return ch;
            if (i < iteration) return originalText[i];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += step;
    }, speed);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setDisplayText(originalText);
  };

  useEffect(() => {
    setDisplayText(text);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <Component
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {displayText}
    </Component>
  );
}
