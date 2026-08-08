import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { biopc, programmes, teachingAreas } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching & Mentorship",
  alternates: { canonical: "/teaching/" },
  description:
    "BioPC — a national bioinformatics training community founded by Md. Hridoy Ahmed, with 1,000+ learners across 15 programmes.",
};

export default function TeachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Teaching & Mentorship"
        title={biopc.title}
        description={biopc.summary}
      />

      <section className="container py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {biopc.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 6) * 0.05}>
              <div className="surface surface-hover flex flex-col justify-center p-5 text-center">
                <p className="font-display text-2xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="heading-display text-2xl">Role & impact</h2>
            <p className="mt-2 text-sm font-medium text-cyan">{biopc.role}</p>
            <ul className="mt-5 space-y-3">
              {biopc.highlights.map((h, i) => (
                <Reveal as="li" key={h} delay={i * 0.05} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">
                    {h}
                  </span>
                </Reveal>
              ))}
            </ul>

            <h3 className="heading-display mt-10 text-xl">Teaching areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {teachingAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/85"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-display text-2xl">Programmes delivered</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {programmes.map((p, i) => (
                <Reveal key={p.title} delay={(i % 4) * 0.05}>
                  <div className="surface surface-hover h-full p-4">
                    <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                      {p.type}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {p.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
