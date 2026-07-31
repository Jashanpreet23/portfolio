import { content } from "@/content/profile";

/**
 * schema.org Person markup. Search engines use this to render richer results
 * for a name query, which is the search that matters most for a portfolio.
 */
export function personJsonLd(): string {
  const { profile, education, experience } = content;
  const currentRole = experience[0];
  const degree = education[0];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    sameAs: profile.socials
      .filter((social) => !social.href.startsWith("mailto:"))
      .map((social) => social.href),
    alumniOf: degree
      ? {
          "@type": "CollegeOrUniversity",
          name: degree.institution,
        }
      : undefined,
    worksFor: currentRole
      ? {
          "@type": "Organization",
          name: currentRole.company,
        }
      : undefined,
    knowsAbout: content.skills.flatMap((group) => group.items),
  });
}
