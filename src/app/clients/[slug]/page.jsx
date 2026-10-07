import { notFound } from 'next/navigation';
import '@/styles/case-study.css';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/caseStudies';
import CaseStudyHero from '@/components/clients/CaseStudyHero';
import BrowserMockup from '@/components/clients/BrowserMockup';
import ProjectOverview from '@/components/clients/ProjectOverview';
import ChallengeSection from '@/components/clients/ChallengeSection';
import SolutionSection from '@/components/clients/SolutionSection';
import BehindTheBuild from '@/components/clients/BehindTheBuild';
import InteractiveGallery from '@/components/clients/InteractiveGallery';
import AdminCmsShowcase from '@/components/clients/AdminCmsShowcase';
import CaseStudyProcess from '@/components/clients/CaseStudyProcess';
import OutcomesSection from '@/components/clients/OutcomesSection';
import LiveWebsiteCta from '@/components/clients/LiveWebsiteCta';
import ProjectNav from '@/components/clients/ProjectNav';

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  const canonicalUrl = `https://ncstudios.in/clients/${study.slug}`;
  const ogImageUrl = `https://ncstudios.in/projects/og/${study.slug}.jpg`;

  return {
    title: study.title,
    description: study.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: study.title,
      description: study.metaDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${study.overview.client} Case Study`,
    headline: study.title,
    author: {
      '@type': 'Organization',
      name: 'NC Studios',
      url: 'https://ncstudios.in/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NC Studios',
      logo: 'https://ncstudios.in/logo.png',
    },
    description: study.metaDescription,
    inLanguage: 'en',
    datePublished: '2026-01-15',
    dateModified: '2026-10-02',
    about: {
      '@type': 'Organization',
      name: study.overview.client,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <CaseStudyHero data={study} />
        <BrowserMockup mockup={study.mockup} />
        <ProjectOverview overview={study.overview} eyebrow={study.eyebrow} />
        <ChallengeSection lead={study.challengeLead} challenges={study.challenges} />
        <SolutionSection solutions={study.solutions} subtitle={study.solutionSubtitle} />
        <BehindTheBuild decisions={study.behindTheBuild} />
        {study.gallery && <InteractiveGallery gallery={study.gallery} />}
        {study.adminShowcase && <AdminCmsShowcase showcase={study.adminShowcase} />}
        <CaseStudyProcess process={study.process} />
        <OutcomesSection outcomes={study.outcomes} subtitle={study.outcomesSubtitle} />
        <LiveWebsiteCta liveCta={study.liveCta} />
        <ProjectNav prevProject={study.prevProject} nextProject={study.nextProject} />
      </main>
    </>
  );
}
