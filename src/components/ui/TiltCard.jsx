'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';

const TiltCard = forwardRef(function TiltCard(
  {
    children,
    href,
    className = '',
    maxTilt = 10,
    ...props
  },
  forwardedRef
) {
  const cardRef = useRef(null);

  useImperativeHandle(forwardedRef, () => cardRef.current);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia('(hover: none)').matches) return;

    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0px)';
  };

  const classes = `work-card ${className}`.trim();

  if (href) {
    return (
      <Link
        ref={cardRef}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
});

export default TiltCard;
