import { siteConfig } from "@/lib/site";

/** Structured data (schema.org Person) for academic/scholarly discoverability. */
export function JsonLd() {
  const sameAs = Object.values(siteConfig.socials).filter(
    (v) => typeof v === "string" && v.startsWith("http"),
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: "Hridoy Ahmed",
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Molecular Genetics & Computational Biology Researcher",
    description: siteConfig.tagline,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: "0000-0003-2077-4401",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "University of Chittagong",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Chittagong",
    },
    knowsAbout: [
      "Molecular Biology",
      "Bioinformatics",
      "Computational Drug Discovery",
      "Immunoinformatics",
      "Genomics",
      "Variant Analysis",
      "Vaccine Design",
    ],
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
