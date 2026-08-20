# Site Restructure Plan — Single-Field, Wet-Lab-Directed

> **Status: Phases 1–4 implemented (20 Aug 2026).** Data layer, navigation, homepage,
> pages, and the primary-data figures are done; the build passes and exports 19 routes.
> Remaining items are yours to decide — see §13. The open decision is the testimonials (§1).

**Goal:** make one research identity legible in 10 seconds to a professor scanning the site,
with wet-lab work in front. **Nothing is deleted** — every existing item is relocated,
re-labelled, or re-tiered.

---

## 1. Diagnosis — why it reads as unfocused

| # | Problem | Evidence in the repo |
|---|---------|----------------------|
| 1 | **No single field claim.** Four different self-descriptions compete. | `lib/site.ts` role = "Researcher · Molecular Biologist · Computational Biology"; tagline names genomics + drug discovery + immunoinformatics; `profile.ts` intro names "variant interpretation, wet-lab molecular biology, and computer-aided drug and vaccine discovery"; `projects.ts` statement claims "five connected domains". |
| 2 | **Nine co-equal "research interests."** Nine peers = no focus. | `research.ts` → Genomics, Drug Discovery, Immunoinformatics, Structural Biology, Wet Lab, Cancer Biology, Pipelines, Precision Medicine, AMR. |
| 3 | **Wet lab is ranked last and framed as training.** | `projects.ts` domain #5 is literally `"Wet-Lab Research & Internships"` and holds only internships/undergrad work. `research.ts` lists Wet Lab as interest 5 of 9. |
| 4 | **Self-scored as a better computationalist than bench scientist.** | `expertiseAreas`: Wet-Lab 88 vs Computational Biology 92. |
| 5 | **The publication record contradicts the wet-lab claim.** All 4 published papers are dry-lab (docking, immunoinformatics, GWAS annotation, review). The three genuinely bench-driven studies (ADPKD, PCOS, ESBL) are invisible on `/publications`. | `publications.ts` vs `projects.ts` in-preparation entries. |
| 6 | **Flat 13-destination nav, no hierarchy.** Gallery / Awards / Resources sit at the same visual weight as Research. | `nav.ts` — 12 items + Media in footer. |
| 7 | **Percentage skill dials read as unserious.** No academic CV says "Scientific Writing: 90%". | `RadialSkill` on `/research` and homepage. |
| 8 | **Off-field content in the top nav.** `/resources` contains IELTS prep, free courses, SOP/CV advice, AI chatbots, "Explore at Least Once in a Lifetime" (NASA Eyes, Foldit, Zooniverse). | `resources.ts` — 6 of 10 categories are not research tools. |
| 9 | **177 uncategorised personal photos**, generic alt text, promoted to the homepage. Strongest "not a scientist's site" signal. | `gallery.ts`, `GalleryHighlights.tsx`. |
| 10 | **Business pitches filed with scientific talks.** Hult Prize biomass, sanitary-napkin delivery startup, "Managing Diabetes" awareness poster sit beside conference papers. | `presentations.ts`. |
| 11 | **No canonical home for anything.** Research/expertise/experience repeat across Home, `/about`, `/research`. Oral talks repeat on `/conferences` and `/media`. CHIKV and Mpox each appear as both a project and a paper. | `page.tsx`, `about/page.tsx`, `research/page.tsx`, `media/page.tsx`. |
| 12 | **Blog points to `lifehackerblog.home.blog`.** Domain name undercuts the academic frame. | `site.ts` socials.blog. |

### The one thing to fix before anything else

`testimonials.ts` holds three long endorsement quotes attributed to **real, named, findable
people** (a named PI, a named collaborator, a named trainee). They carry `placeholder: true`
and render live with only a small "Sample" chip. A professor who knows any of these people
may read them as genuine. This is the single item I would **not** merely relocate — either
replace with real, permission-granted quotes or take the section down until you have them.

---

## 2. The single field

