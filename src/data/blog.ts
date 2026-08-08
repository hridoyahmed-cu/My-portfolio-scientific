import { siteConfig } from "@/lib/site";

export type WritingTheme = {
  title: string;
  description: string;
  tag: string;
  icon: string;
  url: string;
};

/**
 * The blog currently lives on an external platform. These entries describe the
 * themes of that writing and link out to it. To publish posts directly on this
 * site, add MDX files under src/app/blog (see README) and replace these cards.
 */
export const blogUrl = siteConfig.socials.blog;

export const writingThemes: WritingTheme[] = [
  {
    title: "Bioinformatics, Explained Simply",
    description:
      "Walkthroughs of the tools and workflows behind drug discovery, docking, and sequence analysis, written for students starting out.",
    tag: "Tutorials",
    icon: "Terminal",
    url: blogUrl,
  },
  {
    title: "Research Career Guidance",
    description:
      "Practical notes on scholarships, manuscript writing, and finding a footing in academic research from a low-resource setting.",
    tag: "Guidance",
    icon: "Compass",
    url: blogUrl,
  },
  {
    title: "Notes from the Lab and the Terminal",
    description:
      "Reflections on training a thousand learners through BioPC, and on the everyday craft of careful science.",
    tag: "Reflections",
    icon: "NotebookPen",
    url: blogUrl,
  },
];
