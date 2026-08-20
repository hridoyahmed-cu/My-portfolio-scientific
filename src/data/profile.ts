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
  headline: "Reading disease in the genome, starting at the bench.",
  lede: "I am Md. Hridoy Ahmed, a molecular geneticist working on the genetic basis of complex disease. I generate my own data - DNA extraction, PCR, Sanger sequencing, targeted panels and exomes on patient cohorts - and interpret it computationally. My question is which inherited variants carry disease risk, and what those variants actually do.",
};

/** Long-form biography paragraphs (About section / About page). */
export const biography: string[] = [
  "I am a molecular geneticist working on the genetic basis of complex disease. My research begins at the bench: extracting DNA from patient samples, optimising PCR, running gels, and calling variants from Sanger chromatograms - then carrying those calls through targeted panel and whole-exome sequencing to an annotated, interpretable result. The computational half of my training exists to serve that question, not to replace it.",
  "I completed both my B.Sc. and M.Sc. in Genetic Engineering and Biotechnology at the University of Chittagong, finishing among the top ranks of my cohort. My M.Sc. thesis profiled MMP-1, MMP-3 and MMP-9 variants in apical periodontitis influenced by diabetes - a study I ran end to end, from sample handling through to variant interpretation. That work set the pattern for everything since.",
  "At the Functional Genomics & Proteomics Laboratory I now work across three bench-led cohort studies with manuscripts in preparation: the first ADPKD variant spectrum reported from Bangladesh, across a nine-gene cystic kidney disease panel in 37 patients; a combined Sanger and whole-exome study of polycystic ovary syndrome in 300 patients and 300 matched controls; and a genomic-epidemiology survey of 38 ESBL-producing Escherichia coli isolates across three regions of the country.",
  "My published record reflects how I built the interpretive half of that toolkit. I have three first-author articles - two in Q1 journals - covering structure-based antiviral design against the Chikungunya RdRp, immunoinformatics-driven vaccine design for the Mpox virus, and a Wiley review on molecular pharming. A fourth paper, on which I am corresponding author, maps the regulatory landscape around breast cancer risk variants: the same annotation step I apply to the clinical cohorts above.",
  "Beyond my own projects, I founded BioPC, a research and training community that has supported more than three thousand learners across several countries. Through it I have mentored students, led collaborative research, and run hands-on bioinformatics workshops and national olympiads.",
];

export const mission = {
  mission:
    "To establish the genetic basis of complex disease in populations that genomics has largely overlooked - generating the data at the bench, interpreting it rigorously, and making the training that requires reach students who would otherwise go without it.",
  philosophy:
    "Good science is patient and honest. I prefer results that survive validation across methods over findings that merely look striking. I also believe knowledge grows when it is shared, which is why teaching and open mentorship sit at the centre of my work.",
  goals:
    "I am pursuing doctoral study in human molecular genetics, working on disease-associated variation in patient cohorts. My aim is an independent, laboratory-based research line on the functional consequences of inherited variants in complex disease.",
};

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. (Thesis)",
    field: "Genetic Engineering & Biotechnology",
    institution: "University of Chittagong",
    period: "2023 – 2025",
    result: "First Class, 2nd Position · CGPA 3.94 / 4.00",
    highlight: "First Class, 2nd Position · CGPA 3.94 / 4.00",
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
    result: "First Class, 4th Position · CGPA 3.89 / 4.00",
    highlight: "First Class, 4th Position · CGPA 3.89 / 4.00",
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
      "Targeted panel and whole-exome sequencing for inherited kidney disease and PCOS cohorts.",
      "Bacterial whole-genome surveillance: MLST, core-genome phylogenomics, and plasmid mobility typing.",
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
