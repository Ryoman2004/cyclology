# Cyclology — Dari Bekas, Jadi Bermakna

Website katalog produk hasil daur ulang (upcycle) karya pengrajin lokal Indonesia. Pemesanan dilakukan langsung melalui WhatsApp admin tanpa sistem keranjang atau gateway pembayaran rumit. 10 halaman (beranda, tentang, katalog + detail produk, blog + detail artikel, galeri, FAQ, kontak, landing kampanye, dan halaman dampak).

## Tech Stack
- **Framework**: Next.js 16 (App Router), TypeScript
- **Styling**: Tailwind CSS v4 (design token di `src/app/globals.css`)
- **Fonts**: Poppins & Lora (via `next/font/google`)
- **Icons**: `lucide-react`
- **Data**: Data statis di `src/data/` dan konfigurasi di `src/config/site.ts`

## Memulai Pengembangan Lokal

1. **Instal dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.

3. **Lint & Build**:
   ```bash
   npm run lint
   npm run build
   ```

## Struktur Proyek
```text
src/
  app/                      # Routing Next.js App Router (+ sitemap.ts, robots.ts)
  components/
    layout/                 # Navbar, Footer, WhatsAppFloat
    ui/                     # Button, Badge, SectionHeading, Accordion, SafeImage, BlogCard
    product/                # ProductCard, ProductGrid, CategoryStrip, ProductFilters
    blog/                   # FeaturedArticle, BlogFilter, BlogCollabCTA
    contact/                # ContactForm
    sections/               # Hero, ImpactBand, BlogPreview, CTABanner, WorkshopSection
  data/                     # products.ts, posts.ts, faq.ts, gallery.ts, categories.ts
  config/site.ts            # Konfigurasi utama: nama, kontak, WA, statistik
  lib/                      # format.ts (rupiah, tanggal), whatsapp.ts
public/
  brand/logo.svg            # Logo Cyclology
  images/                   # Aset produk, blog, hero, galeri (WebP)
```

## Konfigurasi

Seluruh data nomor WhatsApp, kontak, media sosial, dan dampak lingkungan dikonfigurasi melalui `src/config/site.ts`. Semua komponen mengambil angka dan tautan dari sana — jangan hardcode di komponen.

### Mengganti nomor WhatsApp
Buka `src/config/site.ts`, ubah `whatsappNumber` ke format internasional tanpa `+` dan tanpa `0` di depan. Contoh: `6281234567890`. Seluruh tombol dan form memakai helper `buildWhatsAppLink()` sehingga otomatis ikut berubah.

### Mengganti produk
Tambah, ubah, atau hapus entri di `src/data/products.ts`. Setiap produk harus punya `slug` unik; nama file gambar di `public/images/products/` mengikuti slug (`<slug>.webp`). Kategori dikelola di `src/data/categories.ts`. Halaman katalog dan detail akan mengikuti data tanpa perubahan kode.

### Mengganti logo
Ganti file `public/brand/logo.svg` dengan logo baru (disarankan kotak 1:1). Navbar, footer, dan favicon otomatis memakai file ini.

### Data placeholder yang perlu diganti sebelum publikasi
- `siteConfig.whatsappNumber`, `siteConfig.email`, `siteConfig.social.*`
- `siteConfig.impact` (angka dampak) — tampil dengan catatan "Angka contoh" di `/dampak`
- `siteConfig.workshop` (alamat, jam, embed peta — dummy)
- `siteConfig.founders` (nama/bio pendiri)

## Backup dan Pemulihan

Riwayat versi tersimpan di GitHub (commit per fase, tag rilis `v1.0`).

**Backup:** perubahan di-commit ke Git lalu `git push` ke GitHub. Tidak ada database — semua data ada di file repository.

**Pemulihan di mesin baru:**
```bash
git clone <url-repositori>
npm install
npm run dev
```

**Kembalikan ke rilis v1.0:**
```bash
git checkout v1.0
npm install
npm run build
```
