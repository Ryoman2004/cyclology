# SPEC — Cyclology

## 1. Tujuan
Website katalog produk daur ulang yang bersih, natural, dan nyaman dilihat. Pembeli melihat produk lalu memesan lewat WhatsApp admin. Target pengguna: siapa saja yang menyukai produk daur ulang dan senang berbelanja (umum, bukan segmen khusus).

Brand: **Cyclology**. Tagline: *"Dari bekas, jadi bermakna."*

## 2. Checklist penugasan (wajib terpenuhi)
Penugasan: **Business Website**, minimal 7-10 halaman/fitur.

| Syarat penugasan | Implementasi |
|---|---|
| 7-10 halaman | **10 halaman** (lihat bagian 3) |
| Responsive design | Tailwind mobile-first |
| Custom navigation | Navbar sticky + menu hamburger mobile + breadcrumb |
| Hero section | Beranda dan Landing Page |
| Product/service catalog | `/produk` dengan filter kategori, search, urutan |
| Contact form | `/kontak`, hasil form dikirim ke WhatsApp |
| WhatsApp integration | Tombol di detail produk, navbar, tombol melayang, form kontak |
| Google Maps | Bagian "Bengkel" dengan peta dan alamat **dummy** (mengikuti desain Stitch), data dari `siteConfig.workshop`. Diganti Google Maps asli oleh pemilik nanti (lihat 7.5 dan 7.6). |
| Social media integration | Ikon dan tautan di footer, FAQ, dan Kontak |
| Blog/article | `/blog` dan `/blog/[slug]` |
| Search | Pencarian produk (client-side) |
| Call to Action | CTA di setiap halaman utama |
| Basic SEO | metadata, sitemap, robots, JSON-LD produk, alt text |
| Image optimization | `next/image`, WebP/AVIF otomatis, lazy loading |
| Security plugin | Security headers di `next.config`, validasi input, HTTPS Vercel |
| Backup | Repositori GitHub (riwayat versi) + catatan di README |
| Analytics integration / simulasi | **Tidak dikerjakan** (keputusan pemilik): tanpa dashboard simulasi dan tanpa Vercel Analytics. |
| Minimal satu landing page campaign | `/kampanye/bulan-tanpa-plastik` |
| Additional Feature | `/dampak` (Eco-Impact) + badge dampak per produk |

## 3. Sitemap dan route
| Route | Halaman | Catatan |
|---|---|---|
| `/` | Beranda | hero, nilai, katalog ringkas, band statistik, cerita, blog, CTA |
| `/tentang` | Tentang Kami | cerita, misi, cara kerja |
| `/produk` | Katalog | filter kategori (via query `?kategori=`), search, sort |
| `/produk/[slug]` | Detail Produk | `generateStaticParams`, JSON-LD Product |
| `/blog` | Daftar Artikel | |
| `/blog/[slug]` | Detail Artikel | |
| `/galeri` | Galeri | sebelum-sesudah dan proses |
| `/faq` | FAQ | accordion + tautan media sosial |
| `/kontak` | Kontak | form ke WhatsApp |
| `/kampanye/bulan-tanpa-plastik` | Landing Page | navbar minimal, satu CTA |
| `/dampak` | Eco-Impact | fitur tambahan |

Navbar: Beranda, Produk, Tentang, Blog, Galeri, FAQ, Kontak + tombol "Pesan via WhatsApp". Halaman `/dampak` dijangkau dari band statistik di Beranda dan dari footer; halaman kampanye dari banner di Beranda dan dari footer. **Tidak ada halaman `/dashboard`, dan tidak boleh ada tautan ke sana.**

### 3.1 Route group
URL tidak boleh berubah, tetapi tata letak memakai route group:

| Folder | Isi | Layout |
|---|---|---|
| `src/app/(site)/` | Beranda, `/tentang`, `/produk`, `/blog`, `/galeri`, `/faq`, `/kontak`, `/dampak` | `Navbar` penuh + `Footer` + `WhatsAppFloat` |
| `src/app/(kampanye)/kampanye/` | Landing page kampanye | hanya `NavbarMinimal` (logo + tombol WhatsApp) |

`src/app/layout.tsx` hanya memuat `<html>`, `<body>`, dan font. Nama route group `(site)` dan `(kampanye)` tidak muncul di URL.

