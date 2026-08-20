import { cn } from "@/lib/utils";

/**
 * Soft wave divider used in the gap between sections.
 *
 * Three crossing curves with a scatter of nodes, drawn in the brand palette at
 * low opacity so it separates without competing with the content either side.
 *
 * Sizing: the viewBox is cropped tight around the artwork (the curves and nodes
 * occupy roughly y 41-85), so the band is nearly all curve rather than mostly
 * empty air. It is drawn with `slice`, so the curves hold their proportions and
 * the dots stay circular at every width instead of flattening, and the band
 * height is tuned so the crop falls on the width at desktop - the artwork fills
 * edge to edge with no dead margin. `non-scaling-stroke` keeps the lines a
 * consistent hairline rather than thinning out as the artwork scales down.
 *
 * Spacing: the negative margins cancel the band's own height, so the divider
 * floats inside the whitespace the sections already have instead of adding a
 * fresh block of it. `relative z-10` keeps the curves painted above the
 * background of whichever section it overlaps.
 *
 * Decorative only, so the whole band is hidden from assistive technology.
 */
export function SectionDivider({
  className,
  /** Mirror the artwork, so consecutive dividers do not read as a repeat. */
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative z-10 w-full overflow-hidden",
        "h-10 lg:h-12",
        "-my-5 lg:-my-6",
        className,
      )}
    >
      <svg
        viewBox="0 32 1440 64"
        preserveAspectRatio="xMidYMid slice"
        className={cn("block h-full w-full", flip && "-scale-x-100")}
        fill="none"
      >
        {/* Faint underlay curve */}
        <path
          d="M0 60 C160 60 240 80 400 82 C560 84 640 64 820 66 C1000 68 1100 84 1260 80 C1350 78 1400 70 1440 68"
          className="stroke-muted-foreground/25"
          strokeWidth="1.1"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
        {/* Blue curve */}
        <path
          d="M0 68 C120 68 200 44 320 44 C440 44 520 74 660 72 C800 70 880 46 1020 48 C1160 50 1240 68 1440 64"
          className="stroke-blue/45"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
        {/* Emerald curve, crossing the blue one just left of centre */}
        <path
          d="M0 76 C140 76 220 74 340 70 C460 66 540 46 700 44 C860 42 940 66 1080 68 C1220 70 1300 62 1440 58"
          className="stroke-emerald/45"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />

        {/* Nodes scattered along the curves */}
        <g className="fill-blue/35">
          <circle cx="95" cy="72" r="2.4" />
          <circle cx="320" cy="45" r="3.2" />
          <circle cx="660" cy="72" r="3.6" />
          <circle cx="1020" cy="48" r="3" />
          <circle cx="1300" cy="65" r="2.8" />
        </g>
        <g className="fill-cyan/30">
          <circle cx="180" cy="58" r="2.8" />
          <circle cx="470" cy="58" r="2.2" />
          <circle cx="820" cy="52" r="2.6" />
          <circle cx="1180" cy="60" r="2.2" />
          <circle cx="1400" cy="61" r="2.6" />
        </g>
      </svg>
    </div>
  );
}
