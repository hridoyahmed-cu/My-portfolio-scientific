export type ResearchInterest = {
  title: string;
  icon: string; // lucide icon name, resolved in the component
  description: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
};

export type ExpertiseArea = {
  label: string;
  value: number; // 0–100 proficiency for radial charts
  icon: string;
  note: string;
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Genomics & Variant Analysis",
    icon: "Dna",
    description:
      "Interpreting disease-associated variants from PCR, Sanger sequencing, and whole-exome data.",
    accent: "blue",
  },
  {
    title: "Computational Drug Discovery",
    icon: "Pill",
    description:
      "Virtual screening, molecular docking, and dynamics simulation for lead identification.",
    accent: "cyan",
  },
  {
    title: "Immunoinformatics & Vaccine Design",
    icon: "Syringe",
    description:
      "Epitope prediction and multi-epitope vaccine construction against viral targets.",
    accent: "emerald",
  },
  {
    title: "Structural & Systems Biology",
    icon: "Atom",
    description:
      "Protein modelling, binding-free-energy analysis, and network-level interpretation.",
    accent: "gold",
  },
  {
    title: "Molecular Biology (Wet Lab)",
    icon: "FlaskConical",
    description:
      "DNA and RNA work, qPCR, electrophoresis, and sequencing from bench to chromatogram.",
    accent: "blue",
  },
  {
    title: "Cancer Biology",
    icon: "Microscope",
    description:
      "GWAS-based annotation and target screening for cancer-associated loci and proteins.",
    accent: "cyan",
  },
  {
    title: "Bioinformatics Pipelines",
    icon: "Network",
    description:
      "Reproducible NGS workflows for quality control, alignment, and variant calling.",
    accent: "emerald",
  },
  {
    title: "Precision Medicine",
    icon: "HeartPulse",
    description:
      "Linking population-level genetic variation to individual disease risk and therapy.",
    accent: "gold",
  },
  {
    title: "Antimicrobial Resistance & Genomic Epidemiology",
    icon: "ShieldCheck",
    description:
      "Bacterial whole-genome surveillance, tracking resistance across clones, plasmids, and regions.",
    accent: "emerald",
  },
];

/** Used by the radial expertise charts on the homepage. */
export const expertiseAreas: ExpertiseArea[] = [
  {
    label: "Wet-Lab Skills",
    value: 88,
    icon: "FlaskConical",
    note: "PCR/qPCR, Sanger sequencing, electrophoresis, extraction, assays.",
  },
  {
    label: "Computational Biology",
    value: 92,
    icon: "Cpu",
    note: "Docking, MD simulation, virtual screening, ADMET, DFT.",
  },
  {
    label: "Data Analysis",
    value: 85,
    icon: "BarChart3",
    note: "R, Python, NGS variant analysis, statistics, visualisation.",
  },
  {
    label: "Scientific Writing",
    value: 90,
    icon: "PenLine",
    note: "Two first-author Q1 papers and ongoing manuscripts.",
  },
  {
    label: "Teaching & Mentorship",
    value: 95,
    icon: "GraduationCap",
    note: "3,000+ learners trained through BioPC across 25 programmes.",
  },
];
