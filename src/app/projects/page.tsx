import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projectSummary } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects/" },
  description:
    "Bench-led cohort studies in human disease genetics and antimicrobial resistance, followed by the annotation, structural, and immunoinformatics work behind them.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research Projects"
        description={projectSummary.statement}
      />

      <section className="container py-16">
        <div className="flex flex-wrap gap-3">
          {projectSummary.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="surface flex items-center gap-3 px-5 py-3">
                <span className="font-display text-2xl font-bold text-gradient">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ProjectsExplorer />
        </div>
      </section>
    </>
  );
}
