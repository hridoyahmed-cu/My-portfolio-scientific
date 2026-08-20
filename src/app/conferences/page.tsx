import type { Metadata } from "next";
import { Mic, Lightbulb, Image as ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  presentations,
  presentationTracks,
  type PresentationKind,
  type PresentationTrack,
} from "@/data/presentations";

export const metadata: Metadata = {
  title: "Conferences & Presentations",
  alternates: { canonical: "/conferences/" },
  description:
    "Scientific oral and poster presentations at national and international conferences, listed separately from innovation competitions and public-health outreach.",
};

/**
 * Track leads the page, kind sits inside it.
 *
 * Scientific talks and posters previously shared a page with business pitches
 * and a health-awareness poster, which made the conference record read as a
 * mixed bag. Everything is still here - the scientific work is simply no
 * longer interleaved with it.
 */
const trackMeta: Record<
  PresentationTrack,
  { title: string; blurb: string }
> = {
  Scientific: {
    title: "Scientific presentations",
    blurb:
      "Oral and poster presentations of peer-reviewed and pre-publication research at academic conferences.",
  },
  Innovation: {
    title: "Innovation & entrepreneurship",
    blurb:
      "Pitches and proposals at business and innovation contests, outside the research programme.",
  },
  Outreach: {
    title: "Public engagement",
    blurb: "Public-health awareness and science communication for general audiences.",
  },
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
        description="Scientific presentations first, then innovation competitions and public engagement - each listed under its own heading."
      />

      <section className="container space-y-20 py-16">
        {presentationTracks.map((track) => {
          const trackItems = presentations.filter((p) => p.track === track);
          if (!trackItems.length) return null;
          const meta = trackMeta[track];
          const kinds = Array.from(
            new Set(trackItems.map((p) => p.kind)),
          ) as PresentationKind[];

          return (
            <div key={track}>
              <div className="border-b border-border pb-5">
                <h2 className="heading-display text-2xl">{meta.title}</h2>
                <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
                  {meta.blurb}
                </p>
              </div>

              <div className="mt-8 space-y-12">
                {kinds.map((kind) => {
                  const items = trackItems.filter((p) => p.kind === kind);
                  const Meta = kindMeta[kind];
                  return (
                    <div key={`${track}-${kind}`}>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                          <Meta.icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {kind}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {Meta.blurb}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {items.map((p, i) => (
                          <Reveal key={p.id} delay={(i % 2) * 0.06}>
                            <article className="surface surface-hover h-full p-6">
                              <h4 className="font-display text-base font-semibold leading-snug text-foreground">
                                {p.title}
                              </h4>
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
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
