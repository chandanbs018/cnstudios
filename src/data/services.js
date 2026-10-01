import servicesData from './services.json';

export const services = servicesData;

export const servicesList = [
  {
    idx: '01',
    slug: 'web-design',
    title: 'Web Design & Dev',
    desc: 'Custom-built, fast-loading websites designed to convert — not just look good.',
    href: '/services/web-design'
  },
  {
    idx: '02',
    slug: 'brand-identity',
    title: 'Brand Identity & Logo',
    desc: 'Marks, palettes and type systems built to hold up across every application.',
    href: '/services/brand-identity'
  },
  {
    idx: '03',
    slug: 'visiting-cards',
    title: 'Visiting Cards & Printing',
    desc: 'Visiting cards, brochures, packaging and branded materials that leave a lasting impression.',
    href: '/services/visiting-cards'
  },
  {
    idx: '04',
    slug: 'social-media',
    title: 'Social Media Marketing',
    desc: 'Content, calendars and community management for a feed worth following.',
    href: '/services/social-media'
  },
  {
    idx: '05',
    slug: 'digital-advertising',
    title: 'Digital Advertising',
    desc: 'Paid campaigns across Meta, Google and beyond — built on real numbers.',
    href: '/services/digital-advertising'
  },
  {
    idx: '06',
    slug: 'complete-branding',
    title: 'Complete Branding',
    desc: 'Strategy, voice, and guidelines — every piece tied together into one system.',
    href: '/services/complete-branding'
  }
];

export function getServiceBySlug(slug) {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs() {
  return Object.keys(servicesData);
}
