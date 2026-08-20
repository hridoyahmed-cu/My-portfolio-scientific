import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { SectionCta } from "@/components/ui/SectionCta";
import { manuscriptsInPreparation } from "@/data/publications";

/**
 * Current bench-led cohort studies.
 *
 * This section exists because the published record is entirely computational
 * while the research programme is bench-led — a mismatch a reviewer notices
 * immediately. The three studies below are where the hands-on work actually
 * lives, so they are stated early, with cohort sizes, and with their status
 * labelled unambiguously as in preparation.
 */
export function BenchWork() {
  return (
    <section id="bench" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="At the Bench"
        title="What I am working on now"
        description="Three cohort studies in preparation. In each one the DNA was extracted, amplified, and sequenced in our laboratory before any of it reached a terminal."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {manuscriptsInPreparation.map((m, i) => (
          <Reveal key={m.id} delay={(i % 3) * 0.07}>
            <article className="surface surface-hover flex h-full flex-col p-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge accent="gold">{m.status}</Badge>
                {m.bench ? (
                  <Badge accent="emerald">
                    <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
                    Bench
                  </Badge>
                ) : null}
              </div>

              <p className="mt-4 font-plex text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                {m.domain}
              </p>

              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-foreground">
                {m.title}
              </h3>

              <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 font-plex text-xs font-medium text-foreground/85">
                <Icon name="Users" className="h-3.5 w-3.5 text-emerald" aria-hidden />
                {m.cohort}
              </p>

              <div className="mt-5">
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

              <p className="mt-auto pt-5 text-sm leading-relaxed text-foreground/80">
                <span className="font-semibold text-foreground">Finding. </span>
                {m.finding}
              </p>

              <Link
                href={`/projects#${m.projectId}`}
                className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-cyan transition-colors hover:text-blue"
              >
                Project detail
                <Icon name="ChevronRight" className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <SectionCta
        href="/publications#in-preparation"
        label="See the full publication record"
        secondaryHref="/research/techniques"
        secondaryLabel="Laboratory techniques"
      />
    </section>
  );
}
