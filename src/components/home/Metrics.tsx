import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/icon";
import { metrics } from "@/data/metrics";
import { siteConfig } from "@/lib/site";
import { SectionCta } from "@/components/ui/SectionCta";

export function Metrics() {
  const profiles = [
    { label: "ORCID", href: siteConfig.socials.orcid },
    { label: "ResearchGate", href: siteConfig.socials.researchgate },
    siteConfig.socials.googleScholar
      ? { label: "Google Scholar", href: siteConfig.socials.googleScholar }
      : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section
      id="metrics"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-24 text-white"
    >
      <div className="absolute inset-0 bg-grid bg-science-grid opacity-[0.12]" aria-hidden />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" aria-hidden />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-cyan">
            <span className="h-0.5 w-8 rounded-full bg-cyan" aria-hidden />
            Research Metrics
          </span>
          <h2 className="heading-display mt-3 text-3xl text-white sm:text-4xl">
            The record so far
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            Figures drawn from peer-reviewed work, research projects, and a
            community of more than three thousand trained learners.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={(i % 6) * 0.06} className="text-center">
              <Icon
                name={metric.icon}
                className="mx-auto h-6 w-6 text-cyan"
                aria-hidden
              />
              <p className="mt-3 font-display text-4xl font-bold text-white">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-1.5 text-sm leading-snug text-white/65">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {profiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-cyan hover:text-cyan"
            >
              View on {p.label}
            </a>
          ))}
        </Reveal>
        <SectionCta
          href="/publications"
          label="View the full publication record"
          onDark
        />

      </div>
    </section>
  );
}
