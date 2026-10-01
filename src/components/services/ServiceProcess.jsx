import Reveal from '@/components/ui/Reveal';

export default function ServiceProcess({ data }) {
  return (
    <section className="process-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Execution Model</span>
            <h2 className="display">Our 4-Step Process</h2>
          </div>
          <p>A disciplined sprint from concept discovery to full production deployment.</p>
        </Reveal>

        <Reveal className="process-grid">
          {data.process.map((step, idx) => (
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
