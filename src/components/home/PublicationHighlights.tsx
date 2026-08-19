import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationsExplorer } from "@/components/publications/PublicationsExplorer";
import { SectionCta } from "@/components/ui/SectionCta";

export function PublicationHighlights() {
  return (
    <section
      id="publications"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Publication Highlights"
            title="Peer-reviewed research"
            description="Four peer-reviewed articles, three as first author and one as corresponding author. Two appeared in Q1 journals (Elsevier and Taylor & Francis) and two in Wiley titles, each validated across rigorous computational methods."
          />
        </div>

        <Reveal className="mt-10" delay={0.05}>
          <PublicationsExplorer />
        </Reveal>
        <SectionCta href="/publications" label="View all publications" />

      </div>
    </section>
  );
}