### 3.2 Komponen hero
Seluruh halaman memakai `src/components/sections/PageHero.tsx` (server component) dengan props `eyebrow`, `title`, `description`, `image`, `breadcrumb?`, `actions?`, `aside?`, `chips?`, `intensity?`.
Struktur: foto latar lokal (`SafeImage`, `alt=""`, `aria-hidden`, `sizes="100vw"`) + **overlay warna solid `bg-cream/70`** (tanpa gradient) + konten di atasnya. Hanya satu gambar ber-`priority` per halaman. Daftar foto latar ada di `src/data/heroes.ts` dan `scripts/photo-manifest.json`.

## 4. Konfigurasi (`src/config/site.ts`)
```ts
export const siteConfig = {
  name: "Cyclology",
  tagline: "Dari bekas, jadi bermakna.",
  description: "Katalog produk daur ulang: tas, dompet, fashion, dekorasi, dan aksesoris karya pengrajin lokal.",
  url: "https://cyclology-commerce.vercel.app", // domain produksi, ganti bila pindah domain
  whatsappNumber: "62XXXXXXXXXXX",             // format internasional, tanpa + dan tanpa 0 di depan
  email: "halo@cyclology.example",
  serviceHours: "Senin - Sabtu, 09.00 - 17.00 WIB",
  social: { instagram: "#", tiktok: "#", facebook: "#", youtube: "#" }, // diisi akun pribadi pemilik
  impact: { totalKgSaved: 1250, productsSold: 480, artisans: 24 },     // placeholder, ganti dengan data asli sebelum dipublikasikan
  founders: [
    { name: "Syifa Aulia Akfina",    role: "Co-Founder", photo: "/images/brand/founder-syifa.webp",  bio: "" },
    { name: "Syaza Ghaisani Nadinda", role: "Co-Founder", photo: "/images/brand/founder-syaza.webp", bio: "" },
    { name: "Rulyan Akasdo",          role: "Co-Founder", photo: "/images/brand/founder-rulyan.webp", bio: "" },
  ], // bio dikosongkan pemilik; string kosong berarti baris bio disembunyikan di UI
  // Bagian "Bengkel" di Galeri dan Kontak. Alamat berstatus dummy, diganti pemilik nanti.
  workshop: {
    name: "Cyclology",
    address: "Meruyung, Limo, Depok, Jawa Barat",   // dummy
    hours: "Senin - Sabtu, 09.00 - 17.00 WIB",      // dummy
    mapsUrl: "https://maps.app.goo.gl/XXXXXXX",     // link Google Maps biasa untuk tombol "Buka di Google Maps"
    mapEmbedUrl: "",                               // URL embed resmi; kosong = pakai OpenStreetMap
    lat: -6.3747444,                                // koordinat bengkel (opsional, untuk OpenStreetMap)
    lng: 106.77036,
  },
  // Lokasi kota/provinsi. Semua teks halaman memakai nilai ini.
  location: { city: "Depok", province: "Jawa Barat" },
};
```

### 4.1 Peta bengkel (urutan prioritas)
`WorkshopSection` membaca `siteConfig.workshop` dan menampilkan peta sesuai urutan:
1. `mapEmbedUrl` **valid** (diawali `https://www.google.com/maps/embed` atau `https://www.openstreetmap.org/export/embed.html`) → `<iframe>` embed.
2. `lat` + `lng` terisi → embed OpenStreetMap (`bbox` ±500 m, `marker`) tanpa API key.
3. Keduanya kosong → gambar statis `public/images/brand/peta-bengkel.webp` lewat `SafeImage`.

Tombol **"Buka di Google Maps"** memakai `mapsUrl` dan selalu tampil di bawah peta.
Alamat bengkel juga ditampilkan tepat di bawah peta.

## 5. Model data
```ts
type CategorySlug =
  | "tas-dompet" | "fashion" | "dekorasi-rumah"
  | "aksesoris" | "rumah-tangga" | "alat-tulis";

interface Category { slug: CategorySlug; name: string; icon: string /* nama ikon lucide */ }

interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;                 // Rupiah, tanpa desimal
  shortDescription: string;      // 1 kalimat, untuk kartu
  description: string;           // 2-3 kalimat
  material: string;              // bahan asal
  impactKg: number;              // limbah yang diselamatkan
  care: string;                  // tips perawatan singkat
  image: string;                 // /images/products/<slug>.webp
  gallery?: string[];
  featured?: boolean;
  isNew?: boolean;
  stock: "tersedia" | "terbatas";
}

interface Post {
  slug: string; title: string; excerpt: string;
  content: string[];             // array paragraf
  category: "Tips" | "Edukasi" | "Cerita";
  date: string;                  // ISO
  readMinutes: number;
  image: string;
}
```

