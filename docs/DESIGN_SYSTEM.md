# DESIGN SYSTEM — Cyclology

Kesan yang dituju: **natural, minimalis, segar, nyaman**. Seperti butik ramah lingkungan, bukan startup teknologi.

## 1. Warna (semua solid, tanpa gradient)

| Token | Hex | Pemakaian |
|---|---|---|
| `cream` | `#F7F4EC` | latar halaman utama |
| `sage-50` | `#EEF2EA` | latar seksi selang-seling, kartu info |
| `sage-200` | `#D9E3D4` | garis pemisah halus, state aktif lembut |
| `sage-500` | `#8FA98A` | ikon, aksen sekunder, bar grafik |
| `moss-600` | `#2F4A3A` | **warna utama**: heading, tombol utama, harga |
| `moss-700` | `#263D30` | hover tombol utama |
| `moss-900` | `#1B2B22` | footer atau banner CTA gelap (jika perlu) |
| `terracotta-500` | `#C4714A` | aksen kecil: ikon badge, highlight tipis |
| `terracotta-100` | `#F3E3DA` | latar badge aksen |
| `terracotta-700` | `#9A4F2E` | **teks** pada badge aksen (kontras aman) |
| `ink` | `#24302A` | teks isi |
| `ink-muted` | `#5F6B63` | teks sekunder, label |
| `line` | `#E3E6DC` | border kartu dan input |
| `white` | `#FFFFFF` | permukaan kartu |

Aturan:
- Teks putih hanya di atas `moss-600` atau `moss-900`. **Jangan** teks putih kecil di atas terakota (kontras kurang).
- Terakota hanya untuk badge ("Baru", "Terbatas") dan highlight kecil. Tidak boleh dipakai untuk tombol utama atau latar besar.
- Tidak ada gradient, tidak ada bayangan berwarna.

Daftarkan sebagai CSS variable di `globals.css` dan petakan ke theme Tailwind (Tailwind v4: blok `@theme`; v3: `tailwind.config`). Komponen memakai nama token, misalnya `bg-cream`, `text-moss-600`.

## 2. Tipografi
- **Poppins** (400, 500, 600, 700): semua heading, isi, UI. Dimuat via `next/font/google` dengan `display: swap`.
- **Lora italic** (400, 500): hanya untuk aksen di heading besar. Contoh: `Barang bekas, <em>cerita baru.</em>`
- Label kategori pada kartu produk: Poppins italic kecil.

### Aturan aksen Lora italic (REVISION R3.6)
- Maksimal **1-3 kata**.
- Hanya di dalam **judul besar** (H1/H2, ukuran ≥ 24px). **Dilarang** di paragraf, label, atau teks kecil.
- Warna tunggal untuk semua halaman: **`terracotta-700`**. Warna hijau `moss-700` tidak lagi dipakai untuk aksen.
- Contoh: `Barang bekas, <em class="font-serif italic text-terracotta-700">cerita baru.</em>`

| Peran | Ukuran | Berat |
|---|---|---|
| H1 | `clamp(2.25rem, 5vw, 3.75rem)` | 700, line-height 1.1 |
| H2 | `clamp(1.75rem, 3.5vw, 2.5rem)` | 600 |
| H3 | 1.25rem | 600 |
| Isi | 1rem (16px), line-height 1.7 | 400 |
| Kecil / label | 0.75-0.875rem | 400-500 |
| Tombol | 0.8125rem, uppercase, letter-spacing 0.04em | 600 |

## 3. Layout, jarak, bentuk
- Lebar konten maks `1200px`, padding horizontal 16px (mobile), 24px (tablet), 32px (desktop).
- Jarak antar seksi: `py-16` mobile, `py-24` desktop. Banyak ruang kosong.
- Radius: kartu `16px`, input `12px`, tombol dan chip **pill** (`9999px`), gambar produk `12px`.
- Bayangan (hanya satu level): `0 1px 2px rgba(36,48,42,.06), 0 6px 20px rgba(36,48,42,.05)`.
- Border kartu: `1px solid line`.
- Ikon: `lucide-react`, stroke 1.5-2, ukuran 20-24px, warna `moss-600` atau `sage-500`.

