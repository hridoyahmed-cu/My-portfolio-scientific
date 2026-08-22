export type GalleryCategory =
  | "Lab & Bench"
  | "Conferences & Talks"
  | "Teaching & BioPC"
  | "Academic Milestones"
  | "Awards & Leadership";

export type GalleryItem = {
  src: string;
  /** Real caption. Shown under the photograph and used as its alt text. */
  alt: string;
  category: GalleryCategory;
};

/** Display order: bench work first, then the podium, the classroom, the record. */
export const galleryCategories: GalleryCategory[] = [
  "Lab & Bench",
  "Conferences & Talks",
  "Teaching & BioPC",
  "Academic Milestones",
  "Awards & Leadership",
];

/*
 * Curated from a 176-photograph import.
 *
 * The import was a phone roll: beaches, waterfalls, bus stops, and eleven near
 * identical frames of the same thesis handover. Those are gone. What is left is
 * only work - the bench, the podium, the classroom, the degree, and the service
 * - and every frame now carries a caption saying what it actually shows, since
 * an uncaptioned photograph on a research site is decoration, not evidence.
 *
 * Adding one: put it in its category block, write a caption that names the
 * place or the instrument, and keep the filename (`gNNN`) - the homepage
 * glimpse below selects by filename.
 */
export const galleryItems: GalleryItem[] = [
  // ---------------------------------------------------------------- Lab & Bench
  {
    src: "/gallery/g025.webp",
    alt: "Reading a real-time PCR amplification plot at the QuantStudio, Functional Genomics & Proteomics Laboratory, University of Chittagong.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g027.webp",
    alt: "Starting a run on the thermal cycler during a variant-screening batch.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g026.webp",
    alt: "Loading a PCR plate into the thermal cycler at the Functional Genomics & Proteomics Laboratory.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g029.webp",
    alt: "Preparing samples at the benchtop centrifuge with a colleague.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g031.webp",
    alt: "Setting up a PCR reaction at the bench alongside the laboratory supervisor.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g030.webp",
    alt: "A working afternoon in the molecular biology laboratory.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g033.webp",
    alt: "The Functional Genomics & Proteomics Laboratory group, University of Chittagong.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g034.webp",
    alt: "In the Sanger Sequencing Laboratory with the research team.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g055.webp",
    alt: "Gowned for the molecular biology suite during the National Institute of Biotechnology internship.",
    category: "Lab & Bench",
  },
  {
    src: "/gallery/g080.webp",
    alt: "In full PPE at the RT-PCR laboratory, Department of Microbiology, Shaheed Syed Nazrul Islam Medical College - COVID-19 testing service.",
    category: "Lab & Bench",
  },

  // -------------------------------------------------------- Conferences & Talks
  {
    src: "/gallery/g085.webp",
    alt: "Beside the conference poster on non-structural polyprotein 4 (nsP4) RdRp inhibitors for Chikungunya virus - the study later published as a first-author paper.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g092.webp",
    alt: "Presenting a bioinformatics workflow at a BCSIR and BRiCM scientific workshop, Dhaka.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g119.webp",
    alt: "At the poster session with the genome-wide breast cancer polymorphism study and the SPP1 lung cancer biomarker analysis.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g068.webp",
    alt: "Walking the judges through a poster on beta-cell regeneration through stem cell therapy.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g088.webp",
    alt: "At the 1st RSG Bangladesh CompBio Symposium, Bangladesh Reference Institute for Chemical Measurements, March 2023.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g091.webp",
    alt: "In the auditorium during the CompBio Symposium sessions.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g084.webp",
    alt: "With the delegation at the 1st Jamal Nazrul Islam National Conference for Young Researchers, University of Chittagong.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g118.webp",
    alt: "With fellow presenters in the conference poster hall.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g067.webp",
    alt: "Presenting to a full classroom at BIO-STEE 2019.",
    category: "Conferences & Talks",
  },
  {
    src: "/gallery/g049.webp",
    alt: "Presenting slides at a departmental seminar session.",
    category: "Conferences & Talks",
  },

  // ---------------------------------------------------------- Teaching & BioPC
  {
    src: "/gallery/g129.webp",
    alt: "Teaching a free bioinformatics workshop to a full lecture hall.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g143.webp",
    alt: "Lecturing at the BioPC free workshop on bioinformatics and computer-aided drug design.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g126.webp",
    alt: "Walking participants through a database search on screen during a BioPC workshop.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g178.webp",
    alt: "BioPC course poster: R Programming for Biologists, with Hridoy Ahmed as instructor.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g179.webp",
    alt: "BioPC Bioinformatics Research Internship 4.0 - instructors' panel.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g104.webp",
    alt: "BioPC free workshop poster: Bioinformatics & Computer-Aided Drug Design, Department of Botany, University of Chittagong, June 2024.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g102.webp",
    alt: "BioPC workshop poster: Basic Bioinformatics to Publications, October 2023.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g013.webp",
    alt: "BioPC session poster: Research Tools & Methodology, taught as instructor.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g076.webp",
    alt: "Running a hands-on laboratory class for undergraduate students.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g037.webp",
    alt: "Demonstrating a technique to a group of trainees.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g122.webp",
    alt: "Invigilating the hall during a nationwide BioPC olympiad round.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g074.webp",
    alt: "Supervising candidates sitting the Biology & Bioinformatics Olympiad.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g093.webp",
    alt: "Handing a prize to a winner of the 1st Biology & Bioinformatics Olympiad.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g096.webp",
    alt: "At the 1st Biology & Bioinformatics Olympiad, organised for students nationwide.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g123.webp",
    alt: "Participants of a BioPC free workshop after the closing session.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g128.webp",
    alt: "Presenting a book to a workshop participant.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g134.webp",
    alt: "With the chief guest at the opening of a BioPC workshop.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g144.webp",
    alt: "BioPC announcement of the Mpox multi-epitope vaccine paper, published at impact factor 5.325.",
    category: "Teaching & BioPC",
  },
  {
    src: "/gallery/g099.webp",
    alt: "Announced as Head of the Coordinators at BioPC.",
    category: "Teaching & BioPC",
  },

  // ------------------------------------------------------- Academic Milestones
  {
    src: "/gallery/g003.webp",
    alt: "Outside the Department of Genetic Engineering and Biotechnology, University of Chittagong, with the bound M.Sc. thesis.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g039.webp",
    alt: "The bound M.Sc. theses on submission day.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g018.webp",
    alt: "Submitting the M.Sc. thesis with the supervisor at the department.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g022.webp",
    alt: "At the 5th Convocation of the University of Chittagong, Faculty of Biological Sciences, 2025.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g019.webp",
    alt: "The cap toss at convocation.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g020.webp",
    alt: "With faculty and classmates on convocation day at the department.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g011.webp",
    alt: "In academic dress on the University of Chittagong campus.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g009.webp",
    alt: "The graduating cohort of the Department of Genetic Engineering and Biotechnology.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g105.webp",
    alt: "A departmental research meeting with faculty and students.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g174.webp",
    alt: "Sitting on a departmental selection panel.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g166.webp",
    alt: "In the rice research glasshouse with faculty during a field facility visit.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g114.webp",
    alt: "The cohort on a research institute study tour.",
    category: "Academic Milestones",
  },
  {
    src: "/gallery/g112.webp",
    alt: "Inside the glasshouse during a study visit to a plant research facility.",
    category: "Academic Milestones",
  },

  // -------------------------------------------------------- Awards & Leadership
  {
    src: "/gallery/g107.webp",
    alt: "Receiving a certificate of appreciation from senior faculty at the department.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g172.webp",
    alt: "The BioPC team's plaque to its head coordinator, inscribed for the researcher who inspired their own research dreams.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g170.webp",
    alt: "With the BioPC appreciation plaque, presented by the team.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g010.webp",
    alt: "Receiving a token of appreciation on stage at a departmental programme.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g071.webp",
    alt: "With the certificates from the Startup Chattogram Bootcamp on innovation, creativity and entrepreneurship.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g058.webp",
    alt: "At Udbhaboker Khoje (In Search of Innovators) Season 2, a national innovation competition, 2019.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g072.webp",
    alt: "Working through an idea board with the team at an entrepreneurship bootcamp.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g073.webp",
    alt: "Pitching to the room during a bootcamp session.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g061.webp",
    alt: "Speaking at a student programme on campus.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g077.webp",
    alt: "Preparing hand sanitiser for distribution during the COVID-19 response.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g078.webp",
    alt: "Putting up a public health awareness notice on campus.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g075.webp",
    alt: "With the volunteer team at a campus science event.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g079.webp",
    alt: "Presenting a crest to a guest at a community programme.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g103.webp",
    alt: "Presenting a crest on behalf of the team.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g116.webp",
    alt: "Presenting a crest to a faculty member at the department.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g147.webp",
    alt: "The research team with faculty after a departmental recognition.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g082.webp",
    alt: "With an environmental awareness poster - be a part of the solution, not a part of the pollution.",
    category: "Awards & Leadership",
  },
  {
    src: "/gallery/g121.jpg",
    alt: "With the wreath at the Shaheed Minar on Language Martyrs' Day.",
    category: "Awards & Leadership",
  },
];

