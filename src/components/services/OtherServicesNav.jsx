import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { servicesList } from '@/data/services';

export default function OtherServicesNav({ currentSlug }) {
  const otherServices = servicesList.filter((s) => s.slug !== currentSlug);

  return (
    <section className="services-nav-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Studio Capabilities</span>
            <h2 className="display">Other Services</h2>
          </div>
          <p>Explore our full range of design and creative engineering services.</p>
        </Reveal>

        <div className="services-nav-grid">
          {otherServices.map((service) => (
            <Reveal
              key={service.slug}
              as={Link}
              href={service.href}
              className="service-nav-card"
            >
              <span className="idx">{service.idx}</span>
              <h4>{service.title}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
