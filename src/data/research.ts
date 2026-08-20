/**
 * The research programme, organised around ONE field.
 *
 * This file used to list nine co-equal "research interests", which read as nine
 * competing identities. It now carries three research themes - all bench-led -
 * plus a separate list of methods. The distinction matters: a theme is a
 * question I pursue; a method is a technique I apply to it. Docking,
 * immunoinformatics and structural modelling are methods and prior work, not
 * parallel research programmes.
 */

export type ResearchTheme = {
  id: string;
  title: string;
  icon: string; // lucide icon name, resolved in the component
  /** Wet-lab-led themes render first and carry the "Bench-led" marker. */
  bench: boolean;
  /** One-line summary, used on cards. */
  description: string;
  /** The actual research question, in plain words. */
  question: string;
  /** Where the bench work sits in this theme. */
  benchWork: string;
  /** Project ids from `@/data/projects` that belong to this theme. */
  projectIds: string[];
  accent: "blue" | "cyan" | "emerald" | "gold";
};

export type MethodCapability = {
  label: string;
  icon: string;
  description: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
};

export type TechniqueBlock = {
  label: string;
  /** Bench blocks sort first and are marked as hands-on. */
  kind: "bench" | "sequencing" | "computational";
  icon: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
  /** Short context line - where these techniques have actually been used. */
  context: string;
  items: string[];
};

/* ------------------------------------------------------------------ *
 * Research themes - three, all bench-led
 * ------------------------------------------------------------------ */

export const researchThemes: ResearchTheme[] = [
  {
    id: "disease-genetics",
    title: "Genetic Basis of Complex Disease",
    icon: "Dna",
    bench: true,
    description:
      "Finding the variants that carry risk in diabetes, kidney disease, PCOS, and periodontitis - genotyped in my own hands.",
    question:
      "Which inherited variants shape risk in common, multifactorial disease, and which of them actually change protein function?",
    benchWork:
      "DNA extraction, PCR and qPCR, gel electrophoresis, and Sanger genotyping across patient and control cohorts.",
    projectIds: ["mmp-variants", "pcos-common-rare-variants", "adpkd-panel-bangladesh"],
    accent: "blue",
  },
  {
    id: "variant-discovery",
    title: "Clinical Variant Discovery & Interpretation",
    icon: "Microscope",
    bench: true,
    description:
      "Taking a patient sample from extraction through sequencing to an annotated, clinically interpretable variant call.",
    question:
      "How do we move reliably from a clinical sample to a variant call that a clinician could act on - and how do we catch the artefacts on the way?",
    benchWork:
      "Sample preparation, targeted panel and exome library workflows, Sanger confirmation of called variants.",
    projectIds: ["adpkd-panel-bangladesh", "wes-pipeline", "breast-cancer-gwas"],
    accent: "cyan",
  },
  {
    id: "amr-epidemiology",
    title: "Genomic Epidemiology of Antimicrobial Resistance",
    icon: "ShieldCheck",
    bench: true,
    description:
      "Tracking resistance through bacterial isolates - whether it travels by clone, by plasmid, or by region.",
    question:
      "Is resistance in Bangladeshi clinical isolates structured by geography, or by the clones and plasmids that carry it?",
    benchWork:
      "Isolate culture and characterisation, DNA extraction, and sequencing library preparation ahead of whole-genome analysis.",
    projectIds: ["esbl-ecoli-genomic-epidemiology"],
    accent: "emerald",
  },
];

/* ------------------------------------------------------------------ *
 * Methods - what I bring to the themes above.
 *
 * These were previously listed as standalone "research interests", which made
 * the field look scattered. They are real, documented capabilities with
 * published work behind them - but they are how the questions get answered,
 * not separate questions.
 * ------------------------------------------------------------------ */

export const methodCapabilities: MethodCapability[] = [
  {
    label: "Structural Modelling & Docking",
    icon: "Atom",
    description:
      "Protein modelling, binding-site mapping, and binding-free-energy analysis to ask what a variant does to a structure.",
    accent: "blue",
  },
  {
    label: "Molecular Dynamics Simulation",
    icon: "Waves",
    description:
      "GROMACS trajectories with RMSD/RMSF and stability profiling, used to test whether a predicted effect holds up.",
    accent: "cyan",
  },
  {
    label: "Computer-Aided Drug Discovery",
    icon: "Pill",
    description:
      "Virtual screening, docking, ADMET and DFT - the method behind the Chikungunya RdRp work.",
    accent: "gold",
  },
  {
    label: "Immunoinformatics & Vaccine Design",
    icon: "Syringe",
    description:
      "Epitope prediction and multi-epitope construct design - the method behind the Mpox vaccine study.",
    accent: "emerald",
  },
  {
    label: "NGS Pipelines & Variant Calling",
    icon: "Network",
    description:
      "Reproducible workflows from raw reads to filtered, annotated variants using GATK Best Practices.",
    accent: "cyan",
  },
  {
    label: "Statistical & Network Analysis",
    icon: "BarChart3",
    description:
      "Association testing, pathway enrichment, and interaction-network interpretation in R and Python.",
    accent: "blue",
  },
];

