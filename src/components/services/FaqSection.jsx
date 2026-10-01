import Reveal from '@/components/ui/Reveal';

export default function FaqSection({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Common Inquiries</span>
            <h2 className="display">Frequently Asked Questions</h2>
          </div>
          <p>Everything you need to know about our engagement.</p>
        </Reveal>

        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <Reveal className="faq-card" key={idx}>
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
