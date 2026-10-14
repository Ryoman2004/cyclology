# TASKS — Urutan Pengerjaan Cyclology

Kerjakan **satu fase per sesi**. Setiap fase diakhiri `npm run lint` + `npm run build` yang lolos, ringkasan hasil, lalu berhenti. Aturan umum ada di `AGENTS.md`.

Prompt yang ditempel ke OpenCode untuk tiap fase:
> Baca `AGENTS.md`, `docs/SPEC.md`, dan `docs/DESIGN_SYSTEM.md`. Kerjakan **Fase N** dari `docs/TASKS.md` saja. Jika ada `design/`, ikuti tata letaknya. Setelah selesai jalankan lint dan build, ringkas hasilnya, lalu berhenti.

---

## Fase 0 — Setup proyek
- [ ] Buat proyek Next.js (TypeScript, Tailwind, App Router, folder `src/`, ESLint) di folder saat ini
- [ ] Pasang `lucide-react`
- [ ] Muat font Poppins dan Lora lewat `next/font/google` di `app/layout.tsx`
- [ ] Daftarkan semua token warna dan font dari `DESIGN_SYSTEM.md` di `globals.css` + theme Tailwind
- [ ] Buat struktur folder sesuai `AGENTS.md`
- [ ] Buat `src/config/site.ts` sesuai SPEC bagian 4
- [ ] Buat `public/brand/logo.svg` (daun yang membentuk lingkaran panah, warna `moss-600`)
- [ ] Buat `.gitignore`, `README.md` awal, dan commit pertama

**Selesai bila:** `npm run dev` menampilkan halaman kosong dengan font dan warna dasar yang benar.

## Fase 1 — Layout dan komponen dasar
- [ ] `Navbar` (sticky, hamburger mobile, tautan aktif, tombol WhatsApp) + varian minimal
- [ ] `Footer`
- [ ] `WhatsAppFloat`
- [ ] `Button` (primary, outline, whatsapp), `Badge`, `SectionHeading`, `SafeImage`, `Accordion`
- [ ] Helper `lib/format.ts` (`formatRupiah`, `formatDate`) dan `lib/whatsapp.ts` (`buildWhatsAppLink`)

**Selesai bila:** navbar dan footer tampil benar di 390px, 768px, 1280px; semua komponen memakai token.

## Fase 2 — Data
- [ ] `data/products.ts` (24 produk sesuai SPEC 6.2, lengkap dengan deskripsi dan tips perawatan), `data/categories.ts`
- [ ] `data/posts.ts` (6 artikel, 4-6 paragraf, tanpa statistik karangan)
- [ ] `data/faq.ts`, `data/gallery.ts`
- [ ] `docs/PHOTO_GUIDE.md`: kata kunci foto per produk, artikel, dan galeri + ukuran dan nama file

**Selesai bila:** semua data bertipe TypeScript, tanpa error tipe, dan slug unik.

## Fase 3 — Beranda
- [ ] `CategoryStrip` dan `ProductCard` sesuai `DESIGN_SYSTEM.md` 4.2 dan 4.3
- [ ] Seksi Beranda sesuai SPEC 7.1 (hero, nilai, katalog, band statistik dengan tautan ke /dampak, cerita, blog, CTA)
- [ ] Animasi fade-in halus (hormati reduced motion)

**Selesai bila:** Beranda sesuai `design/` (jika ada) dan responsif tanpa scroll horizontal.

## Fase 4 — Katalog dan Detail Produk
- [ ] `/produk`: kategori, search, sort, grid, kondisi kosong, "Muat lebih banyak"
- [ ] `/produk/[slug]`: galeri, info, tombol WhatsApp dengan pesan otomatis, produk serupa, breadcrumb
- [ ] `generateStaticParams`, `generateMetadata`, JSON-LD `Product`

**Selesai bila:** klik tombol WhatsApp membuka `wa.me` dengan pesan yang benar; filter bisa dibagikan lewat URL.

## Fase 5 — Blog
- [ ] `/blog` (artikel unggulan + grid + filter) dan `/blog/[slug]`
- [ ] Tombol bagikan ke WhatsApp, artikel terkait, CTA, JSON-LD `Article`

## Fase 6 — Tentang, Galeri, FAQ, Kontak
- [ ] `/tentang`, `/galeri`, `/faq` (accordion + tautan media sosial), `/kontak`
- [ ] Form kontak: validasi, sanitasi, susun pesan, buka WhatsApp, status sukses
- [ ] Bagian Bengkel di Galeri (dan Kontak bila ada di desain): nama, alamat, jam, peta dummy dari `siteConfig.workshop`; iframe Google Maps bila `mapEmbedUrl` terisi, placeholder bila kosong

## Fase 7 — Kampanye dan Eco-Impact
- [ ] `/kampanye/bulan-tanpa-plastik` (navbar minimal, satu CTA, paket hemat dihitung dari data)
- [ ] `/dampak` (angka, statistik, bar per kategori dari `impactKg`, catatan "Angka contoh")

## Fase 8 — SEO, keamanan, performa, aksesibilitas
- [ ] `sitemap.ts`, `robots.ts`, metadata Open Graph, favicon
- [ ] `headers()` keamanan di `next.config` (SPEC bagian 9)
- [ ] Periksa semua `next/image` (`sizes`, `alt`, `priority` hanya di hero)
- [ ] Periksa kontras, focus ring, label form, urutan heading
- [ ] Hapus kode mati dan `console.log`

## Fase 9 — QA dan deploy
- [ ] Uji manual semua route di 390px, 768px, 1280px
- [ ] Pastikan tidak ada hex hardcode dan tidak ada gradient (`grep`)
- [ ] Pastikan tidak ada tautan atau teks yang mengarah ke `/dashboard` (`grep`), dan tidak ada paket analytics terpasang
- [ ] `npm run lint` dan `npm run build` bersih
- [ ] Lengkapi `README.md`: deskripsi, cara menjalankan, struktur, cara mengganti nomor WA, produk, dan logo, cara backup/pemulihan
- [ ] Tag `v1.0`

---

## Langkah deploy ke Vercel (dikerjakan manual oleh pemilik)
1. Push proyek ke repositori GitHub.
2. Masuk ke vercel.com, pilih **Add New > Project**, lalu impor repositori.
3. Vercel mengenali Next.js otomatis. Biarkan pengaturan bawaan, klik **Deploy**.
4. Setelah URL keluar, ubah `siteConfig.url` menjadi URL tersebut, commit, dan push (Vercel deploy ulang otomatis).
5. Isi `whatsappNumber` dan link media sosial di `siteConfig` dengan data asli.
6. Ganti data dummy bengkel (`siteConfig.workshop`) dengan alamat dan embed Google Maps asli bila sudah ada.

## Setelah foto asli tersedia
Unduh foto sesuai `docs/PHOTO_GUIDE.md`, ubah ke WebP, simpan di `public/images/...` dengan nama file sesuai slug. Tidak perlu mengubah kode karena `SafeImage` otomatis memakai foto asli.
