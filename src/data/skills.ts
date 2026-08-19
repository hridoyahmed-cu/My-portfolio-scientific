export type SkillGroup = {
  category: string;
  icon: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
  subgroups: { heading: string; items: string[] }[];
};

export type Certification = {
  title: string;
  provider: string;
  points: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Wet-Lab Skills",
    icon: "FlaskConical",
    accent: "emerald",
    subgroups: [
      {
        heading: "Core Molecular Techniques",
        items: [
          "Sanger sequencing (preparation to chromatogram analysis)",
          "DNA & protein isolation",
          "Gel electrophoresis (agarose & PAGE)",
          "PCR, qPCR & RT-PCR",
          "Centrifugation & sample fractionation",
          "Karyotyping",
          "Plant extract preparation",
          "Organic compound isolation & fractionation",
        ],
      },
      {
        heading: "Biochemical & Cellular Assays",
        items: [
          "Phytochemical screening",
          "Anti-inflammatory assays (protein denaturation, membrane stabilisation)",
          "Determination of blood components",
          "ELISA & SDS-PAGE",
        ],
      },
    ],
  },
  {
    category: "Computational Biology & Bioinformatics",
    icon: "Cpu",
    accent: "blue",
    subgroups: [
      {
        heading: "Molecular Docking & Drug Discovery",
        items: [
          "AutoDock, PyRx, Schrödinger Suite",
          "GROMACS (MD simulation)",
          "LigandScout, Discovery Studio",
          "SwissADME / SwissModel",
          "MarvinJS, GaussView, Gaussian, Gabedit",
        ],
      },
      {
        heading: "Bioinformatics & Structural Tools",
        items: [
          "Cytoscape (network analysis)",
          "STRING (protein interactions)",
          "GEO & ArrayExpress (transcriptomics)",
          "NAMD & VMD",
          "MEGA (phylogenetics)",
          "IPA (pathway analysis), DFT-based analysis",
        ],
      },
      {
        heading: "NGS & Variant Analysis",
        items: [
          "GATK (Best Practices, HaplotypeCaller), Hisat2, BWA",
          "SAMtools, VCFtools, SnpEff",
          "FastQC, Trimmomatic",
          "ClinVar & gnomAD annotation, rare-variant prioritisation",
          "Whole-genome assembly, genome annotation, RNA-seq, GWAS",
        ],
      },
      {
        heading: "Microbial & Population Genomics",
        items: [
          "SPAdes assembly with QUAST quality assessment",
          "Prokka annotation, Panaroo pan-genome, IQ-TREE phylogenomics",
          "In silico MLST and Mash genome-distance comparison",
          "ABRicate with ResFinder & CARD, PlasmidFinder, MOB-suite mobility typing",
          "Snippy SNP calling and IntegronFinder mobile-element profiling",
        ],
      },
    ],
  },
  {
    category: "Programming, Systems & Visualisation",
    icon: "Terminal",
    accent: "cyan",
    subgroups: [
      {
        heading: "Programming & Scripting",
        items: [
          "R (ggplot2, Bioconductor)",
          "Python (Biopython, Pandas, NumPy)",
          "HTML / CSS",
          "SPSS",
        ],
      },
      {
        heading: "Operating Systems",
        items: [
          "Linux / Ubuntu (command line, bash scripting)",
          "macOS",
          "Windows",
        ],
      },
      {
        heading: "Statistics, Documentation & Productivity",
        items: [
          "GraphPad Prism, OriginPro",
          "LaTeX",
          "MS Word, Excel, PowerPoint",
        ],
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Sanger Sequencing Training",
    provider: "FGPL, University of Chittagong",
    points: [
      "Sample preparation and purification",
      "Cartridge filling and sequence loading",
      "Chromatogram interpretation and troubleshooting",
    ],
  },
  {
    title: "Research Methodology",
    provider: "BRAC University (Red & White)",
    points: [
      "Research proposal writing",
      "Scientific project design",
      "Basic bioinformatics tools",
    ],
  },
  {
    title: "Diabetes Course",
    provider: "University of Copenhagen (Coursera)",
    points: [
      "Diabetes pathophysiology",
      "Clinical management and treatment strategies",
      "Epigenetic factors and diet-exercise interactions",
    ],
  },
  {
    title: "Advanced Bioinformatics & Data Analysis",
    provider: "NextGenHelper, India",
    points: [
      "Network construction with Cytoscape, microbiome data analysis",
      "Python and Biopython pipelines, R and RStudio statistics",
      "Linux workflows and NGS techniques (assembly, annotation, RNA-seq, GWAS, variant analysis)",
    ],
  },
  {
    title: "Linux Training",
    provider: "Bioscience Factory Research Center, Bangladesh",
    points: [
      "Linux essentials and bash scripting for biologists",
      "File and data handling",
      "Pipeline automation",
    ],
  },
];
