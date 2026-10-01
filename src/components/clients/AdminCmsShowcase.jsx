import Reveal from '@/components/ui/Reveal';

export default function AdminCmsShowcase({ showcase }) {
  if (!showcase || showcase.length === 0) return null;

  return (
    <section
      className="showcase-section"
      style={{
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow electric">Admin CMS Experience</span>
            <h2 className="display">Beyond the Frontend</h2>
          </div>
          <p>
            The client can independently manage categories, products, and seasonal collections without developer intervention.
          </p>
        </Reveal>

        {showcase.map((item, idx) => (
          <div
            key={idx}
            className={`highlight-row ${item.reverse ? 'reverse' : ''}`.trim()}
          >
            <Reveal className="highlight-visual">
              <img
                src={item.image}
                alt={item.alt || item.title}
                width={1280}
                height={800}
                loading="lazy"
              />
            </Reveal>

            <Reveal className="highlight-text">
              <span
                className={`eyebrow ${item.eyebrowClass || ''}`.trim()}
              >
                {item.eyebrow}
              </span>
              <h3 className="display">{item.title}</h3>
              <p>{item.desc}</p>
              {item.pills && item.pills.length > 0 && (
                <div className="feature-pills">
                  {item.pills.map((pill, pIdx) => (
                    <span className="feature-pill" key={pIdx}>
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
