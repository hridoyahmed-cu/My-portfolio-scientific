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
  objective: string;
  methods: string[];
  result: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
  icon: string;
};

export type ProjectDomain =
  | "Genomics & Variant Analysis"
  | "Microbial Genomics & AMR"
  | "Computational Drug Discovery"
  | "Immunoinformatics & Vaccine Design"
  | "Wet-Lab Research & Internships";

export const projectSummary = {
  statement:
    "My research spans five connected domains: human genomics, microbial genomics and antimicrobial resistance, computational drug discovery, immunoinformatics, and wet-lab experimental biology. I pair molecular techniques with computational workflows to investigate disease-associated variants, track resistance across clones and plasmids, design therapeutic candidates, and build immunoinformatics-driven vaccines.",
  stats: [
    { value: "15+", label: "Research projects" },
    { value: "8+", label: "Major disease targets" },
    { value: "5", label: "Interdisciplinary domains" },
  ],
};

export const projectDomains: ProjectDomain[] = [
  "Genomics & Variant Analysis",
  "Microbial Genomics & AMR",
  "Computational Drug Discovery",
  "Immunoinformatics & Vaccine Design",
  "Wet-Lab Research & Internships",
];

export const projects: Project[] = [
  // 1. Genomics & Variant Analysis
  {
    id: "mmp-variants",
    title: "MMP3 & MMP9 Variant Profiling in Periodontitis and Diabetes",
    domain: "Genomics & Variant Analysis",
    status: "Ongoing",
    objective:
      "Identify disease-associated MMP variants using combined wet-lab and computational workflows.",
    methods: [
      "PCR amplification and Sanger sequencing",
      "NGS-based variant calling",
      "Functional annotation with GATK, VEP, and ClinVar",
    ],
    result:
      "Novel variants identified across a Bangladeshi study population.",
    accent: "blue",
    icon: "Dna",
  },
  {
    id: "wes-pipeline",
    title: "Whole-Exome Sequencing: Variant Discovery Pipeline",
    domain: "Genomics & Variant Analysis",
    status: "Completed",
    objective:
      "Build a high-throughput WES workflow for disease-associated SNPs and indels.",
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
    title: "Breast Cancer GWAS-Based Variant Annotation",
    domain: "Genomics & Variant Analysis",
    status: "In preparation",
    objective:
      "Screen population-level SNPs to identify risk-associated loci in breast cancer.",
    methods: [
      "GWAS dataset curation",
      "Manhattan and QQ plot analysis",
      "Functional annotation and pathogenicity scoring",
    ],
    result: "Candidate risk loci prioritised for downstream study.",
    accent: "emerald",
    icon: "Microscope",
  },
  // 2. Computational Drug Discovery
  {
    id: "chikv-drug-design",
    title: "Structure-Based Drug Design Against Chikungunya RdRp",
    domain: "Computational Drug Discovery",
    status: "Published",
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
    domain: "Computational Drug Discovery",
    status: "Completed",
    objective:
      "Investigate natural compounds targeting P53 for therapeutic potential.",
    methods: [
      "Ligand screening and in-silico toxicity prediction",
      "100 ns molecular dynamics for stability analysis",
      "RMSD/RMSF and free-energy profiling with animal-model bioactivity testing",
    ],
    result:
      "Two lead compounds validated for binding affinity and bioactivity.",
    accent: "cyan",
    icon: "Atom",
  },
  {
    id: "lead-optimisation",
    title: "Lead Optimisation for Viral Targets",
    domain: "Computational Drug Discovery",
    status: "Ongoing",
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
  // 3. Immunoinformatics & Vaccine Design
  {
    id: "mpox-vaccine",
    title: "Mpox Multi-Epitope Vaccine Design",
    domain: "Immunoinformatics & Vaccine Design",
    status: "Published",
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
  // 4. Wet-Lab Research & Internships
  {
    id: "nib-sequencing",
    title: "Sanger Sequencing & NGS Training — NIB",
    domain: "Wet-Lab Research & Internships",
    status: "Completed",
    objective:
      "Gain hands-on experience with Sanger workflows and next-generation sequencing.",
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
    domain: "Wet-Lab Research & Internships",
    status: "Completed",
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
    domain: "Wet-Lab Research & Internships",
    status: "Completed",
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
  // Collaborative clinical-genomics and microbial-genomics studies (manuscripts in preparation)
  {
    id: "adpkd-panel-bangladesh",
    title: "Targeted Panel Sequencing of Cystic Kidney Disease Genes in ADPKD",
    domain: "Genomics & Variant Analysis",
    status: "In preparation",
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
  {
    id: "pcos-common-rare-variants",
    title: "Common and Rare Coding Variants in PCOS",
    domain: "Genomics & Variant Analysis",
    status: "In preparation",
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
    id: "esbl-ecoli-genomic-epidemiology",
    title: "Clone- and Plasmid-Structured Resistance in ESBL-Producing E. coli",
    domain: "Microbial Genomics & AMR",
    status: "In preparation",
    objective:
      "Determine whether antimicrobial resistance in Bangladeshi ESBL E. coli is structured by geography or by clone and plasmid.",
    methods: [
      "Whole-genome analysis of 38 ESBL-producing isolates from Barishal, Chattogram and Dhaka",
      "In silico MLST with a Prokka-Panaroo-IQ-TREE core-genome phylogeny and pan-genome modelling",
      "MOB-suite plasmid reconstruction, mobile-element profiling, and Mash comparison against global genomes",
    ],
    result:
      "Seventeen sequence types resolved: a homogeneous CTX-M-15/ST131 background countrywide, with a focal, Dhaka-centred carbapenemase signal on international high-risk clones.",
    accent: "emerald",
    icon: "ShieldCheck",
  },
];
