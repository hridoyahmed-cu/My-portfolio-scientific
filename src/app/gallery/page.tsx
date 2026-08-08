import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery/" },
  description:
    "Photographs from conferences, award ceremonies, BioPC workshops, laboratory sessions, and campus life.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments in Research & Community"
        description={`A visual record of Hridoy's life — ${galleryItems.length} photographs from conferences, award ceremonies, BioPC training programmes, the laboratory, recreations, and campus. Select any image to view it full screen, and use the arrow keys to browse.`}
      />
      <section className="container py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
