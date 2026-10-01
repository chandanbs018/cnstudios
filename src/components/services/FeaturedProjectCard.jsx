import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function FeaturedProjectCard({ project }) {
  if (!project) return null;

  return (
    <section className="featured-project-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow violet">Proof of Execution</span>
            <h2 className="display">Featured Project</h2>
          </div>
          <p>See how this service was delivered for a real commercial client.</p>
        </Reveal>

        <Reveal className="featured-project-card">
          <div className="project-visual">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              width={1280}
              height={800}
              loading="lazy"
            />
          </div>
          <div className="project-info">
            <span className="eyebrow electric">{project.eyebrow}</span>
            <h3 className="display">{project.title}</h3>
            <p>{project.desc}</p>
            <Link href={project.link} className="project-cta-btn">
              Read Case Study &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
