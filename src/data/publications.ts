export type PublicationType =
  | "Research Article"
  | "Review Article"
  | "Conference Paper";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  authorHighlight: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  publisher?: string;
  type: PublicationType;
  domain: string;
  tier: string;
  status?: string;
  doi?: string;
  url: string;
  pdf?: string;
  researchgate?: string;
  highlights: string[];
};

export const publications: Publication[] = [
  {
    id: "molecular-pharming-2026",
    title:
      "Molecular Pharming: Advances, Applications, and Future Prospects in Biotechnology and Medicine",
    authors:
      "Md. Hridoy Ahmed, Md. Mustak Khan, Shishir Dutta, Md. Foyzur Rahman, Mohammad Shariful Islam, Md. Najmul Hosen, Md. Saad Hossain, Md. Aftabur Rahman, Md. Sadman Hasan Sahil, Tanjuma Tasnim Hira, Ifthesum Ashikur Rahaman, Md. Afser Rabbi, Laila Khaleda",
    authorHighlight: "Md. Hridoy Ahmed",
    journal: "Engineering in Life Sciences",
    year: 2026,
    publisher: "Wiley",
    type: "Review Article",
    domain: "Plant Biotechnology & Molecular Pharming",
    tier: "Q2",
    status: "Accepted",
    url: "https://onlinelibrary.wiley.com/journal/16182863",
    pdf: "/Molecular-Pharming-Review.pdf",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    highlights: [
      "First-author, corresponding-author review accepted in Engineering in Life Sciences (Wiley), February 2026.",
      "Traces the evolution of molecular pharming and plant-based production of recombinant proteins, vaccines, and industrial enzymes.",
      "Surveys host organisms, genetic-engineering methods (including CRISPR/Cas9), and protein extraction and purification strategies.",
      "Weighs advantages against challenges of public perception, regulation, and economic sustainability, and maps future directions.",
    ],
  },
  {
    id: "chikv-rdrp-2024",
    title:
      "A structure-based drug design approach for the identification of antiviral compounds targeting the Chikungunya virus RdRp protein",
    authors:
      "Md. Hridoy Ahmed, Gagandeep Singh, Melvin Castrosanto, Alomgir Hossain, Md. Morshedul Islam Rifat, Sadia Hosna Rima, Vandana Gupta, Rajesh K. Kesharwani, Mariusz Jaremko, Abdul-Hamid Emwas, et al.",
    authorHighlight: "Md. Hridoy Ahmed",
    journal: "Chemical Physics Impact",
    year: 2024,
    volume: "8",
    pages: "100450",
    publisher: "Elsevier",
    type: "Research Article",
    domain: "Computational Drug Discovery",
    tier: "Q1",
    doi: "10.1016/j.chphi.2023.100450",
    url: "https://www.sciencedirect.com/science/article/pii/S266702242300289X",
    pdf: "https://hridoy.owlstown.net/publications/41576.pdf",
    researchgate:
      "https://www.researchgate.net/publication/376864118_A_Structure-Based_Drug_Design_Approach_for_the_Identification_of_Antiviral_Compounds_Targeting_the_Chikungunya_Virus_RdRp_Protein",
    highlights: [
      "Designed antiviral candidates through pharmacophore-based virtual screening and molecular docking.",
      "Carried out structural analysis, binding free-energy evaluation, and molecular dynamics simulation.",
      "Identified multi-target compounds with strong RdRp inhibitory potential.",
      "Published in a Q1 Elsevier journal as first author.",
    ],
  },
  {
    id: "mpox-vaccine-2023",
    title:
      "An immuno-informatics approach for annotation of hypothetical proteins and multi-epitope vaccine design against the Mpox virus",
    authors:
      "Md. Hridoy Ahmed, Gagandeep Singh, Melvin Castrosanto, Prawez Alam, Faizul Azam, et al.",
    authorHighlight: "Md. Hridoy Ahmed",
    journal: "Journal of Biomolecular Structure and Dynamics",
    year: 2023,
    volume: "42(10)",
    pages: "5288-5307",
    publisher: "Taylor & Francis",
    type: "Research Article",
    domain: "Immunoinformatics & Vaccine Design",
    tier: "Q1",
    doi: "10.1080/07391102.2023.2239921",
    url: "https://doi.org/10.1080/07391102.2023.2239921",
    pdf: "https://hridoy.owlstown.net/publications/41573.pdf",
    researchgate: "https://www.researchgate.net/profile/Md-Hridoy-Ahmed/research",
    highlights: [
      "Identified antigenic proteins through proteome-wide immunoinformatics screening.",
      "Designed a multi-epitope vaccine construct targeting Mpox viral proteins.",
      "Performed molecular docking with immune receptors, including TLR-4 and MHC alleles.",
      "Simulated immune responses using computational immunology tools.",
    ],
  },
];

export const publicationFilters: (PublicationType | "All")[] = [
  "All",
  "Research Article",
  "Review Article",
  "Conference Paper",
];
