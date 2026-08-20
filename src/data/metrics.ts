export type Metric = { label: string; value: number; suffix?: string; icon: string };

/**
 * Research record and outreach record are kept apart deliberately.
 *
 * They were previously rendered as one six-across row, which put "3,000+
 * learners mentored" beside "4 peer-reviewed publications" and let the larger
 * community number swamp the research figures. Training reach is a real
 * achievement - it just is not a research metric, and mixing the two dilutes
 * both.
 */
export const researchMetrics: Metric[] = [
  { label: "Peer-reviewed publications", value: 4, icon: "BookOpen" },
  { label: "Manuscripts in preparation", value: 3, icon: "PenLine" },
  { label: "Research projects", value: 15, suffix: "+", icon: "FlaskConical" },
  { label: "Conference presentations", value: 9, icon: "Presentation" },
];

export const outreachMetrics: Metric[] = [
  { label: "Learners mentored", value: 3000, suffix: "+", icon: "Users" },
  { label: "Training programmes led", value: 25, icon: "GraduationCap" },
  { label: "Awards & honours", value: 6, suffix: "+", icon: "Award" },
];

/** Combined list, kept for any consumer that wants everything at once. */
export const metrics: Metric[] = [...researchMetrics, ...outreachMetrics];
