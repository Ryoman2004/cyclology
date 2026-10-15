# REVISION — Perbaikan Tahap 2 (setelah Fase 0-9)

Dokumen ini dipakai oleh AI agent (Codex) untuk memperbaiki hasil Fase 0-9. Kerjakan **satu tugas (R1, R2, dst.) per sesi**, urutannya ada di bagian "Urutan kerja".

## Cara memulai (prompt untuk Codex)

```
Baca AGENTS.md, docs/SPEC.md, docs/DESIGN_SYSTEM.md, dan docs/REVISION.md. Kerjakan HANYA tugas [R?] dari
docs/REVISION.md. Acuan visual final: design/*.png. Kondisi situs saat ini (jika ada): design/current/*.png.
Setelah selesai jalankan npm run lint dan npm run build, ringkas apa yang diubah (daftar file), lalu berhenti.
```
Ganti `[R?]` dengan nomor tugas. Catatan: Codex umumnya membaca `AGENTS.md` otomatis; tes dulu dengan meminta ringkasan aturannya.

## Urutan kerja
`R1` audit → `R2` data dan bug teks → `R3` bug layout → `R5` Tentang (3 pendiri) → `R6` peta → `R7` foto → `R4` hero → `R8` polish → `R9` sinkron dokumen dan QA.

---

## R0 — Aturan tambahan (berlaku untuk semua tugas)
1. Teks yang tampil ke pengunjung **tidak boleh** memuat istilah kode (`impactKg`, `siteConfig`, `slug`, "placeholder", dan sejenisnya).
2. Satu sumber data. Lokasi bengkel (**Depok, Jawa Barat**) dan semua angka berasal dari `siteConfig`. Jumlah kategori = `categories.length`, jumlah produk = `products.length`. Jangan menulis angka atau nama kota langsung di komponen.
3. Dilarang klaim yang tidak bisa dibuktikan: "terverifikasi", "kemasan nol plastik", "pengiriman ramah lingkungan", tahun berdiri, dan nama kota selain Depok. Ganti dengan kalimat netral. Pemilik boleh mengonfirmasi klaim tertentu kemudian.
4. Tetap **tanpa gradient**. Overlay di atas foto memakai warna token solid dengan opacity (mis. `bg-cream/70`).
5. Jangan membuat halaman baru, jangan menambah dependency tanpa alasan, jangan memindahkan URL yang sudah ada.
6. Jangan membaca atau menampilkan `.env.local`. Jangan menulis nomor telepon atau email pribadi ke dokumen, komentar, atau commit message.
7. `design/*.png` hanya acuan visual, bukan aset situs. Gambar situs tetap file lokal di `public/images/` lewat `SafeImage`.
8. Setiap tugas diakhiri lint dan build bersih, ringkasan, lalu berhenti. Commit per tugas.

---

## R1 — Audit terhadap folder design/ (tanpa mengubah kode)
**Masalah:** beberapa elemen desain di `design/` belum terbawa ke situs.

**Lakukan:**
- Untuk 10 halaman (desktop) dan `mobile-home`, `mobile-produk`, bandingkan `design/<halaman>.png` dengan implementasi di `src/app/...`.
- Buat `docs/AUDIT.md` berisi tabel per halaman: *Elemen | Di desain | Di situs | Status (Sesuai / Beda / Hilang) | Prioritas (P1-P3)*.
- Acuan aturan konflik: SPEC.md dan desain desktop menang atas desain mobile untuk teks dan komponen (AGENTS.md aturan 19). Elemen yang sengaja dilarang (bottom nav, kartu traceability, dashboard) dicatat sebagai "Sengaja dilewati".
- Jangan memperbaiki apa pun. Tunggu persetujuan pemilik.

**Selesai bila:** `docs/AUDIT.md` ada dan mencakup semua halaman.

---

