/**
 * Ambil foto dari manifest dan simpan ke public/.
 *
 * PERINGATAN: skrip ini membutuhkan API key pemilik dan HANYA dijalankan oleh pemilik:
 *   node --env-file=.env.local scripts/fetch-photos.mjs
 *   node --env-file=.env.local scripts/fetch-photos.mjs --replace public/images/hero/hero-blog.webp "notebook plants desk" --pick 2
 *
 * Aturan:
 * - Lewati file yang sudah ada (gunakan --replace untuk memaksa).
 * - Entry manifest dengan "manual": true dilewati (butuh screenshot, bukan pencarian).
 * - Variable lingkungan: PEXELS_API_KEY atau UNSPLASH_ACCESS_KEY.
 *
 * Agent AI tidak boleh menjalankan skrip ini (docs/REVISION.md R7 butir 5).
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MANIFEST = path.join(__dirname, "photo-manifest.json");

function parseArgs(argv) {
  const args = { replace: false, pick: 1, file: null, query: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--replace") args.replace = true;
    else if (argv[i] === "--pick") args.pick = Number(argv[i + 1] ?? 1);
    else if (argv[i] === "--file") args.file = argv[i + 1];
    else if (!args.query && !args.file) args.query = argv[i];
    else args.file = args.file ?? argv[i];
  }
  return args;
}

async function searchPexels(query, apiKey, pick) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=${pick}&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: apiKey } });
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${res.text()}`);
  const data = await res.json();
  return (data.photos ?? []).map((p) => p.src.large);
}

async function searchUnsplash(query, apiKey) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&per_page=1&orientation=landscape`;
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${apiKey}` },
  });
  if (!res.ok) throw new Error(`Unsplash ${res.status}: ${res.text()}`);
  const data = await res.json();
  return (data.results ?? []).map((p) => p.urls.regular);
}

async function download(url, target) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Unduh gagal: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, buffer);
  console.log(`  tersimpan: ${path.relative(ROOT, target)}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const pexelsKey = process.env.PEXELS_API_KEY;
  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!pexelsKey && !unsplashKey) {
    console.error(
      "API key tidak ditemukan. Jalankan dengan: node --env-file=.env.local scripts/fetch-photos.mjs"
    );
    process.exit(1);
  }

  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  let items = [...manifest.heroes, ...manifest.products, ...manifest.posts];

  // Mode satu file: --replace <path> "query baru" --pick 2
  if (args.file && args.query) {
    const target = path.resolve(ROOT, args.file);
    const url =
      pexelsKey !== undefined
        ? (await searchPexels(args.query, pexelsKey, args.pick))[0]
        : (await searchUnsplash(args.query, unsplashKey))[0];
    if (!url) {
      console.error("Tidak ada hasil pencarian.");
      process.exit(1);
    }
    await download(url, target);
    return;
  }

  for (const item of items) {
    const target = path.join(ROOT, item.file);
    if (item.manual) {
      console.log(`  lewati (manual): ${item.file}`);
      continue;
    }
    if (existsSync(target) && !args.replace) {
      console.log(`  sudah ada, lewati: ${item.file}`);
      continue;
    }
    try {
      const url =
        pexelsKey !== undefined
          ? (await searchPexels(item.query, pexelsKey, args.pick))[0]
          : (await searchUnsplash(item.query, unsplashKey))[0];
      if (!url) {
        console.warn(`  tanpa hasil: ${item.file} ("${item.query}")`);
        continue;
      }
      await download(url, target);
    } catch (error) {
      console.warn(`  gagal: ${item.file} -> ${error.message}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});