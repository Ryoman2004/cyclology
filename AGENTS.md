# AGENTS.md — Cyclology

> File ini dibaca otomatis oleh OpenCode sebagai aturan proyek. Taruh di **root** proyek.

## Ringkasan proyek
Cyclology adalah website katalog produk hasil daur ulang (tas, dompet, kemeja, vas, aksesoris, dll.) untuk tugas kuliah. **Tidak ada keranjang atau pembayaran**: pembeli memesan lewat tombol WhatsApp yang menuju admin.

Baca ketiga dokumen ini **sebelum menulis kode**:
- `docs/SPEC.md` — halaman, fitur, struktur data, konten dummy
- `docs/DESIGN_SYSTEM.md` — warna, font, komponen, gaya
- `docs/TASKS.md` — urutan pengerjaan per fase

Jika ada folder `design/` berisi screenshot atau HTML dari Google Stitch, jadikan itu acuan tata letak. Token di `DESIGN_SYSTEM.md` tetap diutamakan jika terjadi perbedaan.

## Tech stack
- Next.js versi stabil terbaru, **App Router**, TypeScript
- Tailwind CSS (token warna dan font didaftarkan di theme Tailwind)
- `next/font/google`: **Poppins** dan **Lora** (hanya dua font)
- `lucide-react` untuk ikon
- Tanpa database, backend, autentikasi, atau CMS. Semua data berada di `src/data/*.ts`.
- **Jangan** memakai `output: 'export'`. Situs di-deploy normal di Vercel (header keamanan membutuhkannya). Halaman dinamis tetap dibuat statis lewat `generateStaticParams`.
- Jangan menambah dependency di luar daftar ini tanpa alasan jelas. Jika perlu, sebutkan alasannya dulu.

## Struktur folder
```
src/
  app/                      # route (lihat SPEC.md)
  components/
    layout/                 # Navbar, Footer, WhatsAppFloat
    ui/                     # Button, Badge, SectionHeading, Accordion, dll.
    product/                # ProductCard, ProductGrid, CategoryStrip, ProductFilters
    sections/               # Hero, ImpactBand, BlogPreview, CTABanner, dll.
  data/                     # products.ts, posts.ts, faq.ts, gallery.ts, categories.ts
  config/site.ts            # nama, nomor WA, link sosial, statistik (SATU-SATUNYA sumber)
  lib/                      # format.ts (rupiah, tanggal), whatsapp.ts, seo.ts
public/
  images/                   # products/, blog/, gallery/, hero/, brand/
  brand/logo.svg            # logo placeholder, mudah diganti
design/                     # (opsional) hasil Google Stitch
docs/
```

## Aturan kode
1. Komponen **server by default**. Pakai `"use client"` hanya untuk yang interaktif (menu mobile, filter/search, accordion, form, chart).
2. Seluruh teks tampilan dalam **Bahasa Indonesia**. Aksen Inggris singkat boleh jika menarik.
3. Nomor WhatsApp, link sosial, nama brand, dan statistik **hanya** diambil dari `src/config/site.ts`. Jangan di-hardcode di komponen.
4. Link WhatsApp dibuat lewat satu helper `buildWhatsAppLink(message)` di `src/lib/whatsapp.ts` (format `https://wa.me/<nomor>?text=<encodeURIComponent>`).
5. Warna dan font hanya lewat design token. **Tidak ada nilai hex di dalam komponen.**
6. Gambar selalu memakai `next/image` (dengan `sizes`, `alt` bermakna, dan `priority` hanya untuk hero). Buat komponen `SafeImage` dengan `onError` fallback ke blok placeholder berwarna tema, supaya situs tetap rapi sebelum foto asli dipasang.
7. Tiap halaman mengekspor `metadata` (title, description, Open Graph). Halaman detail memakai `generateMetadata`.
8. Mobile-first. Uji di lebar 390px, 768px, 1280px. Tidak boleh ada scroll horizontal.
9. Aksesibilitas: HTML semantik, label pada form, focus ring terlihat, kontras teks memadai, tombol ikon punya `aria-label`.
10. Tautan eksternal memakai `target="_blank" rel="noopener noreferrer"`. Jangan memakai `dangerouslySetInnerHTML`.
11. Jangan mengarang statistik, kutipan, atau klaim ilmiah di konten edukasi. Tulis konten umum yang aman.
12. Angka statistik dampak (`siteConfig.impact` dan `impactKg` produk) adalah placeholder. Di halaman `/dampak` beri catatan kecil "Angka contoh". Jangan menambah klaim lingkungan baru (mis. penghematan CO₂) yang tidak bisa dibuktikan.
13. Hindari nilai acak (`Math.random`, `Date.now`) saat render supaya tidak terjadi hydration mismatch. Gunakan data deterministik.
14. Jangan membuat fitur di luar `SPEC.md`. Jika ada ide tambahan, usulkan dulu.
15. **Halaman Dashboard Analytics (`/dashboard`) dan Vercel Analytics dibatalkan.** Jangan membuatnya, jangan memasang paket analytics apa pun, dan jangan menautkan ke sana. Halaman Eco-Impact (`/dampak`) TETAP ada. Situs punya 10 halaman (lihat `SPEC.md` bagian 3).
16. Desain Stitch di `design/` memuat teks contoh karangan. Aturannya:
    - **Peta, alamat, dan jam bengkel BOLEH dipakai sebagai dummy**, tetapi harus diambil dari `siteConfig.workshop` supaya mudah diganti pemilik. Beri komentar `// dummy` di config.
    - Nomor telepon/WA dan link sosial hanya dari `siteConfig` (jangan salin nomor dari desain).
    - Jumlah pengrajin, produk, dan kg sampah harus konsisten di seluruh situs: satu angka untuk satu hal, bersumber dari `siteConfig.impact`.
    - Jangan memakai klaim penghematan CO₂ (mis. "ton CO₂e"); hapus atau ganti dengan teks netral.
17. Folder `design/` hanya **acuan visual**, bukan aset situs. Jangan menyalin gambar dari `design/` ke situs dan **jangan memakai URL gambar eksternal** yang muncul di file HTML dari Stitch (bisa kedaluwarsa). Semua gambar situs berupa file lokal di `public/images/...` (nama file = slug) yang dimuat lewat `SafeImage`, sehingga situs tetap rapi bila foto belum ada.
18. Jika `design/*.png` dan `design/*.html` berbeda, **PNG dari Figma adalah acuan final** (sudah melewati editan pemilik).

## Larangan gaya ("AI slop")
- Tidak ada gradient (background, teks, tombol, maupun bayangan berwarna).
- Tidak ada glassmorphism, neon, blob dekoratif, atau emoji sebagai ikon.
- Tidak ada lebih dari dua font. Lora italic hanya untuk 1-2 kata aksen pada judul besar.
- Aksen terakota hanya untuk badge kecil dan highlight kecil.
- Jangan menumpuk banyak efek hover atau animasi. Cukup fade-in halus saat scroll dan transisi hover 150-200ms.

## Perintah
```
npm run dev      # development
npm run build    # wajib lolos sebelum pindah fase
npm run lint     # wajib bersih sebelum pindah fase
```

## Alur kerja per fase
1. Kerjakan **satu fase** dari `docs/TASKS.md` saja.
2. Jalankan `npm run lint` dan `npm run build`, perbaiki semua error.
3. Ringkas apa yang dibuat dan file yang berubah, lalu **berhenti dan tunggu** instruksi fase berikutnya.
4. Commit per fase dengan pesan jelas (`feat: fase 3 - halaman beranda`).
