/**
 * Re-encode public/gallery/*.jpg in place with mozjpeg.
 *
 * Keeps the .jpg extension and filenames, so no source/data changes are needed
 * and no <img src> can break. Only replaces a file when the new encode is at
 * least 5% smaller. Originals are recoverable via git.
 */
import sharp from "sharp";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = process.argv[2]
  ? path.resolve(process.argv[2])
  : fileURLToPath(new URL("../public/gallery", import.meta.url));
const MAX_EDGE = 1600;
const QUALITY = 76;
const MIN_GAIN = 0.05;

const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f)).sort();
let before = 0, after = 0, rewritten = 0, skipped = 0;

for (const f of files) {
  const p = path.join(DIR, f);
  const orig = await readFile(p);
  before += orig.length;

  let out;
  try {
    out = await sharp(orig)
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
  } catch (e) {
    console.log(`SKIP  ${f} (${e.message})`);
    after += orig.length;
    skipped++;
    continue;
  }

  if (out.length < orig.length * (1 - MIN_GAIN)) {
    await writeFile(p, out);
    after += out.length;
    rewritten++;
    console.log(`ok    ${f}  ${(orig.length / 1024).toFixed(0)}K -> ${(out.length / 1024).toFixed(0)}K`);
  } else {
    after += orig.length;
    skipped++;
    console.log(`keep  ${f}  ${(orig.length / 1024).toFixed(0)}K (no meaningful gain)`);
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log("\n==== SUMMARY ====");
console.log(`files:      ${files.length}  (rewritten ${rewritten}, kept ${skipped})`);
console.log(`before:     ${mb(before)} MB`);
console.log(`after:      ${mb(after)} MB`);
console.log(`saved:      ${mb(before - after)} MB (${(((before - after) / before) * 100).toFixed(1)}%)`);
