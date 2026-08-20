import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { labFigures, labFiguresNote, type LabFigure } from "@/data/labFigures";
import { withBasePath } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * The wet-lab evidence block.
 *
 * A bench claim is only as good as the data behind it, so these are presented
 * as proper figures — numbered, captioned, with the method stated and the
 * quantitative read-outs called out — rather than as decorative images.
 */
function Figure({ figure, index }: { figure: LabFigure; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.06}>
      <figure
        id={figure.id}
        className="surface scroll-mt-24 overflow-hidden p-0"
      >
        <div className="border-b border-border bg-muted/40 px-6 py-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge accent="emerald">
              <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
              {figure.label}
            </Badge>
            <h3 className="font-display text-base font-semibold text-foreground">
              {figure.title}
            </h3>
          </div>
        </div>

        {/* The figures are drawn on transparent/neutral grounds, so a light
            plate keeps them legible in either theme.

            Wide figures scroll rather than shrink: squeezed into a 375px
            viewport the 1180px-wide renderings would drop their base letters
            to under 4px. A minimum width keeps them readable and confines the
            horizontal scroll to this container. */}
        <div
          className={cn(
            "bg-[#fbfaf8] p-4 dark:bg-[#0f1729]",
            figure.wide && "overflow-x-auto",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(figure.src)}
            alt={figure.alt}
            loading="lazy"
            className={cn(
              "mx-auto w-full rounded-lg",
              figure.wide ? "min-w-[720px]" : "max-w-2xl",
            )}
          />
        </div>

        <figcaption className="px-6 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-4">
            {figure.readouts.map((r) => (
              <div key={r.label}>
                <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {r.label}
                </p>
                <p className="mt-0.5 font-display text-sm font-semibold text-foreground">
                  {r.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-foreground/85">
            {figure.caption}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold">Method. </span>
            {figure.method}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function LabFigures() {
  return (
    <div>
      <div className="space-y-8">
        {labFigures.map((f, i) => (
          <Figure key={f.id} figure={f} index={i} />
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        {labFiguresNote}
      </p>
    </div>
  );
}
