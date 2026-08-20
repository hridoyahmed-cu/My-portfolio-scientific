export type PublicationType =
  | "Research Article"
  | "Review Article"
  | "Conference Paper";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  authorHighlight: string;
  /**
   * Authorship position, stated explicitly. Reviewers look for this first, and
   * leaving it implicit in a long author string invites the wrong assumption.
   */
  authorRole: "First author" | "First & corresponding author" | "Corresponding author" | "Co-author";
  /** How this paper connects to the current bench-led research programme. */
  connection?: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  publisher?: string;
  type: PublicationType;
  domain: string;
  tier: string;
  status?: string;
  doi?: string;
  /** Omitted while a paper is in press and has no article page yet. */
  url?: string;
  pdf?: string;
  researchgate?: string;
  highlights: string[];
};

export const publications: Publication[] = [
  {
    id: "breast-cancer-risk-variants-2026",
    title:
      "From Association to Mechanism: Regulatory Annotation and Pathway Mapping of Genes Surrounding Breast Cancer Risk Variants",
    authors:
      "Sultana Jannat, Trina Mitra, Nafisa Nawar Fariha, Tasmia Tabassum, Kulsuma Bahar Bethi, Synchita Majumder Kaya, Md. Arif Hossen, Md. Saad Hossain, Jobaier Ibne Deen, Mohammed Emon, Laila Khaleda, Md. Hridoy Ahmed",
    authorHighlight: "Md. Hridoy Ahmed",
    authorRole: "Corresponding author",
    connection:
      "Regulatory annotation of risk variants - the same interpretive step applied to the ADPKD and PCOS cohorts, here on breast cancer loci.",
    journal: "Computational and Systems Oncology",
    year: 2026,
    volume: "6",
    pages: "e70024",
    publisher: "Wiley",
    type: "Research Article",
    domain: "Cancer Genomics & Regulatory Annotation",
    tier: "Q2",
    status: "Published",
    doi: "10.1002/cso2.70024",
    url: "https://onlinelibrary.wiley.com/doi/10.1002/cso2.70024",
    pdf: "/Breast-Cancer-Risk-Variants-2026.pdf",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    highlights: [
      "Corresponding-author study published open access in Computational and Systems Oncology (Wiley), 2026.",
      "Examined 175 breast cancer risk variants confirmed by genome-wide association studies and the genes flanking each locus.",
      "Mapped the risk genes onto androgen receptor, Wnt/β-catenin, and Hedgehog signaling pathways central to mammary biology.",
      "Annotated correlated variants with HaploReg, finding a 4.8-fold excess of DNase I hypersensitivity and a 15.7-fold excess of enhancer motifs.",
    ],
  },
  {
    id: "molecular-pharming-2026",
    title:
      "Molecular Pharming: Advances, Applications, and Future Prospects in Biotechnology and Medicine",
    authors:
      "Md. Hridoy Ahmed, Md. Mustak Khan, Shishir Dutta, Md. Foyzur Rahman, Mohammad Shariful Islam, Md. Najmul Hosen, Md. Saad Hossain, Md. Aftabur Rahman, Md. Sadman Hasan Sahil, Tanjuma Tasnim Hira, Ifthesum Ashikur Rahaman, Md. Afser Rabbi, Laila Khaleda",
    authorHighlight: "Md. Hridoy Ahmed",
    authorRole: "First & corresponding author",
    connection:
      "A review of recombinant protein production in plants, written out of the molecular biology and expression work behind the bench programme.",
    journal: "Engineering in Life Sciences",
    year: 2026,
    publisher: "Wiley",
    type: "Review Article",
    domain: "Plant Biotechnology & Molecular Pharming",
    tier: "Q2",
    status: "In press",
    pdf: "/Molecular-Pharming-Review.pdf",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    highlights: [
      "First-author, corresponding-author review accepted in Engineering in Life Sciences (Wiley), February 2026; article page and DOI to follow on final publication.",
      "Traces the evolution of molecular pharming and plant-based production of recombinant proteins, vaccines, and industrial enzymes.",
      "Surveys host organisms, genetic-engineering methods (including CRISPR/Cas9), and protein extraction and purification strategies.",
      "Weighs advantages against challenges of public perception, regulation, and economic sustainability, and maps future directions.",
    ],
  },
  {
    id: "chikv-rdrp-2024",
    title:
      "A structure-based drug design approach for the identification of antiviral compounds targeting the Chikungunya virus RdRp protein",
    authors:
      "Md. Hridoy Ahmed, Gagandeep Singh, Melvin Castrosanto, Alomgir Hossain, Md. Morshedul Islam Rifat, Sadia Hosna Rima, Vandana Gupta, Rajesh K. Kesharwani, Mariusz Jaremko, Abdul-Hamid Emwas, et al.",
    authorHighlight: "Md. Hridoy Ahmed",
    authorRole: "First author",
    connection:
      "Where the structural modelling and molecular dynamics methods were built - now applied to asking what disease variants do to protein structure.",
    journal: "Chemical Physics Impact",
    year: 2024,
    volume: "8",
    pages: "100450",
    publisher: "Elsevier",
    type: "Research Article",
    domain: "Computational Drug Discovery",
    tier: "Q1",
    doi: "10.1016/j.chphi.2023.100450",
    url: "https://www.sciencedirect.com/science/article/pii/S266702242300289X",
    pdf: "https://hridoy.owlstown.net/publications/41576.pdf",
    researchgate:
      "https://www.researchgate.net/publication/376864118_A_Structure-Based_Drug_Design_Approach_for_the_Identification_of_Antiviral_Compounds_Targeting_the_Chikungunya_Virus_RdRp_Protein",
    highlights: [
      "Designed antiviral candidates through pharmacophore-based virtual screening and molecular docking.",
      "Carried out structural analysis, binding free-energy evaluation, and molecular dynamics simulation.",
      "Identified multi-target compounds with strong RdRp inhibitory potential.",
      "Published in a Q1 Elsevier journal as first author.",
    ],
  },
  {
    id: "mpox-vaccine-2023",
    title:
      "An immuno-informatics approach for annotation of hypothetical proteins and multi-epitope vaccine design against the Mpox virus",
    authors:
      "Md. Hridoy Ahmed, Gagandeep Singh, Melvin Castrosanto, Prawez Alam, Faizul Azam, et al.",
    authorHighlight: "Md. Hridoy Ahmed",
    authorRole: "First author",
    connection:
      "Proteome-wide screening and epitope prediction - the computational annotation skills that variant interpretation draws on.",
    journal: "Journal of Biomolecular Structure and Dynamics",
    year: 2023,
    volume: "42(10)",
    pages: "5288-5307",
    publisher: "Taylor & Francis",
    type: "Research Article",
    domain: "Immunoinformatics & Vaccine Design",
    tier: "Q1",
    doi: "10.1080/07391102.2023.2239921",
    url: "https://doi.org/10.1080/07391102.2023.2239921",
    pdf: "https://hridoy.owlstown.net/publications/41573.pdf",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    highlights: [
      "Identified antigenic proteins through proteome-wide immunoinformatics screening.",
      "Designed a multi-epitope vaccine construct targeting Mpox viral proteins.",
      "Performed molecular docking with immune receptors, including TLR-4 and MHC alleles.",
      "Simulated immune responses using computational immunology tools.",
    ],
  },
];

