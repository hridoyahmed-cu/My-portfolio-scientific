import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { writingThemes } from "@/data/blog";
import { SectionCta } from "@/components/ui/SectionCta";

export function FeaturedArticles() {
  return (
    <section id="writing" className="container scroll-mt-24 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Featured Articles"
          title="Writing & science communication"
          description="Beyond the journals, I write to make bioinformatics approachable and to guide students into research."
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {writingThemes.map((theme, i) => (
          <Reveal key={theme.title} delay={(i % 3) * 0.07}>
            <a
              href={theme.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface surface-hover group flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon name={theme.icon} className="h-5 w-5" aria-hidden />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
              </div>
              <span className="mt-4 font-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {theme.tag}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
      <SectionCta
        href="/blog"
        label="Visit the blog"
        secondaryHref="/resources"
        secondaryLabel="Browse resources"
      />

    </section>
  );
}
