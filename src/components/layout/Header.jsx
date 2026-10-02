'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="logo-mark">
          <Link href="/" onClick={closeMenu} aria-label="NC Studios Home">
            <img
              src="/logo.webp"
              alt="NC Studios — Creative Agency in Bengaluru"
              width="147"
              height="99"
              fetchPriority="high"
              decoding="async"
            />
          </Link>
        </div>

        <nav className="site-nav" aria-label="Main Navigation">
          <div className="links">
            <Link href="/#clients">Clients</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <Link href="/#contact" className="nav-cta">
            Start a project &rarr;
          </Link>
          <button
            type="button"
            className="menu-btn"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/#clients" onClick={closeMenu}>Clients</Link>
        <Link href="/#services" onClick={closeMenu}>Services</Link>
        <Link href="/#process" onClick={closeMenu}>Process</Link>
        <Link href="/#contact" onClick={closeMenu}>Contact</Link>
        <Link href="/#contact" className="mobile-cta" onClick={closeMenu}>
          Start a project &rarr;
        </Link>
      </div>
    </>
  );
}
