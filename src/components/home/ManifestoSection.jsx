import Reveal from '@/components/ui/Reveal';

export default function ManifestoSection() {
  return (
    <section className="manifesto">
      <div className="wrap">
        <Reveal as="p" className="lead">
          <span className="fade">We don&apos;t hand you a logo and disappear.</span>
          <span className="pop"> We build the whole system</span> &mdash;
          <span className="fade">
            the site people land on, the card they keep, the feed they follow, the ad that stops the scroll.
          </span>
          <span className="pop"> One studio, one thread, everywhere your brand shows up.</span>
        </Reveal>
      </div>
    </section>
  );
}
