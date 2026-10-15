# AUDIT — Perbandingan Desain vs Implementasi

Tugas **R1** (lihat `docs/REVISION.md`): membandingkan `design/*.png` dengan implementasi di `src/app` dan `src/components`. **Tidak ada kode yang diubah pada tugas ini.**

## Cara membaca tabel

| Kolom | Arti |
|---|---|
| **Di desain** | Elemen yang terlihat di `design/<halaman>.png` |
| **Di situs** | Kondisi implementasi sekarang |
| **Status** | `Sesuai` · `Beda` · `Hilang` (ada di desain, tidak ada di situs) · `Ekstra` (ada di situs, tidak ada di desain) · `Sengaja dilewati` |
| **Prioritas** | `P1` (merusak halaman atau kredibilitas merek) · `P2` (celah visual yang nyata: layout/kelengkapan) · `P3` (polish) |

## Aturan konvensi yang dipakai

1. **SPEC.md dan desain desktop menang atas desain mobile** untuk teks dan komponen (AGENTS.md aturan 19). `mobile-home.png` dan `mobile-produk.png` dipakai **hanya sebagai acuan tata letak**.
2. **Elemen yang dilarang** dicatat `Sengaja dilewati`:
   - bottom navigation bar (AGENTS.md aturan 19),
   - kartu traceability / transparansi, halaman dashboard, paket analytics (AGENTS.md aturan 15, SPEC bagian 11),
   - blob/lingkaran dekoratif dan gradient (AGENTS.md bagian "Larangan gaya"),
   - klaim yang tidak bisa dibuktikan: "terverifikasi", "kemasan nol plastik", "Zero-Plastic Packing", angka CO₂e (REVISION aturan R0.3).
3. **Angka, nama produk, dan nama kota di desain adalah dummy Stitch** dan tidak ditiru. Sumber kebenaran tetap `src/data/*.ts` dan `src/config/site.ts`.
4. Elemen yang membutuhkan backend (mis. formulir newsletter) atau model data baru dicatat sebagai catatan, bukan temuan.

---

## 1. Beranda `/` — acuan `design/home.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Label "PRODUK DAUR ULANG LOKAL" | Ada | Ada (`Badge` Hero) | Sesuai | — |
| H1 "Barang bekas, cerita baru." | Lora italic 2 kata | Sama | Sesuai | — |
| Dua tombol (Belanja Sekarang, Kenali Cyclology) | Ada | Ada | Sesuai | — |
| Foto hero produk upcycle | Tas denim di atas meja kayu | Foto ruang rapat gelap, tidak relevan | Beda | **P1** |
| Badge di foto "100% UPCYCLED ARTISTRY" | Ada | Ada | Beda (bahasa Inggris) | P3 |
| Baris kecil di hero | "Pemesanan langsung & ramah via WhatsApp" | "Pemesanan… / Dikurasi dari barang bekas" | Beda (R0) | P3 |
| Strip nilai 3 poin | Ada | `ValueStrip` ada | Sesuai | — |
| Seksi "Produk Katalog" + subjudul | Ada | Ada | Sesuai | — |
| **CategoryStrip 6 kategori di atas grid** | Ada | **Tidak ada** (`CatalogSection` tidak mengimpor `CategoryStrip`) | **Hilang** | **P1** |
| Grid 4 produk unggulan | Ada | Ada | Sesuai | — |
| Tombol "Lihat Semua Produk" | Ada | Ada | Sesuai | — |
| Band dampak (1.250 kg + 2 kartu + tautan) | Ada | `ImpactBand` sama | Sesuai | — |
| Seksi cerita + tombol "Baca Kisah Pengrajin" | Ada | `StorySection` ada | Sesuai | — |
| Foto seksi cerita | Pengrajin menjahit di workshop | Foto proses menjahit (konten, bukan studio) | Beda | P3 |
| "Kabar & Inspirasi Hijau" + 3 kartu | Ada | Ada | Sesuai | — |
| Tombol "Baca Semua Artikel" | **Tidak ada** di desain | Ada | Ekstra | P3 |
| Banner CTA gelap + catatan jam layanan | Ada | `CTABanner` ada | Sesuai | — |
| Lebar container | 1200px | `max-w-300px` (kelas tidak valid) | Beda | P2 |

