import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section
      id="endorsements"
      className="relative scroll-mt-24 border-y border-border bg-card/30 py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Endorsements"
          title="Words from supervisors, collaborators, and mentees"
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.07}>
              <figure className="surface surface-hover relative flex h-full flex-col p-6">
                {t.placeholder ? (
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gold">
                    Sample
                  </span>
                ) : null}
                <Quote className="h-7 w-7 text-cyan/50" aria-hidden />
                <blockquote className="mt-3 flex-1 text-justify text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
