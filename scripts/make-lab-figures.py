"""Render a Sanger chromatogram and a per-read QC plot as SVG.

Source data: Md. Hridoy Ahmed's own MMP3 forward reads from the apical
periodontitis / diabetes cohort (SeqStudio, FGPL, University of Chittagong).
Nothing here is synthetic - every point is read from the .ab1 files.

Colours are mid-tone so the figures stay legible on both light and dark
backgrounds; the conventional black for G is replaced by amber for that reason.
"""
import glob
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import abif  # noqa: E402

SRC = (
    r"C:\Users\LENOVO\Desktop\OneDrive - University of Chittagong\DESKTOP_ALL"
    r"\BioPC_projects\APICAL PERIODONTITS_LKA\Sequence data"
)
OUT = (
    r"C:\Users\LENOVO\Desktop\OneDrive - University of Chittagong\DESKTOP_ALL"
    r"\My portfolio scientific\public\lab"
)

BASE_COLOR = {"A": "#16a34a", "C": "#2563eb", "G": "#ca8a04", "T": "#dc2626"}
AXIS = "#64748b"
FAINT = "#94a3b8"


def esc(s):
    return (
        str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    )


def reads():
    fs = sorted(glob.glob(os.path.join(SRC, "**", "*MHA*MMP3*.ab1"), recursive=True))
    return [(os.path.basename(f).split("_MMP3_F_")[1].split("_")[0], f) for f in fs]


# --------------------------------------------------------------------------- #
# Figure 1 - chromatogram
# --------------------------------------------------------------------------- #
def chromatogram(path, sample, centre, flank=17):
    d = abif.read(path)
    seq, loc, qual, tr = d["seq"], d["loc"], d["qual"], d["traces"]
    lo, hi = centre - flank, centre + flank + 1
    s0, s1 = loc[lo], loc[hi - 1]

    W, H = 1180, 340
    ml, mr, mt, mb = 56, 20, 58, 66          # margins
    pw, ph = W - ml - mr, H - mt - mb

    peak = max(
        max(tr[b][s0:s1 + 1]) for b in "ACGT"
    ) * 1.06

    def px(sample_idx):
        return ml + (sample_idx - s0) / (s1 - s0) * pw

    def py(v):
        return mt + ph - (v / peak) * ph

    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        f'role="img" aria-labelledby="chromTitle chromDesc" '
        f'font-family="ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif">',
        f'<title id="chromTitle">Sanger chromatogram, MMP3 forward read, sample {esc(sample)}</title>',
        f'<desc id="chromDesc">Electropherogram across {hi - lo} bases showing a '
        f'heterozygous C/T call at the highlighted position, with clean single '
        f'peaks either side.</desc>',
    ]

    # highlight band behind the heterozygous position
    hl0, hl1 = px(loc[centre] - 6), px(loc[centre] + 6)
    out.append(
        f'<rect x="{hl0:.1f}" y="{mt - 26:.1f}" width="{hl1 - hl0:.1f}" '
        f'height="{ph + 26:.1f}" fill="#f59e0b" opacity="0.13" rx="3"/>'
    )

    # baseline
    out.append(
        f'<line x1="{ml}" y1="{mt + ph:.1f}" x2="{ml + pw}" y2="{mt + ph:.1f}" '
        f'stroke="{AXIS}" stroke-width="1" opacity="0.45"/>'
    )

    # four dye traces
    for b in "ACGT":
        pts = " ".join(
            f"{px(i):.1f},{py(tr[b][i]):.1f}" for i in range(s0, s1 + 1)
        )
        out.append(
            f'<polyline points="{pts}" fill="none" stroke="{BASE_COLOR[b]}" '
            f'stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>'
        )

    # base letters + tick marks
    for i in range(lo, hi):
        x = px(loc[i])
        c = seq[i]
        col = BASE_COLOR.get(c, "#7c3aed")   # ambiguity codes in violet
        weight = "700" if i == centre else "500"
        size = 15 if i == centre else 13
        out.append(
            f'<text x="{x:.1f}" y="{mt + ph + 22:.1f}" text-anchor="middle" '
            f'font-size="{size}" font-weight="{weight}" fill="{col}" '
            f'font-family="ui-monospace,SFMono-Regular,Menlo,monospace">{esc(c)}</text>'
        )
        if i % 5 == 0:
            out.append(
                f'<text x="{x:.1f}" y="{mt + ph + 42:.1f}" text-anchor="middle" '
                f'font-size="10.5" fill="{FAINT}">{i}</text>'
            )

    # callout for the heterozygous base
    cx = px(loc[centre])
    out.append(
        f'<text x="{cx:.1f}" y="{mt - 32:.1f}" text-anchor="middle" font-size="12.5" '
        f'font-weight="700" fill="#b45309">heterozygous C/T</text>'
    )
    out.append(
        f'<text x="{cx:.1f}" y="{mt - 16:.1f}" text-anchor="middle" font-size="11" '
        f'fill="{AXIS}">IUPAC Y · 45% C / 44% T</text>'
    )

    # legend
    lx = ml
    for b in "ACGT":
        out.append(
            f'<rect x="{lx}" y="14" width="11" height="11" rx="2.5" fill="{BASE_COLOR[b]}"/>'
        )
        out.append(
            f'<text x="{lx + 16}" y="24" font-size="12" fill="{AXIS}">{b}</text>'
        )
        lx += 44
    out.append(
        f'<text x="{W - mr}" y="24" text-anchor="end" font-size="11.5" fill="{FAINT}">'
        f'MMP3 forward read · sample {esc(sample)} · SeqStudio · FGPL, University of Chittagong</text>'
    )
    out.append(
        f'<text x="{ml}" y="{H - 8}" font-size="11" fill="{FAINT}">'
        f'Base position in read (flanking bases Q58 and Q46)</text>'
    )
    out.append("</svg>")
    return "\n".join(out)


