import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function FullwidthCta({ cta }) {
  if (!cta) return null;

  return (
    <section className="fullwidth-cta-section">
      <div className="hero-grid" />
      <div className="cta-glow-ring" />
      <div className="wrap" style={{ position: 'relative', zIndex: 3 }}>
        {cta.badges && cta.badges.length > 0 && (
          <Reveal className="cta-meta-badge-row">
            {cta.badges.map((badge, idx) => (
              <span className="cta-meta-badge" key={idx}>
                {badge}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal
          as="h2"
          className="display"
          dangerouslySetInnerHTML={{ __html: cta.titleHtml }}
        />

        <Reveal as="p" className="cta-desc">
          {cta.desc}
        </Reveal>

        <Reveal>
          <MagneticButton href="/#contact" id="serviceMagnet">
            Start Your Project &rarr;
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
