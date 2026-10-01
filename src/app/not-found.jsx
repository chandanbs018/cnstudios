import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';

export const metadata = {
  title: '404 - Page Not Found | NC Studios',
  description: 'The requested page could not be found on NC Studios.',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '80svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 40px 100px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div className="hero-grid" />
      <div
        className="hero-glow"
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: '680px' }}>
        <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '24px' }}>
          404 &bull; Page Not Found
        </span>
        <h1 className="display" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: '20px' }}>
          Lost in the <span className="gradient-text">creative void?</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.65', marginBottom: '40px' }}>
          The page you are looking for doesn&apos;t exist, or has been moved to a new route as part of our studio upgrade.
        </p>
        <div>
          <MagneticButton href="/">
            &larr; Back to Homepage
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
