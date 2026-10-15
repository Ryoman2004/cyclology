/**
 * Audit gambar: cari semua path gambar yang dirujuk di src/ tetapi file-nya
 * belum ada di public/.
 *
 * Jalankan (tanpa install apa pun, hanya Node.js):
 *   node scripts/check-images.mjs
 *   node scripts/check-images.mjs --write     # perbarui docs/MISSING_IMAGES.md
 *
 * Skrip ini TIDAK mengunduh apa pun dan tidak membaca .env.local.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");
const OUTPUT = path.join(ROOT, "docs", "MISSING_IMAGES.md");

const SOURCE_EXT = [".ts", ".tsx", ".js", ".jsx", ".mjs"];
/** Path yang selalu ada (dibuat manual, bukan aset foto). */
const SKIP = ["/brand/logo.svg"];

/** Direktori yang dipindai (R7: src/data, src/config, src/app, src/components). */
const SCAN_DIRS = ["data", "config", "app", "components"];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(full)));
    else if (SOURCE_EXT.includes(path.extname(entry.name).toLowerCase()))
      files.push(full);
  }
  return files;
}

/** Ambil path gambar literal (mis. "/images/products/x.webp") dari isi file. */
function extractPaths(content) {
  const matches = new Set();
  const regex = /["'`]\/(images|brand)\/[A-Za-z0-9._\-/]+\.(?:webp|jpg|jpeg|png|avif|svg|gif)["'`]/gi;
  for (const match of content.matchAll(regex)) matches.add(match[0].slice(1, -1));
  return [...matches];
}

async function main() {
  const references = new Map(); // path -> [{ file, line }]

  for (const sub of SCAN_DIRS) {
    const dir = path.join(SRC, sub);
    if (!existsSync(dir)) continue;
    for (const file of await collectFiles(dir)) {
      const content = await readFile(file, "utf8");
      const lines = content.split(/\r?\n/);
      lines.forEach((line, index) => {
        for (const imagePath of extractPaths(line)) {
          if (SKIP.includes(imagePath)) continue;
          if (!references.has(imagePath)) references.set(imagePath, []);
          references.get(imagePath).push({
            file: path.relative(ROOT, file).replace(/\\/g, "/"),
            line: index + 1,
          });
        }
      });
    }
  }

  const missing = [];
  const present = [];
  for (const [imagePath, refs] of [...references.entries()].sort()) {
    const onDisk = existsSync(path.join(PUBLIC, imagePath.replace(/^\//, "")));
    (onDisk ? present : missing).push({ imagePath, refs });
  }

  const total = references.size;
  console.log(`\nGambar dirujuk : ${total}`);
  console.log(`Sudah ada      : ${present.length}`);
  console.log(`Belum ada      : ${missing.length}\n`);

  if (missing.length === 0) {
    console.log("Semua gambar sudah tersedia di public/.\n");
  } else {
    console.log("Belum ada:");
    for (const { imagePath, refs } of missing) {
      const where = refs.map((r) => `${r.file}:${r.line}`).join(", ");
      console.log(`  ${imagePath}\n    dirujuk di -> ${where}`);
    }
    console.log("");
  }

  if (process.argv.includes("--write")) {
    await writeReport({ missing, present, total });
    console.log(`Laporan ditulis: ${path.relative(ROOT, OUTPUT)}\n`);
  }
}

async function writeReport({ missing, present, total }) {
  const rows = missing.length
    ? missing
        .map(({ imagePath, refs }) => {
          const where = refs.map((r) => `\`${r.file}\`:${r.line}`).join("<br>");
          return `| \`${imagePath}\` | ${where} | Lihat \`scripts/photo-manifest.json\` | Lihat \`scripts/photo-manifest.json\` |`;
        })
        .join("\n")
    : "| — | — | — | — |";

  const content = `# MISSING_IMAGES — Gambar yang Belum Ada di \`public/\`

>Dihasilkan otomatis oleh \`node scripts/check-images.mjs --write\`. Daftar file ada di
>\`scripts/photo-manifest.json\` (query foto + ukuran yang disarankan).

**Ringkasan:** ${total} gambar dirujuk · ${present.length} tersedia · **${missing.length} belum ada**.

| Path file | Dirujuk di (file:baris) | Rekomendasi query foto | Ukuran |
|---|---|---|---|
${rows}

## Cara memasang foto

Pemilik menjalankan skrip berikut (butuh API key di \`.env.local\`):

\`\`\`bash
# satu file
node --env-file=.env.local scripts/fetch-photos.mjs --replace public/<path> "query baru" --pick 2

# semua file sekaligus
node --env-file=.env.local scripts/fetch-photos.mjs
\`\`\`

Skrip melewati file yang sudah ada. Naikkan angka \`--pick\` bila hasil belum cocok.
`;
  await writeFile(OUTPUT, content, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});