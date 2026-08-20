import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationsExplorer } from "@/components/publications/PublicationsExplorer";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { manuscriptsInPreparation } from "@/data/publications";
import { researchMetrics } from "@/data/metrics";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  alternates: { canonical: "/publications/" },
  description:
    "Peer-reviewed publications and bench-led manuscripts in preparation by Md. Hridoy Ahmed, with authorship position, DOIs, PDFs, and citation details.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Peer-Reviewed Publications"
        description="Published work and manuscripts in preparation. Authorship position is stated on every entry; work not yet published is labelled as such."
      />

      {/* Research record — kept apart from outreach figures, which live on /teaching. */}
      <section className="border-b border-border bg-card/30 py-10">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4">
          {researchMetrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-3xl font-bold text-foreground">
                {m.value}
                {m.suffix ?? ""}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <h2 className="heading-display text-2xl">Published</h2>
        <div className="mt-8">
          <PublicationsExplorer withSearch />
        </div>
      </section>

      {/* Manuscripts in preparation — where the bench work is documented. */}
      <section
        id="in-preparation"
        className="scroll-mt-24 border-y border-border bg-card/30 py-16"
      >
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="heading-display text-2xl">Manuscripts in preparation</h2>
            <Badge accent="emerald">
              <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
              Bench-generated data
            </Badge>
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Three collaborative cohort studies where the DNA was extracted,
            amplified, and sequenced in our laboratory. None of these are
            published yet — status is stated on each entry.
          </p>

          <div className="mt-10 space-y-5">
            {manuscriptsInPreparation.map((m) => (
              <Reveal key={m.id}>
                <article className="surface p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge accent="gold">{m.status}</Badge>
                    <Badge accent="muted">{m.authorRole}</Badge>
                    <span className="font-plex text-xs text-cyan">{m.domain}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                    {m.title}
                  </h3>

                  <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 font-plex text-xs font-medium text-foreground/85">
                    <Icon name="Users" className="h-3.5 w-3.5 text-emerald" aria-hidden />
                    {m.cohort}
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Methods
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {m.methods.map((method) => (
                          <li
                            key={method}
                            className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Principal finding
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {m.finding}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">

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
