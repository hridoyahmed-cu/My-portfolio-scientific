import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationsExplorer } from "@/components/publications/PublicationsExplorer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  alternates: { canonical: "/publications/" },
  description:
    "Peer-reviewed publications by Md. Hridoy Ahmed as first and corresponding author, with DOIs, PDFs, and citation details.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Peer-Reviewed Publications"
        description="A searchable, filterable record of my research articles. Each entry links to the journal, DOI, and full text where available."
      />

      <section className="container py-16">
        <PublicationsExplorer withSearch />

        <Reveal className="mt-12">
          <div className="surface flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Full publication record
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                For the complete, continuously updated list, see my ORCID and
                ResearchGate profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.socials.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                ORCID
              </a>
              <a
                href={siteConfig.socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-cyan/50"
              >
                ResearchGate
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
