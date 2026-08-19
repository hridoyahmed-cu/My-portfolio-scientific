import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (p) => path.join(root, "public", p);
// Masters live outside public/ so they are never shipped to visitors.
const asset = (p) => path.join(root, "assets", p);

const SRC = asset("avatar.original.png"); // 1024x1024 master

// ---- Brand palette (matches globals.css dark theme) ----
const C = {
  bgTop: "#060c16",
  bgBottom: "#0a1a30",
  cyan: "#179fba",
  indigo: "#3d48c2",
  purple: "#814cbd",
  fg: "#e9eef4",
  muted: "#9fb0c3",
};

// ---------- 1) Link share-preview image (Open Graph) 1200x630 ----------
async function buildOg() {
  const W = 1200;
  const H = 630;
  const AV = 300; // avatar diameter
  const cx = 250; // avatar centre x
  const cy = 315; // avatar centre y

  // circular avatar
  const mask = Buffer.from(
    `<svg width="${AV}" height="${AV}"><circle cx="${AV / 2}" cy="${AV / 2}" r="${AV / 2}" fill="#fff"/></svg>`,
  );
  const avatar = await sharp(SRC)
    .resize(AV, AV, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const tx = 470; // text block left edge
  const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.bgTop}"/>
      <stop offset="1" stop-color="${C.bgBottom}"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.cyan}"/>
      <stop offset="0.55" stop-color="${C.indigo}"/>
      <stop offset="1" stop-color="${C.purple}"/>
    </linearGradient>
    <radialGradient id="glowC" cx="0.18" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${C.cyan}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowP" cx="0.95" cy="0.1" r="0.6">
      <stop offset="0" stop-color="${C.purple}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${C.purple}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glowC)"/>
  <rect width="${W}" height="${H}" fill="url(#glowP)"/>

  <!-- gradient ring + soft halo behind the avatar -->
  <circle cx="${cx}" cy="${cy}" r="${AV / 2 + 26}" fill="${C.cyan}" opacity="0.10"/>
  <circle cx="${cx}" cy="${cy}" r="${AV / 2 + 9}" fill="none" stroke="url(#ring)" stroke-width="6"/>

  <!-- text -->
  <text x="${tx}" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="${C.fg}">Md. Hridoy Ahmed</text>
  <text x="${tx}" y="300" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="600" fill="${C.cyan}">Researcher · Molecular &amp; Computational Biology</text>
  <text x="${tx}" y="364" font-family="'Segoe UI', Arial, sans-serif" font-size="25" fill="${C.muted}">Exploring disease through genomics, computational</text>
  <text x="${tx}" y="400" font-family="'Segoe UI', Arial, sans-serif" font-size="25" fill="${C.muted}">drug discovery, and immunoinformatics.</text>

  <!-- footer accent + domain -->
  <rect x="${tx}" y="438" width="56" height="4" rx="2" fill="url(#ring)"/>
  <text x="${tx}" y="475" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="1" fill="${C.muted}">ahmedhridoy.com</text>
</svg>`);

  await sharp(bg)
    .composite([{ input: avatar, left: cx - AV / 2, top: cy - AV / 2 }])
    .png()
    .toFile(pub("og.png"));
  console.log("wrote public/og.png (1200x630)");
}

// ---------- 2) Favicons (circular, from avatar) ----------
async function buildFavicon(size, name) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  await sharp(SRC)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toFile(pub(name));
  console.log(`wrote public/${name} (${size}x${size})`);
}

await buildOg();
await buildFavicon(32, "favicon-32.png");
await buildFavicon(192, "favicon-192.png");
// apple-touch-icon is shown on a rounded tile already — keep it square (no transparent corners)
await sharp(SRC).resize(180, 180, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(pub("apple-touch-icon.png"));
console.log("wrote public/apple-touch-icon.png (180x180)");
