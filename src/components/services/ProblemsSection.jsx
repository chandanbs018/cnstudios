import Reveal from '@/components/ui/Reveal';

export default function ProblemsSection({ data }) {
  return (
    <section className="problems-section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Business Problems Solved
        </Reveal>
        <Reveal as="p" className="problem-lead">
          {data.problemLead}
        </Reveal>

        <div className="problems-grid">
          {data.problems.map((item, idx) => (
            <Reveal className="problem-card" key={idx}>
              <span className="idx">{item.idx}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
