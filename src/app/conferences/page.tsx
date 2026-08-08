import type { Metadata } from "next";
import { Mic, Lightbulb, Image as ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { presentations, presentationKinds, type PresentationKind } from "@/data/presentations";

export const metadata: Metadata = {
  title: "Conferences & Presentations",
  alternates: { canonical: "/conferences/" },
  description:
    "Oral presentations, poster sessions, and innovation competitions across national and international conferences.",
};

const kindMeta: Record<
  PresentationKind,
  { icon: typeof Mic; blurb: string }
> = {
  Oral: { icon: Mic, blurb: "Invited and contributed talks at scientific conferences." },
  "Business & Innovation": {
    icon: Lightbulb,
    blurb: "Pitches and proposals at entrepreneurship and innovation contests.",
  },
  Poster: { icon: ImageIcon, blurb: "Poster sessions and scientific competitions." },
};

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conferences"
        title="Presentations & Competitions"
        description="A record of oral presentations, poster sessions, and innovation competitions at national and international venues."
      />

      <section className="container space-y-16 py-16">
        {presentationKinds.map((kind) => {
          const items = presentations.filter((p) => p.kind === kind);
          if (!items.length) return null;
          const Meta = kindMeta[kind];
          return (
            <div key={kind}>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <Meta.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="heading-display text-2xl">{kind} Presentations</h2>
                  <p className="text-sm text-muted-foreground">{Meta.blurb}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {items.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 2) * 0.06}>
                    <article className="surface surface-hover h-full p-6">
                      <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 font-plex text-sm font-medium text-cyan">
                        {p.venue}
                      </p>
                      {p.note ? (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {p.note}
                        </p>
                      ) : null}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
