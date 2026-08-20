/**
 * Central site configuration. Update these values to personalise the portfolio.
 * `url` should be the final deployed origin (used for SEO, sitemap, OG tags).
 */

/**
 * The single research field the whole site points at.
 *
 * Everything on this site is organised around one claim: human molecular
 * genetics of complex disease, done at the bench first. Import from here rather
 * than retyping the phrasing, so the field statement stays identical on every
 * page, in every meta description, and in structured data.
 */
export const researchField = {
  /** Two- or three-word field name. Used in labels, badges, breadcrumbs. */
  short: "Human Disease Genetics",
  /** The field, written out. Used in headings and metadata. */
  full: "Human molecular genetics of complex disease",
  /** The one-line positioning statement. Used in the hero and OG description. */
  statement:
    "Human molecular genetics of complex disease — variant discovery at the bench, interpretation at the terminal.",
  /** How the work is actually done. Wet lab named first, deliberately. */
  method:
    "Molecular biology first: DNA extraction, PCR and qPCR, Sanger sequencing, targeted panels and whole-exome sequencing — interpreted with computational genomics.",
  /** Where the computational work sits in the story: a method, not a second identity. */
  methodNote:
    "Computational biology is how the variants get interpreted, not a separate research line.",
} as const;

export const siteConfig = {
  name: "Md. Hridoy Ahmed",
  shortName: "Hridoy Ahmed",
  role: "Molecular Geneticist · Disease Variant Genomics",
  tagline: researchField.statement,
  // Change this to your custom domain or https://<user>.github.io/<repo>
  url: "https://ahmedhridoy.com",
  locale: "en_US",
  email: "hridoy.geb.cu@gmail.com",
  location: "Chattogram, Bangladesh",
  // Ordered deliberately: the field terms lead, the method terms follow.
  keywords: [
    "Md. Hridoy Ahmed",
    "human molecular genetics",
    "disease variant genomics",
    "clinical variant interpretation",
    "molecular biology",
    "Sanger sequencing",
    "whole-exome sequencing",
    "genomics",
    "genomic epidemiology",
    "antimicrobial resistance",
    "bioinformatics",
    "computational biology",
    "University of Chittagong",
  ],
  socials: {
    orcid: "https://orcid.org/0000-0003-2077-4401",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    linkedin: "https://www.linkedin.com/in/hridoy-ahmed-msc/",
    googleScholar: "https://scholar.google.com/citations?user=UavZgJMAAAAJ&hl=en",
    github: "https://github.com/hridoyahmed-cu",
    blog: "https://lifehackerblog.home.blog/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
