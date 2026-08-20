export type ProjectStatus =
  | "Published"
  | "Ongoing"
  | "In preparation"
  | "Submitted"
  | "Completed";

export type Project = {
  id: string;
  title: string;
  domain: ProjectDomain;
  status: ProjectStatus;
  /**
   * True when I generated the data with my own hands at the bench - extraction,
   * PCR, gels, sequencing. These sort first and carry a "Bench" badge, because
   * wet-lab work is the core of this research programme rather than a sideline.
   */
  bench: boolean;
  /** Sample or isolate count, where there is one. Numbers carry more weight than adjectives. */
  cohort?: string;
  objective: string;
  methods: string[];
  result: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
  icon: string;
};

/**
 * Domains, ordered by proximity to the field.
 *
 * The previous scheme had a catch-all "Wet-Lab Research & Internships" domain
 * sitting last, which framed bench work as a training category rather than the
 * method behind the research. Bench-led domains now lead, and the internships
 * have moved to "Early Research & Training" where they belong.
 */
export type ProjectDomain =
  | "Human Disease Genetics"
  | "Genomic Epidemiology & AMR"
  | "Genome Annotation & Pipelines"
  | "Structure-Based Therapeutic Design"
  | "Immunoinformatics & Vaccine Design"
  | "Early Research & Training";

export const projectSummary = {
  statement:
    "One question runs through this work: which inherited variants drive complex disease, and what do they actually do. I answer it at the bench first - extraction, PCR, Sanger sequencing, targeted panels and exomes on patient cohorts - then interpret the calls computationally. The structural and immunoinformatics work below is the method I bring to that interpretation, and the record of how I learned it.",
  stats: [
    { value: "3", label: "Bench-led cohort studies" },
    { value: "700+", label: "Samples and isolates processed" },
    { value: "15+", label: "Research projects" },
  ],
};

/** Bench-led domains first. Drives the filter bar order on /projects. */
export const projectDomains: ProjectDomain[] = [
  "Human Disease Genetics",
  "Genomic Epidemiology & AMR",
  "Genome Annotation & Pipelines",
  "Structure-Based Therapeutic Design",
  "Immunoinformatics & Vaccine Design",
  "Early Research & Training",
];

/** Domains where the data is generated at the bench. Used for section framing. */
export const benchDomains: ProjectDomain[] = [
  "Human Disease Genetics",
  "Genomic Epidemiology & AMR",
];

