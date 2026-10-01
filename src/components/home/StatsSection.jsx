import Reveal from '@/components/ui/Reveal';
import StatCounter from '@/components/ui/StatCounter';

export default function StatsSection() {
  return (
    <div className="stats">
      <Reveal className="stat">
        <div className="num">
          <StatCounter target="3" />
          <span>+</span>
        </div>
        <div className="label">Projects delivered</div>
      </Reveal>

      <Reveal className="stat">
        <div className="num">
          <StatCounter target="6" />
        </div>
        <div className="label">Core disciplines</div>
      </Reveal>

      <Reveal className="stat">
        <div className="num">
          <StatCounter target="2025" />
        </div>
        <div className="label">Studio founded</div>
      </Reveal>

      <Reveal className="stat">
        <div className="num">Bengaluru</div>
        <div className="label">India</div>
      </Reveal>
    </div>
  );
}