## R2 — Data dan teks yang salah atau tidak konsisten
| Temuan | Perbaikan |
|---|---|
| Statistik "Kategori Produk" menampilkan **24**, padahal kategori hanya 6 (angka 24 adalah jumlah produk) | Hitung dari `categories.length`. Label "Kategori Produk" = 6. Bila ingin menampilkan jumlah produk, buat kartu terpisah "Jenis Produk" dari `products.length`. |
| Halaman Tentang menyebut Yogyakarta, Kasongan, Sleman, dan "awal tahun 2022", sedangkan bagian Bengkel beralamat di Depok | Satukan ke Depok. Tambahkan `siteConfig.location` (kota, provinsi) dan pakai di seluruh teks. Cari dengan `grep -rniE "yogya\|kasongan\|sleman\|bantul\|2022" src docs` dan bersihkan semuanya. Tulis ulang cerita agar umum, tanpa tahun dan tanpa kota karangan. |
| Klaim "Atelier Terverifikasi", "Kemasan Nol Plastik", "Pengiriman ramah lingkungan", "jejaring pengrajin perempuan mandiri" | Ganti dengan teks netral (mis. "Dikerjakan tangan", "Bahan dari barang bekas", "Pesan langsung via WhatsApp"). |
| Kartu "Bagaimana Kami Menghitung?" di halaman Eco-Impact menampilkan istilah kode `impactKg` | Tulis ulang dengan bahasa awam, mis. "Setiap produk memiliki perkiraan berat bahan bekas yang dipakai. Angka di atas adalah jumlah perkiraan itu." Kalimat soal emisi karbon dipersingkat dan dibuat ramah pembaca. |
| Teks "Kalimat singkat placeholder tentang peran di Cyclology." tampil di kartu pendiri | Sembunyikan baris bio bila `bio` kosong. Sementara isi dengan "Co-Founder Cyclology" saja. |
| Breadcrumb halaman Kontak berbunyi "Hubungi Kami" padahal menu bernama "Kontak" | Samakan menjadi "Kontak". |
| Badge hero berbahasa Inggris "100% Upcycled Artistry" | Ganti ke Bahasa Indonesia, mis. "100% Karya Upcycle". |
| Subjudul Produk menulis kata "upcycle" dengan font Lora di tengah kalimat | Teks isi paragraf harus Poppins. Lora italic hanya untuk 1-3 kata aksen di judul (H1/H2). |

**Selesai bila:** `grep` kota lama tidak menemukan apa pun; angka kategori = 6; tidak ada istilah kode di UI.

---

## R3 — Bug layout dan komponen
1. **Navbar ganda di halaman Kampanye** (navbar penuh + navbar minimal tampil bersamaan). Pisahkan layout dengan route group, misalnya `src/app/(site)/` untuk halaman biasa (Navbar + Footer penuh) dan `src/app/(kampanye)/` untuk landing page (hanya `NavbarMinimal`). **URL tidak boleh berubah.** `NavbarMinimal` memakai komponen logo yang sama dengan navbar utama (ikon daun + wordmark), dan kontainernya sejajar.
2. **Lingkaran "CY" di pojok kanan navbar** tidak punya fungsi dan tidak ada di SPEC. Periksa `design/home.png`: jika tidak ada di desain, hapus.
3. **Tombol WhatsApp melayang** berbentuk pil dengan teks "WhatsApp". DESIGN_SYSTEM menetapkan tombol bulat 56px, ikon saja, dengan `aria-label`. Sesuaikan.
4. **Cincin ganda di tombol "Ambil Paket Hemat"** menandakan focus ring aktif terus. Pakai `focus-visible`, supaya cincin hanya muncul saat navigasi keyboard.
5. **Ikon panah `<select>`** di form Kontak terlalu besar dan tebal dibanding elemen lain. Samakan ukuran (ikon 16-20px, stroke 1.5-2).
6. **Aksen Lora italic pada judul.** Saat ini warnanya bervariasi (hijau di Beranda, terakota di halaman lain) dan kadang 3 kata. Ikuti `design/*.png` tiap halaman, batasi 1-3 kata, hanya di judul besar (≥ 24px), dan gunakan satu warna terakota gelap (`terracotta-700`) agar kontras aman. Catat aturan ini di DESIGN_SYSTEM.md (lihat R9).

**Selesai bila:** halaman Kampanye hanya punya satu navbar; tidak ada elemen "CY"; tombol WA bulat.

---

## R5 — Halaman Tentang: tiga pendiri dan gambar kosong
1. **Tambah pendiri ketiga: Rulyan Akasdo.** Jangan mengubah dua pendiri yang sudah ada di `siteConfig.founders` (nama dan foto tetap seperti sekarang). Cari file foto Rulyan di `public/images/brand/` (lihat isi foldernya). Jika ada lebih dari satu kandidat nama file, tanyakan ke pemilik. Tambahkan entri ketiga dengan `role: "Co-Founder"`.
2. **Tata letak 3 kartu:** 1 kolom di HP, 3 kolom di ≥768px, tinggi kartu sama, kartu sedikit lebih besar dan foto potret lebih menonjol dibanding sekarang. Bio disembunyikan bila kosong (R2).
3. **Gambar kosong di "Cerita Kami"** (kotak hijau dengan ikon daun dan tulisan "Gambar Cyclology"): temukan komponen `SafeImage`-nya, catat path yang dirujuk, dan masukkan ke `docs/MISSING_IMAGES.md` (lihat R7). Jangan menghapus `SafeImage`.
4. Tulis ulang cerita agar sesuai R2 (tanpa tahun dan kota karangan, diberi catatan kecil "Teks contoh, akan diganti cerita asli" di `docs/` saja, bukan di UI).
5. Susunan stat chip di bawah hero dirapikan: ikon dan teks lebih besar, jarak antar-seksi lebih rapat.

