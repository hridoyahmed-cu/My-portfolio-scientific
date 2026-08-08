export type NavItem = { label: string; href: string; anchor?: boolean };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Conferences", href: "/conferences" },
  { label: "Awards", href: "/awards" },
  { label: "Teaching", href: "/teaching" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [{ label: "Media", href: "/media" }];

export const homeSections: NavItem[] = [
  { label: "About", href: "#about", anchor: true },
  { label: "Research", href: "#research", anchor: true },
  { label: "Expertise", href: "#expertise", anchor: true },
  { label: "Publications", href: "#publications", anchor: true },
  { label: "Metrics", href: "#metrics", anchor: true },
  { label: "Projects", href: "#projects", anchor: true },
  { label: "Timeline", href: "#timeline", anchor: true },
  { label: "Awards", href: "#awards", anchor: true },
  { label: "Gallery", href: "#gallery", anchor: true },
  { label: "Contact", href: "#contact", anchor: true },
];
