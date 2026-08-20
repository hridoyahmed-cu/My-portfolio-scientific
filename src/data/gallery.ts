export type GalleryCategory =
  | "Lab & Bench"
  | "Conferences & Talks"
  | "Teaching & BioPC"
  | "Campus & Personal";

export type GalleryItem = {
  src: string;
  alt: string;
  /**
   * Untagged items fall through to "Campus & Personal" and sort last.
   *
   * Tagging is manual on purpose - only you can tell which of these frames show
   * bench work. Add `category: "Lab & Bench"` to the laboratory photographs
   * first; those are the ones that carry evidence, and they will move to the
   * front of the grid automatically. Replace the generated alt text with a real
   * caption at the same time ("Agarose gel, MMP3 amplicons, thesis cohort"
   * rather than "academic, research, and community moments (37)").
   */
  category?: GalleryCategory;
};

/** Display order: bench work first, personal photographs last. */
export const galleryCategories: GalleryCategory[] = [
  "Lab & Bench",
  "Conferences & Talks",
  "Teaching & BioPC",
  "Campus & Personal",
];

/* 178 photographs imported from the personal collection and optimised for
   the web (HEIC converted to JPG, auto-rotated via EXIF, resized to a
   1600px long edge, and compressed). The homepage "Gallery Highlights"
   carousel shows the first 12 entries. Reorder this array to change which
   photos appear, and which are featured. */

