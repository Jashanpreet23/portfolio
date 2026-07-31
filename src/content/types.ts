export interface SocialLink {
  label: string;
  href: string;
  /** Display form of the URL, e.g. "github.com/Jashanpreet23". */
  handle: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  siteUrl: string;
  /** Path to the resume PDF inside /public. */
  resumePath: string;
  intro: string;
  /** Each string renders as its own paragraph. */
  about: string[];
  availability: string;
  socials: SocialLink[];
}

export interface Project {
  slug: string;
  name: string;
  kind: string;
  year: string;
  context?: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  /** Shown in place of a repo link when the source cannot be made public. */
  repoAccess?: string;
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
  highlights: string[];
}

export interface Credential {
  qualification: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface SiteContent {
  profile: Profile;
  projects: Project[];
  skills: SkillGroup[];
  experience: Role[];
  education: Credential[];
}