Pick one and repeat it everywhere, verbatim:

> **Human molecular genetics of complex disease — variant discovery at the bench,
> interpretation at the terminal.**

**Field:** Human Disease Genetics / Clinical Variant Genomics.
**Method stack:** molecular biology (primary) → sequencing → variant interpretation → structural follow-up.
**Computation is a method, not a second identity.**

This one decision does the heavy lifting: docking, immunoinformatics, vaccine design and the
molecular-pharming review stop being *parallel research areas* and become *documented prior
work and methodological range that led here*. Nothing is lost; the lineage becomes the story.

---

## 3. Three-tier content model

Every existing item lands in exactly one tier. Tier determines nav prominence.

**Tier 1 — Core research (the field).** Always first, always visible.
- MMP1/3/9 variants in periodontitis + diabetes (M.Sc. thesis — PCR, Sanger, gels)
- PCOS: Sanger genotyping of 300 cases / 300 controls + WES
- ADPKD: 9-gene targeted panel, 37 patients
- ESBL *E. coli*: isolate work + whole-genome surveillance
- FGPL research associate + thesis-researcher roles
- Bench technique inventory; Sanger sequencing certification
- Breast cancer risk-variant paper (published, genomics-adjacent — bridges the two tiers)

**Tier 2 — Methods and prior work.** Present, credited, clearly framed as earlier/supporting.
- CHIKV RdRp structure-based drug design (Q1)
- Mpox multi-epitope vaccine (Q1)
- *C. trachomatis* / *S. pyogenes* vaccine design
- P53 nanophytocompound screening + MD
- Molecular pharming review (Wiley)
- WES pipeline build; GWAS annotation workflow
- Computational toolbox (docking, MD, IEDB, GROMACS…)

**Tier 3 — Service, training, personal.** Real credit, lower placement.
- BioPC (3,000+ learners, 25 programmes, olympiads)
- Awards & honours
- Gallery
- Student resources (IELTS, scholarships, SOP/CV, AI tools, "explore once")
- Blog / science communication
- Business & innovation competitions (Hult Prize, Startup Chattogram)

---

## 4. New information architecture

Collapse 13 flat destinations into 6 top-level items with grouped children.

```
Home
Research            ← Tier 1 lands here
  ├ Research Programme      (3 themes, wet-lab first)
  ├ Laboratory Techniques   (NEW — the wet-lab evidence page)
  └ Computational Methods   (Tier 2, framed as method + prior work)
Publications
  ├ Published               (4 papers)
  ├ In Preparation          (NEW — the 3 bench manuscripts, promoted here)
  └ Presentations           (scientific only)
CV
  ├ About & Academic CV
  ├ Education & Experience
  └ Awards & Honours
Teaching & Outreach
  ├ BioPC
  ├ Talks & Media
  ├ For Students            (IELTS, scholarships, SOP/CV, AI tools, explore-once)
  ├ Writing                 (blog)
  └ Gallery
Contact
```

`/research`, `/publications`, `/projects`, `/conferences`, `/awards`, `/teaching`, `/blog`,
`/gallery`, `/resources`, `/media`, `/about` all keep working — they become children or
sections, not top-level peers. Add redirects only where you merge a route.

---

## 5. Homepage — new section order

Current: Hero → About → ResearchInterests → Expertise → Publications → Metrics → Projects →
Timeline → Awards → Teaching → Articles → Testimonials → Gallery → Contact (14 sections).

Proposed:

1. **Hero** — one field line + one method line. Drop the multi-clause tagline.
2. **Research Programme** — 3 themes (see §6), wet-lab framing in the first sentence.
3. **Work at the bench right now** — the 3 in-preparation manuscripts with sample counts
   (37 ADPKD patients / 300+300 PCOS / 38 ESBL isolates). *This is the section that proves
   the wet-lab claim; it currently does not exist on the homepage.*
