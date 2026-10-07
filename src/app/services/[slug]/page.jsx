import { notFound } from 'next/navigation';
import '@/styles/services.css';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import ServiceHero from '@/components/services/ServiceHero';
import ProblemsSection from '@/components/services/ProblemsSection';
import DeliverablesSection from '@/components/services/DeliverablesSection';
import ServiceProcess from '@/components/services/ServiceProcess';
import FeaturedProjectCard from '@/components/services/FeaturedProjectCard';
import FaqSection from '@/components/services/FaqSection';
import FullwidthCta from '@/components/services/FullwidthCta';
import OtherServicesNav from '@/components/services/OtherServicesNav';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const canonicalUrl = `https://ncstudios.in/services/${service.slug}`;

  return {
    title: service.pageTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: service.pageTitle,
      description: service.metaDescription,
      images: [
        {
          url: 'https://ncstudios.in/logo.png',
          width: 609,
          height: 410,
          alt: service.pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.pageTitle,
      description: service.metaDescription,
      images: ['https://ncstudios.in/logo.png'],
    },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.pageTitle.split('|')[0].trim(),
    provider: {
      '@type': 'Organization',
      name: 'NC Studios',
      url: 'https://ncstudios.in/',
      logo: 'https://ncstudios.in/logo.png',
    },
    description: service.metaDescription,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Bengaluru, Karnataka, India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.pageTitle.split('|')[0].trim()} Services`,
      itemListElement: service.deliverables.map((d) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d.title,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <ServiceHero data={service} />
        <ProblemsSection data={service} />
        <DeliverablesSection data={service} />
        <ServiceProcess data={service} />
        <FeaturedProjectCard project={service.featuredProject} />
        <FaqSection faqs={service.faqs} />
        <FullwidthCta cta={service.cta} />
        <OtherServicesNav currentSlug={service.slug} />
      </main>
    </>
  );
}
