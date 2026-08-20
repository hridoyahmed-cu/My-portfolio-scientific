import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { researchThemes, methodCapabilities } from "@/data/research";
import { projects } from "@/data/projects";
import { researchExperience } from "@/data/profile";
import { researchField } from "@/lib/site";
import { cn } from "@/lib/utils";
import { accentCard, accentGlow, asAccent } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Research Programme",
  alternates: { canonical: "/research/" },
  description:
    "Human molecular genetics of complex disease: three bench-led research themes across kidney disease, PCOS, periodontitis, and antimicrobial resistance, with variant discovery from extraction to interpretation.",
};

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10",
  cyan: "text-cyan bg-cyan/10",
  emerald: "text-emerald bg-emerald/10",
  gold: "text-gold bg-gold/10",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={researchField.full}
        description={researchField.method}
      />

      {/* Themes — the three questions */}
      <section className="container py-16">
        <h2 className="heading-display text-2xl">Research themes</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Three themes, all bench-led. Each states the question it asks, the
          laboratory work that answers it, and the studies it covers.
        </p>

        <div className="mt-10 space-y-6">
          {researchThemes.map((theme, i) => {
            const themeProjects = theme.projectIds
              .map((id) => projects.find((p) => p.id === id))
              .filter(Boolean) as typeof projects;

            return (
              <Reveal key={theme.id} delay={(i % 3) * 0.06}>
                <article
                  className={cn(
                    "surface p-7 transition-all duration-300",
                    accentCard[asAccent(theme.accent)],
                  )}
                >
                  <div className="grid gap-7 lg:grid-cols-[1.35fr_1fr]">
                    <div>
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                            accentMap[theme.accent],
                            accentGlow[asAccent(theme.accent)],
                          )}
                        >
                          <Icon name={theme.icon} className="h-6 w-6" aria-hidden />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {theme.title}
                            </h3>
                            {theme.bench ? (
                              <Badge accent="emerald">
                                <Icon
                                  name="FlaskConical"
                                  className="h-3 w-3"
                                  aria-hidden
                                />
                                Bench-led
                              </Badge>
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {theme.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-l-[3px] border-cyan/60 pl-4">
                        <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          The question
                        </p>
                        <p className="mt-1.5 text-base italic leading-relaxed text-foreground/90">
                          {theme.question}
                        </p>
                      </div>

                      <div className="mt-6 rounded-xl border border-emerald/25 bg-emerald/5 p-4">
                        <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald">
                          Laboratory work
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                          {theme.benchWork}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Studies in this theme
                      </p>
                      <ul className="mt-3 space-y-3">
                        {themeProjects.map((p) => (
                          <li
                            key={p.id}
                            className="rounded-xl border border-border bg-card/60 p-4"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge
                                accent={
                                  p.status === "Published" ? "emerald" : "gold"
                                }
                              >
                                {p.status}
                              </Badge>
                              {p.cohort ? (
                                <span className="font-plex text-[11px] text-muted-foreground">
                                  {p.cohort}
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                              {p.title}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Methods — supporting capability, not a parallel programme */}
      <section className="border-y border-border bg-card/30 py-16">
        <div className="container">
          <h2 className="heading-display text-2xl">Methods</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            {researchField.methodNote} Each capability below carries published
            work behind it — the Chikungunya and Mpox studies are where most of
            it was built.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {methodCapabilities.map((method, i) => (
              <Reveal key={method.label} delay={(i % 3) * 0.05}>
                <div className="surface h-full p-5">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                      accentMap[method.accent],
                    )}
                  >
                    <Icon name={method.icon} className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                    {method.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              href="/research/techniques"
              className="btn-shift focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Full technique inventory
              <Icon name="ChevronRight" className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="container py-16">
        <h2 className="heading-display text-2xl">Laboratory & research experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {researchExperience.map((exp, i) => (
            <Reveal key={`${exp.organisation}-${i}`} delay={(i % 4) * 0.06}>
              <div className="surface h-full p-6">
                <p className="font-plex text-xs font-medium text-cyan">
                  {exp.period}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.organisation}
                </p>
                <p className="mt-3 text-sm text-foreground/80">{exp.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