## 4. Komponen

### 4.1 Button
- **Primary:** latar `moss-600`, teks putih, pill, hover `moss-700`.
- **Outline:** border `moss-600` 1px, teks `moss-600`, pill, hover latar `sage-50`.
- **WhatsApp:** gaya Primary dengan ikon WhatsApp di kiri. Tidak memakai hijau WhatsApp resmi supaya palet tetap konsisten.
- Semua tombol punya focus ring 2px `sage-500` dengan offset.

### 4.2 CategoryStrip (referensi: katalog Lapis Bogor)
- Satu **kartu putih** rounded 16px, shadow lembut, di tengah (maks 960px), isi 6 kategori berjajar rata tengah (+ "Semua" di halaman `/produk`).
- Tiap item: lingkaran ikon 56px (latar `sage-50`, ikon `moss-600`) di atas, label di bawah (Poppins 600, 14px).
- State aktif: lingkaran berlatar `sage-200`, label `moss-600`, garis bawah 2px `moss-600`.
- Mobile: baris bisa di-scroll horizontal, tanpa scrollbar tebal, item tidak mengecil di bawah 88px.

### 4.3 ProductCard (referensi: katalog Lapis Bogor)
Struktur dari atas ke bawah:
1. Gambar produk **persegi** (`aspect-square`), radius 12px, `object-cover`, latar `sage-50` bila gambar belum ada. Badge kecil di pojok kiri atas bila `isNew` atau `stock === "terbatas"`.
2. **Label kategori:** Poppins *italic* 12px, `ink-muted`.
3. **Nama produk:** Poppins 600, 16px, `moss-600`, maksimal 2 baris (`line-clamp-2`, tinggi minimum 2 baris agar sejajar).
4. **Harga:** Poppins 600, 16px, `moss-600`, format `Rp85.000`.
5. **Badge dampak (opsional):** teks kecil dengan ikon daun, mis. "0,6 kg limbah diselamatkan", warna `ink-muted`.
6. Tombol **Outline pill** uppercase kecil: ikon `ShoppingBag` + `LIHAT DETAIL`.

Kartu: latar putih, radius 16px, border `line`, shadow lembut, padding 16px (mobile) atau 24px (desktop). Hover: naik 2px dan shadow sedikit menguat (150-200ms). Seluruh kartu bisa diklik ke detail. Grid: 2 kolom (mobile), 3 (≥768px), 4 (≥1024px), gap 16-24px.

### 4.4 Navbar
- Sticky, latar `cream` dengan border bawah `line` (tanpa blur atau transparansi kaca).
- Kiri: logo (SVG daun + lingkaran panah, wordmark "Cyclology" Poppins 700 `moss-600`).
- Tengah: tautan (Poppins 500, 14px), tautan aktif memakai garis bawah `moss-600`.
- Kanan: tombol Primary "Pesan via WhatsApp" (ikon saja di layar sempit).
- Mobile: hamburger membuka panel penuh dengan tautan besar dan tombol WhatsApp.
- Varian minimal untuk landing page kampanye: logo + satu tombol.

### 4.5 Footer
Latar `moss-900`, teks `cream`. Kolom: logo + deskripsi singkat, tautan cepat, kontak, media sosial (ikon Instagram, TikTok, Facebook, YouTube dari `siteConfig`). Baris bawah: hak cipta + tautan kecil ke Eco-Impact dan Kampanye.

