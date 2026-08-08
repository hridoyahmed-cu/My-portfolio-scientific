export const biopc = {
  title: "BioPC — Bioinformatics Lab of Research and Training",
  role: "Founder, Research Coordinator & Chief Instructor",
  summary:
    "BioPC is one of the largest bioinformatics communities in Bangladesh. I founded it to give students rigorous, hands-on research training that is often hard to find, and to open a path into computational biology for learners who would otherwise go without it.",
  stats: [
    { value: "3,000+", label: "Learners trained" },
    { value: "25", label: "Training programmes" },
    { value: "2", label: "National olympiads" },
    { value: "~5", label: "Bioinformatics workshops" },
    { value: "6", label: "Research projects with trainees" },
    { value: "3", label: "Q1 articles from the community" },
  ],
  highlights: [
    "Instructed 15 training programmes as chief trainer for more than 1,000 students.",
    "Organised two nationwide virtual bioinformatics olympiads and roughly five workshops.",
    "Led six research projects involving 40 trainees.",
    "Mentored contributors toward two Q1 journal publications.",
  ],
};

export type Programme = {
  title: string;
  type: string;
};

export const programmes: Programme[] = [
  { title: "Basic Bioinformatics to Computer-Aided Drug & Vaccine Design", type: "Flagship course" },
  { title: "Bioinformatics: Basic to Advanced (1.0 & 2.0)", type: "Course series" },
  { title: "Research Traineeship 1.0", type: "Mentored research" },
  { title: "Learn Bioinformatics with BioPC", type: "Workshop" },
  { title: "Learn SPSS and KoboToolbox", type: "Data skills workshop" },
  { title: "1st Biology & Bioinformatics Olympiad", type: "National olympiad" },
  { title: "Computer-Aided Drug & Vaccine Design", type: "Workshop" },
  { title: "Career Guidelines in Research", type: "Mentorship session" },
  { title: "Free Bioinformatics Workshop", type: "Open workshop" },
];

/** Teaching & mentorship summary for the homepage Teaching section. */
export const teachingAreas: string[] = [
  "Bioinformatics fundamentals and command-line workflows",
  "Computer-aided drug and vaccine design",
  "NGS data analysis and variant interpretation",
  "Statistical analysis with R, SPSS, and KoboToolbox",
  "Scientific writing and research methodology",
];