---

## 2. Tentang `/tentang` — acuan `design/tentang.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Breadcrumb + badge "TENTANG CYCLOLOGY" | Ada | Ada | Sesuai | — |
| H1 + aksen "Karya Bernilai Guna." | Ada | Ada | Sesuai | — |
| Teks hero | Menyebut "Yogyakarta" | Sudah dinetralkan (R0) | Sesuai | — |
| Kartu "ATELIER TERVERIFIKASI" | Ada | Diganti "Dikerjakan Tangan" | Sengaja dilewati (klaim terlarang) | — |
| Chip statistik (1,2+ Ton / 24+ Mitra / 100% Sirkular) | 3 chip bernomor | 3 chip teks tanpa angka | Beda (angka dummy) | P2 |
| **Foto "Cerita Kami"** | Foto utama + foto inset tumpang tindih + badge lokasi | 1 foto; file `hero/story-tentang.webp` **belum ada** → kotak kosong | **Hilang** | **P1** |
| Blockquote kutipan | Blok gelap + teks putih | `sage-50` + garis aksen terracotta | Beda | P3 |
| "Misi & Komitmen Keberlanjutan" 3 kartu | Ada | Ada | Sesuai | — |
| Baris bawah kartu misi (ikon + teks) | Ada | Tidak ada | Hilang | P3 |
| **Kartu pendiri** | 2 kartu, foto potret besar, ada bio | 2 kartu, foto 160px, bio disembunyikan (R0) | Beda | **P1** |
| Jumlah pendiri | 2 (design) | 2 | Sesuai (R5 akan menambah jadi 3) | — |
| "Cara Kerja Kami" 3 kartu bernomor | Ada | Ada | Sesuai | — |
| CTA: badge + 2 tombol | 2 tombol | 1 tombol | Beda | P3 |
| Lingkaran dekoratif pada CTA | Ada | Tidak ada | Sengaja dilewati (blob dilarang) | — |
| Lokasi "Yogyakarta / Kasongan" | Ada di desain | Sudah diganti Depok dari `siteConfig` (R0) | Sesuai | — |

---

## 3. Katalog `/produk` — acuan `design/produk.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Header sage-50 + breadcrumb + label + H1 | Ada | Ada | Sesuai | — |
| Deskripsi rata kanan dengan aksen Lora | "upcycle" dalam Lora italic | Aksen Lora di dalam kalimat | Beda | P3 |
| CategoryStrip "Semua" + 6 kategori | Ada | Ada | Sesuai | — |
| Search + hitungan hasil + select urutan | Ada | Ada | Sesuai | — |
| Grid 4 kolom | Ada | Ada | Sesuai | — |
| Tombol kartu soft-fill sage-50 | Ada | Sudah diselaraskan | Sesuai | — |
| Badge "BARU" kapital | Ada | Sudah diselaraskan | Sesuai | — |
| Urutan "Terbaru" menampilkan unggulan dulu | Ya | Sudah diselaraskan | Sesuai | — |
| "Muat Lebih Banyak Produk" + nomor halaman | Ada | Ada | Sesuai | — |
| CTA "Pesanan Khusus & Suvenir" | Ada | Ada | Sesuai | — |
| Nama produk di desain | Nama lain (contoh Stitch) | `src/data/products.ts` | Sengaja dilewati (data menang) | — |
| Baris "0,6 kg limbah" di kartu | Tidak ada | Ada | Sengaja dilewati (SPEC 7.8 mewajibkan) | — |

---

