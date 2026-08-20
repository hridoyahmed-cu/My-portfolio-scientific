import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionCta } from "@/components/ui/SectionCta";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icon";
import { TechniqueInventory } from "@/components/research/TechniqueInventory";
import { benchTechniques } from "@/data/research";
import { labFigures } from "@/data/labFigures";
import { withBasePath } from "@/lib/utils";

/**
 * Homepage technique band - primary data first, then the bench blocks.
 *
 * The figure strip is the point of this section: a visitor sees a gel, a
 * chromatogram, and a quality profile before reading any list of skills. The
 * full inventory and the full-size figures live on /research/techniques.
 */
export function Techniques() {
  return (
    <section id="techniques" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="At the Bench"
        title="The data, then the techniques"
        description="Three figures from the MMP variant study - a PCR gel, a Sanger electropherogram, and the read-quality profile behind the variant calls."
        align="center"
      />

      {/* Primary-data strip */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {labFigures.map((f, i) => (
          <Reveal key={f.id} delay={(i % 3) * 0.07}>
            <Link
              href={`/research/techniques#${f.id}`}
              className="focus-ring surface surface-hover group flex h-full flex-col overflow-hidden p-0"
            >
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
                <Badge accent="emerald">
                  <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
                  {f.label}
                </Badge>
                <Icon
                  name="ChevronRight"
                  className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 items-center bg-[#fbfaf8] p-3 dark:bg-[#0f1729]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(f.thumb)}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full rounded"
                />
              </div>

              <div className="px-4 py-4">
                <h3 className="font-display text-sm font-semibold leading-snug text-foreground">
                  {f.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {f.readouts.map((r) => (
                    <span key={r.label} className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground/90">
                        {r.value}
                      </span>{" "}
                      {r.label.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Bench technique inventory */}
      <div className="mt-16">
        <TechniqueInventory blocks={benchTechniques} />
      </div>

      <SectionCta
        href="/research/techniques"
        label="Full figures & technique inventory"
        secondaryHref="/about#skills"
        secondaryLabel="Skills on the CV"
      />
    </section>
  );
}