Format Rupiah: `Rp85.000` (helper `formatRupiah`).

## 6. Konten dummy

### 6.1 Kategori
Tas & Dompet, Fashion, Dekorasi Rumah, Aksesoris, Rumah Tangga, Alat Tulis (ikon lucide yang sesuai, mis. `ShoppingBag`, `Shirt`, `Lamp`, `Gem`, `CookingPot`, `PenLine`).

### 6.2 Produk (24 item)
AI menulis `shortDescription`, `description`, dan `care` yang wajar untuk tiap produk. Tandai `isNew` pada 4 produk acak, `stock: "terbatas"` pada 5 produk.

| # | slug | Nama | Kategori | Harga | Bahan asal | impactKg | featured |
|---|---|---|---|---|---|---|---|
| 1 | tote-bag-denim-bekas | Tote Bag Denim Bekas | tas-dompet | 85000 | Jeans bekas | 0.6 | ya |
| 2 | tas-selempang-banner-bekas | Tas Selempang Banner Bekas | tas-dompet | 120000 | Spanduk vinil bekas | 0.8 | ya |
| 3 | dompet-kulit-perca | Dompet Kulit Perca | tas-dompet | 65000 | Perca kulit | 0.2 | |
| 4 | pouch-kemasan-kopi | Pouch Kemasan Kopi | tas-dompet | 35000 | Kemasan sachet kopi | 0.1 | |
| 5 | kemeja-patchwork-perca | Kemeja Patchwork Perca | fashion | 175000 | Kain perca | 0.7 | ya |
| 6 | jaket-denim-reworked | Jaket Denim Reworked | fashion | 250000 | Jeans bekas | 1.2 | |
| 7 | topi-bucket-kain-perca | Topi Bucket Kain Perca | fashion | 55000 | Kain perca | 0.2 | |
| 8 | syal-tenun-kain-bekas | Syal Tenun Kain Bekas | fashion | 70000 | Kain bekas | 0.3 | |
| 9 | vas-botol-kaca | Vas Botol Kaca Bekas | dekorasi-rumah | 45000 | Botol kaca | 0.5 | ya |
| 10 | lampu-gantung-botol | Lampu Gantung Botol | dekorasi-rumah | 150000 | Botol kaca | 0.9 | |
| 11 | pot-ban-bekas | Pot Tanaman Ban Bekas | dekorasi-rumah | 90000 | Ban bekas | 1.5 | |
| 12 | hiasan-dinding-kayu-palet | Hiasan Dinding Kayu Palet | dekorasi-rumah | 130000 | Kayu palet | 2.0 | ya |
| 13 | gelang-anyaman-plastik | Gelang Anyaman Plastik | aksesoris | 30000 | Plastik kresek | 0.1 | |
| 14 | kalung-kayu-daur-ulang | Kalung Kayu Daur Ulang | aksesoris | 40000 | Limbah kayu | 0.1 | |
| 15 | anting-kertas-daur-ulang | Anting Kertas Daur Ulang | aksesoris | 25000 | Kertas bekas | 0.05 | |
| 16 | gantungan-kunci-tutup-botol | Gantungan Kunci Tutup Botol | aksesoris | 15000 | Tutup botol plastik | 0.05 | |
| 17 | alas-gelas-kain-perca | Set Alas Gelas Kain Perca (4 pcs) | rumah-tangga | 40000 | Kain perca | 0.2 | |
| 18 | wadah-serbaguna-kaleng | Wadah Serbaguna Kaleng | rumah-tangga | 35000 | Kaleng bekas | 0.4 | |
| 19 | keset-anyaman-kain-bekas | Keset Anyaman Kain Bekas | rumah-tangga | 60000 | Kain bekas | 0.8 | |
| 20 | sarung-bantal-perca | Sarung Bantal Kain Perca | rumah-tangga | 75000 | Kain perca | 0.4 | |
| 21 | buku-catatan-kertas-daur-ulang | Buku Catatan Kertas Daur Ulang | alat-tulis | 28000 | Kertas bekas | 0.3 | ya |
| 22 | tempat-pensil-kaleng | Tempat Pensil Kaleng | alat-tulis | 25000 | Kaleng bekas | 0.3 | |
| 23 | pembatas-buku-kertas-daur-ulang | Pembatas Buku Kertas Daur Ulang | alat-tulis | 12000 | Kertas bekas | 0.02 | |
| 24 | notebook-sampul-kain-perca | Notebook Sampul Kain Perca | alat-tulis | 45000 | Kain perca + kertas bekas | 0.3 | |

