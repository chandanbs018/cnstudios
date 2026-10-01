import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function LiveWebsiteCta({ liveCta }) {
  if (!liveCta) return null;

  return (
    <section className="fullwidth-cta-section">
      <div className="hero-grid" />
      <div className="cta-glow-ring" />
      <div className="wrap" style={{ position: 'relative', zIndex: 3 }}>
        <Reveal className="cta-meta-badge-row">
          <span className="cta-meta-badge">PRODUCTION PLATFORM</span>
          <span className="cta-meta-badge">BENGALURU</span>
          <span className="cta-meta-badge">LIVE WEBSITE</span>
        </Reveal>

        <Reveal
          as="h2"
          className="display"
          dangerouslySetInnerHTML={{ __html: liveCta.titleHtml }}
        />

        <Reveal as="p" className="cta-desc">
          {liveCta.desc}
        </Reveal>

        <Reveal>
          <MagneticButton
            href={liveCta.url}
            target="_blank"
            rel="noopener noreferrer"
            id="liveMagnet"
          >
            {liveCta.buttonText}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