**Selesai bila:** tiga kartu pendiri tampil rapi di 390px, 768px, dan 1280px.

---

## R6 — Peta lokasi Bengkel tidak muncul
**Gejala:** area peta menampilkan kotak kosong bertuliskan "Peta lokasi bengkel" (fallback), artinya `siteConfig.workshop.mapEmbedUrl` kosong atau tidak terbaca. Pemilik sudah memasukkan link Google Maps.

**Lakukan:**
1. Periksa di mana link Google Maps disimpan di `src/config/site.ts` dan bagaimana komponen petanya membacanya. Perbaiki bila nama field tidak cocok.
2. Link Google Maps biasa (`maps.app.goo.gl/...` atau `google.com/maps/place/...`) **tidak bisa** ditampilkan di `<iframe>`. Pisahkan dua field di `siteConfig.workshop`:
   - `mapsUrl`: link Google Maps biasa, dipakai untuk tombol **"Buka di Google Maps"** (`target="_blank" rel="noopener noreferrer"`).
   - `mapEmbedUrl`: URL embed resmi (`https://www.google.com/maps/embed?pb=...`).
3. Komponen peta, urutan prioritas:
   1. Jika `mapEmbedUrl` valid, tampilkan `<iframe>` (`loading="lazy"`, `title`, `referrerPolicy="no-referrer-when-downgrade"`, rasio 4:3 atau 16:10, `rounded-2xl`, tanpa border). **Validasi** bahwa URL diawali `https://www.google.com/maps/embed` atau `https://www.openstreetmap.org/export/embed.html`. Jika tidak valid, jangan dirender.
   2. Jika kosong, tapi koordinat tersedia (`workshop.lat`, `workshop.lng`), tampilkan embed OpenStreetMap (`https://www.openstreetmap.org/export/embed.html?bbox=...&layer=mapnik&marker=lat,lng`) yang tidak butuh API key. Koordinat bisa diambil dari link Google Maps pemilik. Jika tidak bisa diambil, minta pemilik mengisinya.
   3. Jika keduanya kosong, tampilkan gambar statis `public/images/brand/peta-bengkel.webp` lewat `SafeImage`, ditambah tombol "Buka di Google Maps".
4. Periksa `next.config` (header keamanan). Jika ada `Content-Security-Policy`, tambahkan `frame-src` untuk domain embed yang dipakai agar tidak diblokir.
5. Tambahkan alamat dan tombol "Buka di Google Maps" tepat di samping atau di bawah peta.

**Selesai bila:** peta tampil di `npm run dev` (tanpa error CSP di console), dan tombol "Buka di Google Maps" membuka lokasi yang benar.

**Panduan manual untuk pemilik (mendapatkan embed URL resmi):**
1. Buka Google Maps di laptop, cari lokasi bengkel.
2. Klik **Bagikan > Sematkan peta (Embed a map) > Salin HTML**.
3. Dari potongan `<iframe src="...">`, salin **hanya nilai di dalam `src="..."`**.
4. Tempel ke `mapEmbedUrl` di `src/config/site.ts`, dan taruh link Maps biasa di `mapsUrl`.

---