Foto: `public/images/products/<slug>.webp`. Belum ada foto asli, jadi `SafeImage` menampilkan placeholder tema. Buat juga file `docs/PHOTO_GUIDE.md` berisi kata kunci pencarian foto (Unsplash/Pexels) untuk tiap produk, ukuran yang disarankan (800x800 px produk, 1600x900 px hero), dan penamaan file.

### 6.3 Artikel blog (6 item)
Panjang 4-6 paragraf, tanpa statistik karangan.
1. 5 Cara Mudah Memilah Sampah di Rumah (Tips)
2. Apa Bedanya Daur Ulang, Upcycle, dan Reuse? (Edukasi)
3. Merawat Tas dan Pakaian dari Bahan Daur Ulang (Tips)
4. Kisah di Balik Jeans Bekas yang Jadi Tote Bag (Cerita)
5. Plastik Sekali Pakai: Alternatif yang Bisa Dimulai Hari Ini (Edukasi)
6. Ide Dekorasi Rumah dari Botol Kaca Bekas (Tips)

### 6.4 Galeri
- **Sebelum-Sesudah (4):** jeans bekas ke tote bag, botol kaca ke vas, kayu palet ke hiasan dinding, spanduk bekas ke tas selempang.
- **Proses (8):** memilah bahan, mencuci, memotong pola, menjahit, merakit, finishing, pengecekan kualitas, pengemasan.

### 6.5 FAQ (8 pertanyaan, jawaban singkat dan jelas)
1. Bagaimana cara memesan? (pilih produk, klik "Pesan via WhatsApp", admin konfirmasi)
2. Apakah ada pembayaran online di website? (tidak, pembayaran dikonfirmasi admin lewat WhatsApp)
3. Bagaimana pengiriman? (placeholder: kurir umum, estimasi 2-5 hari)
4. Apakah produknya benar-benar dari bahan daur ulang?
5. Bagaimana cara merawat produk?
6. Bisakah memesan desain custom?
7. Bagaimana kebijakan tukar atau retur? (placeholder)
8. Bagaimana cara mengikuti kabar terbaru Cyclology? (arahkan ke media sosial)

Di bawah accordion: kartu "Masih ada pertanyaan?" + tombol WhatsApp + tombol media sosial.

## 7. Spesifikasi halaman

### 7.1 Beranda
1. Hero: label "Produk Daur Ulang Lokal", H1 "Barang bekas, *cerita baru.*", dua tombol ("Belanja Sekarang" ke `/produk`, "Kenali Cyclology" ke `/tentang`), foto besar di kanan.
2. Strip nilai (3 item): Bahan 100% bekas, Dibuat tangan pengrajin lokal, Pesan mudah via WhatsApp.
3. **Produk Katalog:** `CategoryStrip` + grid 4 produk unggulan + tombol "Lihat Semua Produk".
4. Band statistik (latar sage-50): angka dari `siteConfig.impact` + tautan "Lihat dampak kami" ke `/dampak`.
5. Cerita Cyclology (foto + teks + tombol ke `/tentang`).
6. Preview 3 artikel terbaru.
7. Banner CTA solid moss: "Mulai pilih barang favoritmu".

### 7.2 Katalog `/produk`
- `CategoryStrip` (ditambah item "Semua"), kategori aktif tersinkron dengan query `?kategori=`.
- Search input (filter nama dan bahan, case-insensitive, debounce ringan).
- Sort: Terbaru, Harga terendah, Harga tertinggi.
- Grid responsif: 2 kolom mobile, 3 kolom tablet, 4 kolom desktop.
- Hasil kosong: pesan ramah + tombol reset filter.
- Pagination sederhana atau "Muat lebih banyak" (12 per halaman).

### 7.3 Detail Produk `/produk/[slug]`
Galeri foto, kategori, nama, harga, deskripsi singkat, daftar info (Bahan asal, Dampak, Ketersediaan), tombol utama **"Pesan via WhatsApp"** (pesan otomatis berisi nama produk, harga, dan tautan halaman), catatan "Pesanan dikonfirmasi langsung oleh admin kami", bagian Deskripsi dan Bahan & Perawatan, 4 produk serupa (kategori sama), breadcrumb, JSON-LD `Product`.

Pesan WhatsApp otomatis:
```
Halo Cyclology, saya tertarik dengan produk berikut:
Produk: {name}
Harga: {formatRupiah(price)}
Link: {siteConfig.url}/produk/{slug}
Apakah masih tersedia?
```

