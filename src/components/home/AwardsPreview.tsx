import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { majorHonors } from "@/data/awards";
import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/ui/SectionCta";

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10",
  cyan: "text-cyan bg-cyan/10",
  emerald: "text-emerald bg-emerald/10",
  gold: "text-gold bg-gold/10",
};

export function AwardsPreview() {
  return (
    <section id="awards" className="container scroll-mt-24 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Awards & Honours"
          title="Recognition for research and leadership"
          description="National fellowships, conference honours, and academic distinctions earned across the journey."
        />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {majorHonors.map((award, i) => (
          <Reveal key={award.title} delay={(i % 3) * 0.06}>
            <div className="surface surface-hover flex h-full gap-4 p-5">
              <span
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                  accentMap[award.accent],
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
      <SectionCta
        href="/awards"
        label="All awards & honours"
        secondaryHref="/conferences"
        secondaryLabel="Conference presentations"
      />

    </section>
  );
}