4. **Publications** — 4 published, newest first.
5. **Laboratory techniques** — plain technique list, no percentages, wet-lab block first.
6. **Timeline**.
7. **Teaching & BioPC** — condensed to one band.
8. **Contact**.

Moved off the homepage (kept on their own pages): Awards preview, Featured articles,
Gallery highlights, Metrics counters, Testimonials. Homepage goes 14 sections → 8.

---

## 6. Nine interests → three themes + a method list

Rewrite `research.ts` as:

**Theme 1 — Genetic basis of complex disease** *(wet lab)*
Absorbs: Genomics & Variant Analysis, Precision Medicine, Cancer Biology.
Carries: MMP/periodontitis-diabetes, PCOS, ADPKD, CKD/CVD variant work.

**Theme 2 — Clinical variant discovery & interpretation** *(wet lab → sequencing → annotation)*
Absorbs: Bioinformatics Pipelines, parts of Genomics.
Carries: PCR/qPCR → Sanger → targeted panel → WES → GATK/ClinVar/gnomAD.

**Theme 3 — Genomic epidemiology of antimicrobial resistance** *(wet lab → WGS)*
Absorbs: AMR & Genomic Epidemiology.
Carries: ESBL *E. coli*, MLST, core-genome phylogeny, plasmid mobility.

**Methods I bring** — a flat capability list, not a research area:
structural modelling, docking, MD simulation, immunoinformatics, DFT/ADMET, network analysis.
This is where Computational Drug Discovery, Immunoinformatics & Vaccine Design, and
Structural & Systems Biology go. Still fully described — just as tools, not as identities.

---

## 7. Projects — re-domain and re-sort

Replace the five domains in `projects.ts`:

| Old | New | Contents |
|-----|-----|----------|
| Genomics & Variant Analysis | **Human Disease Genetics** `bench` | MMP, PCOS, ADPKD |
| Microbial Genomics & AMR | **Genomic Epidemiology & AMR** `bench` | ESBL *E. coli* |
| — | **Genome Annotation & Pipelines** | WES pipeline, breast cancer GWAS |
| Computational Drug Discovery | **Structure-Based Therapeutic Design** | CHIKV, P53, lead optimisation |
| Immunoinformatics & Vaccine Design | *(unchanged)* | Mpox, *C. trachomatis*, *S. pyogenes* |
| Wet-Lab Research & Internships | **Early Research & Training** → move to CV | NIB training, undergrad CHIKV, nanophyto extraction |

Mechanics:
- Add `bench: boolean` to the `Project` type.
- Default sort: `bench` projects first, then by status (`Ongoing` → `In preparation` → `Published`).
- Render a **"Bench"** badge on `bench` projects so wet-lab work is visually marked in the grid.
- Rewrite `projectSummary.statement` — drop "five connected domains", state the one field.
- Move `"Wet-Lab Research & Internships"` out of the domain filter; those three entries become
  CV experience entries (they *are* internships, and filing them as "wet-lab research" is what
  makes wet lab look like a training category rather than your core method).

---

## 8. Publications — close the credibility gap

The single most damaging mismatch: you claim wet lab, and every published paper is dry lab.
Fix it by making the bench manuscripts visible, not by hiding the computational ones.

- Add a **"Manuscripts in preparation"** block to `/publications`, above or beside Published,
  carrying the ADPKD / PCOS / ESBL studies with cohort sizes, methods, and status.
  Label clearly as *in preparation* — this is normal and expected on academic sites.
- Reconcile the counts: `profile.ts` biography says "three first-author articles";
  `metrics.ts` says 4 publications; the 2026 CSO paper lists you last-author/corresponding.
  State authorship position explicitly per paper (first / corresponding / co-author).
- On each published paper, add a one-line "how this connects" note tying it to the current
  programme — e.g. the breast cancer paper as regulatory annotation of risk variants, which is
  the same interpretive skill applied to ADPKD and PCOS.

---

## 9. Skills & expertise — remove the percentages

