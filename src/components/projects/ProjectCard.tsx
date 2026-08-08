import type { Project, ProjectStatus } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const accentRing: Record<Project["accent"], string> = {
  blue: "text-blue bg-blue/10",
  cyan: "text-cyan bg-cyan/10",
  emerald: "text-emerald bg-emerald/10",
  gold: "text-gold bg-gold/10",
};

const statusAccent: Record<ProjectStatus, "blue" | "cyan" | "emerald" | "gold" | "muted"> = {
  Published: "emerald",
  Ongoing: "cyan",
  "In preparation": "gold",
  Submitted: "blue",
  Completed: "muted",
};

/* Faint computational-biology "data stream" revealed behind the card on
   hover (<5% opacity). Two copies are rendered so the scroll loops seamlessly. */
const dataStream = [
  "ATCGATCGTAGCTAGCATCG",
  "01010101 11001010 0110",
  "GENOME · RNA-SEQ · VARIANT",
  "ACGTACGTACGTACGTACGT",
  "GENE EXPRESSION MATRIX",
  "CRISPR · NGS · BLAST · PDB",
];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface card-dna group relative flex h-full flex-col overflow-hidden p-6">
      {/* Decorative data stream (hover only, very faint) */}
      <div className="data-stream" aria-hidden>
        <div className="data-stream-track">
          {[...dataStream, ...dataStream].map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>

      <div className="relative z-[1] flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
              accentRing[project.accent],
            )}
          >
            <Icon name={project.icon} className="h-5 w-5" aria-hidden />
          </span>
          <Badge accent={statusAccent[project.status]}>{project.status}</Badge>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.objective}
        </p>

        <div className="mt-4">
          <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Methods
          </p>
          <ul className="mt-2 space-y-1">
            {project.methods.map((m) => (
              <li
                key={m}
                className="flex items-start gap-2 text-sm text-foreground/85"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-auto pt-4 text-sm leading-relaxed text-foreground/80">
          <span className="font-semibold text-foreground">Outcome. </span>
          {project.result}
        </p>
      </div>
    </article>
  );
}
