import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { SectionCta } from "@/components/ui/SectionCta";

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative scroll-mt-24 bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Academic Timeline"
          title="A path through study, research, and service"
          description="Education, research positions, peer-reviewed publications, awards, and the founding of a national training community."
          align="center"
        />
        <Timeline />
        <SectionCta href="/about" label="Read the full academic profile" />

      </div>
    </section>
  );
}
