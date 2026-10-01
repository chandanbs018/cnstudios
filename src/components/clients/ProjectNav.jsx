import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function ProjectNav({ prevProject, nextProject }) {
  return (
    <section className="project-nav-section">
      <div className="wrap">
        <div className="project-nav-grid">
          {prevProject ? (
            <Reveal as={Link} href={prevProject.link} className="nav-project-card prev">
              <span className="direction">&larr; Previous Project</span>
              <h4>{prevProject.title}</h4>
              <span className="card-meta">{prevProject.meta}</span>
            </Reveal>
          ) : (
            <div />
          )}

          <Reveal as={Link} href="/#clients" className="nav-home-btn" title="Back to All Clients">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </Reveal>

          {nextProject ? (
            <Reveal as={Link} href={nextProject.link} className="nav-project-card" style={{ textAlign: 'right' }}>
              <span className="direction">Next Project &rarr;</span>
              <h4>{nextProject.title}</h4>
              <span className="card-meta">{nextProject.meta}</span>
            </Reveal>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