## 4. Detail Produk `/produk/[slug]` — acuan `design/produk-detail.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Breadcrumb 4 level + "← Kembali ke Katalog Produk" | Ada | Ada | Sesuai | — |
| Galeri foto utama + thumbnail | Ada | Ada | Sesuai | — |
| Badge dampak pada foto utama | "~0,6 kg" | "~0,6 kg…" | Sesuai | — |
| Catatan "KARYA ORIGINAL SATU-SATUNYA" | Ada | Tidak ada | Hilang | P3 |
| Judul kartu spesifikasi | "Spesifikasi Material & Ukuran" | "Spesifikasi Material & Dampak" | Beda | P3 |
| Baris dimensi & pengemasan | Ada | Tidak ada (model data tidak punya) | Beda | P3 |
| Kartu "Pesan Melalui Percakapan Langsung" | Ada | Ada | Sesuai | — |
| 3 chip kepercayaan | Ada | Ada (satu diganti netral, R0) | Sesuai | — |
| Tab: Deskripsi / Bahan / **Cerita Pengrajin** | 3 tab | 2 tab | Beda | P3 |
| Kartu "Dimensi & Muatan" di dalam tab | Ada | Tidak ada | Beda | P3 |
| Produk serupa + "Lihat Semua Koleksi" | Tautan di kanan judul | Tombol di bawah, rata tengah | Beda | P3 |

---

## 5. Blog `/blog` — acuan `design/blog.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Breadcrumb + label + H1 "Jurnal Hijau Cyclology" | Ada | Ada | Sesuai | — |
| 2 kartu statistik | "34+ Artikel", "100% …" (dummy) | Angka dari data | Beda (angka dummy) | P3 |
| Artikel unggulan + badge "ARTIKEL PILIHAN" | Ada | `FeaturedArticle` ada | Sesuai | — |
| "Eksplorasi Topik" + filter chips + jumlah | Ada | `BlogFilter` ada | Sesuai | — |
| Grid 3 kolom + meta tanggal/waktu baca | Ada | Ada | Sesuai | — |
| Banner "Inisiatif Literasi Sirkular" + tombol "Simpan Bacaan" | Ada | Banner ada, tombol tidak | Beda | P3 |
| Kartu kolaborasi artikel | Ada, terlalu lebar | Ada | Beda | P3 |
| Kartu "Berlangganan Jurnal Bulanan" | Ada | Tidak ada | Sengaja dilewati (butuh backend) | — |
| Klaim "14 komunitas" | Ada | Sudah dihapus | Sengaja dilewati (angka karangan) | — |

---

## 6. Galeri `/galeri` — acuan `design/galeri.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Header + label + H1 "Transformasi Limbah, Cerita Nyata." | Ada | Ada | Sesuai | — |
| 2 kartu statistik di header | Ada | Tidak ada | Hilang | P3 |
| "Sebelum & Sesudah" 4 kartu (2 foto + panah + badge) | Ada | Ada | Sesuai | — |
| Chip SKU di kartu transformasi | Ada | Tidak ada | Hilang | P3 |
| Catatan "Arahkan kursor untuk melihat detail tekstur" | Ada | Tidak ada | Hilang | P3 |
| **Filter tahap proses (chips)** | Ada (6 tahap) | Tidak ada | **Hilang** | **P2** |
| Grid 8 kartu proses + nomor + chip tahap | Ada | Ada | Sesuai | — |
| Baris bawah kartu proses (ikon + teks) | Ada | Tidak ada | Hilang | P3 |
| **Peta lokasi bengkel** | Gambar peta nyata | Placeholder ("Peta lokasi bengkel") | **Beda** | **P1** |
| Nama kota pada judul bengkel | "Yogyakarta" | Depok dari `siteConfig` (R0) | Sesuai | — |
| CTA kolaborasi | Ada | Ada | Sesuai | — |
| Lingkaran dekoratif pada CTA | Ada | Tidak ada | Sengaja dilewati | — |

---

## 7. FAQ `/faq` — acuan `design/faq.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Breadcrumb + badge + H1 "Pertanyaan Umum." | Ada | Ada | Sesuai | — |
| Tiga chip poin (Upcycled / Zero-Plastic / WA) | Ada | Tidak ada | Hilang | P3 (chip "Zero-Plastic" dilarang, R0.3) |
| Accordion 8 pertanyaan | Ada | Ada (`Accordion`) | Sesuai | — |
| Pertanyaan pertama terbuka + badge "Paling Sering Ditanyakan" | Ada | Semua tertutup | Beda | P3 |
| Kartu "Masih Punya Pertanyaan?" + tombol WA + jam | Ada | Ada | Sesuai | — |
| 4 kartu media sosial dengan handle | Ada | Link ikon saja | Beda | P3 |
| Lingkaran dekoratif | Ada | Tidak ada | Sengaja dilewati | — |

