'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatCounter({
  target,
  decimals = 0,
  duration = 1400,
  suffix = '',
  prefix = '',
}) {
  const [displayValue, setDisplayValue] = useState(() =>
    target !== undefined && target !== null ? String(target) : '0'
  );
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(Number(target).toFixed(decimals));
      return;
    }

    let rafId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const numTarget = parseFloat(target);

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
          const currentVal = (numTarget * eased).toFixed(decimals);
          setDisplayValue(currentVal);

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          } else {
            setDisplayValue(numTarget.toFixed(decimals));
          }
        }

        rafId = requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, decimals, duration]);

  return (
    <span ref={elRef} className="count">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
