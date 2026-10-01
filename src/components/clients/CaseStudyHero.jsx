import Link from 'next/link';
import StampBadge from '@/components/ui/StampBadge';

export default function CaseStudyHero({ data }) {
  return (
    <section className="case-hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow violet" />
      <div className="hero-glow electric" />

      <div className="hero-inner">
        <div className="hero-top-meta">
          <Link href="/#clients" className="back-link">
            &larr; Back to Clients
          </Link>
          <span className="eyebrow">{data.eyebrow}</span>
        </div>

        <h1
          className="display"
          dangerouslySetInnerHTML={{ __html: data.heroTitleHtml }}
        />

        <p className="subtitle">{data.heroSubtitle}</p>

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
            text={data.stampText || 'NC STUDIOS • CLIENT CASE STUDY • 2026 • '}
            fill={data.stampFill || '#ea767d'}
            fontSize="9.8"
            letterSpacing="2.2"
          />
        </div>
      </div>
    </section>
  );
}
