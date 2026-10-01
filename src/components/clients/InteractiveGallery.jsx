'use client';

import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';

export default function InteractiveGallery({ gallery }) {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.6; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="interactive-gallery-section">
      <div className="wrap">
        <Reveal className="gallery-head">
          <div>
            <span className="eyebrow">Interactive Showcase</span>
            <h2 className="display">Project Gallery</h2>
          </div>
          <div className="gallery-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>DRAG OR SWIPE TO EXPLORE</span>
          </div>
        </Reveal>
      </div>

      <div
        ref={containerRef}
        className="gallery-track-container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="gallery-track">
          {gallery.map((card, idx) => (
            <div
              className="gallery-card"
              key={idx}
              data-cursor="view"
              data-cursor-label="EXPLORE"
            >
              <img
                src={card.image}
                alt={card.alt || card.title}
                width={1280}
                height={800}
                loading="lazy"
              />
              <div className="gallery-card-body">
                <span
                  className={`gallery-card-tag ${
                    card.tagColor ? card.tagColor : ''
                  }`.trim()}
                >
                  {card.tag}
                </span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
