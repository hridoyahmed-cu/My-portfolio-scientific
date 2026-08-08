export type PresentationKind = "Oral" | "Business & Innovation" | "Poster";

export type Presentation = {
  id: string;
  kind: PresentationKind;
  title: string;
  venue: string;
  note?: string;
};

export const presentations: Presentation[] = [
  // Oral
  {
    id: "darwin-mpox",
    kind: "Oral",
    title:
      "An immuno-informatics approach for annotation of hypothetical proteins and multi-epitope vaccine design against the Mpox virus",
    venue: "Darwin International Conference — 4th Edition, India",
    note: "Invited presentation on multi-layered epitope prediction and vaccine construct development.",
  },
  {
    id: "auw-chikv",
    kind: "Oral",
    title:
      "A structure-based drug design approach for the identification of antiviral compounds targeting the Chikungunya virus RdRp protein",
    venue:
      "International Conference on Natural Science & Technology — Asian University for Women",
    note: "Computational screening, docking, and molecular dynamics of antiviral candidates.",
  },
  {
    id: "icsb-rsg",
    kind: "Oral",
    title:
      "Immuno-informatics study targeting 20 membrane glycoproteins for B and T cell epitope prediction and multi-epitope vaccine design against Monkeypox virus",
    venue: "ICSB–RSG Bioinformatics Symposium",
    note: "Comparative immunoinformatics workflow for epitope profiling across viral glycoproteins.",
  },
  // Business & Innovation
  {
    id: "hult-prize",
    kind: "Business & Innovation",
    title: "Biomass Energy: Turning Organic Matter into Power",
    venue: "Hult Prize — University of Chittagong",
    note: "A sustainable energy model using biomass conversion for low-resource communities.",
  },
  {
    id: "startup-ctg",
    kind: "Business & Innovation",
    title: "Discreet and Private: Sanitary Napkins Delivered to Your Home",
    venue: "Startup Chattogram — Business Idea Contest",
    note: "Improving women's hygiene access through confidential doorstep delivery.",
  },
  // Posters
  {
    id: "poster-ck2a",
    kind: "Poster",
    title:
      "In silico investigation identifies Butyl Xanalterate as a potential CK2α (CSNK2A1) inhibitor for prostate cancer therapy",
    venue: "Chittagong University Scientific Society",
  },
  {
    id: "poster-diabetes",
    kind: "Poster",
    title: "Managing Diabetes: Key Steps for a Healthy Life",
    venue: "International Islamic University Chittagong",
  },
  {
    id: "poster-spyogenes",
    kind: "Poster",
    title:
      "Immuno-informatics approach for hypothetical protein annotation and multi-epitope vaccine design against Streptococcus pyogenes",
    venue:
      "DNA Day — Dept. of Genetic Engineering & Biotechnology, University of Chittagong",
  },
  {
    id: "poster-saussurea",
    kind: "Poster",
    title:
      "Computational investigation of Saussurea costus bioactive molecules as potential MPXV inhibitors: reverse docking, molecular dynamics, and ADMET analysis",
    venue:
      "Jamal Nazrul Islam International Conference — CURHS, University of Chittagong",
  },
];

export const presentationKinds: PresentationKind[] = [
  "Oral",
  "Business & Innovation",
  "Poster",
];
