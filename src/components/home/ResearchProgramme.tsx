import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/Badge";
import { researchThemes, methodCapabilities } from "@/data/research";
import { researchField } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/ui/SectionCta";
import { accentCard, accentGlow, asAccent } from "@/lib/accents";

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10 group-hover:bg-blue/15",
  cyan: "text-cyan bg-cyan/10 group-hover:bg-cyan/15",
  emerald: "text-emerald bg-emerald/10 group-hover:bg-emerald/15",
  gold: "text-gold bg-gold/10 group-hover:bg-gold/15",
};

/**
 * Three themes, not nine interests.
 *
 * Each theme states its question and names the bench work that answers it. The
 * method list underneath is deliberately smaller and visually quieter: those
 * capabilities are real and published, but they are how the questions get
 * answered rather than questions of their own.
 */
export function ResearchProgramme() {
  return (
    <section
      id="research"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Research Programme"
          title="One question, three cohorts"
          description={researchField.method}
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {researchThemes.map((theme, i) => (
            <Reveal key={theme.id} delay={(i % 3) * 0.07}>
              <div
                className={cn(
                  "surface surface-hover group flex h-full flex-col p-7 transition-all duration-300",
                  accentCard[asAccent(theme.accent)],
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                      accentMap[theme.accent],
                      accentGlow[asAccent(theme.accent)],
                    )}
                  >
                    <Icon name={theme.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  {theme.bench ? (
                    <Badge accent="emerald">
                      <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
                      Bench-led
                    </Badge>
                  ) : null}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                  {theme.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>

                <div className="mt-5 border-l-[3px] border-cyan/60 pl-4">
                  <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    The question
                  </p>
                  <p className="mt-1.5 text-sm italic leading-relaxed text-foreground/85">
                    {theme.question}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald">
                    At the bench
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                    {theme.benchWork}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Methods — supporting, deliberately quieter than the themes above. */}
        <Reveal className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="heading-display text-xl">Methods I bring to them</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {researchField.methodNote} Each of these carries published work
              behind it.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {methodCapabilities.map((method, i) => (
            <Reveal key={method.label} delay={(i % 3) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card/60 px-4 py-3.5">
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    accentMap[method.accent],
                  )}
                >
                  <Icon name={method.icon} className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {method.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionCta href="/research" label="Read the full research programme" />
      </div>
    </section>
  );
}
