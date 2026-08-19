/**
 * Convert public/gallery/*.jpg to WebP and rewrite the paths in
 * src/data/gallery.ts to match.
 *
 * A JPEG is only removed once its WebP replacement has been written and is
 * genuinely smaller; anything that fails to convert is left untouched and its
 * entry in gallery.ts keeps the .jpg extension. Run once — it is idempotent,
 * because already-converted files leave no .jpg behind.
 */
import sharp from "sharp";
import { readdir, readFile, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const DIR = path.join(root, "public", "gallery");
const DATA = path.join(root, "src", "data", "gallery.ts");
const QUALITY = 78;

const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f)).sort();
const converted = new Set();
let before = 0, after = 0, failed = 0;

for (const f of files) {
  const src = path.join(DIR, f);
  const base = f.replace(/\.jpe?g$/i, "");
  const dest = path.join(DIR, `${base}.webp`);
  const orig = await readFile(src);
  before += orig.length;

  try {
    const out = await sharp(orig).webp({ quality: QUALITY, effort: 5 }).toBuffer();
    if (out.length >= orig.length) {
      after += orig.length;
      console.log(`keep  ${f} (webp not smaller)`);
      continue;
    }
    await writeFile(dest, out);
    await unlink(src);
    converted.add(f);
    after += out.length;
    console.log(`ok    ${f} -> ${base}.webp  ${(orig.length / 1024).toFixed(0)}K -> ${(out.length / 1024).toFixed(0)}K`);
  } catch (e) {
    after += orig.length;
    failed++;
    console.log(`FAIL  ${f} (${e.message})`);
  }
}

// Rewrite only the entries whose file actually became a .webp.
let data = await readFile(DATA, "utf8");
let rewrites = 0;
for (const f of converted) {
  const needle = `/gallery/${f}"`;
  const replacement = `/gallery/${f.replace(/\.jpe?g$/i, ".webp")}"`;
  if (data.includes(needle)) {
    data = data.split(needle).join(replacement);
    rewrites++;
  }
}
await writeFile(DATA, data, "utf8");

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log("\n==== SUMMARY ====");
console.log(`converted:  ${converted.size} / ${files.length}  (failed ${failed})`);
console.log(`gallery.ts: ${rewrites} paths rewritten`);
console.log(`before:     ${mb(before)} MB`);
console.log(`after:      ${mb(after)} MB`);
console.log(`saved:      ${mb(before - after)} MB (${(((before - after) / before) * 100).toFixed(1)}%)`);

const leftover = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));
console.log(`leftover jpg: ${leftover.length}`);
const stale = [...data.matchAll(/\/gallery\/([^"]+)/g)].map((m) => m[1]);
const present = new Set(await readdir(DIR));
const missing = stale.filter((s) => !present.has(s));
console.log(missing.length ? `BROKEN REFS: ${missing.join(", ")}` : "all gallery.ts paths resolve to files on disk");