---

## 8. Kontak `/kontak` — acuan `design/kontak.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| **Breadcrumb** | "Kontak" | "Hubungi Kami" | **Beda** | **P1** |
| Badge "HUBUNGI KURATOR KAMI" | Ada | Tidak ada | Hilang | P3 |
| H1 + aksen "Ciptakan Kebaikan." | Ada | Ada | Sesuai | — |
| 3 chip cepat di hero | Ada | Tidak ada | Hilang | P2 |
| Formulir + judul + subjudul | Ada | Ada | Sesuai | — |
| Hint per field (mis. "Sesuai sapaan akrab Anda") | Ada | Sebagian (label + hint WA) | Beda | P3 |
| Badge "Optional" pada Nomor WhatsApp | Ada | Ada | Sesuai | — |
| Counter "0 / 500" | Ada | Ada | Sesuai | — |
| Kotak catatan sage sebelum tombol kirim | Ada | Ada | Sesuai | — |
| Kartu WhatsApp / Surel / Jam Layanan | Ada | Ada | Sesuai | — |
| Jam layanan 2 baris (hari kerja + akhir pekan) | Ada | 1 baris dari `serviceHours` | Beda | P3 |
| Kartu "Kesehatan & Lokakarya" + 4 kartu sosial | Ada | Link sosial saja | Beda | P3 |
| Bar privasi + "TEREKRIPSI & TERJAGA" | Ada | Tidak ada | Hilang | P3 |
| Peta / bagian Bengkel | Tidak ada di desain | `WorkshopSection` tampil | Ekstra | P3 |

---

## 9. Kampanye `/kampanye/bulan-tanpa-plastik` — acuan `design/kampanye.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| **Navbar** | Minimal saja (logo + tombol WA) | Navbar penuh **dan** navbar minimal tampil bersama | **Beda** | **P1** |
| Badge + H1 + aksen "Tanpa Sampah Plastik." | Ada | Ada | Sesuai | — |
| Dua tombol (Ambil Paket Hemat, Tanya Tim Kurator) | Ada | Ada | Sesuai | — |
| 3 badge kecil di bawah tombol | Ada | Tidak ada | Hilang | P3 |
| Foto hero lebar + caption | Ada | Tidak ada | Hilang | P2 |
| 3 kartu manfaat | Ada | Ada | Sesuai | — |
| Baris bawah kartu manfaat (ikon + teks) | Ada | Tidak ada | Hilang | P3 |
| Kartu Paket Hemat: header bar gelap + "Tersedia … Set" | Ada | Tanpa header bar | Beda | P2 |
| Blok harga (label + harga + harga coret) | Ada | Ada | Sesuai | — |
| Diskon | 20% | 10% | Sengaja dilewati (SPEC 7.7 menetapkan 10%) | — |
| Isi paket | 2x tatakan gelas | 1 set tatakan | Beda | P3 |
| 3 langkah bergabung | Ada | Ada | Sesuai | — |
| Blok penutup "© Cyclology Atelier" + badge | Ada | Tidak ada | Hilang | P3 |

---

## 10. Eco-Impact `/dampak` — acuan `design/dampak.png`

| Elemen | Di desain | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Breadcrumb + badge "LAPORAN TRANSPARANSI SirkULARAN" | Ada | Tidak ada | Hilang | P2 |
| H1 dua baris + aksen | Ada | Satu baris | Beda | P3 |
| Kartu angka besar + catatan periode | Ada | Ada (catatan tahun karangan dihapus, R0) | Sesuai | — |
| Kartu statistik **dengan ikon** | 3 kartu | 4 kartu tanpa ikon | Beda | P2 |
| Kartu "3,1 Ton CO₂e" | Ada | Tidak ada | Sengaja dilewati (klaim tak terverifikasi) | — |
| Grafik: satu batang bertumpuk + 4 kartu kategori (persen + kg) | Ada | Bar terpisah per kategori, tanpa persen/kg | Beda | P2 |
| Kartu cerita dengan foto | Ada | Tidak ada | Hilang | P3 |
| "Bagaimana Kami Menghitung" | 4 kartu bernomor | 3 paragraf dalam 1 kartu | Beda | P3 |
| Catatan "Angka contoh" | Ada | Ada | Sesuai | — |
| CTA | 2 tombol | 1 tombol | Beda | P3 |
| Lingkaran dekoratif putus-putus | Ada | Tidak ada | Sengaja dilewati | — |

