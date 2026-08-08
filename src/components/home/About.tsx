import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Cpu,
  Dna,
  Microscope,
  Network,
  Pill,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { education, researchExperience } from "@/data/profile";
import { metrics } from "@/data/metrics";

/** Concise, scannable positioning — full story lives on the /about page. */
const shortBio: string[] = [
  "I am a Molecular and Computational Biology researcher with training in Genetic Engineering & Biotechnology from the University of Chittagong. My work integrates laboratory genetics, bioinformatics, structure-based drug discovery, immunoinformatics, and microbiome research to uncover the genetic drivers of complex diseases and accelerate therapeutic development. As a first-author researcher and founder of BioPC, I am committed to advancing both scientific discovery and accessible research education. My current focus is precision genomics, disease-associated variants, and computational approaches to molecular medicine",
];

const keywords = [
  { label: "Bioinformatics", icon: Network },
  { label: "Drug Discovery", icon: Pill },
  { label: "Microbiome", icon: Microscope },
  { label: "Computational Biology", icon: Cpu },
  { label: "AI in Life Sciences", icon: Atom },
  { label: "Research Communication", icon: Dna },
];

/** Four headline figures, pulled from the Metrics section's single source of truth. */
const quickStats = [
  "First-author publications",
  "Research projects",
  "Learners mentored",
  "Training programmes led",
].flatMap((label) => {
  const m = metrics.find((x) => x.label === label);
  return m ? [m] : [];
});

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="About"
        title="A researcher between the bench and the algorithm"
        align="center"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="prose-academic space-y-4">
            {shortBio.map((p) => (
              <Reveal as="div" key={p.slice(0, 24)}>
                <p className="text-justify">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Animated keyword badges */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {keywords.map((kw, i) => (
              <Reveal as="span" key={kw.label} delay={i * 0.06}>
                <span className="research-tag group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/85">
                  <kw.icon className="h-3.5 w-3.5 text-cyan transition-colors group-hover:text-indigo" aria-hidden />
                  {kw.label}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="link-underline mt-8 inline-flex items-center gap-1.5 font-medium text-blue"
            >
              Read the full biography
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Quick stats — count up on scroll, staggered into view */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8">
            {quickStats.map((s, i) => (
              <Reveal as="div" key={s.label} delay={0.15 + i * 0.08}>
                <p className="font-display text-3xl font-bold text-foreground">
                  <Counter value={s.value} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education + experience snapshot */}
        <div className="space-y-6">
          <Reveal>
            <div className="surface surface-hover p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Education
              </h3>
              <ul className="mt-4 space-y-5">
                {education.map((edu) => (
                  <li
                    key={edu.degree}
                    className="border-l-2 border-cyan/40 pl-4"
                  >
                    <p className="font-plex text-xs font-medium text-cyan">
                      {edu.period}
                    </p>
                    <p className="mt-0.5 font-semibold text-foreground">
                      {edu.degree} — {edu.field}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {edu.result}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface surface-hover p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Research positions
              </h3>
              <ul className="mt-4 space-y-4">
                {researchExperience.map((exp, i) => (
                  <li key={`${exp.organisation}-${i}`} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {exp.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.shortName ?? exp.organisation} · {exp.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
