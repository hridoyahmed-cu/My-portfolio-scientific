import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ResearchInterests } from "@/components/home/ResearchInterests";
import { Expertise } from "@/components/home/Expertise";
import { PublicationHighlights } from "@/components/home/PublicationHighlights";
import { Metrics } from "@/components/home/Metrics";
import { CurrentProjects } from "@/components/home/CurrentProjects";
import { TimelineSection } from "@/components/home/TimelineSection";
import { AwardsPreview } from "@/components/home/AwardsPreview";
import { Teaching } from "@/components/home/Teaching";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryHighlights } from "@/components/home/GalleryHighlights";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ResearchInterests />
      <Expertise />
      <PublicationHighlights />
      <Metrics />
      <CurrentProjects />
      <TimelineSection />
      <AwardsPreview />
      <Teaching />
      <FeaturedArticles />
      <Testimonials />
      <GalleryHighlights />
      <Contact />
    </>
  );
}