- Delete the 88/92/85/90/95 radial dials. Replace with a **technique inventory** grouped by
  method class, **wet-lab block first** (`skills.ts` already has this structure and already
  puts Wet-Lab first — just stop rendering the dials on top of it).
- Add per-technique context where you have it: *"Sanger sequencing — sample prep through
  chromatogram interpretation; ~N samples across thesis and FGPL cohorts."* Numbers beat scores.
- Keep certifications where they are; move the Sanger Sequencing Training certificate up to
  first in the list (it is your most field-relevant credential).

---

## 10. NEW page: Laboratory Techniques

This is the highest-value addition on the list and currently has no equivalent anywhere.
A wet-lab claim is only credible with wet-lab evidence.

Contents:
- Techniques with real parameters — extraction method and yields, PCR conditions, primer
  design approach, gel systems, qPCR chemistry, sequencing platform.
- **Your own figures**: a gel image, a chromatogram trace, a QC plot. You already have 177
  photos in `/public/gallery` — pull the bench images out and caption them properly here.
- Instrumentation you have personally operated, by name.
- Sample throughput per project.

Route: `/research/techniques`. Link it from the hero and from every `bench` project card.

---

## 11. Where the Tier 3 content goes (nothing lost)

| Item | Now | Goes to |
|------|-----|---------|
| Awards (6) | Top-level `/awards` + homepage + `/about` | `CV → Awards & Honours`, single canonical page |
| Gallery (177) | Top-level + homepage | `Teaching & Outreach → Gallery`; add `category` field: **Lab & Bench** / Conferences / Teaching & BioPC / Campus & Personal; lab images first; write real captions replacing "academic, research, and community moments (N)" |
| Resources — molecular bio, bioinformatics, drug design, vaccine design, HT analysis | `/resources` | `Research → Toolbox` (on-field, keep near research) |
| Resources — IELTS, free courses, PhD/SOP/CV, AI tools, explore-once | `/resources` | `Teaching & Outreach → For Students` (fully kept, just off the research spine) |
| Blog (3 themes → external) | Top-level `/blog` | `Teaching & Outreach → Writing`; consider a custom domain or a subpath, since `lifehackerblog.home.blog` undercuts the frame |
| Hult Prize, Startup Chattogram | `/conferences` with scientific talks | `CV → Leadership & Innovation` |
| "Managing Diabetes" awareness poster | `/conferences` posters | `Teaching & Outreach → Public engagement` |
| `/media` oral talks | Duplicates `/conferences` | Merge into `Publications → Presentations`; `/media` becomes outreach only |
| Metrics counters (6) | One homepage row mixing 3,000 learners with 4 papers | Split: research record on `/publications`, outreach numbers on the BioPC page. Never in the same row. |
| Testimonials | Homepage, live, "Sample" chip | Real quotes with permission, or take down — see §1 |

---

## 12. Copy and metadata to rewrite

- `lib/site.ts` → `role`: single field. `tagline`: one sentence, wet-lab first. `keywords`:
  drop the ones that pull toward other fields (vaccine design, drug discovery) or demote them
  below the genetics terms.
- `profile.ts` `intro.headline` / `intro.lede`: lead with the bench.
- `profile.ts` `biography`: paragraph 2 currently lists MMP + CHIKV + Mpox as equal-weight
  parallel work. Restructure as programme (bench genetics) → methods acquired (computational)
  → current collaborations. Same facts, ordered as a line of development.
- `mission.goals`: currently "molecular medicine, computational biology, or precision genomics"
  — three fields. Name one.
- Per-page `metadata.description`: every one should contain the same field phrase.

---

## 13. Order of work

**Phase 1 — decisions (no code)** — DONE, except where noted
1. ~~Fix the field sentence.~~ Written once in `src/lib/site.ts` as `researchField`.
2. **OPEN — needs your decision.** Testimonials are no longer rendered anywhere
   (removed from the homepage); `src/data/testimonials.ts` is untouched. Restore the
   section only with real, permission-granted quotes.
