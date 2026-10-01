import Link from 'next/link';
import StampBadge from '@/components/ui/StampBadge';

export default function ServiceHero({ data }) {
  return (
    <section className="service-hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow violet" />
      <div className="hero-glow electric" />

      <div className="hero-inner">
        <div className="hero-top-meta">
          <Link href="/#services" className="back-link">
            &larr; All Services
          </Link>
          <span className="eyebrow">{data.eyebrow}</span>
        </div>

        <h1
          className="display"
          dangerouslySetInnerHTML={{ __html: data.h1Html }}
        />

        <p className="subtitle">{data.subtitle}</p>

        <div className="hero-bottom-bar">
          <div className="meta-panel">
            {data.metaItems.map((item, idx) => (
              <div className="meta-item" key={idx}>
                <span className="meta-label">{item.label}</span>
                <span className="meta-val">{item.value}</span>
              </div>
            ))}
          </div>

          <StampBadge
            text={data.stampText || 'NC STUDIOS • 2026 • '}
            fill={data.slug === 'brand-identity' ? '#9b7bff' : '#ea767d'}
            fontSize="9.8"
            letterSpacing="2.2"
          />
        </div>
      </div>
    </section>
  );
}