export const galleryItems: GalleryItem[] = [
 
  { src: "/gallery/g003.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (3)" },
  { src: "/gallery/g092.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (92)" },
  { src: "/gallery/g025.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (25)" },
  { src: "/gallery/g005.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (5)" },
  { src: "/gallery/g129.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (129)" },
  { src: "/gallery/g107.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (107)" },
  { src: "/gallery/g009.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (9)" },
  { src: "/gallery/g027.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (27)" },
  { src: "/gallery/g144.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (144)" },
  { src: "/gallery/g010.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (10)" },
  { src: "/gallery/g145.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (145)" },
  { src: "/gallery/g148.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (148)" },
  { src: "/gallery/g079.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (79)" },
  { src: "/gallery/g034.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (34)" },
  { src: "/gallery/g049.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (49)" },
  { src: "/gallery/g011.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (11)" },
  { src: "/gallery/g004.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (4)" },
  { src: "/gallery/g013.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (13)" },
  { src: "/gallery/g067.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (67)" },
  { src: "/gallery/g068.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (68)" },
  { src: "/gallery/g001.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (1)" },
  { src: "/gallery/g014.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (14)" },
  { src: "/gallery/g015.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (15)" },
  { src: "/gallery/g016.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (16)" },
  { src: "/gallery/g017.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (17)" },
  { src: "/gallery/g018.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (18)" },
  { src: "/gallery/g019.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (19)" },
  { src: "/gallery/g020.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (20)" },
  { src: "/gallery/g021.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (21)" },
  { src: "/gallery/g022.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (22)" },
  { src: "/gallery/g023.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (23)" },
  { src: "/gallery/g012.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (12)" },
  { src: "/gallery/g024.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (24)" },
  { src: "/gallery/g026.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (26)" },
  { src: "/gallery/g007.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (7)" },
  { src: "/gallery/g008.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (8)" },
  { src: "/gallery/g028.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (28)" },
  { src: "/gallery/g002.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (2)" },
  { src: "/gallery/g029.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (29)" },
  { src: "/gallery/g006.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (6)" },
  { src: "/gallery/g030.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (30)" },
  { src: "/gallery/g031.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (31)" },
  { src: "/gallery/g032.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (32)" },
  { src: "/gallery/g033.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (33)" },
  { src: "/gallery/g036.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (36)" },
  { src: "/gallery/g037.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (37)" },
  { src: "/gallery/g038.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (38)" },
  { src: "/gallery/g039.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (39)" },
  { src: "/gallery/g040.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (40)" },
  { src: "/gallery/g041.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (41)" },
  { src: "/gallery/g042.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (42)" },
  { src: "/gallery/g043.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (43)" },
  { src: "/gallery/g044.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (44)" },
  { src: "/gallery/g045.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (45)" },
  { src: "/gallery/g046.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (46)" },
  { src: "/gallery/g047.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (47)" },
  { src: "/gallery/g048.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (48)" },
  { src: "/gallery/g050.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (50)" },
  { src: "/gallery/g051.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (51)" },
  { src: "/gallery/g052.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (52)" },
  { src: "/gallery/g053.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (53)" },
  { src: "/gallery/g054.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (54)" },
  { src: "/gallery/g055.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (55)" },
  { src: "/gallery/g056.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (56)" },
  { src: "/gallery/g057.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (57)" },
  { src: "/gallery/g058.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (58)" },
  { src: "/gallery/g059.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (59)" },
  { src: "/gallery/g060.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (60)" },
  { src: "/gallery/g061.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (61)" },
  { src: "/gallery/g062.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (62)" },
  { src: "/gallery/g063.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (63)" },
  { src: "/gallery/g064.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (64)" },
  { src: "/gallery/g065.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (65)" },
  { src: "/gallery/g066.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (66)" },
  { src: "/gallery/g069.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (69)" },
  { src: "/gallery/g070.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (70)" },
  { src: "/gallery/g071.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (71)" },
  { src: "/gallery/g072.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (72)" },
  { src: "/gallery/g073.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (73)" },
  { src: "/gallery/g074.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (74)" },
  { src: "/gallery/g075.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (75)" },
  { src: "/gallery/g076.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (76)" },
  { src: "/gallery/g077.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (77)" },
  { src: "/gallery/g078.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (78)" },
  { src: "/gallery/g080.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (80)" },
  { src: "/gallery/g081.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (81)" },
  { src: "/gallery/g082.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (82)" },
  { src: "/gallery/g083.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (83)" },
  { src: "/gallery/g084.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (84)" },
  { src: "/gallery/g085.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (85)" },
  { src: "/gallery/g086.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (86)" },
  { src: "/gallery/g087.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (87)" },
  { src: "/gallery/g088.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (88)" },
  { src: "/gallery/g089.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (89)" },
  { src: "/gallery/g090.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (90)" },
  { src: "/gallery/g091.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (91)" },
  { src: "/gallery/g093.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (93)" },
  { src: "/gallery/g094.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (94)" },
  { src: "/gallery/g095.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (95)" },
  { src: "/gallery/g096.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (96)" },
  { src: "/gallery/g097.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (97)" },
  { src: "/gallery/g098.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (98)" },
  { src: "/gallery/g099.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (99)" },
  { src: "/gallery/g100.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (100)" },
  { src: "/gallery/g101.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (101)" },
  { src: "/gallery/g102.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (102)" },
  { src: "/gallery/g103.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (103)" },
  { src: "/gallery/g104.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (104)" },
  { src: "/gallery/g105.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (105)" },
  { src: "/gallery/g106.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (106)" },
  { src: "/gallery/g108.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (108)" },
  { src: "/gallery/g109.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (109)" },
  { src: "/gallery/g110.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (110)" },
  { src: "/gallery/g111.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (111)" },
  { src: "/gallery/g112.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (112)" },
  { src: "/gallery/g113.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (113)" },
  { src: "/gallery/g114.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (114)" },
  { src: "/gallery/g115.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (115)" },
  { src: "/gallery/g116.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (116)" },
  { src: "/gallery/g117.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (117)" },
  { src: "/gallery/g118.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (118)" },
  { src: "/gallery/g119.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (119)" },
  { src: "/gallery/g120.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (120)" },
  { src: "/gallery/g121.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (121)" },
  { src: "/gallery/g122.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (122)" },
  { src: "/gallery/g123.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (123)" },
  { src: "/gallery/g124.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (124)" },
  { src: "/gallery/g125.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (125)" },
  { src: "/gallery/g126.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (126)" },
  { src: "/gallery/g127.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (127)" },
  { src: "/gallery/g128.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (128)" },
  { src: "/gallery/g130.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (130)" },
  { src: "/gallery/g131.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (131)" },
  { src: "/gallery/g132.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (132)" },
  { src: "/gallery/g133.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (133)" },
  { src: "/gallery/g134.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (134)" },
  { src: "/gallery/g135.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (135)" },
  { src: "/gallery/g136.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (136)" },
  { src: "/gallery/g137.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (137)" },
  { src: "/gallery/g138.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (138)" },
  { src: "/gallery/g139.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (139)" },
  { src: "/gallery/g140.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (140)" },
  { src: "/gallery/g141.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (141)" },
  { src: "/gallery/g142.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (142)" },
  { src: "/gallery/g143.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (143)" },
  { src: "/gallery/g146.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (146)" },
  { src: "/gallery/g147.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (147)" },
  { src: "/gallery/g149.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (149)" },
  { src: "/gallery/g150.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (150)" },
  { src: "/gallery/g151.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (151)" },
  { src: "/gallery/g152.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (152)" },
  { src: "/gallery/g153.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (153)" },
  { src: "/gallery/g154.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (154)" },
  { src: "/gallery/g155.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (155)" },
  { src: "/gallery/g156.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (156)" },
  { src: "/gallery/g157.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (157)" },
  { src: "/gallery/g158.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (158)" },
  { src: "/gallery/g159.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (159)" },
  { src: "/gallery/g160.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (160)" },
  { src: "/gallery/g161.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (161)" },
  { src: "/gallery/g162.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (162)" },
  { src: "/gallery/g163.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (163)" },
  { src: "/gallery/g164.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (164)" },
  { src: "/gallery/g165.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (165)" },
  { src: "/gallery/g166.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (166)" },
  { src: "/gallery/g167.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (167)" },
  { src: "/gallery/g168.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (168)" },
  { src: "/gallery/g169.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (169)" },
  { src: "/gallery/g170.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (170)" },
  { src: "/gallery/g171.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (171)" },
  { src: "/gallery/g172.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (172)" },
  { src: "/gallery/g173.jpg", alt: "Md. Hridoy Ahmed - academic, research, and community moments (173)" },
  { src: "/gallery/g174.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (174)" },
  { src: "/gallery/g175.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (175)" },
  { src: "/gallery/g176.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (176)" },
  { src: "/gallery/g177.webp", alt: "Md. Hridoy Ahmed - academic, research, and community moments (177)" },
];

const categoryRank = (item: GalleryItem) => {
  const idx = galleryCategories.indexOf(item.category ?? "Campus & Personal");
  return idx === -1 ? galleryCategories.length : idx;
};

/**
 * The gallery in display order - laboratory frames first.
 *
 * Until items are tagged this is a stable no-op over the existing order, so
 * nothing changes visually. Tag one photograph "Lab & Bench" and it moves to
 * the front on the next build.
 */
export const orderedGalleryItems: GalleryItem[] = [...galleryItems].sort(
  (a, b) => categoryRank(a) - categoryRank(b),
);

/** Laboratory photographs, for the techniques page. */
export const labGalleryItems: GalleryItem[] = galleryItems.filter(
  (i) => i.category === "Lab & Bench",
);
