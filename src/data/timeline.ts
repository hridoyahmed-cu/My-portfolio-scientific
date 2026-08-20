export type TimelineKind =
  | "Education"
  | "Research"
  | "Publication"
  | "Award"
  | "Leadership";

export type TimelineEntry = {
  period: string;
  sortYear: number;
  title: string;
  place: string;
  description: string;
  kind: TimelineKind;
  icon: string;
};

/** Chronological academic timeline (most recent first). */
export const timeline: TimelineEntry[] = [
  {
    period: "2026",
    sortYear: 2026,
    title: "First-author review - Molecular Pharming (Wiley)",
    place: "Engineering in Life Sciences, Wiley",
    description:
      "A comprehensive review of plant-based biopharmaceutical production, accepted February 2026 as first and corresponding author.",
    kind: "Publication",
    icon: "BookOpen",
  },
  {
    period: "2026",
    sortYear: 2026,
    title: "Three collaborative genomics manuscripts in preparation",
    place: "FGPL & Department of Genetic Engineering and Biotechnology, University of Chittagong",
    description:
      "Co-author on ADPKD panel sequencing, PCOS common and rare variant analysis, and genomic epidemiology of ESBL-producing E. coli.",
    kind: "Research",
    icon: "Microscope",
  },
  {
    period: "2025 – Present",
    sortYear: 2025,
    title: "Research Associate",
    place: "Functional Genomics & Proteomics Laboratory, University of Chittagong",
    description:
      "Continuing disease-associated variant research at FGPL, extending the MMP variant work into wider NGS and precision-genomics pipelines.",
    kind: "Research",
    icon: "Microscope",
  },
  {
    period: "2024 – 2025",
    sortYear: 2024,
    title: "Thesis Researcher",
    place: "Functional Genomics & Proteomics Laboratory, University of Chittagong",
    description:
      "Disease-associated variant analysis across diabetes, CVD, CKD, PCOS, and periodontitis using PCR/qPCR, Sanger sequencing, and NGS pipelines.",
    kind: "Research",
    icon: "Microscope",
  },
  {
    period: "2024",
    sortYear: 2024,
    title: "First-author Q1 publication - CHIKV RdRp drug design",
    place: "Chemical Physics Impact, Elsevier",
    description:
      "Structure-based identification of antiviral candidates targeting the Chikungunya virus RNA-dependent RNA polymerase.",
    kind: "Publication",
    icon: "BookOpen",
  },
  {
    period: "2023 – 2025",
    sortYear: 2023,
    title: "M.Sc. in Genetic Engineering & Biotechnology",
    place: "University of Chittagong",
    description:
      "First Class, 2nd Position, CGPA 3.94/4.00. Thesis on MMP variant analysis in diabetes-influenced apical periodontitis.",
    kind: "Education",
    icon: "GraduationCap",
  },
  {
    period: "2023",
    sortYear: 2023,
    title: "First-author Q1 publication - Mpox vaccine design",
    place: "Journal of Biomolecular Structure and Dynamics, Taylor & Francis",
    description:
      "Immunoinformatics annotation of hypothetical proteins and a multi-epitope vaccine construct against the Mpox virus.",
    kind: "Publication",
    icon: "BookOpen",
  },
  {
    period: "2023",
    sortYear: 2023,
    title: "Research Internships - NIB & Natural Product Lab",
    place: "National Institute of Biotechnology & Alternative Medicine Lab",
    description:
      "Sanger and NGS workflow training, plus nanophytocompound isolation with docking-guided screening.",
    kind: "Research",
    icon: "FlaskConical",
  },
  {
    period: "2023",
    sortYear: 2023,
    title: "Best Research Paper Presenter - Darwin International Conference",
    place: "4th Edition",
    description:
      "Recognised for the clarity and rigour of the Mpox multi-epitope vaccine presentation.",
    kind: "Award",
    icon: "Award",
  },
  {
    period: "2021 – Present",
    sortYear: 2021,
    title: "Founder & Chief Trainer, BioPC",
    place: "Bioinformatics Lab of Research and Training",
    description:
      "Built one of Bangladesh's largest bioinformatics communities, training 3,000+ learners across 25 programmes and two national olympiads.",
    kind: "Leadership",
    icon: "Users",
  },
  {
    period: "2019 – 2023",
    sortYear: 2019,
    title: "B.Sc. (Honours) in Genetic Engineering & Biotechnology",
    place: "University of Chittagong",
    description:
      "First Class, 4th Position, with consistent first class standing across all academic years.",
    kind: "Education",
    icon: "GraduationCap",
  },
  {
    period: "2016 – 2017",
    sortYear: 2016,
    title: "Grameen Bank Scholarship & Most Brilliant Student Award",
    place: "Kishoreganj",
    description:
      "Early recognition for academic performance and scientific promise.",
    kind: "Award",
    icon: "Star",
  },
];
