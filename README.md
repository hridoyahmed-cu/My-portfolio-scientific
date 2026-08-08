# Md. Hridoy Ahmed — Academic Research Portfolio

A premium, research-focused portfolio website built with Next.js 15, TypeScript,
Tailwind CSS, Framer Motion, and Three.js. It is designed for PhD applications,
fellowships, scholarships, collaborations, and faculty recruitment, and it
deploys as a fully static site on GitHub Pages.

**Live preview locally:** `npm install` then `npm run dev` and open
`http://localhost:3000`.

---

## 1. Design strategy

The visual language blends Oxford and Harvard academic restraint with the clean
data aesthetic of journals such as *Nature Reviews* and *Cell Press*, a measure
of modern technology-product polish, and a single futuristic flourish in the
animated hero. The result aims to read as elegant, trustworthy, prestigious, and
unmistakably scientific.

- **Colour.** Oxford navy and deep scientific blue anchor the palette, with
  graphite ink and soft white for text and surfaces. Scientific cyan, emerald
  research green, and a subtle gold serve as restrained accents. All colours are
  defined as CSS variables in `src/app/globals.css` and adapt to light and dark
  themes.
- **Typography.** Playfair Display and Cormorant Garamond for display headings,
  Inter and Source Sans 3 for body text, and IBM Plex Sans for publication and
  metadata blocks. All five are self-hosted through `next/font`.
- **Motion.** Scroll-triggered reveals, a scrubbed timeline progress line,
  animated counters and radial skill dials, and a WebGL DNA-and-network hero.
  Every animation respects `prefers-reduced-motion`.

## 2. Information architecture

The homepage is a single, smooth-scrolling narrative; the rest of the content
lives on dedicated pages reachable from the navigation.

```
HOME (single page)
├── Hero ├── About ├── Research Interests ├── Scientific Expertise
├── Publication Highlights ├── Research Metrics ├── Current Projects
├── Timeline ├── Awards ├── Teaching ├── Featured Articles
├── Endorsements ├── Contact

PAGES
/about        full biography, mission, education, research experience
/research     interests, expertise dials, laboratory experience
/publications searchable, filterable, sortable publication database
/projects     12+ projects with domain filtering
/conferences  oral, business, and poster presentations
/awards       honours, fellowships, and competitions
/teaching     BioPC community, programmes, and mentorship
/cv           interactive CV with PDF download and print
/blog         science writing (links to the external blog, MDX-ready)
/resources    curated tools, journal finders, packages, and courses
/gallery      photographs from BioPC programmes
/media        talks, outreach, and public engagement
/contact      contact details, social profiles, and a no-backend form
```

All content from the previous Owlstown site has been migrated. The dead
`/people` link from the old site was intentionally dropped.

## 3. Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
Three.js · Lucide icons · `next/font`. Output is a static export
(`output: "export"`), so it runs on GitHub Pages with no server.

## 4. Project structure

```
src/
  app/            routes, layout, global styles, sitemap, robots, 404
  components/
    home/         homepage sections
    layout/       navbar, footer, theme toggle, social links, page header
    publications/ publication card + searchable explorer
    projects/     project card + domain explorer
    three/        DNAHero WebGL background
    ui/           reveal, headings, badge, counter, radial dial, icons
  data/           single source of truth for all content
  lib/            site config + helpers
public/           favicon, portrait placeholder, .nojekyll, og image, CV
.github/workflows deploy.yml (GitHub Pages)
```

## 5. Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at localhost:3000
npm run build    # produce the static site in ./out
```

## 6. Make it yours

Almost everything is data-driven. Edit the files in `src/data` and `src/lib`:

- **Identity, links, SEO** — `src/lib/site.ts` (name, role, email, URL,
  ORCID/ResearchGate/LinkedIn/GitHub/Scholar, keywords). Set `url` to your final
  address before deploying so SEO tags and the sitemap are correct.
- **Portrait** — replace `public/portrait.svg` with your photo. Keep the same
  filename, or update the `src` in `src/components/home/Hero.tsx`.
- **CV PDF** — drop your CV into `public/Md-Hridoy-Ahmed-CV.pdf` so the
  "Download PDF" button works. The `/cv` page also prints cleanly to PDF.
- **Content** — publications, projects, presentations, awards, skills,
  timeline, teaching, resources, blog themes, and gallery each have a file in
  `src/data`.
- **Endorsements** — `src/data/testimonials.ts` ships with clearly marked
  placeholders. Replace them with real quotes, or set the array to empty to
  hide the section.
- **Colours & fonts** — `src/app/globals.css` (CSS variables) and
  `src/app/layout.tsx` (font choices).
- **Google Scholar** — add your profile URL to `siteConfig.socials.googleScholar`
  and it will appear in the social links and metrics automatically.

## 7. Deployment to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

1. Create a repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`. The workflow builds the static site and publishes it.

The workflow detects the correct base path for you:

- **Project page** (`https://<user>.github.io/<repo>/`) — the base path is set
  to `/<repo>` automatically.
- **User/org page** (a repo named `<user>.github.io`) — served at the root.
- **Custom domain** — add a `public/CNAME` file containing your domain; the
  base path is then cleared automatically.

To build for a project page locally:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo npm run build
```

## 8. SEO & discoverability

- Per-page titles and descriptions, Open Graph, and Twitter cards.
- `schema.org/Person` JSON-LD with ORCID, affiliation, and `sameAs` profiles
  (`src/components/JsonLd.tsx`).
- Generated `sitemap.xml` and `robots.txt`.
- Replace `public/og.png` with your own 1200×630 share image if you wish.

## 9. Accessibility checklist

- Semantic landmarks and a skip-to-content link.
- Keyboard-visible focus rings on every interactive element.
- Colour contrast tuned for light and dark themes.
- `prefers-reduced-motion` disables non-essential animation, including the 3D
  hero loop.
- Descriptive labels on icon-only controls; the WebGL canvas is `aria-hidden`.

## 10. Extending the blog with MDX

The blog currently links to your external site. To publish posts here directly,
add `@next/mdx` and `@mdx-js/loader`, enable `mdx` in `pageExtensions` inside
`next.config.mjs`, and create `src/app/blog/<slug>/page.mdx` files. They will
render as native, statically exported pages.

---

Built for Md. Hridoy Ahmed. Licensed under MIT (see `LICENSE`).