const categoryRank = (item: GalleryItem) =>
  galleryCategories.indexOf(item.category);

/** The gallery in display order - laboratory frames first. */
export const orderedGalleryItems: GalleryItem[] = [...galleryItems].sort(
  (a, b) => categoryRank(a) - categoryRank(b),
);

/** Laboratory photographs, for the techniques page. */
export const labGalleryItems: GalleryItem[] = galleryItems.filter(
  (i) => i.category === "Lab & Bench",
);

/**
 * Research-focused selection for the homepage glimpse.
 *
 * Fourteen frames chosen for what they show rather than how they look: the
 * instruments lead, then the bench, the recognition, the podium and the lecture
 * hall, and finally the four BioPC course posters that carry the training
 * record. The first two run at double width.
 */
export const researchGlimpse: GalleryItem[] = [
  "/gallery/g025.webp",
  "/gallery/g027.webp",
  "/gallery/g107.webp",
  "/gallery/g029.webp",
  "/gallery/g030.webp",
  "/gallery/g026.webp",
  "/gallery/g010.webp",
  "/gallery/g092.webp",
  "/gallery/g129.webp",
  "/gallery/g003.webp",
  "/gallery/g178.webp",
  "/gallery/g179.webp",
  "/gallery/g102.webp",
  "/gallery/g104.webp",
].flatMap((src) => {
  const item = galleryItems.find((g) => g.src === src);
  return item ? [item] : [];
});
