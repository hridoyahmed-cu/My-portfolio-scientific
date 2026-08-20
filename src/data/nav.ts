export type NavItem = { label: string; href: string; anchor?: boolean };

export type NavGroup = {
  label: string;
  /** Landing route for the group - where the top-level label points. */
  href: string;
  /** Routes that count as "inside" this group for active-state highlighting. */
  match: string[];
  children?: NavItem[];
};

/**
 * Grouped navigation.
 *
 * The site previously exposed thirteen flat destinations, which gave Gallery,
 * Awards and Resources the same visual weight as Research and Publications and
 * left a visitor no way to tell what mattered. Six groups now carry the same
 * content, ordered by distance from the research field: research first,
 * evidence second, credentials third, service fourth.
 *
 * Every original route still resolves - nothing was retired, only re-tiered.
 */
export const navGroups: NavGroup[] = [
  { label: "Home", href: "/", match: ["/"] },
  {
    label: "Research",
    href: "/research",
    match: ["/research", "/projects", "/resources"],
    children: [
      { label: "Research Programme", href: "/research" },
      { label: "Laboratory Techniques", href: "/research/techniques" },
      { label: "Projects", href: "/projects" },
      { label: "Research Toolbox", href: "/resources#research-tools" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    match: ["/publications", "/conferences"],
    children: [
      { label: "Published Work", href: "/publications" },
      { label: "In Preparation", href: "/publications#in-preparation" },
      { label: "Presentations", href: "/conferences" },
    ],
  },
  {
    label: "CV",
    href: "/about",
    match: ["/about", "/awards"],
    children: [
      { label: "About & Academic CV", href: "/about" },
      { label: "Education", href: "/about#education" },
      { label: "Research Experience", href: "/about#experience" },
      { label: "Awards & Honours", href: "/awards" },
    ],
  },
  {
    label: "Teaching & Outreach",
    href: "/teaching",
    match: ["/teaching", "/media", "/blog", "/gallery"],
    children: [
      { label: "BioPC & Training", href: "/teaching" },
      { label: "Talks & Media", href: "/media" },
      { label: "Writing", href: "/blog" },
      { label: "For Students", href: "/resources#for-students" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Contact", href: "/contact", match: ["/contact"] },
];

/**
 * Flat route list - every page on the site, kept for the sitemap and footer.
 * Order here mirrors the grouping above.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Laboratory Techniques", href: "/research/techniques" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Conferences", href: "/conferences" },
  { label: "About & CV", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Teaching", href: "/teaching" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [{ label: "Media", href: "/media" }];

/** Footer grouping - mirrors the header so the two never drift apart. */
export const footerGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Research",
    items: [
      { label: "Research Programme", href: "/research" },
      { label: "Laboratory Techniques", href: "/research/techniques" },
      { label: "Projects", href: "/projects" },
      { label: "Research Toolbox", href: "/resources" },
    ],
  },
  {
    title: "Publications",
    items: [
      { label: "Published Work", href: "/publications" },
      { label: "Presentations", href: "/conferences" },
    ],
  },
  {
    title: "CV",
    items: [
      { label: "About & Academic CV", href: "/about" },
      { label: "Awards & Honours", href: "/awards" },
    ],
  },
  {
    title: "Teaching & Outreach",
    items: [
      { label: "BioPC & Training", href: "/teaching" },
      { label: "Talks & Media", href: "/media" },
      { label: "Writing", href: "/blog" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const homeSections: NavItem[] = [
  { label: "Research Programme", href: "#research", anchor: true },
  { label: "At the Bench", href: "#bench", anchor: true },
  { label: "Publications", href: "#publications", anchor: true },
  { label: "Techniques", href: "#techniques", anchor: true },
  { label: "Timeline", href: "#timeline", anchor: true },
  { label: "Teaching", href: "#teaching", anchor: true },
  { label: "Contact", href: "#contact", anchor: true },
];
