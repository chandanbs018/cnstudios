import Reveal from '@/components/ui/Reveal';

export default function BehindTheBuild({
  eyebrow = 'Design Rationale',
  title = 'Behind the Build',
  subtitle = 'Key architectural and design decisions that transform visitors into qualified business leads.',
  decisions,
}) {
  return (
    <section className="behind-build-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow violet">{eyebrow}</span>
            <h2 className="display">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </Reveal>

        <div className="decisions-grid">
          {decisions.map((item, idx) => (
            <Reveal className="decision-card" key={idx}>
              <div>
                <span className="decision-tag">{item.tag}</span>
                <h4 className="display">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
