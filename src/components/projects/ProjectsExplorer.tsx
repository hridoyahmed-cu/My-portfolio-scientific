"use client";

import { useMemo, useState } from "react";
import { projects, projectDomains, type ProjectDomain } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Filter = ProjectDomain | "All" | "Bench-led";

/* "Bench-led" sits second so a visitor can isolate hands-on work in one click —
   the filter the research field most needs to make visible. */
const filters: Filter[] = ["All", "Bench-led", ...projectDomains];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => {
      if (filter === "All") return projects;
      if (filter === "Bench-led") return projects.filter((p) => p.bench);
      return projects.filter((p) => p.domain === filter);
    },
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "focus-ring rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              filter === f
                ? "border-navy bg-navy text-white"
                : "border-border bg-card text-muted-foreground hover:border-cyan/50 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
