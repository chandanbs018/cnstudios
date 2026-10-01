'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only run if device supports hover
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      const viewCard = target.closest('.work-card, .gallery-card, [data-cursor="view"], [data-cursor="explore"]');
      if (viewCard) {
        const label = viewCard.getAttribute('data-cursor-label') || (viewCard.classList.contains('gallery-card') ? 'EXPLORE' : 'VIEW');
        cursor.setAttribute('data-label', label);
        cursor.classList.remove('big');
        cursor.classList.add('view');
        return;
      }

      const interactive = target.closest('a, button, .service-row, .magnetic-btn, .process-step, .stat, .faq-card, .outcome-card, .decision-card, .problem-card, .deliverable-card, .spec-card, input, textarea');
      if (interactive) {
        cursor.classList.remove('view');
        cursor.classList.add('big');
        return;
      }

      cursor.classList.remove('big', 'view');
      cursor.removeAttribute('data-label');
    };

    const handleMouseLeaveWindow = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnterWindow = () => {
      cursor.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
