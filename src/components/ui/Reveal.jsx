'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const Reveal = forwardRef(function Reveal(
  {
    children,
    className = '',
    threshold = 0.1,
    as: Component = 'div',
    ...props
  },
  forwardedRef
) {
  const localRef = useRef(null);

  useImperativeHandle(forwardedRef, () => localRef.current);

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }

    // Immediately make visible if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('in');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Component ref={localRef} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
});

export default Reveal;
