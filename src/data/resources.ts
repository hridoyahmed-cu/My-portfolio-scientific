export type ResourceLink = {
  name: string;
  url: string;
  description: string;
};

export type ResourceTier = "research" | "students";

export type ResourceCategory = {
  title: string;
  icon: string;
  /**
   * "research" categories are field tools and stay on the research spine.
   * "students" categories are the mentorship material - genuinely useful, but
   * off-field, so they sit below the research tools rather than beside them.
   */
  tier: ResourceTier;
  links: ResourceLink[];
};

/**
 * Curated research toolkit. Each category maps to an icon in
 * `@/components/ui/icon`. Descriptions are kept to ~2 lines for clean cards.
 */
export const resourceCategories: ResourceCategory[] = [
  {
    title: "Molecular Biology Tools",
    tier: "research",
    icon: "Microscope",
    links: [
      { name: "Primer-BLAST", url: "https://www.ncbi.nlm.nih.gov/tools/primer-blast", description: "Designs PCR primers while checking specificity, combining Primer3 with NCBI BLAST." },
      { name: "Primer3", url: "https://primer3.ut.ee", description: "Highly trusted primer design software for PCR, qPCR, and sequencing projects." },
      { name: "Benchling", url: "https://www.benchling.com", description: "Cloud-based molecular biology and lab platform for sequence analysis, cloning, and collaboration." },
      { name: "SnapGene Viewer", url: "https://www.snapgene.com/snapgene-viewer", description: "Visualises plasmids, cloning workflows, and DNA constructs - popular with researchers." },
      { name: "PyMOL", url: "https://pymol.org", description: "Professional molecular visualisation for publication-quality protein structure figures." },
      { name: "ChimeraX", url: "https://www.cgl.ucsf.edu/chimerax", description: "Advanced visualisation for structural analysis and interactive molecular rendering." },
    ],
  },
  {
    title: "IELTS Resources",
    tier: "students",
    icon: "BookOpen",
    links: [
      { name: "IELTS Official", url: "https://www.ielts.org", description: "Official source for IELTS information, sample tests, and registration details." },
      { name: "British Council IELTS", url: "https://www.britishcouncil.org/exam/ielts", description: "Official preparation materials, practice resources, and test booking." },
      { name: "IELTS Liz", url: "https://ieltsliz.com", description: "Trusted free IELTS site with lessons, strategies, and practice materials." },
      { name: "IELTS Advantage", url: "https://www.ieltsadvantage.com", description: "Comprehensive preparation focused on score-improvement strategies and tutorials." },
    ],
  },
  {
    title: "Free Courses",
    tier: "students",
    icon: "GraduationCap",
    links: [
      { name: "Coursera", url: "https://www.coursera.org", description: "University-level courses from top institutions worldwide; many can be audited free." },
      { name: "edX", url: "https://www.edx.org", description: "Online courses from leading universities - excellent for STEM and professional development." },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", description: "Free access to MIT course materials and lectures, ideal for self-paced learning." },
      { name: "DeepLearning.AI", url: "https://www.deeplearning.ai", description: "Industry-leading AI and machine learning education created by field experts." },
    ],
  },
  {
    title: "PhD Scholarships, SOP & CV",
    tier: "students",
    icon: "Award",
    links: [
      { name: "FindAPhD", url: "https://www.findaphd.com", description: "Largest database of PhD opportunities worldwide, including funded positions and scholarships." },
      { name: "EURAXESS", url: "https://euraxess.ec.europa.eu", description: "European research careers and funding portal - great for international PhD opportunities." },
      { name: "DAAD", url: "https://www.daad.de/en", description: "Major scholarship platform for Germany with funding for international students." },
      { name: "Overleaf CV Templates", url: "https://www.overleaf.com/gallery/tagged/cv", description: "Professional LaTeX CV and academic resume templates widely used in academia." },
      { name: "The Professor Is In", url: "https://theprofessorisin.com", description: "Expert guidance on academic careers, SOPs, and interview preparation." },
    ],
  },
  {
    title: "AI Tools for Research & Education",
    tier: "students",
    icon: "Cpu",
    links: [
      { name: "ChatGPT", url: "https://chatgpt.com", description: "AI assistant for writing, coding, brainstorming, and research support." },
      { name: "Claude", url: "https://claude.ai", description: "Advanced AI assistant with long-context reasoning, great for manuscript review and writing." },
      { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI search engine with source citations, ideal for literature exploration and fact-checking." },
      { name: "Elicit", url: "https://elicit.com", description: "Research assistant for scientific literature that automates evidence gathering and discovery." },
      { name: "Consensus", url: "https://consensus.app", description: "Search engine extracting evidence directly from scientific papers, built for researchers." },
      { name: "SciSpace", url: "https://typeset.io", description: "AI platform for reading and understanding papers, explaining complex scientific concepts." },
      { name: "Zotero", url: "https://www.zotero.org", description: "Reference manager that organises citations, PDFs, and bibliographies efficiently." },
    ],
  },
  {
    title: "Explore at Least Once in a Lifetime",
    tier: "students",
    icon: "Compass",
    links: [
      { name: "NASA Eyes", url: "https://eyes.nasa.gov", description: "Interactive visualisation of the solar system and space missions in real time." },
      { name: "Human Cell Atlas", url: "https://www.humancellatlas.org", description: "Global effort to map every human cell type - a landmark in modern biology." },
      { name: "Allen Brain Atlas", url: "https://portal.brain-map.org", description: "Comprehensive atlas of human and mouse brain explored through interactive datasets." },
      { name: "Our World in Data", url: "https://ourworldindata.org", description: "Data-driven insights into global health, science, economics, and society." },
      { name: "Foldit", url: "https://fold.it", description: "Protein-folding game contributing to real science - anyone can join biological discovery." },
      { name: "Zooniverse", url: "https://www.zooniverse.org", description: "World's largest citizen-science platform contributing to genuine research projects." },
    ],
  },
  {
    title: "Basic Bioinformatics",
    tier: "research",
    icon: "Dna",
    links: [
      { name: "NCBI BLAST", url: "https://blast.ncbi.nlm.nih.gov", description: "Sequence similarity search for identifying homologous DNA, RNA, and protein sequences. Essential for comparative genomics." },
      { name: "EMBL-EBI Tools", url: "https://www.ebi.ac.uk/services", description: "Comprehensive suite for sequence analysis, alignment, phylogenetics, and database access." },
      { name: "Clustal Omega", url: "https://www.ebi.ac.uk/Tools/msa/clustalo", description: "Widely used multiple sequence alignment for DNA and protein, suited to evolutionary studies." },
      { name: "MAFFT", url: "https://mafft.cbrc.jp/alignment/software", description: "Fast, highly accurate multiple sequence alignment popular for large genomic and proteomic datasets." },
      { name: "UniProt", url: "https://www.uniprot.org", description: "Comprehensive protein sequence and functional annotation database with curated structure and function." },
      { name: "Ensembl", url: "https://www.ensembl.org", description: "Genome browser for vertebrate and model organisms supporting comparative genomics and variation analysis." },
      { name: "RCSB Protein Data Bank (PDB)", url: "https://www.rcsb.org", description: "Primary repository of experimentally determined protein structures, essential for structural biology and drug design." },
      { name: "KEGG", url: "https://www.kegg.jp", description: "Integrated database for pathways, diseases, and molecular interactions used in systems biology." },
    ],
  },
  {
    title: "Drug Design",
    tier: "research",
    icon: "Pill",
    links: [
      { name: "AlphaFold Database", url: "https://alphafold.ebi.ac.uk", description: "AI-predicted protein structures for millions of proteins, transforming structural biology and target ID." },
      { name: "SWISS-MODEL", url: "https://swissmodel.expasy.org", description: "Automated homology modelling that builds reliable 3D protein models from sequence." },
      { name: "AutoDock Vina", url: "https://autodock.scripps.edu", description: "Popular molecular docking software for ligand–protein studies and virtual screening." },
      { name: "CB-Dock2", url: "https://cadd.labshare.cn/cb-dock2", description: "Blind docking server with automatic cavity detection that simplifies docking workflows." },
      { name: "HDOCK", url: "http://hdock.phys.hust.edu.cn", description: "Protein–protein and protein–ligand docking combining template-based and ab initio approaches." },
      { name: "GROMACS", url: "https://www.gromacs.org", description: "High-performance molecular dynamics for biomolecular stability and interaction studies." },
      { name: "SwissADME", url: "http://www.swissadme.ch", description: "Predicts pharmacokinetics, drug-likeness, and medicinal chemistry properties for lead optimisation." },
      { name: "ADMETlab 3.0", url: "https://admetmesh.scbdd.com", description: "Advanced ADMET prediction evaluating absorption, distribution, metabolism, toxicity, and excretion." },
    ],
  },
  {
    title: "Vaccine Design",
    tier: "research",
    icon: "Syringe",
    links: [
      { name: "IEDB", url: "https://www.iedb.org", description: "Comprehensive immune epitope database and analysis resource, central to immunoinformatics." },
      { name: "NetMHCpan", url: "https://services.healthtech.dtu.dk", description: "Predicts peptide binding to MHC molecules - critical for T-cell epitope identification." },
      { name: "ABCpred", url: "https://webs.iiitd.edu.in/raghava/abcpred", description: "Machine-learning B-cell epitope prediction server useful for vaccine candidate selection." },
      { name: "VaxiJen", url: "http://www.ddg-pharmfac.net/vaxijen", description: "Alignment-independent antigenicity prediction widely used in reverse vaccinology." },
      { name: "AllerTOP", url: "https://www.ddg-pharmfac.net/AllerTOP", description: "Predicts allergenic potential of proteins and peptides to improve vaccine safety." },
      { name: "C-ImmSim", url: "https://kraken.iac.rm.cnr.it/C-IMMSIM", description: "Immune simulation platform modelling adaptive and innate responses to evaluate vaccines." },
    ],
  },
  {
    title: "High Throughput Data Analysis",
    tier: "research",
    icon: "BarChart3",
    links: [
      { name: "Galaxy", url: "https://usegalaxy.org", description: "Web platform for reproducible analyses supporting NGS, RNA-seq, proteomics, and workflow automation." },
      { name: "DESeq2", url: "https://bioconductor.org/packages/DESeq2", description: "Gold-standard R package for differential gene expression analysis in RNA-seq studies." },
      { name: "Seurat", url: "https://satijalab.org/seurat", description: "Powerful single-cell RNA-seq toolkit for clustering, integration, and visualisation." },
      { name: "GATK", url: "https://gatk.broadinstitute.org", description: "Industry-standard toolkit for variant discovery and genotyping from the Broad Institute." },
      { name: "IGV", url: "https://igv.org", description: "Interactive genome visualisation for exploring sequencing and genomic datasets." },
    ],
  },
];

/** Label used for the "show everything" filter. */
export const RESOURCE_FILTER_ALL = "All";

/**
 * Research tools first, student material second.
 *
 * Both stay on this page in full. The ordering is what changed: a visitor
 * scanning for field tools no longer has to read past IELTS preparation to
 * reach the sequence-analysis links.
 */
export const researchResources = resourceCategories.filter(
  (c) => c.tier === "research",
);

export const studentResources = resourceCategories.filter(
  (c) => c.tier === "students",
);

/** Canonical render order for the page. */
export const orderedResourceCategories: ResourceCategory[] = [
  ...researchResources,
  ...studentResources,
];

export const resourceTierMeta: Record<
  ResourceTier,
  { id: string; title: string; description: string }
> = {
  research: {
    id: "research-tools",
    title: "Research toolbox",
    description:
      "The tools I actually use - bench planning, sequence analysis, structural work, and high-throughput data.",
  },
  students: {
    id: "for-students",
    title: "For students",
    description:
      "Material I point mentees toward: language testing, funded study, application writing, and general study resources.",
  },
};

/**
 * Derived list that powers the filter bar at the top of the Resources page.
 * It is generated from `orderedResourceCategories` above (with an "All" option
 * added first), so reordering or editing the categories automatically updates
 * the filters - there is nothing else to keep in sync.
 */
export const resourceFilters: { title: string; icon: string; tier?: ResourceTier }[] = [
  { title: RESOURCE_FILTER_ALL, icon: "BookMarked" },
  ...orderedResourceCategories.map((category) => ({
    title: category.title,
    icon: category.icon,
    tier: category.tier,
  })),
];
