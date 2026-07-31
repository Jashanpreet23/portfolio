/**
 * Shape of every piece of copy on the site.
 *
 * Content lives in `profile.ts` and nowhere else — components read from it and
 * never hardcode strings. Adding a project or changing a job title is a single
 * edit there, and TypeScript will flag anything a component still expects.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** Short handle shown next to the label, e.g. "Jashanpreet23". */
  handle: string;
}

export interface Profile {
  name: string;
  /** Rendered under the name — the one-line positioning statement. */
  title: string;
  location: string;
  email: string;
  phone: string;
  /** Canonical site URL, used for SEO metadata and JSON-LD. */
  siteUrl: string;
  /** Path to the resume PDF inside /public. */
  resumePath: string;
  /** Hero paragraph. Two or three sentences, no longer. */
  intro: string;
  /** Longer "About" copy. Each string renders as its own paragraph. */
  about: string[];
  /** Availability line shown in the hero badge. */
  availability: string;
  socials: SocialLink[];
}

export interface Project {
  /** URL-safe id, used for anchors and React keys. */
  slug: string;
  name: string;
  /** Short qualifier shown beside the name, e.g. "Full-stack web application". */
  kind: string;
  year: string;
  /** Context line: capstone, client, coursework. Optional. */
  context?: string;
  /**
   * Honest one-line statement of what this person personally owned.
   * Team projects say so — recruiters expect collaboration, and interviews
   * probe authorship.
   */
  role: string;
  /** One-sentence summary shown before the detail bullets. */
  summary: string;
  /** What was actually built. Written in first person, past tense. */
  highlights: string[];
  /** Technologies, ordered most to least significant. */
  stack: string[];
  links?: { label: string; href: string }[];
  /**
   * Shown where a repo link would go, for work whose source cannot be made
   * public — university org repos, client work. Say so plainly rather than
   * leaving a recruiter wondering why there is no code to look at.
   */
  repoAccess?: string;
  /** Marks the project as worth showing first. */
  featured: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Role {
  company: string;
  position: string;
  period: string;
  location?: string;
  /** Achievement bullets — each should carry a result, not just a duty. */
  highlights: string[];
}

export interface Credential {
  qualification: string;
  institution: string;
  period: string;
  /** Optional supporting detail, e.g. a major or specialisation. */
  detail?: string;
}

export interface SiteContent {
  profile: Profile;
  projects: Project[];
  skills: SkillGroup[];
  experience: Role[];
  education: Credential[];
}
