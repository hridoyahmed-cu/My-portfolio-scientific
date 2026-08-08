export type Award = {
  title: string;
  detail: string;
  year?: string;
  icon: string;
  accent: "blue" | "cyan" | "emerald" | "gold";
};

export const majorHonors: Award[] = [
  {
    title: "National Science & Technology (NST) Fellowship",
    detail:
      "Government of Bangladesh. Awarded for outstanding research potential and academic excellence through a competitive national selection.",
    icon: "Trophy",
    accent: "gold",
  },
  {
    title: "Best Research Paper Presenter — Darwin International Conference",
    detail:
      "4th Edition. Recognised for clarity, scientific rigour, and innovative methodology for the Mpox multi-epitope vaccine study.",
    icon: "Award",
    accent: "blue",
  },
  {
    title: "Most Brilliant Student Award — Kishoreganj",
    detail:
      "Science category. District-level recognition for academic performance and scientific excellence.",
    year: "2016",
    icon: "Star",
    accent: "cyan",
  },
  {
    title: "Best Campus Representative",
    detail:
      "International Conference on Natural Science & Technology, Asian University for Women, Chittagong. Awarded for leadership and coordination.",
    icon: "Medal",
    accent: "emerald",
  },
  {
    title: "Best Poster Presenter — Senior Category",
    detail:
      "Department of Genetic Engineering & Biotechnology, University of Chittagong. Recognised for scientific visualisation and presentation.",
    icon: "Award",
    accent: "gold",
  },
  {
    title: "Grameen Bank Scholarship Recipient",
    detail: "Awarded on the basis of merit and community contribution.",
    year: "2016–2017",
    icon: "GraduationCap",
    accent: "blue",
  },
];
