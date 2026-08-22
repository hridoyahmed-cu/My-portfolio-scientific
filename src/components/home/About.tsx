import type { ReactNode } from "react";
import { Dna, FlaskConical, Microscope, Network, ShieldCheck, TestTube } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { education, researchExperience } from "@/data/profile";
import { metrics } from "@/data/metrics";
import { biopc } from "@/data/teaching";
import { SectionCta } from "@/components/ui/SectionCta";

/** Key facts carry the design system's emphasis rather than raw browser bold. */
function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

/**
 * Concise, scannable positioning - full story lives on the /about page.
 *
 * Kept to one or two sentences per paragraph, with the record itself emphasised:
 * most visitors read this block and nothing else, so the achievements have to
 * land without scrolling. Paragraphs stay justified to match the hero lede and
 * the rest of the page.
 */
const shortBio: { id: string; body: ReactNode }[] = [
  {
    id: "training",
    body: (
      <>
        Molecular geneticist trained in Genetic Engineering &amp; Biotechnology
        at the University of Chittagong - <B>2nd in my M.Sc. cohort</B>{" "}
        (<B>CGPA 3.94/4.00</B>), <B>4th in my B.Sc.</B> (<B>3.89/4.00</B>), and
        holder of a <B>National Science &amp; Technology Fellowship</B>.
      </>
    ),
  },
  {
    id: "research",
    body: (
      <>
        At the Functional Genomics &amp; Proteomics Laboratory I run{" "}
        <B>three bench-led cohort studies</B> - ADPKD, PCOS, and ESBL-producing
        E. coli - from <B>DNA extraction, PCR and Sanger sequencing</B> through{" "}
        <B>whole-exome sequencing</B> and <B>variant interpretation</B>.
      </>
    ),
  },
  {
    id: "publications",
    body: (
      <>
        <B>4 peer-reviewed papers</B> - 3 first-author, <B>2 in Q1 journals</B>,
        1 as corresponding author - with <B>3 manuscripts in preparation</B>. My
        Mpox vaccine study won <B>Best Research Paper Presenter</B> at the{" "}
        <B>4th Darwin International Conference</B>.
      </>
    ),
  },
  {
    id: "biopc",
    body: (
      <>
        Founder and chief instructor of{" "}
        {/* Bolded on the anchor itself: <B> would override the prose link colour. */}
        <a
          href={biopc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          BioPC
        </a>
        , one of the largest bioinformatics training communities in Bangladesh -{" "}
        <B>3,000+ learners</B>, <B>25 training programmes</B>, and{" "}
        <B>2 national olympiads</B>.
      </>
    ),
  },
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
              <Reveal as="div" key={p.id}>
                <p className="text-justify">{p.body}</p>
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


          {/* Quick stats - count up on scroll, staggered into view */}
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
                      {edu.degree} - {edu.field}
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
