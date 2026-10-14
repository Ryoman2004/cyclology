# Cyclology — Dari Bekas, Jadi Bermakna

Website katalog produk hasil daur ulang (upcycle) karya pengrajin lokal Indonesia. Pemesanan dilakukan langsung melalui WhatsApp admin tanpa sistem keranjang atau gateway pembayaran rumit.

## Tech Stack
- **Framework**: Next.js 16 (App Router), TypeScript
- **Styling**: Tailwind CSS v4 (Design tokens di `src/app/globals.css`)
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
  app/                      # Routing Next.js App Router
  components/
    layout/                 # Navbar, Footer, WhatsAppFloat
    ui/                     # Button, Badge, SectionHeading, Accordion, SafeImage
    product/                # ProductCard, ProductGrid, CategoryStrip, Filters
    sections/               # Hero, ImpactBand, BlogPreview, CTABanner
  data/                     # products.ts, posts.ts, faq.ts, gallery.ts, categories.ts
  config/site.ts            # Konfigurasi utama: nama, kontak, WA, statistik
  lib/                      # Helper rupiah, tanggal, whatsapp link, SEO
public/
  brand/logo.svg            # Logo Cyclology
  images/                   # Folder aset produk, blog, hero, galeri
```

## Konfigurasi
Seluruh data nomor WhatsApp, kontak, sosial media, dan dampak lingkungan dikonfigurasi melalui:
`src/config/site.ts`
