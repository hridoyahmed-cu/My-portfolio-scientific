import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ResourcesExplorer } from "@/components/resources/ResourcesExplorer";

export const metadata: Metadata = {
  title: "Resources & Tools",
  alternates: { canonical: "/resources/" },
  description:
    "A curated library of bioinformatics, drug-design, vaccine-design, data-analysis, molecular-biology, AI, scholarship, and learning resources for students and early-career researchers.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources & Tools"
        title="A Research Toolkit"
        description="Research tools first - bench planning, sequence analysis, structural work, and high-throughput data. Study and application material for students follows below."
      />

      <section className="container py-12">
        <ResourcesExplorer />
      </section>
    </>
  );
}