### 4.6 Lainnya
- **SectionHeading:** judul center atau kiri, subjudul `ink-muted`, opsional label kecil di atasnya (uppercase 12px, `terracotta-700`).
- **Badge:** pill kecil, latar `terracotta-100`, teks `terracotta-700` (varian netral: `sage-50` dan `moss-600`).
- **Accordion (FAQ):** kartu putih, border `line`, ikon plus/minus, animasi tinggi halus.
- **Input form:** tinggi 48px, radius 12px, border `line`, fokus border `moss-600` + ring `sage-500`, label di atas input, pesan error `terracotta-700` dengan ikon.
- **BlogCard:** gambar 16:10 radius 12px, chip kategori, judul 600, 2 baris ringkasan, tanggal dan waktu baca.
- **WhatsAppFloat:** tombol **bulat 56px (`h-14 w-14`)** `moss-600` di pojok kanan bawah, **ikon saja tanpa teks**, `aria-label` jelas. Dilarang bentuk pil bertulis "WhatsApp".
- **ImpactBand:** latar `sage-50`, angka besar `moss-600` (Poppins 700), label `ink-muted`. Memuat tautan teks "Lihat dampak kami" ke `/dampak`.
- **SafeImage:** pembungkus `next/image` dengan fallback blok `sage-50` + ikon daun jika gambar gagal dimuat.

### 4.7 PageHero (hero halaman)
Semua halaman memakai satu komponen `src/components/sections/PageHero.tsx` agar konsisten.

Struktur wajib (urutan tidak boleh diubah):
```html
<section class="relative isolate overflow-hidden bg-cream">
  <SafeImage fill sizes="100vw" alt="" aria-hidden class="object-cover opacity-15 sm:opacity-20" />  <!-- foto lokal -->
  <div class="absolute inset-0 bg-cream/70" />                                                    <!-- overlay warna SOLID -->
  <div class="relative ..."> ...konten... </div>
</section>
```
Aturan:
- **Dilarang gradient.** Overlay selalu warna token solid dengan opacity (`bg-cream/70`).
- Opasitas foto 15-20% (mobile 15%, desktop 20%). Persis satu gambar `priority` per halaman.
- Foto bersifat dekoratif: `alt=""` + `aria-hidden="true"`.
- Tinggi `py-14 sm:py-16 lg:py-24`.
- Isi: `eyebrow` (label `terracotta-700` uppercase), `title` (H1 700, aksen Lora sesuai aturan di atas), `description`, `actions` (tombol), `chips` (chip kecil), `aside` (kartu/kolase/statistik di kanan), `breadcrumb`.
- Sumber foto latar: `src/data/heroes.ts` dan `scripts/photo-manifest.json`. Selalu file lokal di `public/images/hero/`.
- **`tone="dark"`** dipakai oleh hero Beranda: latar `bg-moss-900`, overlay `bg-moss-900/70`, foto tampil penuh (tanpa pengurangan opacity), judul `text-white`, deskripsi `text-sage-200`, `eyebrow` jadi pil `bg-sage-200` + teks `moss-700`, dan tombol memakai varian `light` (putih) serta `ghost` (garis putih transparan). Aksen Lora pada judul gelap memakai `sage-200` (bukan `terracotta-700`) agar kontras aman di atas foto. Tetap tanpa gradient.

## 5. Gambar dan fotografi
- Gaya: cahaya alami, latar netral hangat (kayu terang, linen, krem), produk terlihat jelas, tanpa filter berlebihan.
- Rasio: produk 1:1, hero 4:3 atau 16:9, blog 16:10, galeri bebas (masonry).
- Format target `.webp`, produk 800x800 px, hero 1600x900 px.
- Logo: `public/brand/logo.svg` (placeholder: daun membentuk lingkaran panah). Dibuat sebagai file terpisah agar mudah diganti.

## 6. Gerak
- Transisi hover/focus 150-200ms `ease-out`.
- Fade-in + naik 8px saat elemen masuk viewport (sekali saja), hormati `prefers-reduced-motion`.
- Tanpa parallax, tanpa animasi looping, tanpa efek berlebihan.

## 7. Responsif
Breakpoint Tailwind default (`sm 640`, `md 768`, `lg 1024`, `xl 1280`). Desain **mobile-first**. Target uji: 390px, 768px, 1280px. Area sentuh minimal 44px.

## 8. Daftar cek sebelum selesai
- [ ] Tidak ada gradient atau hex di dalam komponen
- [ ] Hanya Poppins dan Lora yang dimuat
- [ ] Kartu produk sama persis di Beranda dan Katalog
- [ ] Kontras teks aman, focus ring terlihat
- [ ] Tidak ada scroll horizontal di 390px
