export type EducationEntry = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  result: string;
  details: string[];
  highlight?: string;
};

export type ExperienceEntry = {
  role: string;
  organisation: string;
  shortName?: string;
  period: string;
  summary: string;
  points: string[];
};

/** Short hero/intro copy. */
export const intro = {
  headline:
    "Reading disease in the genome, and answering it with computation.",
  lede: "I am Md. Hridoy Ahmed, a molecular genetics and computational biology researcher working where genomic variant interpretation, wet-lab molecular biology, and computer-aided drug and vaccine discovery meet. My work asks how genetic variation shapes complex disease, and how computational methods can shorten the road to new therapeutics.",
};

/** Long-form biography paragraphs (About section / About page). */
export const biography: string[] = [
  "I completed both my B.Sc. and M.Sc. in Genetic Engineering and Biotechnology at the University of Chittagong, finishing among the top ranks of my cohort. Those years gave me a firm grounding in molecular biology, functional genomics, and bioinformatics, and they shaped a lasting interest in translational genomics.",
  "My research moves across several connected areas. I have profiled matrix metalloproteinase gene variants in periodontitis and diabetes, pursued antiviral drug discovery against the Chikungunya virus RdRp, and designed immunoinformatics-based vaccine candidates for the Mpox virus. To date I have published three first-author articles, two of them in Q1 journals and a Wiley review on molecular pharming, each carefully validated rather than rushed.",
  "Beyond my own projects, I founded BioPC, a research and training community that has supported more than a thousand learners across several countries. Through it I have mentored students, led collaborative research, and run hands-on bioinformatics workshops and national olympiads.",
];

export const mission = {
  mission:
    "To connect laboratory genetics with computational modelling so that the genetic basis of complex disease can be understood and acted upon, and to make rigorous research training reach students who would otherwise go without it.",
  philosophy:
    "Good science is patient and honest. I prefer results that survive validation across methods over findings that merely look striking. I also believe knowledge grows when it is shared, which is why teaching and open mentorship sit at the centre of my work.",
  goals:
    "I am pursuing doctoral study in molecular medicine, computational biology, or precision genomics, with the aim of building an independent research line on disease-associated variation and structure-based therapeutic design.",
};

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. (Thesis)",
    field: "Genetic Engineering & Biotechnology",
    institution: "University of Chittagong",
    period: "2023 – 2025",
    result: "First Class, · CGPA 3.94 / 4.00",
    highlight: "First Class, CGPA 3.94 / 4.00",
    details: [
      "Thesis: Molecular Mechanisms of Apical Periodontitis Influenced by Diabetes via MMP-1, MMP-3 and MMP-9 Variant Analysis.",
      "Techniques: DNA extraction and quantification, PCR/qPCR, Sanger sequencing, whole-exome sequencing QC, and variant annotation.",
    ],
  },
  {
    degree: "B.Sc. (Honours)",
    field: "Genetic Engineering & Biotechnology",
    institution: "University of Chittagong",
    period: "2019 – 2023",
    result: "First Class, · CGPA 3.89 / 4.00",
    highlight: "First Class, CGPA 3.89 / 4.00",
    details: [
      "Maintained first class standing across every academic year.",
      "Key coursework: Molecular Biology, Genetics, Genomics, Microbiology, Immunology, Recombinant DNA Technology, Cell Signalling, Bioinformatics, and Clinical Biotechnology.",
    ],
  },
];

export const researchExperience: ExperienceEntry[] = [
  {
    role: "Research Associate",
    organisation: "Functional Genomics & Proteomics Laboratory",
    shortName: "FGPL, University of Chittagong",
    period: "2025 – Present",
    summary:
      "Variant analysis across diabetes, cardiovascular disease, chronic kidney disease, PCOS, and periodontitis.",
    points: [
      "Disease-associated variant discovery and interpretation.",
      "PCR and qPCR, Sanger sequencing, and gel electrophoresis.",
      "NGS data analysis with GATK, Hisat2, BWA, VCFtools, and SAMtools.",
    ],
  },
  {
    role: "Thesis Researcher",
    organisation: "Functional Genomics & Proteomics Laboratory",
    shortName: "FGPL, University of Chittagong",
    period: "2024 – 2025",
    summary:
      "Variant analysis across diabetes and periodontitis.",
    points: [
      "PCR and qPCR, Sanger sequencing, and gel electrophoresis.",
      "NGS data analysis with GATK, Hisat2, BWA, VCFtools, and SAMtools.",
    ],
  },
  {
    role: "Summer Research Intern",
    organisation: "Alternative Medicine & Natural Product Research Lab",
    period: "2023",
    summary:
      "Isolation and screening of nanophytocompounds with computational and laboratory validation.",
    points: [
      "Nanophytocompound isolation and purification.",
      "Antioxidant and antimicrobial assays in animal models.",
      "Molecular docking and dynamics simulation for compound screening.",
    ],
  },
  {
    role: "Research Intern",
    organisation: "National Institute of Biotechnology",
    shortName: "NIB, Bangladesh",
    period: "2023",
    summary:
      "Hands-on exposure to Sanger sequencing and next-generation sequencing workflows.",
    points: [
      "Sanger sequencing and NGS workflow exposure.",
      "DNA extraction, PCR amplification, and gel visualisation.",
      "Training on molecular instrumentation.",
    ],
  },
];
