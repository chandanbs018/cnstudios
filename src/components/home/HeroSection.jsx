import StampBadge from '@/components/ui/StampBadge';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow violet" />
      <div className="hero-inner">
        <div className="eyebrow">Bengaluru &mdash; Creative Agency</div>
        <h1 className="display">
          Brands built<br />
          to get <span className="accent gradient-text">noticed.</span>
        </h1>
        <div className="hero-sub">
          <p>
            NC Studios is a Bengaluru creative agency for startups, SMEs and D2C brands. We design websites, build brand identities, and run social media and ads &mdash; one team, start to finish.
          </p>
          <StampBadge
            text="AVAILABLE FOR PROJECTS • AVAILABLE FOR PROJECTS • "
            fill="#ea767d"
          />
        </div>
      </div>
    </section>
  );
}
