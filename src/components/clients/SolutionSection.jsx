import Reveal from '@/components/ui/Reveal';

export default function SolutionSection({
  eyebrow = 'The Strategy',
  title = 'Our Solution',
  subtitle = 'A conversion-engineered digital platform designed to position the client as the definitive choice.',
  solutions,
}) {
  return (
    <section className="solution-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow electric">{eyebrow}</span>
            <h2 className="display">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </Reveal>

        <div className="solution-grid">
          {solutions.map((item, idx) => (
            <Reveal
              className="solution-card"
              key={idx}
              style={idx === solutions.length - 1 && solutions.length % 2 !== 0 ? { gridColumn: '1 / -1' } : {}}
            >
              <div className="card-glow" />
              <div className="num">{item.num}</div>
              <h3 className="display">{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
