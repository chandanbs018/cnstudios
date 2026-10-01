'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = (h.scrollTop / total) * 100;
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={barRef} className="progress-bar" aria-hidden="true" />;
}
