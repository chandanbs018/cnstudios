'use client';

import { useEffect } from 'react';

export default function AnalyticsListener() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a');
      if (!link) return;

      const rawHref = link.getAttribute('href') || link.href || '';
      if (!rawHref) return;

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        const pathname = window.location.pathname;

        if (rawHref.startsWith('tel:')) {
          window.gtag('event', 'click_phone', {
            link_url: rawHref,
            page_path: pathname,
          });
        } else if (rawHref.startsWith('mailto:')) {
          window.gtag('event', 'click_email', {
            link_url: rawHref,
            page_path: pathname,
          });
        } else if (rawHref.includes('wa.me') || rawHref.includes('api.whatsapp.com')) {
          window.gtag('event', 'click_whatsapp', {
            link_url: rawHref,
            page_path: pathname,
          });
        }
      }
    }

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
