import Reveal from '@/components/ui/Reveal';

export default function ProjectOverview({ overview, eyebrow = 'Project Overview' }) {
  if (!overview) return null;

  return (
    <section className="overview-section">
      <div className="wrap">
        <div className="overview-grid">
          <Reveal className="overview-sidebar">
            <div className="spec-card">
              <h4>Client</h4>
              <p>{overview.client}</p>
            </div>
            <div className="spec-card">
              <h4>Industry</h4>
              <p>{overview.industry}</p>
            </div>
            <div className="spec-card">
              <h4>Timeline</h4>
              <p>{overview.timeline}</p>
            </div>
            <div className="spec-card">
              <h4>Deliverables</h4>
              <ul>
                {overview.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="overview-narrative">
            <span className="eyebrow">{eyebrow}</span>
            <h3 className="display">{overview.headline}</h3>
            {overview.paragraphs.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
