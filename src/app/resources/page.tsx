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
        description="Tools, databases, and learning resources I rely on and recommend — searchable and grouped by purpose, for students and early-career researchers in the life sciences."
      />

      <section className="container py-12">
        <ResourcesExplorer />
      </section>
    </>
  );
}
