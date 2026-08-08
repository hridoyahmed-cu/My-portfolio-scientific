import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, projectSummary } from "@/data/projects";

const featuredIds = [
  "chikv-drug-design",
  "mpox-vaccine",
  "mmp-variants",
  "wes-pipeline",
  "ctrachomatis-vaccine",
  "p53-nanophyto",
];

export function CurrentProjects() {
  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as typeof projects;

  return (
    <section id="projects" className="container scroll-mt-24 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Current Projects"
          title="Research in motion"
          description={projectSummary.statement}
        />
        <Reveal>
          <Link
            href="/projects"
            className="link-underline inline-flex items-center gap-1.5 font-medium text-blue"
          >
            Explore all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
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

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
