import Reveal from '@/components/ui/Reveal';

export default function DeliverablesSection({ data }) {
  return (
    <section className="deliverables-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow electric">Scope of Work</span>
            <h2 className="display">Deliverables</h2>
          </div>
          <p>Everything required to launch a high-converting, modern digital presence from start to finish.</p>
        </Reveal>

        <div className="deliverables-grid">
          {data.deliverables.map((item, idx) => (
            <Reveal className="deliverable-card" key={idx}>
              <div className="num">{item.num}</div>
              <h3 className="display">{item.title}</h3>
              <p>{item.desc}</p>
              {item.points && item.points.length > 0 && (
                <ul>
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
