import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ResearchProgramme } from "@/components/home/ResearchProgramme";
import { BenchWork } from "@/components/home/BenchWork";
import { PublicationHighlights } from "@/components/home/PublicationHighlights";
import { Techniques } from "@/components/home/Techniques";
import { TimelineSection } from "@/components/home/TimelineSection";
import { Teaching } from "@/components/home/Teaching";
import { Contact } from "@/components/home/Contact";
import { SectionDivider } from "@/components/ui/SectionDivider";

/**
 * Homepage order follows one rule: the closer something is to the research
 * field, the earlier it appears.
 *
 * Field statement → research programme → current bench work → published record
 * → techniques → chronology → teaching → contact.
 *
 * Sections moved to their own pages rather than competing for attention here:
 *   Expertise dials  → replaced by Techniques (percentages retired)
 *   Metrics          → /publications (research) and /teaching (outreach)
 *   Current projects → /projects, and surfaced through BenchWork above
 *   Awards preview   → /awards
 *   Featured writing → /blog
 *   Gallery          → /gallery
 *   Testimonials     → withheld pending real, permissioned quotes
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider flip />
      <ResearchProgramme />
      <SectionDivider />
      <BenchWork />
      <SectionDivider flip />
      <PublicationHighlights />
      <SectionDivider />
      <Techniques />
      <SectionDivider flip />
      <TimelineSection />
      <SectionDivider />
      <Teaching />
      <SectionDivider flip />
      <Contact />
    </>
  );
}
