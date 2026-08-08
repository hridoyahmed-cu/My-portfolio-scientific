"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/lib/site";
import { cn, withAssetVersion } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5 rounded-md"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan/70 via-indigo/60 to-purple/70 p-[1.5px] shadow-soft transition-shadow duration-300 group-hover:shadow-[0_0_14px_2px_rgba(56,189,248,0.45)]">
            <span className="relative inline-flex h-full w-full overflow-hidden rounded-full border border-background bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withAssetVersion("/avatar.png")} alt="Md. Hridoy Ahmed" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan ring-2 ring-background" />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                data-active={isActive(item.href)}
                className={cn(
                  "nav-link focus-ring rounded-md px-3 py-2 text-sm font-medium",
                  isActive(item.href)
                    ? "text-cyan"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="container grid grid-cols-2 gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "focus-ring block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-cyan/10 text-cyan"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