### 7.4 Blog
Daftar: artikel unggulan besar + grid 3 kolom, filter kategori. Detail: judul, meta (tanggal, waktu baca, kategori), gambar, isi, tombol bagikan ke WhatsApp, 3 artikel terkait, CTA ke katalog.

### 7.5 Tentang, Galeri, FAQ
Tentang berisi: hero, cerita, 3 misi (Kurangi limbah, Dukung pengrajin lokal, Edukasi gaya hidup hijau), **Pendiri Kami** (**3 kartu**, data dari `siteConfig.founders`: foto potret, nama, peran "Co-Founder", bio singkat bila diisi), 3 langkah cara kerja (Kumpulkan, Olah, Hadirkan), CTA. Tata letak 3 kartu: 1 kolom di HP, 3 kolom di ≥768px, tinggi sama. Bio disembunyikan bila `bio` kosong. Foto pendiri memakai `SafeImage` sehingga placeholder tampil sampai foto asli dipasang.

**Bagian Bengkel:** Galeri **dan** Kontak memakai komponen `WorkshopSection` yang sama, sehingga data dan tampilan konsisten. Namanya diambil dari `siteConfig.workshop` (alamat berstatus **dummy**). Peta mengikuti urutan prioritas di bagian 4.1, dan alamat + tombol "Buka di Google Maps" tampil tepat di bawah peta.

### 7.6 Kontak
- Form: Nama (wajib), Nomor WhatsApp (opsional, validasi angka), Subjek (Tanya produk, Pesan custom, Kerja sama, Lainnya), Pesan (wajib, maks 500 karakter).
- Submit: validasi, bersihkan (trim, batasi panjang), susun pesan, buka `wa.me` di tab baru, tampilkan pesan sukses.
- Kartu info: WhatsApp, Email, Jam layanan. Ikon media sosial.
- **Peta/lokasi:** mengikuti desain Stitch halaman Kontak. Bila desain memuat peta atau alamat, pakai komponen dan data `siteConfig.workshop` yang sama dengan Galeri.

### 7.7 Landing Page Kampanye "Bulan Tanpa Plastik"
Navbar minimal (logo + satu tombol WhatsApp). Hero dengan satu CTA "Ambil Paket Hemat". 3 kartu manfaat. Kartu **Paket Hemat Tanpa Plastik**: Tote Bag Denim Bekas + Pouch Kemasan Kopi + Set Alas Gelas Kain Perca, harga normal dicoret, harga paket baru (dihitung dari data produk, diskon 10%). 3 langkah "Cara ikut". CTA diulang di bawah. Tanpa countdown berkedip.

### 7.8 Eco-Impact `/dampak`
Angka besar total kg (dari `siteConfig.impact`), 3 kartu statistik (produk terjual, pengrajin, kategori), grafik batang horizontal dampak per kategori (dihitung dari `impactKg` produk, warna datar sesuai palet, boleh CSS murni), kartu "Bagaimana kami menghitung" (penjelasan sederhana, tanpa klaim ilmiah atau penghematan CO₂ yang tidak bisa dibuktikan), dan CTA ke katalog. Beri catatan kecil "Angka contoh, akan diganti data asli" selama angkanya masih placeholder. Kartu produk dan detail produk menampilkan badge kecil "0,6 kg limbah diselamatkan".

## 8. SEO
- `metadata` per halaman, `metadataBase` dari `siteConfig.url`.
- `app/sitemap.ts` dan `app/robots.ts` memuat semua 10 halaman.
- JSON-LD `Product` di detail produk, `Article` di detail blog.
- Satu `<h1>` per halaman, hierarki heading rapi, `alt` pada semua gambar.

## 9. Keamanan (standar)
- `headers()` di `next.config`: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (matikan kamera, mikrofon, geolokasi), `Strict-Transport-Security`.
- CSP: opsional. Jika dibuat, uji dulu supaya tidak merusak Next.js (mulai dari mode `Content-Security-Policy-Report-Only`).
- Form: validasi dan sanitasi sisi klien, tanpa `dangerouslySetInnerHTML`, tanpa rahasia di kode.
- HTTPS otomatis dari Vercel.

## 10. Backup
Repositori Git/GitHub dengan commit per fase dan tag rilis (mis. `v1.0`). README memuat langkah pemulihan (`git clone`, `npm install`, `npm run dev`).

## 11. Di luar cakupan
Keranjang, checkout, payment gateway, login, database, panel admin, multi-bahasa, **halaman Dashboard Analytics (`/dashboard`)** dan Vercel Analytics (dibatalkan).
