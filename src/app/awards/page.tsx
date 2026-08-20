import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { majorHonors } from "@/data/awards";
import { presentations } from "@/data/presentations";
import { cn } from "@/lib/utils";
import { accentCard, accentGlow, asAccent } from "@/lib/accents";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Awards & Honours",
  alternates: { canonical: "/awards/" },
  description:
    "Fellowships, conference honours, scholarships, and competition recognitions earned by Md. Hridoy Ahmed.",
};

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10",
  cyan: "text-cyan bg-cyan/10",
  emerald: "text-emerald bg-emerald/10",
  gold: "text-gold bg-gold/10",
};

export default function AwardsPage() {
  const competitions = presentations.filter(
    (p) => p.kind === "Poster" || p.kind === "Business & Innovation",
  );

  return (
    <>
      <PageHeader
        eyebrow="Awards & Honours"
        title="Awards, Honours & Competitions"
        description="Recognition for research quality, academic performance, leadership, and scientific communication."
      />

      <section className="container py-16">
        <h2 className="heading-display text-2xl">Major honours & fellowships</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {majorHonors.map((award, i) => (
            <Reveal key={award.title} delay={(i % 3) * 0.06}>
              <div
                className={cn(
                  "surface surface-hover flex h-full gap-4 p-6 transition-all duration-300",
                  accentCard[asAccent(award.accent)],
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    accentMap[award.accent],
                    accentGlow[asAccent(award.accent)],
                  )}
                >
                  <Icon name={award.icon} className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                    {award.title}
                    {award.year ? (
                      <span className="ml-1 font-plex text-xs font-medium text-muted-foreground">
                        ({award.year})
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {award.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="bg-card/30 py-16">
        <div className="container">
          <h2 className="heading-display text-2xl">
            Poster presentations & competitions
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Selected scientific posters and innovation contests presented across
            university and conference platforms.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {competitions.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 0.05}>
                <div className="surface surface-hover flex h-full items-start gap-3 p-5">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon name="Medal" className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold leading-snug text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.venue}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
