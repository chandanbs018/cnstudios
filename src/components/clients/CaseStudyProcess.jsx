import Reveal from '@/components/ui/Reveal';

export default function CaseStudyProcess({
  eyebrow = 'Execution Timeline',
  title = 'How It Was Built',
  subtitle = 'A disciplined four-stage sprint moving from positioning research to production launch.',
  process,
}) {
  return (
    <section className="project-process" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="display">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </Reveal>

        <Reveal className="process-grid">
          {process.map((step, idx) => (
            <div className="process-step" key={idx}>
              <span className="num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
