import '@/styles/home.css';
import HeroSection from '@/components/home/HeroSection';
import MarqueeBand from '@/components/ui/MarqueeBand';
import ManifestoSection from '@/components/home/ManifestoSection';
import ServicesSection from '@/components/home/ServicesSection';
import ClientsSection from '@/components/home/ClientsSection';
import ProcessSection from '@/components/home/ProcessSection';
import StatsSection from '@/components/home/StatsSection';
import ContactSection from '@/components/home/ContactSection';

export const metadata = {
  title: 'NC Studios | Creative Agency & Web Design Studio in Bengaluru',
  description:
    'NC Studios is a creative agency in Bengaluru specializing in web design, brand identity, digital advertising, and social media marketing for ambitious businesses.',
  alternates: {
    canonical: 'https://ncstudios.in/',
  },
  openGraph: {
    type: 'website',
    url: 'https://ncstudios.in/',
    title: 'NC Studios | Creative Agency & Web Design Studio in Bengaluru',
    description:
      'NC Studios is a creative agency in Bengaluru specializing in web design, brand identity, digital advertising, and social media marketing for ambitious businesses.',
    images: [
      {
        url: 'https://ncstudios.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'NC Studios — Creative Agency in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NC Studios | Creative Agency & Web Design Studio in Bengaluru',
    description:
      'NC Studios is a creative agency in Bengaluru specializing in web design, brand identity, digital advertising, and social media marketing for ambitious businesses.',
    images: ['https://ncstudios.in/logo.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NC Studios',
  url: 'https://ncstudios.in/',
  logo: 'https://ncstudios.in/logo.png',
  image: 'https://ncstudios.in/logo.png',
  description:
    'NC Studios is a creative agency in Bengaluru specializing in web design, brand identity, digital advertising, and social media marketing for ambitious businesses.',
  telephone: '+91-9380263271',
  email: 'info@ncstudios.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bengaluru, Karnataka, India',
  },
  knowsAbout: [
    'Web Design',
    'Brand Identity',
    'Digital Advertising',
    'Social Media Marketing',
    'Corporate Gifting Platforms',
    'Frontend Development',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <MarqueeBand />
        <ManifestoSection />
        <ServicesSection />
        <ClientsSection />
        <ProcessSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  );
}
