import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  accent?: "blue" | "cyan" | "emerald" | "gold" | "muted";
};

const accents: Record<NonNullable<BadgeProps["accent"]>, string> = {
  blue: "border-blue/30 bg-blue/10 text-blue",
  cyan: "border-cyan/30 bg-cyan/10 text-cyan",
  emerald: "border-emerald/30 bg-emerald/10 text-emerald",
  gold: "border-gold/40 bg-gold/10 text-gold",
  muted: "border-border bg-muted text-muted-foreground",
};

export function Badge({ children, className, accent = "muted" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        accents[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}
