import Reveal from '@/components/ui/Reveal';

export default function ChallengeSection({ lead, challenges }) {
  return (
    <section className="challenge-section">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          The Challenge
        </Reveal>
        <Reveal as="p" className="challenge-lead">
          {lead}
        </Reveal>

        <div className="challenge-grid">
          {challenges.map((item, idx) => (
            <Reveal className="challenge-card" key={idx}>
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
