import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationsExplorer } from "@/components/publications/PublicationsExplorer";

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
            title="Peer-reviewed, first-author research"
            description="Three first-author articles, including two in Q1 journals and a Wiley review, each validated across rigorous methods."
          />
          <Reveal>
            <Link
              href="/publications"
              className="link-underline inline-flex items-center gap-1.5 font-medium text-blue"
            >
              All publications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-10" delay={0.05}>
          <PublicationsExplorer />
        </Reveal>
      </div>
    </section>
  );
}
