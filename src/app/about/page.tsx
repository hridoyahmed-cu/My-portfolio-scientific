import type { Metadata } from "next";
import { Download, Mail, MapPin, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import {
  biography,
  education,
  intro,
  mission,
  researchExperience,
} from "@/data/profile";
import { skillGroups, certifications } from "@/data/skills";
import { majorHonors } from "@/data/awards";
import { presentations, innovationPresentations } from "@/data/presentations";
import { biopc } from "@/data/teaching";
import { siteConfig } from "@/lib/site";
import { withAssetVersion } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About & CV",
  alternates: { canonical: "/about/" },
  description:
    "Academic biography and full curriculum vitae of Md. Hridoy Ahmed — profile, education, research experience, skills, awards, certifications, and professional activities.",
};

const sectionNav = [
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "certifications", label: "Certifications" },
  { id: "activities", label: "Activities" },
];

function CvSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-10 first:border-t-0">
      <h2 className="heading-display text-2xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  const talks = presentations.filter((p) => p.track === "Scientific" && p.kind === "Oral");

  return (
    <>
      <PageHeader eyebrow="About" title="About & Academic CV" description={intro.lede} />

      <div className="container max-w-5xl py-12">
        {/* Profile header */}
        <Reveal>
          <div className="surface flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="relative mx-auto w-40 shrink-0 sm:mx-0">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue/30 via-cyan/20 to-emerald/30 blur-lg" aria-hidden />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withAssetVersion("/portrait.jpg")}
                alt="Portrait of Md. Hridoy Ahmed"
                width={320}
                height={400}
                className="relative aspect-[4/5] w-40 rounded-2xl border border-border object-cover shadow-soft"
              />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-2xl font-bold text-foreground">
                Md. Hridoy Ahmed
              </h1>
              <p className="mt-1 text-muted-foreground">{siteConfig.role}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-cyan" /> {siteConfig.email}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-cyan" /> {siteConfig.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-cyan" /> ORCID 0000-0003-2077-4401
                </span>
              </div>
              <a
                href={withAssetVersion("/Md-Hridoy-Ahmed-CV.pdf")}
                download
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Download className="h-4 w-4" /> Download CV (PDF)
              </a>
            </div>
          </div>
        </Reveal>

        {/* In-page nav */}
        <Reveal className="mt-6">
          <nav className="flex flex-wrap gap-2" aria-label="CV sections">
            {sectionNav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="focus-ring rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-6">
          <CvSection id="profile" title="Academic Profile">
            <div className="prose-academic max-w-none space-y-4">
              {biography.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Mission", text: mission.mission },
                { label: "Philosophy", text: mission.philosophy },
                { label: "Goals", text: mission.goals },
              ].map((pillar) => (
                <div key={pillar.label} className="surface surface-hover p-5">
                  <p className="font-plex text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection id="education" title="Education">
            <ul className="space-y-6">
              {education.map((edu) => (
                <li key={edu.degree} className="border-l-[3px] border-cyan/60 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-foreground">
                      {edu.degree} — {edu.field}
                    </p>
                    <span className="font-plex text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.institution} · {edu.result}</p>
                  <ul className="mt-2 space-y-1">
                    {edu.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection id="experience" title="Research Experience">
            <ul className="space-y-6">
              {researchExperience.map((exp, i) => (
                <li key={`${exp.organisation}-${i}`} className="border-l-[3px] border-emerald/60 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-foreground">{exp.role}, {exp.organisation}</p>
                    <span className="font-plex text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/80">{exp.summary}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection id="skills" title="Skills">
            <div className="grid gap-5 md:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.category} className="surface surface-hover p-5">
                  <div className="flex items-center gap-2">
                    <Icon name={g.icon} className="h-5 w-5 text-cyan" aria-hidden />
                    <h3 className="font-display text-base font-semibold text-foreground">{g.category}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {g.subgroups.flatMap((sg) => sg.items).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection id="awards" title="Awards & Honours">
            <ul className="grid gap-4 sm:grid-cols-2">
              {majorHonors.map((a) => (
                <li key={a.title} className="surface surface-hover flex gap-3 p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon name={a.icon} className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {a.title}{a.year ? ` (${a.year})` : ""}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection id="certifications" title="Certifications & Training">
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="border-l-[3px] border-blue/60 pl-4">
                  <p className="font-semibold text-foreground">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.provider}</p>
                  <p className="mt-1 text-sm text-foreground/80">{c.points.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection id="activities" title="Professional Activities">
            <div className="space-y-5">
              <div className="surface surface-hover p-5">
                <p className="font-semibold text-foreground">{biopc.role}, BioPC</p>
                <ul className="mt-2 space-y-1">
                  {biopc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-plex text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                  Invited & contributed talks
                </p>
                <ul className="mt-2 space-y-1.5">
                  {talks.map((t) => (
                    <li key={t.id} className="text-sm text-foreground/85">
                      <span className="font-medium text-foreground">“{t.title}”</span>{" "}
                      — {t.venue}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Innovation competitions sit on the CV rather than beside the
                  scientific conference record, where they read as unrelated. */}
              <div>
                <p className="font-plex text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                  Leadership & innovation competitions
                </p>
                <ul className="mt-2 space-y-1.5">
                  {innovationPresentations.map((t) => (
                    <li key={t.id} className="text-sm text-foreground/85">
                      <span className="font-medium text-foreground">“{t.title}”</span>{" "}
                      — {t.venue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CvSection>
        </div>
      </div>
    </>
  );
}
