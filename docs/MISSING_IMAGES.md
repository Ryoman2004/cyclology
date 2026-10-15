# MISSING_IMAGES — Daftar Gambar yang Belum Ada

Dokumen ini dibuat pada tugas **R5** (`docs/REVISION.md`). R7 akan menambah skrip
`scripts/check-images.mjs` untuk memindai semua path gambar secara otomatis; daftar
di bawah adalah hasil pemeriksaan manual untuk halaman yang sedang dikerjakan.

Format: **path file** | **dirujuk di** | **rekomendasi query foto** | **ukuran**

## Gambar hilang

| Path file | Dirujuk di | Rekomendasi query foto | Ukuran |
|---|---|---|---|
| `public/images/hero/story-tentang.webp` | `src/app/(site)/tentang/page.tsx` (blok "Cerita Kami") | `"upcycle workshop sewing scrap fabric table natural light"` | 1600x900 |
| `public/images/brand/peta-bengkel.webp` | `src/components/sections/WorkshopSection.tsx` (tingkat 3 peta) | screenshot peta statis lokasi bengkel di Depok | 1600x900 |

## Catatan teknis

- Halaman **Tentang** memakai `SafeImage` untuk blok "Cerita Kami". `SafeImage`
  **tidak dihapus**: begitu file foto tersedia, gambar langsung tampil tanpa ubah kode.
- Peta bengkel (R6) sekarang memakai embed **OpenStreetMap** karena
  `siteConfig.workshop.lat` / `lng` sudah terisi. File
  `public/images/brand/peta-bengkel.webp` hanya dipakai sebagai tingkat 3 (fallback)
  bila koordinat dikosongkan pemilik.
- Foto Beranda juga akan diganti pada R7 (sekarang masih memakai
  `public/images/gallery/proses-4-menjahit.webp` sebagai latar `PageHero`).

## Panduan pemilik: memasang URL embed Google Maps

Peta OpenStreetMap berjalan, tetapi bila ingin tampilan Google Maps asli:

1. Buka Google Maps di laptop, cari lokasi bengkel.
2. Klik **Bagikan > Sematkan peta (Embed a map) > Salin HTML**.
3. Dari potongan `<iframe src="...">`, salin **hanya nilai di dalam `src="..."`**.
4. Tempel ke `mapEmbedUrl` di `src/config/site.ts` (nilainya harus diawali
   `https://www.google.com/maps/embed`). Link_maps biasa tetap di `mapsUrl`.

Bila `mapEmbedUrl` tidak valid, komponen otomatis mengabaikannya dan memakai
OpenStreetMap — jadi kesalahan tempel tidak membuat peta kosong.

## Teks contoh

Bagian "Cerita Kami" pada halaman Tentang masih berisi **teks contoh** (sudah
dibebaskan dari tahun berdiri dan nama kota karangan pada tugas R0/R2).
Pemilik diminta menggantinya dengan cerita asli bengkel sebelum situs dipublikasikan.