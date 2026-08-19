import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { researchInterests } from "@/data/research";
import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/ui/SectionCta";
import { accentCard, accentGlow, asAccent } from "@/lib/accents";

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10 group-hover:bg-blue/15",
  cyan: "text-cyan bg-cyan/10 group-hover:bg-cyan/15",
  emerald: "text-emerald bg-emerald/10 group-hover:bg-emerald/15",
  gold: "text-gold bg-gold/10 group-hover:bg-gold/15",
};

export function ResearchInterests() {
  return (
    <section
      id="research"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Research Interests"
          title="Where my curiosity concentrates"
          description="Nine connected areas, from the wet bench to the simulation, that together shape how I read disease and design responses to it."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((interest, i) => (
            <Reveal key={interest.title} delay={(i % 4) * 0.06}>
              <div
                className={cn(
                  "surface surface-hover group h-full p-6 transition-all duration-300",
                  accentCard[asAccent(interest.accent)],
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                    accentMap[interest.accent],
                    accentGlow[asAccent(interest.accent)],
                  )}
                >
                  <Icon name={interest.icon} className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {interest.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <SectionCta href="/research" label="Explore all research areas" />

      </div>
    </section>
  );
}
