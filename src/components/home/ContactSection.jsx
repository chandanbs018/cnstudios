import Reveal from '@/components/ui/Reveal';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <Reveal as="h2" className="display">
          Got a brand<br />
          to <span className="accent gradient-text">build?</span>
        </Reveal>
        <Reveal as="p" className="cta-sub">
          Tell us a bit about your project and we&apos;ll get back within a day.
        </Reveal>

        <Reveal as="div">
          <ContactForm />
        </Reveal>

        <Reveal as="p" className="cta-alt">
          Or write to us directly at{' '}
          <a href="mailto:info@ncstudios.in">info@ncstudios.in</a>
        </Reveal>
      </div>
    </section>
  );
}
