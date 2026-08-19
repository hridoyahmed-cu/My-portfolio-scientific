import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely (dedupes conflicting utilities). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolve a public asset path with the configured base path so links and
 * images work whether the site is served at the domain root or under a
 * /<repo> sub-path on GitHub Pages.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

/**
 * Cache-busting version for assets that get REPLACED in place under the same
 * filename (logo, portrait, CV). Browsers cache /public files for 7 days, so
 * after swapping one you must bump this number to force returning visitors to
 * fetch the new file. Bump it (→ "3", "4", …) every time you replace one of
 * those assets, then rebuild + redeploy.
 */
export const ASSET_VERSION = "4";

/**
 * Like withBasePath, but appends ?v=<ASSET_VERSION> so an in-place asset swap
 * refreshes immediately for everyone. Use for /avatar.png, /portrait.*, and
 * the CV PDF — NOT for gallery photos (those change by filename, so plain
 * withBasePath avoids re-downloading all of them whenever the version bumps).
 */
export function withAssetVersion(path: string): string {
  const url = withBasePath(path);
  return `${url}${url.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
}