## R7 — Foto: yang kosong, yang salah, dan latar hero
1. **Audit gambar kosong.** Buat skrip dev `scripts/check-images.mjs` yang memindai semua path gambar di `src/data`, `src/config`, dan `src/app`/`src/components`, lalu mencetak yang file-nya belum ada di `public/`. Tulis hasilnya ke `docs/MISSING_IMAGES.md` berisi: *path file | dirujuk di (file dan baris) | rekomendasi query foto | ukuran*.
2. **Foto hero Beranda salah:** saat ini ruang rapat gelap yang tidak berkaitan dengan produk daur ulang, dan tidak sesuai kesan segar dan natural. Ganti query-nya di `scripts/photo-manifest.json` menjadi motif produk, mis. `"denim tote bag glass vase wooden table natural light"`.
3. **Tambah foto latar hero** untuk halaman (dipakai di R4): Beranda (`"recycled fabric scraps denim texture"`), Produk (`"handmade recycled products flat lay"`), Tentang (`"craft workshop hands sewing"`), Blog (`"notebook plants desk natural light"`), Galeri (`"upcycled fabric materials sorting"`), Kontak (`"wooden desk plant minimal"`), Kampanye (`"reusable tote bags natural"`), FAQ dan Dampak boleh memakai ulang foto yang sudah ada. Simpan di `public/images/hero/`, ukuran 1600x900 (WebP). Daftarkan di manifest dan di `src/data/heroes.ts`.
4. **Foto blog:** beberapa artikel tampak memakai foto yang mirip (rak pakaian atau denim) dan kurang cocok dengan topiknya ("Daur Ulang vs Upcycle vs Reuse", "Plastik Sekali Pakai"). Perbarui query tiap artikel agar sesuai topik (pemilahan sampah, kantong kain, botol kaca, dan seterusnya).
5. **Jangan menjalankan** `fetch-photos.mjs` (butuh API key pemilik). Siapkan manifest dan perintah saja. Pemilik yang menjalankan: `node --env-file=.env.local scripts/fetch-photos.mjs`.

**Selesai bila:** `docs/MISSING_IMAGES.md` lengkap dan manifest terbarui.

**Panduan manual untuk pemilik (mengganti satu foto):**
```
node --env-file=.env.local scripts/fetch-photos.mjs --replace public/images/hero/<nama-file>.webp "query baru" --pick 2
```
Naikkan angka `--pick` bila hasilnya belum cocok. Foto Anda sendiri cukup disimpan di path yang sama (skrip melewati file yang sudah ada).

---

## R4 — Hero yang lebih hidup (komponen `PageHero`)
**Masalah:** hero hampir semua halaman hanya teks di atas latar polos, sehingga terkesan sepi (Produk, Kontak, Galeri, Kampanye). Hero Beranda belum punya latar foto.

**Buat** `src/components/sections/PageHero.tsx` (server component) dengan props: `eyebrow`, `title` (mendukung aksen Lora), `description`, `image` (path), `breadcrumb?`, `actions?`, `aside?` (konten sisi kanan), `chips?`.

Struktur wajib:
```
<section class="relative isolate overflow-hidden bg-cream">
  <SafeImage fill sizes="100vw" alt="" aria-hidden  class="object-cover opacity-20" />   // latar foto
  <div class="absolute inset-0 bg-cream/70" />                                             // overlay WARNA SOLID, bukan gradient
  <div class="relative ..."> ...konten... </div>
</section>
```
- Opacity foto sekitar 15-25% (HP lebih rendah, ±12-15%). Kontras teks harus tetap aman (periksa AA).
- `priority` hanya untuk gambar hero yang di atas lipatan, satu per halaman. Gambar dekoratif memakai `alt=""`.
- Tinggi hero secukupnya: `py-16 md:py-24`.

**Terapkan per halaman** (konten hanya dari data yang sudah ada, tanpa fitur baru):
| Halaman | Latar | Pelengkap |
|---|---|---|
| Beranda | foto bahan atau atelier | foto produk jadi di kanan (dibingkai, rounded), dua chip kecil di bawah CTA: "Pesan langsung via WhatsApp" dan "{n} produk · {k} kategori" (dihitung dari data) |
| Produk | foto flat lay produk | chip "{n} produk", "{k} kategori" di sisi kanan |
| Tentang | foto bengkel atau tangan menjahit | kartu info yang sudah ada tetap |
| Blog | foto meja tulis dan tanaman | statistik yang sudah ada tetap |
| Galeri | foto bahan | chip "4 transformasi" dan "8 tahap proses" (dihitung dari data galeri) |
| Kontak | foto meja kayu | dua chip cepat: tombol WhatsApp dan jam layanan dari `siteConfig` |
| Kampanye | foto tas kain | kolase 3 foto produk paket hemat di kanan (Tote Bag Denim, Pouch Kemasan Kopi, Alas Gelas) dengan harga paket |
| FAQ, Eco-Impact | foto yang sudah ada | cukup latar dan hierarki yang rapi |

**Selesai bila:** semua hero memakai `PageHero`, tidak ada gradient, tampil rapi di 390px, 768px, dan 1280px, dan skor performa tidak turun (hanya satu gambar `priority` per halaman).

---

