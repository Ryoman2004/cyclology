# MISSING_IMAGES — Daftar Gambar yang Belum Ada

Dokumen ini dibuat pada tugas **R5** (`docs/REVISION.md`). R7 akan menambah skrip
`scripts/check-images.mjs` untuk memindai semua path gambar secara otomatis; daftar
di bawah adalah hasil pemeriksaan manual untuk halaman yang sedang dikerjakan.

Format: **path file** | **dirujuk di** | **rekomendasi query foto** | **ukuran**

## Gambar hilang

| Path file | Dirujuk di | Rekomendasi query foto | Ukuran |
|---|---|---|---|
| `public/images/hero/story-tentang.webp` | `src/app/(site)/tentang/page.tsx` (baris 148, blok "Cerita Kami") | `"upcycle workshop sewing scrap fabric table natural light"` | 1600x900 |

## Catatan teknis

- Halaman **Tentang** memakai `SafeImage` untuk blok "Cerita Kami". `SafeImage`
  **tidak dihapus**: begitu file foto tersedia, gambar langsung tampil tanpa ubah kode.
- File `public/images/gallery/map-placeholder.webp` juga dirujuk
  `src/components/sections/WorkshopSection.tsx` sebagai fallback peta (belum ada, dan
  memang akan digantikan embed Google Maps pada tugas R6).
- Foto Beranda juga akan diganti pada R7 (sekarang masih memakai
  `public/images/gallery/proses-4-menjahit.webp` sebagai latar `PageHero`).

## Teks contoh

Bagian "Cerita Kami" pada halaman Tentang masih berisi **teks contoh** (sudah
dibebaskan dari tahun berdiri dan nama kota karangan pada tugas R0/R2).
Pemilik diminta menggantinya dengan cerita asli bengkel sebelum situs dipublikasikan.