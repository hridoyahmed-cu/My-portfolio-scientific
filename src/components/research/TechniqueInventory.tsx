import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/Badge";
import { techniqueInventory, type TechniqueBlock } from "@/data/research";
import { cn } from "@/lib/utils";
import { accentCard, accentGlow, asAccent } from "@/lib/accents";

const accentMap: Record<string, string> = {
  blue: "text-blue bg-blue/10",
  cyan: "text-cyan bg-cyan/10",
  emerald: "text-emerald bg-emerald/10",
  gold: "text-gold bg-gold/10",
};

const kindLabel: Record<TechniqueBlock["kind"], string> = {
  bench: "Hands-on",
  sequencing: "Sequencing & analysis",
  computational: "Computational",
};

/**
 * Replaces the old percentage dials.
 *
 * Self-scored proficiency ("Scientific Writing: 90%") reads as unserious on an
 * academic site, and the previous scores ranked computational work above bench
 * work - the opposite of the actual research programme. This lists what has
 * been done, where, with the bench blocks first and marked as hands-on.
 */
export function TechniqueInventory({
  blocks = techniqueInventory,
}: {
  blocks?: TechniqueBlock[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blocks.map((block, i) => (
        <Reveal key={block.label} delay={(i % 2) * 0.06}>
          <div
            className={cn(
              "surface surface-hover flex h-full flex-col p-6 transition-all duration-300",
              accentCard[asAccent(block.accent)],
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  accentMap[block.accent],
                  accentGlow[asAccent(block.accent)],
                )}
              >
                <Icon name={block.icon} className="h-5 w-5" aria-hidden />
              </span>
              <Badge accent={block.kind === "bench" ? "emerald" : "muted"}>
                {block.kind === "bench" ? (
                  <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
                ) : null}
                {kindLabel[block.kind]}
              </Badge>
            </div>

            <h3 className="mt-4 font-display text-base font-semibold text-foreground">
              {block.label}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {block.context}
            </p>

            <ul className="mt-4 space-y-1.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85"
                >
                  <span
                    className={cn(
                      "mt-2 h-1 w-1 shrink-0 rounded-full",
                      block.kind === "bench" ? "bg-emerald" : "bg-cyan",
                    )}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
