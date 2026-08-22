import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { biopc, teachingAreas } from "@/data/teaching";
import { SectionCta } from "@/components/ui/SectionCta";
import { BioPCButton } from "@/components/ui/BioPCButton";

/** Split a display value like "3,000+" or "~5" into prefix / number / suffix. */
function parseStat(value: string) {
  const m = /^(\D*)([\d,]+)(\D*)$/.exec(value);
  if (!m) return null;
  return { prefix: m[1], value: Number(m[2].replace(/,/g, "")), suffix: m[3] };
}

export function Teaching() {
  return (
    <section
      id="teaching"
      className="relative scroll-mt-24 bg-card/30 py-24"
    >
      <div className="container grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Teaching & Mentorship"
            title="BioPC - training the next cohort of computational biologists"
            description={biopc.summary}
          />

          <ul className="mt-8 space-y-3">
            {teachingAreas.map((area, i) => (
              <Reveal as="li" key={area} delay={i * 0.05} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/85">
                  {area}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8" delay={0.1}>
            <BioPCButton />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {biopc.stats.map((stat, i) => {
            const parsed = parseStat(stat.value);
            return (
              <Reveal
                as="div"
                key={stat.label}
                delay={i * 0.07}
                className="surface flex flex-col justify-center p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-gradient">
                  {parsed ? (
                    <Counter
                      value={parsed.value}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>
        <SectionCta
          href="/teaching"
          label="See teaching & community work"
          secondaryHref="/media"
          secondaryLabel="Media & outreach"
        />

      </div>
    </section>
  );
}
