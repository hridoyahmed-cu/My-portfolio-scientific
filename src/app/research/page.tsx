import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { RadialSkill } from "@/components/ui/RadialSkill";
import { Icon } from "@/components/ui/icon";
import { researchInterests, expertiseAreas } from "@/data/research";
import { researchExperience } from "@/data/profile";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
  alternates: { canonical: "/research/" },
  description:
    "Research interests, scientific expertise, and laboratory experience spanning genomics, drug discovery, immunoinformatics, and systems biology.",
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
        title="Research Interests & Expertise"
        description="My work integrates laboratory genetics with computational modelling to investigate disease-associated variation and to design therapeutic and vaccine candidates."
      />

      {/* Interests */}
      <section className="container py-16">
        <h2 className="heading-display text-2xl">Areas of focus</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((interest, i) => (
            <Reveal key={interest.title} delay={(i % 4) * 0.05}>
              <div className="surface surface-hover h-full p-6">
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    accentMap[interest.accent],
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
      </section>

      {/* Expertise */}
      <section className="border-y border-border bg-card/30 py-16">
        <div className="container">
          <h2 className="heading-display text-2xl">Scientific expertise</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Proficiency measured across the research lifecycle, from the wet bench
            to computation, analysis, writing, and teaching.
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {expertiseAreas.map((area, i) => (
              <Reveal key={area.label} delay={(i % 5) * 0.07}>
                <RadialSkill
                  label={area.label}
                  value={area.value}
                  icon={area.icon}
                  note={area.note}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="container py-16">
        <h2 className="heading-display text-2xl">Laboratory & research experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {researchExperience.map((exp, i) => (
            <Reveal key={`${exp.organisation}-${i}`} delay={(i % 3) * 0.06}>
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