/* ------------------------------------------------------------------ *
 * Technique inventory - replaces the old percentage dials.
 *
 * Self-assigned proficiency scores ("Scientific Writing: 90%") read as
 * unserious on an academic site, and the old scores ranked computational work
 * above bench work. This lists what has actually been done, with context, and
 * puts the bench first.
 * ------------------------------------------------------------------ */

export const techniqueInventory: TechniqueBlock[] = [
  {
    label: "Molecular Biology - Bench",
    kind: "bench",
    icon: "FlaskConical",
    accent: "emerald",
    context:
      "Daily bench work at the Functional Genomics & Proteomics Laboratory, University of Chittagong.",
    items: [
      "Genomic DNA extraction, quantification, and quality assessment",
      "PCR, qPCR, and RT-PCR - primer design through optimisation",
      "Agarose gel electrophoresis and PAGE",
      "Protein isolation, SDS-PAGE, and ELISA",
      "Centrifugation, sample fractionation, and karyotyping",
      "Plant extract preparation and organic compound fractionation",
    ],
  },
  {
    label: "Sequencing - Bench to Chromatogram",
    kind: "bench",
    icon: "Dna",
    accent: "blue",
    context:
      "Certified in Sanger sequencing at FGPL; NGS workflow training at the National Institute of Biotechnology.",
    items: [
      "Sanger sequencing: sample prep, purification, cartridge loading, chromatogram calling",
      "Targeted panel sequencing library preparation",
      "Whole-exome sequencing sample handling and QC",
      "Troubleshooting failed reads and ambiguous base calls",
      "Sanger confirmation of NGS-called variants",
    ],
  },
  {
    label: "Biochemical & Cellular Assays",
    kind: "bench",
    icon: "TestTube",
    accent: "gold",
    context:
      "Alternative Medicine & Natural Product Research Lab, and thesis assay work.",
    items: [
      "Phytochemical screening",
      "Anti-inflammatory assays - protein denaturation, membrane stabilisation",
      "Antioxidant and antimicrobial assays",
      "Determination of blood components",
      "Animal-model toxicity and bioactivity testing",
    ],
  },
  {
    label: "Variant Analysis & Genomics",
    kind: "sequencing",
    icon: "Network",
    accent: "cyan",
    context:
      "Applied across the ADPKD panel, PCOS exome, and ESBL surveillance datasets.",
    items: [
      "GATK Best Practices and HaplotypeCaller",
      "Alignment with BWA and Hisat2; SAMtools and VCFtools",
      "FastQC and Trimmomatic quality control",
      "Annotation against ClinVar, gnomAD v4, VEP, and SnpEff",
      "Rare-variant prioritisation and protein stability prediction",
      "Call-set QC: Ti/Tv ratio, mapping quality, reference-allele verification",
    ],
  },
  {
    label: "Microbial & Population Genomics",
    kind: "sequencing",
    icon: "ShieldCheck",
    accent: "emerald",
    context: "Whole-genome surveillance of 38 ESBL-producing E. coli isolates.",
    items: [
      "SPAdes assembly with QUAST assessment",
      "Prokka annotation, Panaroo pan-genome, IQ-TREE phylogenomics",
      "In silico MLST and Mash genome-distance comparison",
      "ABRicate with ResFinder and CARD; PlasmidFinder; MOB-suite mobility typing",
      "Snippy SNP calling and IntegronFinder mobile-element profiling",
    ],
  },
  {
    label: "Computational Structure & Simulation",
    kind: "computational",
    icon: "Atom",
    accent: "blue",
    context:
      "The method stack behind two Q1 first-author publications.",
    items: [
      "AutoDock, PyRx, Schrödinger Suite, CB-Dock2",
      "GROMACS, NAMD, VMD molecular dynamics",
      "SWISS-MODEL, AlphaFold, Discovery Studio, LigandScout",
      "SwissADME, ADMETlab, Gaussian and DFT-based analysis",
      "IEDB, NetMHCpan, VaxiJen for epitope and antigenicity work",
      "Cytoscape, STRING, KEGG, MEGA",
    ],
  },
  {
    label: "Programming & Analysis",
    kind: "computational",
    icon: "Terminal",
    accent: "cyan",
    context: "Used for analysis, figures, and pipeline automation.",
    items: [
      "R - ggplot2, Bioconductor",
      "Python - Biopython, Pandas, NumPy",
      "Linux / Ubuntu command line and bash scripting",
      "SPSS, GraphPad Prism, OriginPro",
      "LaTeX, Git",
    ],
  },
];

/** Bench blocks first - this ordering is the point of the section. */
export const benchTechniques = techniqueInventory.filter((t) => t.kind === "bench");

/* ------------------------------------------------------------------ *
 * Back-compatible aliases
 *
 * `researchInterests` is kept so any page still importing it keeps building.
 * It now maps the three themes plus the method list, themes first - so even
 * legacy call sites render in the corrected priority order.
 * ------------------------------------------------------------------ */

export type ResearchInterest = {
  title: string;
  icon: string;
  description: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
};

export const researchInterests: ResearchInterest[] = [
  ...researchThemes.map(({ title, icon, description, accent }) => ({
    title,
    icon,
    description,
    accent,
  })),
  ...methodCapabilities.map(({ label, icon, description, accent }) => ({
    title: label,
    icon,
    description,
    accent,
  })),
];
