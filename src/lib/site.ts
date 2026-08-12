/**
 * Central site configuration. Update these values to personalise the portfolio.
 * `url` should be the final deployed origin (used for SEO, sitemap, OG tags).
 */
export const siteConfig = {
  name: "Md. Hridoy Ahmed",
  shortName: "Hridoy Ahmed",
  role: "Researcher · Molecular Biologist · Computational Biology",
  tagline:
    "Exploring disease through genomics, computational drug discovery, and immunoinformatics.",
  // Change this to your custom domain or https://<user>.github.io/<repo>
  url: "https://ahmedhridoy.com",
  locale: "en_US",
  email: "hridoy.geb.cu@gmail.com",
  location: "Chattogram, Bangladesh",
  keywords: [
    "Md. Hridoy Ahmed",
    "molecular biology",
    "bioinformatics",
    "computational biology",
    "drug discovery",
    "immunoinformatics",
    "genomics",
    "variant analysis",
    "vaccine design",
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
