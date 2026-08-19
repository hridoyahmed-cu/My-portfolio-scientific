import type { Metadata } from "next";
import { Mic, Radio, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { presentations } from "@/data/presentations";
import { biopc } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Media & Outreach",
  alternates: { canonical: "/media/" },
  description:
    "Invited talks, science outreach, and public engagement by Md. Hridoy Ahmed.",
};

export default function MediaPage() {
  const talks = presentations.filter((p) => p.kind === "Oral");

  return (
    <>
      <PageHeader
        eyebrow="Media & Outreach"
        title="Talks, Engagement & Outreach"
        description="Invited presentations and public engagement in science, alongside community training that has reached a wide audience."
      />

      <section className="container py-16">
        {/* Outreach stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mic, value: `${talks.length}`, label: "Invited & contributed talks" },
            { icon: Users, value: "3,000+", label: "Learners reached through BioPC" },
            { icon: Radio, value: "2", label: "National olympiads organised" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="surface flex items-center gap-4 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured talks */}
        <h2 className="heading-display mt-14 text-2xl">Featured talks</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {talks.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.06}>
              <article className="surface surface-hover h-full p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
                  <Mic className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                  {t.title}
                </h3>
                <p className="mt-2 font-plex text-sm font-medium text-cyan">
                  {t.venue}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Outreach note */}
        <Reveal className="mt-14">
          <div className="surface p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Community & public engagement
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {biopc.summary}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For interviews, speaking invitations, or media enquiries, the best
              place to start is a direct message on any of these platforms.
            </p>
            <SocialLinks className="mt-5" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
