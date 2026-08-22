import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/icon";
import { education, researchExperience } from "@/data/profile";
import { metrics } from "@/data/metrics";
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
        Founder and chief instructor of <B>BioPC</B>, one of the largest bioinformatics training communities in Bangladesh -{" "}
        <B>3,000+ learners</B>, <B>25 training programmes</B>, and{" "}
        <B>2 national olympiads</B>.
      </>
    ),
  },
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

          {/* Headline figures - same card treatment as the Education and
              Research-position panels opposite, so the two columns read as one
              grid rather than prose beside boxes. Numbers count up on scroll. */}
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            {quickStats.map((s, i) => (
              <Reveal as="div" key={s.label} delay={0.15 + i * 0.16} className="h-full">
                <div className="surface surface-hover group h-full p-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-indigo/15 ring-1 ring-cyan/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon
                      name={s.icon}
                      className="h-3.5 w-3.5 text-cyan transition-colors duration-500 group-hover:text-indigo"
                      aria-hidden
                    />
                  </span>
                  <p className="text-gradient mt-2.5 font-display text-2xl font-bold leading-none">
                    <Counter value={s.value} suffix={s.suffix ?? ""} />
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                </div>
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
