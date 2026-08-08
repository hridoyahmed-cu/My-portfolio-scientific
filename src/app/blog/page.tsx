import type { Metadata } from "next";
import { ArrowUpRight, NotebookPen } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { writingThemes, blogUrl } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog/" },
  description:
    "Science writing on bioinformatics, research methods, and academic career guidance by Md. Hridoy Ahmed.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Writing & Science Communication"
        description="I write to make bioinformatics approachable and to help students find a footing in research. The full archive lives on my blog."
      />

      <section className="container py-16">
        <Reveal>
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="surface surface-hover group flex flex-col items-start justify-between gap-4 p-8 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <NotebookPen className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Read the full blog
                </h2>
                <p className="text-sm text-muted-foreground">
                  Tutorials, reflections, and career notes, updated regularly.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform group-hover:-translate-y-0.5">
              Visit blog <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {writingThemes.map((theme, i) => (
            <Reveal key={theme.title} delay={(i % 3) * 0.07}>
              <a
                href={theme.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover group flex h-full flex-col p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon name={theme.icon} className="h-5 w-5" aria-hidden />
                </span>
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

        <Reveal className="mt-10">
          <p className="rounded-xl border border-dashed border-border bg-card/40 p-5 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Publishing here directly?
            </strong>{" "}
            This site is MDX-ready. Add post files under{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-plex text-[12px]">
              src/app/blog
            </code>{" "}
            and they will render as native pages. See the README for the setup
            steps.
          </p>
        </Reveal>
      </section>
    </>
  );
}