## R8 — Polish per halaman
- **Blog bagian bawah:** kartu "Inisiatif Literasi Sirkular" hanya pengisi dan boleh dihapus. Kartu putih "Ingin Berbagi Cerita atau Kolaborasi Artikel?" terlalu lebar dengan setengah ruang kosong: persempit, atau tambahkan ikon besar atau foto kecil di sisi kanan.
- **Kontak:** isi panel kanan lebih proporsional dengan form (tinggi seimbang), label subjek dan pesan error konsisten.
- **Galeri:** pastikan bagian "Di Balik Proses" tampil, ukuran foto seragam, dan keterangan terbaca.
- **Eco-Impact:** kartu statistik diberi ikon, angka lebih menonjol; catatan "Angka contoh" tetap ada tapi kecil.
- **Beranda:** hubungan antar-seksi (jarak, latar selang-seling sage dan krem) konsisten dengan `design/home.png`.
- **Kartu produk** identik di Beranda, Katalog, dan "Produk Serupa".

---

## R9 — Sinkron dokumen dan QA akhir
1. Perbarui `docs/SPEC.md`: pendiri menjadi **3 kartu**, lokasi bengkel = Depok, field `mapsUrl`, `mapEmbedUrl`, dan `lat`/`lng` di `siteConfig.workshop`, komponen `PageHero`.
2. Perbarui `docs/DESIGN_SYSTEM.md`: aturan aksen Lora italic (1-3 kata, ≥ 24px, `terracotta-700`), spesifikasi `PageHero` (foto + overlay solid, tanpa gradient), tombol WA melayang bulat.
3. Tambahkan ke `AGENTS.md` satu aturan: "Teks UI tidak boleh memuat istilah kode atau klaim yang tidak bisa dibuktikan; angka dan lokasi hanya dari `siteConfig`."
4. QA: uji semua 10 halaman di 390px, 768px, 1280px (tidak ada scroll horizontal), `npm run lint` dan `npm run build` bersih, `grep` kota lama dan tautan `/dashboard` kosong, commit, tag `v1.1`.

---

## Lampiran A — Temuan dari 13 screenshot (kondisi sebelum perbaikan)
| # | Halaman | Temuan | Tugas |
|---|---|---|---|
| 1 | Kampanye | Navbar ganda; logo navbar minimal tanpa ikon; cincin ganda di tombol utama; hero teks saja; aksen 3 kata | R3, R4 |
| 2 | Beranda | Foto hero ruang rapat gelap tidak relevan; badge berbahasa Inggris; klaim "Pengiriman ramah lingkungan"; lingkaran "CY"; tombol WA berbentuk pil | R2, R3, R7 |
| 3 | Tentang | Kotak gambar kosong di "Cerita Kami"; klaim "Terverifikasi", "Kemasan Nol Plastik"; kota Yogyakarta dan tahun 2022 bertentangan dengan alamat Depok | R2, R5, R7 |
| 4 | Tentang (Pendiri) | Dua kartu dengan teks placeholder tampil di UI; perlu 3 pendiri | R2, R5 |
| 5 | Bengkel | Peta kosong ("Peta lokasi bengkel") | R6 |
| 6 | Blog | Beberapa foto mirip dan kurang sesuai topik | R7 |
| 7 | Blog (bawah) | Kartu pengisi dan kartu kolaborasi setengah kosong | R8 |
| 8 | Galeri | Sebelum-sesudah sudah baik; hero polos | R4 |
| 9 | Kontak (form) | Ikon panah dropdown terlalu besar | R3 |
| 10 | Kontak (hero) | Hero polos dan sisi kanan kosong; breadcrumb "Hubungi Kami" tidak sama dengan menu | R2, R4 |
| 11 | Produk | Hero polos; kata "upcycle" memakai font berbeda di tengah kalimat | R2, R4 |
| 12 | Eco-Impact | Teks UI memuat istilah kode `impactKg` | R2 |
| 13 | Eco-Impact | "Kategori Produk" = 24 (seharusnya 6) | R2 |

## Lampiran B — Yang perlu disiapkan pemilik
1. Bio singkat (1-2 kalimat) untuk tiap pendiri, atau biarkan kosong sementara.
2. URL embed Google Maps (panduan di R6) dan koordinat bengkel bila mau memakai peta alternatif.
3. Menjalankan skrip foto dan memeriksa hasilnya (panduan di R7), serta memasang foto asli yang sudah dimiliki.
4. Memastikan nomor WhatsApp dan email yang tampil di Kontak memang boleh dipublikasikan.
5. Memutuskan apakah klaim seperti "kemasan nol plastik" memang benar. Jika benar, boleh dikembalikan.
