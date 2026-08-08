import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { navItems, footerNav } from "@/data/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems, ...footerNav].map((item) => item.href);
  const unique = Array.from(new Set(routes));
  const now = new Date();

  return unique.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "/" : `${path}/`}`,
    lastModified: now,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
