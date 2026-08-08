export type Metric = { label: string; value: number; suffix?: string; icon: string };

export const metrics: Metric[] = [
  { label: "First-author publications", value: 3, icon: "BookOpen" },
  { label: "Research projects", value: 12, suffix: "+", icon: "FlaskConical" },
  { label: "Conference presentations", value: 9, icon: "Presentation" },
  { label: "Awards & honours", value: 6, suffix: "+", icon: "Award" },
  { label: "Learners mentored", value: 3000, suffix: "+", icon: "Users" },
  { label: "Training programmes led", value: 25, icon: "GraduationCap" },
];
