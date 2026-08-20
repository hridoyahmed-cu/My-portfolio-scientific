import { Dna, FlaskConical, Microscope, Network, ShieldCheck, TestTube } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { education, researchExperience } from "@/data/profile";
import { metrics } from "@/data/metrics";
import { SectionCta } from "@/components/ui/SectionCta";

/** Concise, scannable positioning — full story lives on the /about page. */
const shortBio: string[] = [
  "I am a molecular geneticist trained in Genetic Engineering & Biotechnology at the University of Chittagong, working on the genetic basis of complex disease. My M.Sc. thesis profiled MMP-1, MMP-3 and MMP-9 variants in apical periodontitis influenced by diabetes — a study I ran end to end, from DNA extraction and PCR through Sanger sequencing to variant interpretation.",
  "At the Functional Genomics & Proteomics Laboratory I now work across three bench-led cohort studies: the first ADPKD variant spectrum reported from Bangladesh, a combined Sanger and exome study of PCOS in 600 women, and genomic surveillance of ESBL-producing E. coli. My published record — two Q1 first-author papers in structural and immunoinformatics work — is where I built the computational half of that toolkit.",
];

/** Field terms only. Method terms live in the research section, not here. */
const keywords = [
  { label: "Human Disease Genetics", icon: Dna },
  { label: "Variant Interpretation", icon: Microscope },
  { label: "Molecular Biology", icon: FlaskConical },
  { label: "Sanger & Exome Sequencing", icon: TestTube },
  { label: "Genomic Epidemiology", icon: ShieldCheck },
  { label: "NGS Pipelines", icon: Network },
];

/** Four headline figures, pulled from the Metrics section's single source of truth. */
const quickStats = [
  "Peer-reviewed publications",
  "Manuscripts in preparation",
  "Research projects",
  "Learners mentored",
].flatMap((label) => {
  const m = metrics.find((x) => x.label === label);
  return m ? [m] : [];
});

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="About"
        title="A molecular geneticist, bench first"
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
                    className="border-l-[3px] border-cyan/60 pl-4"
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
      <SectionCta href="/about" label="Read the full biography" />

    </section>
  );
}