3. **NEEDS YOUR CHECK.** Authorship is now stated on every paper and manuscript.
   The three in-preparation manuscripts are marked `Co-author` in
   `src/data/publications.ts` based on the biography wording — correct these if you
   are first author on any of them.

**Phase 2 — data layer** — DONE
4. ~~`research.ts`: 9 interests → 3 themes + methods list.~~ Plus `techniqueInventory`.
5. ~~`projects.ts`: re-domain, add `bench`, re-sort, rewrite summary.~~ Plus `cohort`.
6. ~~`publications.ts`: add in-preparation entries.~~ Plus `authorRole` and `connection`.
7. ~~`site.ts` + `profile.ts`: copy rewrite.~~
8. ~~`nav.ts`: new 6-item structure.~~ Plus `footerGroups`.
9. ~~`resources.ts` + `gallery.ts` + `presentations.ts`: add grouping fields.~~

**Phase 3 — pages** — DONE
10. ~~Homepage: 14 sections → 8, new order.~~
11. ~~Navbar: grouped nav with dropdowns.~~ Footer grouped to match.
12. ~~`/publications`: in-preparation block.~~ Research metrics moved here.
13. ~~Retire the radial dials; render the technique inventory.~~
14. ~~New `/research/techniques` page.~~
15. Also done: `/conferences` split by track, `/resources` split by tier,
    `/about` gained a Leadership & Innovation block, `/projects` gained a
    "Bench-led" filter and bench badges, outreach metrics moved to `/teaching`.

**Phase 4 — primary data figures** — DONE
16. ~~Bench figures.~~ Three figures now lead `/research/techniques` and appear as a
    card strip on the homepage:
    - **Figure 1** — the agarose gel from the MMP3 amplification (986 bp, 3 controls +
      12 patients), copied from the thesis working folder.
    - **Figure 2** — Sanger electropherogram rendered directly from the raw `.ab1`
      record of sample P36, showing a heterozygous C/T call (45% C / 44% T, IUPAC Y)
      with flanking bases at Q58 and Q46.
    - **Figure 3** — per-base Phred quality across all 18 MMP3 reads, with the
      12th–88th percentile band; Q30 plateau from base 32 to 708.

    Figures 2 and 3 are generated by `scripts/make-lab-figures.py` (pure-stdlib ABIF
    reader in `scripts/abif.py`) straight from the `.ab1` files — no synthetic data.
    Re-run the script to regenerate if the source reads change.
17. ~~Gallery captions.~~ Ten research photographs are now tagged and captioned:
    seven `Lab & Bench` (qPCR at the QuantStudio, the SeqStudio genetic analyser,
    PCR setup, centrifugation, bench sample handling, an instrument run, and the
    FGPL group), plus a conference talk, a training workshop, and the department.
    These feed both the homepage "Glimpse of the Gallery" strip and the
    "From the laboratory" section on `/research/techniques`.
    The remaining ~166 photographs are still untagged and default to
    `Campus & Personal`; tag more as you like and they sort forward automatically.
18. **Real endorsements**, if you pursue them — see item 2.
19. **PCR conditions and sample throughput** for the techniques page, to replace the
    current technique lists with parameter-level detail.

---

## 14. The 10-second test

After this, a professor landing on the homepage should be able to answer, without scrolling
past the fold and a half:

- **What field?** Human molecular genetics of complex disease.
- **Bench or desk?** Bench — PCR, Sanger, panel and exome sequencing on named cohorts.
- **What is being worked on now?** ADPKD variant spectrum, PCOS common + rare variants,
  ESBL *E. coli* surveillance.
- **What is published?** Four papers, two Q1, authorship stated.
- **Does the computational work fit?** Yes — it is how the variants get interpreted.

None of that is true of the current homepage. All of it is achievable without removing a
single piece of content.
