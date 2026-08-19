import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionCtaProps = {
  href: string;
  label: string;
  /** Optional second link, for a related page the section also covers. */
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Use the inverted palette on dark-background sections. */
  onDark?: boolean;
  className?: string;
};

/**
 * The standard "continue to the full page" button that closes every homepage
 * section. Keeping it in one component means each section exits the same way,
 * in the same place, with the same styling.
 */
export function SectionCta({
  href,
  label,
  secondaryHref,
  secondaryLabel,
  onDark = false,
  className,
}: SectionCtaProps) {
  return (
    <Reveal
      className={cn(
        "mt-14 flex flex-wrap items-center justify-center gap-4",
        className,
      )}
      delay={0.08}
      y={34}
    >
      <Link
        href={href}
        className={cn(
          "btn-shift focus-ring group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold shadow-lift transition-colors duration-300",
          onDark
            ? "bg-white text-navy hover:bg-cyan hover:text-white"
            : "bg-navy text-white hover:bg-blue",
        )}
      >
        {label}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>

      {secondaryHref && secondaryLabel ? (
        <Link
          href={secondaryHref}
          className={cn(
            "focus-ring group inline-flex items-center gap-2 rounded-full border px-7 py-4 text-base font-medium transition-colors duration-300",
            onDark
              ? "border-white/25 text-white/85 hover:border-cyan hover:text-cyan"
              : "border-border text-foreground hover:border-cyan hover:text-cyan",
          )}
        >
          {secondaryLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      ) : null}
    </Reveal>
  );
}
