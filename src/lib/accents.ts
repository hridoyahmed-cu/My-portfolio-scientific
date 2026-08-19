/**
 * Shared card-highlight system.
 *
 * Every card that carries an accent (projects, research interests, awards,
 * skills, resources) gets the same treatment the academic timeline uses: a
 * tinted ring in the accent colour plus a drop shadow of the same hue, which
 * deepens on hover. Keeping it here means one edit restyles the whole site
 * instead of a dozen near-identical maps.
 */
export type Accent = "blue" | "cyan" | "emerald" | "gold";

export const accentCard: Record<Accent, string> = {
  blue: "ring-1 ring-blue/30 shadow-[0_14px_38px_-14px_hsl(var(--blue)/0.5)] hover:ring-blue/60",
  cyan: "ring-1 ring-cyan/30 shadow-[0_14px_38px_-14px_hsl(var(--cyan)/0.5)] hover:ring-cyan/60",
  emerald:
    "ring-1 ring-emerald/30 shadow-[0_14px_38px_-14px_hsl(var(--emerald)/0.5)] hover:ring-emerald/60",
  gold: "ring-1 ring-gold/30 shadow-[0_14px_38px_-14px_hsl(var(--gold)/0.5)] hover:ring-gold/60",
};

/** Halo for the small icon/marker that sits beside an accented card. */
export const accentGlow: Record<Accent, string> = {
  blue: "shadow-[0_0_0_4px_hsl(var(--blue)/0.16),0_0_14px_2px_hsl(var(--blue)/0.5)]",
  cyan: "shadow-[0_0_0_4px_hsl(var(--cyan)/0.16),0_0_14px_2px_hsl(var(--cyan)/0.5)]",
  emerald:
    "shadow-[0_0_0_4px_hsl(var(--emerald)/0.16),0_0_14px_2px_hsl(var(--emerald)/0.5)]",
  gold: "shadow-[0_0_0_4px_hsl(var(--gold)/0.16),0_0_14px_2px_hsl(var(--gold)/0.5)]",
};

/** Narrow an arbitrary data string to a known accent, falling back to cyan. */
export function asAccent(value: string | undefined): Accent {
  return value === "blue" || value === "cyan" || value === "emerald" || value === "gold"
    ? value
    : "cyan";
}
