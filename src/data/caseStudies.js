import caseStudiesData from './caseStudies.json';

export const caseStudies = caseStudiesData;

export function getCaseStudyBySlug(slug) {
  return caseStudiesData[slug] || null;
}

export function getAllCaseStudySlugs() {
  return Object.keys(caseStudiesData);
}