const projectList: Project[] = [
  /* ---------------- 1. Human Disease Genetics (bench-led) ---------------- */
  {
    id: "mmp-variants",
    title: "MMP1, MMP3 & MMP9 Variant Profiling in Periodontitis and Diabetes",
    domain: "Human Disease Genetics",
    status: "Ongoing",
    bench: true,
    cohort: "M.Sc. thesis cohort",
    objective:
      "Identify disease-associated matrix metalloproteinase variants in patients with apical periodontitis influenced by diabetes.",
    methods: [
      "Genomic DNA extraction, quantification, and quality assessment",
      "PCR amplification, optimisation, and gel electrophoresis",
      "Sanger sequencing and chromatogram-level variant calling",
      "Functional annotation with GATK, VEP, and ClinVar",
    ],
    result:
      "Novel variants identified across a Bangladeshi study population; the basis of my M.Sc. thesis.",
    accent: "blue",
    icon: "Dna",
  },
  {
    id: "pcos-common-rare-variants",
    title: "Common and Rare Coding Variants in Polycystic Ovary Syndrome",
    domain: "Human Disease Genetics",
    status: "In preparation",
    bench: true,
    cohort: "300 patients · 300 matched controls",
    objective:
      "Test whether common polymorphisms and rare coding variants implicate the same reproductive and metabolic pathways in Bangladeshi women with PCOS.",
    methods: [
      "PCR and Sanger genotyping of five FSHR, INSR and SHBG polymorphisms in 300 patients and 300 matched controls",
      "Whole-exome sequencing with GRCh38 alignment and GATK Best Practices variant calling",
      "Rare-variant prioritisation, protein stability prediction, and pathway enrichment analysis",
    ],
    result:
      "All five polymorphisms associated with PCOS, and rare damaging variants converged on gonadotropin, insulin, and androgen signalling.",
    accent: "cyan",
    icon: "HeartPulse",
  },
  {
    id: "adpkd-panel-bangladesh",
    title: "Targeted Panel Sequencing of Cystic Kidney Disease Genes in ADPKD",
    domain: "Human Disease Genetics",
    status: "In preparation",
    bench: true,
    cohort: "37 patients · 9 controls · 9-gene panel",
    objective:
      "Describe the first ADPKD variant spectrum reported from a Bangladeshi cohort across a nine-gene cystic kidney disease panel.",
    methods: [
      "Targeted sequencing of PKD1, PKD2, PKHD1 and six further cystic kidney genes in 37 patients and nine controls",
      "Variant calling with GATK HaplotypeCaller, annotated against ClinVar and gnomAD v4",
      "Call-set quality control by transition/transversion ratio, mapping quality, and reference-allele verification",
    ],
    result:
      "Fourteen pathogenic or likely pathogenic variants across PKD1, PKD2 and PKHD1, with a candidate variant in 41% of patients; one ClinVar-listed variant shown to be a mapping artefact.",
    accent: "blue",
    icon: "Dna",
  },

  /* ---------------- 2. Genomic Epidemiology & AMR (bench-led) ---------------- */
  {
    id: "esbl-ecoli-genomic-epidemiology",
    title: "Clone- and Plasmid-Structured Resistance in ESBL-Producing E. coli",
    domain: "Genomic Epidemiology & AMR",
    status: "In preparation",
    bench: true,
    cohort: "38 isolates · 3 regions",
    objective:
      "Determine whether antimicrobial resistance in Bangladeshi ESBL E. coli is structured by geography or by clone and plasmid.",
    methods: [
      "Isolate characterisation, DNA extraction, and sequencing library preparation",
      "Whole-genome analysis of 38 ESBL-producing isolates from Barishal, Chattogram and Dhaka",
      "In silico MLST with a Prokka-Panaroo-IQ-TREE core-genome phylogeny and pan-genome modelling",
      "MOB-suite plasmid reconstruction, mobile-element profiling, and Mash comparison against global genomes",
    ],
    result:
      "Seventeen sequence types resolved: a homogeneous CTX-M-15/ST131 background countrywide, with a focal, Dhaka-centred carbapenemase signal on international high-risk clones.",
    accent: "emerald",
    icon: "ShieldCheck",
  },

  /* ---------------- 3. Genome Annotation & Pipelines ---------------- */
  {
    id: "wes-pipeline",
    title: "Whole-Exome Sequencing: Variant Discovery Pipeline",
    domain: "Genome Annotation & Pipelines",
    status: "Completed",
    bench: false,
    objective:
      "Build a reproducible high-throughput WES workflow for disease-associated SNPs and indels, used by the cohort studies above.",
    methods: [
      "Quality control with FastQC and Trimmomatic",
      "Alignment with Hisat2 and BWA",
      "Variant calling with GATK, downstream analysis with VCFtools and SnpEff",
    ],
    result:
      "A reproducible pipeline from raw reads to annotated, filtered variants.",
    accent: "cyan",
    icon: "Network",
  },
  {
    id: "breast-cancer-gwas",
    title: "Breast Cancer GWAS-Based Regulatory Variant Annotation",
    domain: "Genome Annotation & Pipelines",
    status: "Published",
    bench: false,
    cohort: "175 GWAS-confirmed risk variants",
    objective:
      "Move from statistical association to mechanism by annotating the regulatory landscape around confirmed breast cancer risk loci.",
    methods: [
      "GWAS dataset curation and flanking-gene mapping",
      "Regulatory annotation with HaploReg",
      "Pathway mapping and functional prioritisation",
    ],
    result:
      "Published in Computational and Systems Oncology (Wiley) as corresponding author: a 4.8-fold excess of DNase I hypersensitivity and 15.7-fold excess of enhancer motifs among correlated variants.",
    accent: "emerald",
    icon: "Microscope",
  },

  /* ---------------- 4. Structure-Based Therapeutic Design ---------------- */
  {
    id: "chikv-drug-design",
    title: "Structure-Based Drug Design Against Chikungunya RdRp",
    domain: "Structure-Based Therapeutic Design",
    status: "Published",
    bench: false,
    objective:
      "Identify lead compounds targeting the CHIKV RNA-dependent RNA polymerase.",
    methods: [
      "Protein preparation and active-site mapping",
      "Virtual screening and docking with AutoDock and PyRx",
      "Molecular dynamics with GROMACS, plus ADMET and DFT validation",
    ],
    result:
      "First-author Q1 publication identifying multi-target RdRp inhibitor candidates.",
    accent: "blue",
    icon: "Pill",
  },
  {
    id: "p53-nanophyto",
    title: "P53 Nanophytocompound Screening & MD Validation",
    domain: "Structure-Based Therapeutic Design",
    status: "Completed",
    bench: true,
    objective:
      "Investigate natural compounds targeting P53, with computational predictions tested experimentally.",
    methods: [
      "Ligand screening and in-silico toxicity prediction",
      "100 ns molecular dynamics for stability analysis",
      "RMSD/RMSF and free-energy profiling with animal-model bioactivity testing",
    ],
    result:
      "Two lead compounds validated for binding affinity and bioactivity, with laboratory results matching the computational predictions.",
    accent: "cyan",
    icon: "Atom",
  },
  {
    id: "lead-optimisation",
    title: "Lead Optimisation for Viral Targets",
    domain: "Structure-Based Therapeutic Design",
    status: "Ongoing",
    bench: false,
    objective:
      "Identify small molecules targeting viral membrane and polymerase proteins.",
    methods: [
      "Molecular docking and energy minimisation",
      "Binding hotspot analysis",
      "Drug-likeness scoring",
    ],
    result: "A shortlist of optimised candidates for further evaluation.",
    accent: "gold",
    icon: "FlaskConical",
  },

  /* ---------------- 5. Immunoinformatics & Vaccine Design ---------------- */
  {
    id: "mpox-vaccine",
    title: "Mpox Multi-Epitope Vaccine Design",
    domain: "Immunoinformatics & Vaccine Design",
    status: "Published",
    bench: false,
    objective:
      "Generate epitope-based vaccine candidates through a complete immunoinformatics pipeline.",
    methods: [
      "CTL, HTL, and B-cell epitope screening",
      "Molecular docking with immune receptors",
      "Allergenicity and antigenicity profiling with in-silico cloning",
    ],
    result:
      "First-author Q1 publication presenting a validated vaccine construct.",
    accent: "emerald",
    icon: "Syringe",
  },
  {
    id: "ctrachomatis-vaccine",
    title: "Reverse Vaccinology for C. trachomatis",
    domain: "Immunoinformatics & Vaccine Design",
    status: "Submitted",
    bench: false,
    objective:
      "Computational antigen discovery and epitope prioritisation for C. trachomatis.",
    methods: [
      "Proteome mining",
      "Subcellular localisation prediction",
      "B/T-cell epitope mapping and population coverage analysis",
    ],
    result: "A prioritised antigen set proposed for vaccine development.",
    accent: "blue",
    icon: "ShieldCheck",
  },
  {
    id: "spyogenes-vaccine",
    title: "Vaccine Candidate Selection for S. pyogenes",
    domain: "Immunoinformatics & Vaccine Design",
    status: "Completed",
    bench: false,
    objective: "Identify conserved epitopes for rational vaccine design.",
    methods: [
      "Antigenic region mapping and conservancy analysis",
      "Adjuvant design",
      "3D modelling and immunological simulation",
    ],
    result: "A conserved multi-epitope construct with simulated immune response.",
    accent: "cyan",
    icon: "Syringe",
  },

  /* ---------------- 6. Early Research & Training ---------------- */
  {
    id: "nib-sequencing",
    title: "Sanger Sequencing & NGS Training - NIB",
    domain: "Early Research & Training",
    status: "Completed",
    bench: true,
    objective:
      "Gain hands-on command of Sanger workflows and next-generation sequencing instrumentation.",
    methods: [
      "DNA extraction and quantification",
      "PCR optimisation",
      "Gel electrophoresis and sequence analysis",
    ],
    result: "Practical command of core sequencing instrumentation.",
    accent: "emerald",
    icon: "FlaskConical",
  },
  {
    id: "nanophyto-extraction",
    title: "Nanophytocompound Extraction & Animal Testing",
    domain: "Early Research & Training",
    status: "Completed",
    bench: true,
    objective:
      "Experimentally validate two lead compounds with high binding affinity to P53.",
    methods: [
      "Plant extract preparation and column chromatography",
      "Animal-model toxicity and bioactivity testing",
      "Correlation with computational predictions",
    ],
    result:
      "Laboratory results consistent with the computational binding predictions.",
    accent: "gold",
    icon: "Leaf",
  },
  {
    id: "undergrad-chikv",
    title: "Undergraduate Research: CHIKV RdRp Targeting",
    domain: "Early Research & Training",
    status: "Completed",
    bench: false,
    objective:
      "Run a complete bioinformatics pipeline for antiviral drug discovery.",
    methods: [
      "Research design and protein modelling",
      "Docking and molecular dynamics simulation",
      "HOMO-LUMO and DFT studies",
    ],
    result:
      "Foundational work that led to the first-author CHIKV publication.",
    accent: "blue",
    icon: "Atom",
  },
];

/** Active work first, finished work last. */
const statusRank: Record<ProjectStatus, number> = {
  Ongoing: 0,
  "In preparation": 1,
  Submitted: 2,
  Published: 3,
  Completed: 4,
};

const domainRank = (d: ProjectDomain) => projectDomains.indexOf(d);

/**
 * Bench-led projects first, then by domain, then by how live the work is.
 * The sort is the whole point: a visitor scanning the grid sees hands-on
 * research before computational method work, without anything being hidden.
 */
export const projects: Project[] = [...projectList].sort(
  (a, b) =>
    Number(b.bench) - Number(a.bench) ||
    domainRank(a.domain) - domainRank(b.domain) ||
    statusRank[a.status] - statusRank[b.status],
);

/** Bench-generated work only - used by the homepage "at the bench" section. */
export const benchProjects: Project[] = projects.filter((p) => p.bench);

/** Live bench cohort studies: the current research programme, in one list. */
export const currentBenchWork: Project[] = projects.filter(
  (p) =>
    p.bench &&
    (p.status === "Ongoing" || p.status === "In preparation") &&
    benchDomains.includes(p.domain),
);