---

## 11. Tampilan mobile — acuan `design/mobile-home.png` & `design/mobile-produk.png`

Hanya tata letak yang dipakai; teks dan komponen mengikuti desain desktop (AGENTS.md aturan 19).

| Elemen | Di desain mobile | Di situs | Status | Prioritas |
|---|---|---|---|---|
| Drawer: 7 tautan berikon + blok identitas | Ada | Ada | Sesuai | — |
| Hero mobile: 1 tombol | 1 tombol | 2 tombol (menyusut wajar) | Beda | P3 |
| Chip kategori bisa scroll horizontal | Ada | Ada | Sesuai | — |
| Grid 2 kolom | Ada | Ada | Sesuai | — |
| Teks tombol kartu | "Tanya / Order", "Pesan WA" | "LIHAT DETAIL" | Sengaja dilewati (desktop menang) | — |
| H1 hero mobile | "Napas Baru dari Limbah…" | "Barang bekas, cerita baru." | Sengaja dilewati (desktop/SPESIAL menang) | — |
| Sort default | "Terpopuler" | "Terbaru" | Sengaja dilewati (desktop menang) | — |
| Chip "Bahan: …" di kartu | Ada (hanya mobile) | Tidak ada | Beda | P3 |
| **Tombol WhatsApp melayang** | `mobile-home`: pil bertulis, `mobile-produk`: bulat ikon saja | Pil bertulis "WhatsApp" | Beda | **P2** |
| **Bottom navigation bar** | Ada | Tidak ada | **Sengaja dilewati** (AGENTS.md aturan 19) | — |
| Kartu "traceability"/transparansi | Tidak ada | Tidak ada | Sengaja dilewati | — |

---

## Ringkasan temuan per prioritas

**P1 (7 temuan)**
1. Beranda — `CategoryStrip` hilang di seksi Produk Katalog.
2. Beranda — foto hero tidak relevan (ruang rapat gelap).
3. Tentang — foto "Cerita Kami" kosong (file belum ada) + foto inset hilang.
4. Tentang — kartu pendiri belum 3 orang dan foto potret terlalu kecil.
5. Galeri — peta lokasi bengkel hanya placeholder.
6. Kampanye — navbar ganda (penuh + minimal).
7. Kontak — breadcrumb "Hubungi Kami" tidak sama dengan menu "Kontak".

**P2 (10 temuan)** — chip statistik Tentang, container `max-w-300px` tak valid (Beranda, Blog Preview, Catalog Section), filter tahap proses Galeri, hero Kampanye tanpa foto, header bar kartu paket Kampanye, 3 chip cepat Kontak, breadcrumb + badge Dampak, kartu statistik Dampak tanpa ikon, grafik Dampak tidak sesuai desain, tombol WA melayang.

**P3 (mayoritas)** — badge berbahasa Inggris, tombol "Baca Semua Artikel" yang tidak ada di desain, SKU Galeri, tab "Cerita Pengrajin", dimensi produk, chip FAQ, kartu sosial, baris bawah kartu, jam layanan 2 baris, blok penutup Kampanye, dan lain-lain.

## Catatan lintas halaman
- `max-w-300px` adalah kelas Tailwind **tidak valid** (seharusnya `max-w-300`): muncul di `src/components/sections/BlogPreview.tsx`, `CatalogSection.tsx`. Akibatnya batas lebar 1200px tidak diterapkan.
- Nama produk, angka, dan nama kota di dalam PNG adalah dummy Stitch. Angka dan nama harus selalu dari `src/config/site.ts` / `src/data/*.ts`.
- Beberapa elemen desain-butuh backend (newsletter blog) atau field data baru (dimensi produk, tahap proses) sehingga tidak dapat langsungalda ditiru.