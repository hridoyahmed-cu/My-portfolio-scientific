import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery/" },
  description:
    "Photographs from the laboratory, conferences, BioPC training programmes, academic milestones, and community leadership.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments in Research & Community"
        description={`${galleryItems.length} captioned photographs from the laboratory bench, conference podiums, BioPC training programmes, academic milestones, and community leadership. Select any image to view it full screen, and use the arrow keys to browse.`}
      />
      <section className="container py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
