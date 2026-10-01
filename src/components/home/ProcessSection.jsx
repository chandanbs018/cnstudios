import Reveal from '@/components/ui/Reveal';

export default function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">How it runs</h2>
          <p>Four stages, from first call to launch day &mdash; and past it.</p>
        </Reveal>

        <Reveal className="process-grid">
          <div className="process-step">
            <span className="num">01</span>
            <h4>Discovery</h4>
            <p>We dig into your business, market and competitors before drawing a single pixel.</p>
          </div>
          <div className="process-step">
            <span className="num">02</span>
            <h4>Direction</h4>
            <p>Concepts and creative direction you sign off on before anything gets built.</p>
          </div>
          <div className="process-step">
            <span className="num">03</span>
            <h4>Build</h4>
            <p>Design, development, copy and print &mdash; produced in-house by one team.</p>
          </div>
          <div className="process-step">
            <span className="num">04</span>
            <h4>Launch &amp; Grow</h4>
            <p>We ship it, then keep it working &mdash; ads and social that compound over time.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
