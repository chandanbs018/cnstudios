import Reveal from '@/components/ui/Reveal';

export default function OutcomesSection({
  eyebrow = 'Results & Impact',
  title = 'Qualitative Outcomes',
  subtitle = 'Strategic transformation delivering long-term commercial confidence and operational autonomy.',
  outcomes,
}) {
  return (
    <section className="outcomes-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="display">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </Reveal>

        <div className="outcomes-grid">
          {outcomes.map((item, idx) => (
            <Reveal className="outcome-card" key={idx}>
              <div className="check-icon">✓</div>
              <h4 className="display">{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
