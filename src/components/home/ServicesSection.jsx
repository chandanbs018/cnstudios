import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import ScrambleText from '@/components/ui/ScrambleText';
import { servicesList } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="display">What we do</h2>
          <p>Six disciplines, run by one team &mdash; pick a starting point, or bring us the whole brief.</p>
        </Reveal>

        <div className="services-list">
          {servicesList.map((service) => (
            <Reveal
              key={service.slug}
              as={Link}
              href={service.href}
              className="service-row"
            >
              <span className="idx">{service.idx}</span>
              <ScrambleText text={service.title} as="h3" className="display" />
              <p>{service.desc}</p>
              <span className="arrow">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 19L19 5M19 5H8M19 5V16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
