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
        width: 609,
        height: 410,
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
  url: 'https://ncstudios.in',
  logo: 'https://ncstudios.in/logo.png',
  image: 'https://ncstudios.in/logo.png',
  description:
    'NC Studios is a creative agency in Bengaluru offering web design and development, brand identity, social media marketing, digital advertising, visiting cards and printing, and complete branding.',
  email: 'info@ncstudios.in',
  telephone: '+919482420060',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bengaluru',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  sameAs: [
    'https://www.instagram.com/_nc_studios__/',
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