export const publicationFilters: (PublicationType | "All")[] = [
  "All",
  "Research Article",
  "Review Article",
  "Conference Paper",
];

/* ------------------------------------------------------------------ *
 * Manuscripts in preparation
 *
 * These are the bench-led cohort studies that define the current research
 * programme. They were previously visible only as project cards, which left
 * the publication page looking entirely computational and made the wet-lab
 * claim elsewhere on the site look unsupported. Listing work in preparation is
 * standard practice on an academic page, provided the status is explicit.
 * ------------------------------------------------------------------ */

export type Manuscript = {
  id: string;
  title: string;
  authorRole: Publication["authorRole"];
  /** Explicit, unambiguous status. Never presented as published. */
  status: "In preparation" | "Under review" | "Submitted";
  domain: string;
  /** Sample or isolate count - the evidence that this is bench-generated data. */
  cohort: string;
  /** True when I generated the underlying data at the bench. */
  bench: boolean;
  methods: string[];
  finding: string;
  /** Matching project id in `@/data/projects`, for cross-linking. */
  projectId: string;
};

export const manuscriptsInPreparation: Manuscript[] = [
  {
    id: "adpkd-manuscript",
    title:
      "Variant Spectrum of Autosomal Dominant Polycystic Kidney Disease in a Bangladeshi Cohort: A Nine-Gene Targeted Panel Study",
    authorRole: "Co-author",
    status: "In preparation",
    domain: "Clinical Variant Discovery",
    cohort: "37 patients · 9 controls · 9-gene panel",
    bench: true,
    methods: [
      "DNA extraction and targeted panel library preparation",
      "Targeted sequencing of PKD1, PKD2, PKHD1 and six further cystic kidney genes",
      "GATK HaplotypeCaller with ClinVar and gnomAD v4 annotation",
      "Call-set QC by Ti/Tv ratio, mapping quality, and reference-allele verification",
    ],
    finding:
      "Fourteen pathogenic or likely pathogenic variants across PKD1, PKD2 and PKHD1; a candidate variant in 41% of patients. One ClinVar-listed variant was shown to be a mapping artefact. The first ADPKD variant spectrum reported from Bangladesh.",
    projectId: "adpkd-panel-bangladesh",
  },
  {
    id: "pcos-manuscript",
    title:
      "Common Polymorphisms and Rare Coding Variants Converge on Gonadotropin, Insulin and Androgen Signalling in Bangladeshi Women with PCOS",
    authorRole: "Co-author",
    status: "In preparation",
    domain: "Human Disease Genetics",
    cohort: "300 patients · 300 matched controls",
    bench: true,
    methods: [
      "PCR and Sanger genotyping of five FSHR, INSR and SHBG polymorphisms",
      "Whole-exome sequencing with GRCh38 alignment and GATK Best Practices",
      "Rare-variant prioritisation and protein stability prediction",
      "Pathway enrichment analysis",
    ],
    finding:
      "All five polymorphisms associated with PCOS, and rare damaging variants converged on the same reproductive and metabolic pathways - common and rare variation implicating one mechanism.",
    projectId: "pcos-common-rare-variants",
  },
  {
    id: "esbl-manuscript",
    title:
      "Clone- and Plasmid-Structured Antimicrobial Resistance in ESBL-Producing Escherichia coli Across Three Regions of Bangladesh",
    authorRole: "Co-author",
    status: "In preparation",
    domain: "Genomic Epidemiology & AMR",
    cohort: "38 isolates · Barishal, Chattogram, Dhaka",
    bench: true,
    methods: [
      "Isolate characterisation, DNA extraction, and sequencing library preparation",
      "SPAdes assembly, Prokka annotation, Panaroo pan-genome, IQ-TREE phylogeny",
      "In silico MLST and Mash comparison against global genomes",
      "MOB-suite plasmid reconstruction and mobile-element profiling",
    ],
    finding:
      "Seventeen sequence types resolved: a homogeneous CTX-M-15/ST131 background countrywide, with a focal, Dhaka-centred carbapenemase signal riding international high-risk clones. Resistance is structured by clone and plasmid, not by geography.",
    projectId: "esbl-ecoli-genomic-epidemiology",
  },
];
