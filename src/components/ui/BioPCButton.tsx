import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { biopc } from "@/data/teaching";

type BioPCButtonProps = {
  /** Button copy. Defaults to the standard call. */
  label?: string;
  size?: "sm" | "md";
  className?: string;
};

/**
 * The single way biopc.org is linked from this site.
 *
 * BioPC is named in the About bio, the homepage Teaching section, /teaching,
 * /media and the CV activities block. Linking the word itself inside those
 * paragraphs buried the destination in prose, so every mention gets this
 * button instead - one component, one URL, one appearance everywhere.
 */
export function BioPCButton({
  label = "Visit BioPC",
  size = "md",
  className,
}: BioPCButtonProps) {
  return (
    <a
      href={biopc.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-shift focus-ring group inline-flex items-center gap-2 rounded-full bg-navy font-semibold text-white shadow-soft transition-colors duration-300 hover:bg-blue",
        size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm",
        className,
      )}
    >
      {label}
      <ExternalLink
        className={cn(
          "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
          size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4",
        )}
        aria-hidden
      />
    </a>
  );
}
