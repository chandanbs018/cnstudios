import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';

export default function ClientsSection() {
  return (
    <section id="clients">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">Clients</h2>
          <p>A handful of recent studio projects, across web, branding and campaigns.</p>
        </Reveal>

        <div className="work-grid">
          {/* Card 1: Visionary Ads */}
          <Reveal
            as={TiltCard}
            href="/clients/visionary-adss"
            className="c1"
            data-cursor="view"
            data-cursor-label="VIEW"
          >
            <div className="blob" />
            <div>
              <span className="tag">Website</span>
              <h3 className="display">Visionary Ads</h3>
            </div>
            <div className="meta">
              <span>Website design &amp; development</span>
              <span className="view-case-study">View Case Study &rarr;</span>
              <span className="year">2026</span>
            </div>
          </Reveal>

          {/* Card 2: Visionary Gifts Studio */}
          <Reveal
            as={TiltCard}
            href="/clients/visionary-gift-studios"
            className="c2"
            data-cursor="view"
            data-cursor-label="VIEW"
          >
            <div className="blob" />
            <div>
              <span className="tag">Corporate Gifting &mdash; Catalogue Website</span>
              <h3 className="display">Visionary Gifts Studio</h3>
            </div>
            <div className="meta">
              <span>Catalogue website</span>
              <span className="view-case-study">View Case Study &rarr;</span>
              <span className="year">2026</span>
            </div>
          </Reveal>

          {/* Card 3: Cherry Blossom Gifts */}
          <Reveal
            as={TiltCard}
            className="c3 wide"
            data-cursor="view"
            data-cursor-label="VIEW"
          >
            <div className="blob" />
            <div>
              <span className="tag">Gifting &mdash; Website, Branding &amp; Meta Ads</span>
              <h3 className="display">Cherry Blossom Gifts</h3>
            </div>
            <div className="meta">
              <span>Ordering website + logo, branding &amp; Meta ads</span>
              <span className="year">2026</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
