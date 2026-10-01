import Reveal from '@/components/ui/Reveal';

export default function BrowserMockup({ mockup }) {
  if (!mockup) return null;

  return (
    <div className="wrap mockup-showcase-section">
      <div className="mockup-ambient-glow" />
      <Reveal className="macbook-wrapper">
        <div className="macbook-screen">
          <div className="browser-chrome-bar">
            <div className="browser-chrome-dots">
              <span className="btn-close" />
              <span className="btn-min" />
              <span className="btn-max" />
            </div>
            <div className="browser-chrome-address">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{mockup.url}</span>
            </div>
            <div className="browser-chrome-tab">{mockup.tab}</div>
          </div>

          <img
            src={mockup.image}
            alt={mockup.alt}
            width={1280}
            height={800}
            loading="eager"
          />
        </div>
        <div className="macbook-base" />
        <div className="macbook-foot" />
      </Reveal>
    </div>
  );
}
