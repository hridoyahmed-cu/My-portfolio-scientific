import Link from "next/link";
import { footerNav, navItems } from "@/data/nav";
import { siteConfig } from "@/lib/site";
import { withAssetVersion } from "@/lib/utils";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [...navItems, ...footerNav];

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 overflow-hidden rounded-full border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withAssetVersion("/avatar.png")} alt="Md. Hridoy Ahmed" width={36} height={36} className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                Md. Hridoy Ahmed
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Open to doctoral positions, research
              collaborations, and fellowship opportunities worldwide.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <h2 className="font-plex text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, Tailwind CSS, Framer Motion, and Three.js ·{" "}
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