# --------------------------------------------------------------------------- #
# Figure 2 - per-position quality across every read (FastQC-style)
# --------------------------------------------------------------------------- #
def qc_plot(items, upto=900):
    data = []
    for name, f in items:
        d = abif.read(f)
        data.append((name, d["qual"]))

    W, H = 1180, 400
    ml, mr, mt, mb = 58, 22, 40, 62
    pw, ph = W - ml - mr, H - mt - mb
    QMAX = 62

    def px(i):
        return ml + i / upto * pw

    def py(q):
        return mt + ph - min(q, QMAX) / QMAX * ph

    # per-position min / mean / max across reads
    mean, lo_v, hi_v = [], [], []
    for i in range(upto):
        vals = [q[i] for _, q in data if i < len(q)]
        if not vals:
            vals = [0]
        vals.sort()
        mean.append(sum(vals) / len(vals))
        lo_v.append(vals[len(vals) // 8])          # ~12th percentile
        hi_v.append(vals[-1 - len(vals) // 8])     # ~88th percentile

    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        f'role="img" aria-labelledby="qcTitle qcDesc" '
        f'font-family="ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif">',
        '<title id="qcTitle">Per-base sequence quality across 18 MMP3 Sanger reads</title>',
        f'<desc id="qcDesc">Mean Phred quality by base position across {len(data)} reads, '
        f'with the 12th-88th percentile band. Quality rises above Q30 by base 60 and '
        f'holds to roughly base 650.</desc>',
    ]

    # quality zone bands
    for y0, y1, col, lab in (
        (30, QMAX, "#16a34a", "good"),
        (20, 30, "#ca8a04", "acceptable"),
        (0, 20, "#dc2626", "poor"),
    ):
        out.append(
            f'<rect x="{ml}" y="{py(y1):.1f}" width="{pw}" '
            f'height="{py(y0) - py(y1):.1f}" fill="{col}" opacity="0.07"/>'
        )

    # gridlines + y axis
    for q in (0, 10, 20, 30, 40, 50, 60):
        y = py(q)
        out.append(
            f'<line x1="{ml}" y1="{y:.1f}" x2="{ml + pw}" y2="{y:.1f}" '
            f'stroke="{AXIS}" stroke-width="0.7" opacity="0.22"/>'
        )
        out.append(
            f'<text x="{ml - 10}" y="{y + 4:.1f}" text-anchor="end" font-size="11" '
            f'fill="{FAINT}">{q}</text>'
        )
    for i in range(0, upto + 1, 100):
        x = px(i)
        out.append(
            f'<text x="{x:.1f}" y="{mt + ph + 20:.1f}" text-anchor="middle" '
            f'font-size="11" fill="{FAINT}">{i}</text>'
        )

    # percentile band
    band = " ".join(f"{px(i):.1f},{py(hi_v[i]):.1f}" for i in range(upto))
    band += " " + " ".join(
        f"{px(i):.1f},{py(lo_v[i]):.1f}" for i in range(upto - 1, -1, -1)
    )
    out.append(f'<polygon points="{band}" fill="#2563eb" opacity="0.16"/>')

    # mean line
    line = " ".join(f"{px(i):.1f},{py(mean[i]):.1f}" for i in range(upto))
    out.append(
        f'<polyline points="{line}" fill="none" stroke="#2563eb" stroke-width="1.9" '
        f'stroke-linejoin="round"/>'
    )

    # Q20 / Q30 reference lines
    for q, lab, col in ((30, "Q30", "#16a34a"), (20, "Q20", "#ca8a04")):
        y = py(q)
        out.append(
            f'<line x1="{ml}" y1="{y:.1f}" x2="{ml + pw}" y2="{y:.1f}" stroke="{col}" '
            f'stroke-width="1.3" stroke-dasharray="6 4" opacity="0.85"/>'
        )
        out.append(
            f'<text x="{ml + pw - 4}" y="{y - 6:.1f}" text-anchor="end" font-size="11" '
            f'font-weight="600" fill="{col}">{lab}</text>'
        )

    # axis labels
    out.append(
        f'<text x="{ml}" y="24" font-size="12.5" font-weight="600" fill="{AXIS}">'
        f'Mean Phred quality by base position - {len(data)} MMP3 reads</text>'
    )
    out.append(
        f'<text x="{W - mr}" y="24" text-anchor="end" font-size="11.5" fill="{FAINT}">'
        f'shaded band = 12th–88th percentile across reads</text>'
    )
    out.append(
        f'<text x="{ml + pw / 2:.0f}" y="{H - 22}" text-anchor="middle" font-size="11.5" '
        f'fill="{FAINT}">Base position in read</text>'
    )
    out.append(
        f'<text x="16" y="{mt + ph / 2:.0f}" font-size="11.5" fill="{FAINT}" '
        f'transform="rotate(-90 16 {mt + ph / 2:.0f})" text-anchor="middle">Phred quality</text>'
    )
    out.append("</svg>")

    stats = {
        "reads": len(data),
        "mean_len": round(sum(len(q) for _, q in data) / len(data)),
        "mean_q": round(sum(sum(q) / len(q) for _, q in data) / len(data), 1),
        "pct_q20": round(
            100 * sum(sum(1 for x in q if x >= 20) / len(q) for _, q in data) / len(data), 1
        ),
    }
    return "\n".join(out), stats


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    items = reads()
    p36 = [f for n, f in items if n == "P36"][0]

    svg = chromatogram(p36, "P36", centre=186)
    open(os.path.join(OUT, "mmp3-chromatogram.svg"), "w", encoding="utf-8").write(svg)

    svg, stats = qc_plot(items)
    open(os.path.join(OUT, "mmp3-read-quality.svg"), "w", encoding="utf-8").write(svg)

    print("wrote SVGs to", OUT)
    print("QC stats:", stats)


# --------------------------------------------------------------------------- #
# Card-sized variants
#
# The full figures are 1180px wide. Dropped into a ~330px card they scale to
# roughly 95px tall, which makes the base letters about 3px - unreadable. These
# compact renderings carry fewer bases and proportionally larger type so the
# thumbnail still reads as a chromatogram / quality curve at card size.
# --------------------------------------------------------------------------- #
def chromatogram_thumb(path, sample, centre, flank=6):
    d = abif.read(path)
    seq, loc, tr = d["seq"], d["loc"], d["traces"]
    lo, hi = centre - flank, centre + flank + 1
    s0, s1 = loc[lo], loc[hi - 1]
    W, H = 520, 300
    ml, mr, mt, mb = 16, 16, 52, 52
    pw, ph = W - ml - mr, H - mt - mb
    peak = max(max(tr[b][s0:s1 + 1]) for b in "ACGT") * 1.06

    def px(i):
        return ml + (i - s0) / (s1 - s0) * pw

    def py(v):
        return mt + ph - (v / peak) * ph

    o = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" '
        f'aria-label="Sanger chromatogram detail showing a heterozygous C and T double peak" '
        f'font-family="ui-sans-serif,system-ui,sans-serif">'
    ]
    hl0, hl1 = px(loc[centre] - 6), px(loc[centre] + 6)
    o.append(
        f'<rect x="{hl0:.1f}" y="{mt - 20:.1f}" width="{hl1 - hl0:.1f}" '
        f'height="{ph + 20:.1f}" fill="#f59e0b" opacity="0.15" rx="4"/>'
    )
    o.append(
        f'<line x1="{ml}" y1="{mt + ph:.1f}" x2="{ml + pw}" y2="{mt + ph:.1f}" '
        f'stroke="{AXIS}" stroke-width="1.2" opacity="0.45"/>'
    )
    for b in "ACGT":
        pts = " ".join(f"{px(i):.1f},{py(tr[b][i]):.1f}" for i in range(s0, s1 + 1))
        o.append(
            f'<polyline points="{pts}" fill="none" stroke="{BASE_COLOR[b]}" '
            f'stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"/>'
        )
    for i in range(lo, hi):
        c = seq[i]
        col = BASE_COLOR.get(c, "#7c3aed")
        big = i == centre
        o.append(
            f'<text x="{px(loc[i]):.1f}" y="{mt + ph + 30:.1f}" text-anchor="middle" '
            f'font-size="{27 if big else 22}" font-weight="{800 if big else 600}" '
            f'fill="{col}" font-family="ui-monospace,Menlo,monospace">{esc(c)}</text>'
        )
    cx = px(loc[centre])
    o.append(
        f'<text x="{cx:.1f}" y="{mt - 26:.1f}" text-anchor="middle" font-size="21" '
        f'font-weight="700" fill="#b45309">heterozygous C/T</text>'
    )
    o.append(
        f'<text x="{cx:.1f}" y="{mt - 6:.1f}" text-anchor="middle" font-size="17" '
        f'fill="{AXIS}">45% C · 44% T</text>'
    )
    o.append("</svg>")
    return "\n".join(o)


def qc_thumb(items, upto=900):
    data = [abif.read(f)["qual"] for _, f in items]
    W, H = 520, 300
    ml, mr, mt, mb = 46, 14, 30, 46
    pw, ph = W - ml - mr, H - mt - mb
    QMAX = 60

    def px(i):
        return ml + i / upto * pw

    def py(q):
        return mt + ph - min(q, QMAX) / QMAX * ph

    mean = []
    for i in range(upto):
        v = [q[i] for q in data if i < len(q)] or [0]
        mean.append(sum(v) / len(v))

    o = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" '
        f'aria-label="Read quality curve rising above Q30 and falling after base 700" '
        f'font-family="ui-sans-serif,system-ui,sans-serif">'
    ]
    for y0, y1, col in ((30, QMAX, "#16a34a"), (20, 30, "#ca8a04"), (0, 20, "#dc2626")):
        o.append(
            f'<rect x="{ml}" y="{py(y1):.1f}" width="{pw}" '
            f'height="{py(y0) - py(y1):.1f}" fill="{col}" opacity="0.09"/>'
        )
    for q in (0, 20, 40, 60):
        y = py(q)
        o.append(
            f'<line x1="{ml}" y1="{y:.1f}" x2="{ml + pw}" y2="{y:.1f}" stroke="{AXIS}" '
            f'stroke-width="0.9" opacity="0.25"/>'
        )
        o.append(
            f'<text x="{ml - 8}" y="{y + 6:.1f}" text-anchor="end" font-size="16" '
            f'fill="{FAINT}">{q}</text>'
        )
    area = f"{px(0):.1f},{py(0):.1f} " + " ".join(
        f"{px(i):.1f},{py(mean[i]):.1f}" for i in range(upto)
    ) + f" {px(upto - 1):.1f},{py(0):.1f}"
    o.append(f'<polygon points="{area}" fill="#2563eb" opacity="0.15"/>')
    o.append(
        '<polyline points="'
        + " ".join(f"{px(i):.1f},{py(mean[i]):.1f}" for i in range(upto))
        + f'" fill="none" stroke="#2563eb" stroke-width="3.4" stroke-linejoin="round"/>'
    )
    y30 = py(30)
    o.append(
        f'<line x1="{ml}" y1="{y30:.1f}" x2="{ml + pw}" y2="{y30:.1f}" stroke="#16a34a" '
        f'stroke-width="2.2" stroke-dasharray="8 5"/>'
    )
    o.append(
        f'<text x="{ml + pw - 4}" y="{y30 - 8:.1f}" text-anchor="end" font-size="17" '
        f'font-weight="700" fill="#16a34a">Q30</text>'
    )
    o.append(
        f'<text x="{ml}" y="20" font-size="17" font-weight="600" fill="{AXIS}">'
        f'Mean Phred · 18 reads</text>'
    )
    for i in (0, 300, 600, 900):
        o.append(
            f'<text x="{px(min(i, upto - 1)):.1f}" y="{mt + ph + 26:.1f}" '
            f'text-anchor="middle" font-size="16" fill="{FAINT}">{i}</text>'
        )
    o.append(
        f'<text x="{ml + pw / 2:.0f}" y="{H - 8}" text-anchor="middle" font-size="15" '
        f'fill="{FAINT}">Base position</text>'
    )
    o.append("</svg>")
    return "\n".join(o)
