import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Consistent header band used across the multi-page routes. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/30">
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-science-grid opacity-[0.5]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl"
        aria-hidden
      />
      <div className="container relative py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-cyan" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="heading-display mt-4 text-balance text-4xl sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
