/**
 * Primary laboratory data from the MMP variant study.
 *
 * These are the site's wet-lab evidence: an agarose gel, a Sanger
 * electropherogram, and a per-base quality profile - all generated at the
 * Functional Genomics & Proteomics Laboratory, University of Chittagong, for
 * the M.Sc. thesis on MMP variants in apical periodontitis influenced by
 * diabetes.
 *
 * The chromatogram and quality plot are rendered directly from the raw .ab1
 * files (18 MMP3 forward reads, SeqStudio), so every point on them is measured
 * data rather than illustration.
 */

export type LabFigure = {
  id: string;
  /** Figure number as displayed, e.g. "Figure 1". */
  label: string;
  title: string;
  src: string;
  /**
   * Card-sized rendering. The full figures are 1180px wide; scaled into a
   * ~330px card the base letters drop to about 3px. These variants carry fewer
   * bases and larger type so the thumbnail still reads at card size.
   */
  thumb: string;
  alt: string;
  /** What the figure shows, in the register a reviewer expects. */
  caption: string;
  /** Method line - how the data was produced. */
  method: string;
  /** Short factual read-outs pulled from the data itself. */
  readouts: { label: string; value: string }[];
  /** Wider than tall figures render full width; the gel is portrait-ish. */
  wide: boolean;
};

export const labFigures: LabFigure[] = [
  {
    id: "pcr-gel",
    label: "Figure 1",
    title: "PCR amplification of the MMP3 target region",
    src: "/lab/mmp3-pcr-gel.jpg",
    thumb: "/lab/mmp3-pcr-gel.jpg",
    alt:
      "Agarose gel electrophoresis showing a 100 bp ladder followed by fifteen lanes - three controls (C1–C3) and twelve patients (P1–P12) - each with a single clean band at 986 bp, between the 500 bp and 1000 bp ladder markers.",
    caption:
      "A single, clean 986 bp product in every lane, with no primer dimer and no secondary bands. Controls (C1–C3) and patients (P1–P12) amplify at equal intensity, confirming the reaction was specific and consistent across the plate before any sample went forward to sequencing.",
    method:
      "Genomic DNA extracted from whole blood; MMP3 target amplified by PCR and resolved on agarose gel against a 100 bp ladder.",
    readouts: [
      { label: "Amplicon", value: "986 bp" },
      { label: "Lanes", value: "3 controls + 12 patients" },
      { label: "Specificity", value: "Single band, all lanes" },
    ],
    wide: false,
  },
  {
    id: "chromatogram",
    label: "Figure 2",
    title: "Sanger electropherogram with a heterozygous call",
    src: "/lab/mmp3-chromatogram.svg",
    thumb: "/lab/mmp3-chromatogram-thumb.svg",
    alt:
      "Sanger chromatogram across 35 bases of an MMP3 forward read. Single sharp peaks flank a highlighted position where the cytosine and thymine traces reach almost equal height, giving an IUPAC Y heterozygous call.",
    caption:
      "Thirty-five bases from the MMP3 forward read of sample P36. The highlighted position carries two overlapping peaks of near-equal height - 45% C against 44% T - which the base caller reports as IUPAC Y. Flanking bases call at Q58 and Q46, so the ambiguity is genuine heterozygosity rather than poor signal. The same position resolves as a heterozygote in all five high-quality reads on the plate.",
    method:
      "Rendered directly from the raw .ab1 trace: four dye channels, peak locations, and per-base quality read from the ABIF record.",
    readouts: [
      { label: "Call", value: "Heterozygous C/T" },
      { label: "Peak ratio", value: "45% C / 44% T" },
      { label: "Flanking quality", value: "Q58 and Q46" },
    ],
    wide: true,
  },
  {
    id: "read-quality",
    label: "Figure 3",
    title: "Per-base quality across 18 Sanger reads",
    src: "/lab/mmp3-read-quality.svg",
    thumb: "/lab/mmp3-read-quality-thumb.svg",
    alt:
      "Quality control plot of mean Phred score against base position for eighteen MMP3 reads, with a shaded percentile band. Quality climbs steeply over the first thirty bases, holds above Q30 through the middle of the read, and falls away after roughly base 700.",
    caption:
      "Mean Phred quality by base position across all 18 MMP3 reads, with the 12th–88th percentile band showing spread between samples. The profile is the expected Sanger shape: an unusable leader, a high-confidence plateau above Q30 from base 32 to base 708, then decay. Variant calls were taken only from the plateau, and every candidate was confirmed on the reverse read.",
    method:
      "Phred scores read from the PCON record of each .ab1 file; no smoothing applied.",
    readouts: [
      { label: "Reads", value: "18 · mean 965 bp" },
      { label: "Q30 plateau", value: "Base 32 – 708" },
      { label: "Bases ≥ Q20", value: "56.4% of read" },
    ],
    wide: true,
  },
];

export const labFiguresNote =
  "Primary data from the M.Sc. thesis cohort, generated at the Functional Genomics & Proteomics Laboratory, University of Chittagong. Patient and control samples carry study codes only.";
