'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  id,
  target,
  rel,
  ...props
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    if (window.matchMedia('(hover: none)').matches) return;

    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.28}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
  };

  const classes = `magnetic-btn ${className}`.trim();

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          ref={btnRef}
          href={href}
          id={id}
          className={classes}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          target={target}
          rel={rel}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={btnRef}
        href={href}
        id={id}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      id={id}
      className={classes}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
