import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RadialSkill } from "@/components/ui/RadialSkill";
import { expertiseAreas } from "@/data/research";

export function Expertise() {
  return (
    <section id="expertise" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Scientific Expertise"
        title="Skills measured across the research lifecycle"
        description="From sample preparation at the bench to molecular dynamics on the cluster, and from analysis to writing and teaching."
        align="center"
      />

      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {expertiseAreas.map((area, i) => (
          <Reveal key={area.label} delay={(i % 5) * 0.08}>
            <RadialSkill
              label={area.label}
              value={area.value}
              icon={area.icon}
              note={area.note}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
