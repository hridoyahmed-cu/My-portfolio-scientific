import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/Timeline";

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Academic Timeline"
          title="A path through study, research, and service"
          description="Education, research positions, peer-reviewed publications, awards, and the founding of a national training community."
          align="center"
        />
        <Timeline />
      </div>
    </section>
  );
}
