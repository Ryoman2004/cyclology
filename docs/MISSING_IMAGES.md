# MISSING_IMAGES — Gambar yang Belum Ada di `public/`

>Dihasilkan oleh **R7**. Perbarui dengan: `node scripts/check-images.mjs --write`
>
> Sumber query foto: `scripts/photo-manifest.json`

**Ringkasan:** 60 gambar dirujuk · 50 tersedia · **10 belum ada**.
Semua gambar hilang adalah foto baru (latar hero per halaman, foto cerita, peta statis) —
bukan gambar produk/artikel yang sudah ada.

## Gambar yang belum ada

| Path file | Dipakai untuk | Rekomendasi query foto | Ukuran |
|---|---|---|---|
| `public/images/hero/hero-beranda.webp` | Latar hero Beranda | `recycled fabric scraps denim texture` | 1600x900 |
| `public/images/hero/hero-beranda-produk.webp` | Foto produk jadi di sisi kanan hero Beranda (menggantikan foto ruang rapat yang salah) | `denim tote bag glass vase wooden table natural light` | 1600x900 |
| `public/images/hero/hero-produk.webp` | Latar hero Katalog Produk | `handmade recycled products flat lay` | 1600x900 |
| `public/images/hero/hero-tentang.webp` | Latar hero Tentang | `craft workshop hands sewing` | 1600x900 |
| `public/images/hero/hero-blog.webp` | Latar hero Blog | `notebook plants desk natural light` | 1600x900 |
| `public/images/hero/hero-galeri.webp` | Latar hero Galeri | `upcycled fabric materials sorting` | 1600x900 |
| `public/images/hero/hero-kontak.webp` | Latar hero Kontak | `wooden desk plant minimal` | 1600x900 |
| `public/images/hero/hero-kampanye.webp` | Latar hero Kampanye | `reusable tote bags natural` | 1600x900 |
| `public/images/hero/story-tentang.webp` | Blok "Cerita Kami" di halaman Tentang (saat ini kotak kosong) | `upcycle workshop sewing scrap fabric table natural light` | 1600x900 |
| `public/images/brand/peta-bengkel.webp` | Gambar peta statis tingkat-3 di `WorkshopSection` | **manual** — screenshot peta lokasi bengkel | 1600x900 |

## Foto yang sengaja diperbarui (query)

Foto artikel berikut sudah tersedia, tetapi query-nya diperbarui agar lebih cocok dengan topik:

| File | Topik artikel | Query baru |
|---|---|---|
| `5-cara-mudah-memilah-sampah-di-rumah.webp` | Memilah sampah | `sorting household waste recycling bins` |
| `apa-bedanya-daur-ulang-upcycle-dan-reuse.webp` | Daur ulang vs upcycle vs reuse | `glass jar fabric scraps reuse craft table` |
| `plastik-sekali-pakai-alternatif-yang-bisa-dimulai-hari-ini.webp` | Alternatif plastik sekali pakai | `reusable cloth shopping bag groceries market` |

Untuk mengganti salah satu foto saja:

```bash
node --env-file=.env.local scripts/fetch-photos.mjs --replace public/images/blog/<file>.webp "query baru" --pick 2
```

Naikkan angka `--pick` bila hasilnya belum cocok. Foto milik sendiri cukup disimpan di path yang sama.

## Cara memasang semua foto

Pemilik menjalankan (butuh API key di `.env.local`):

```bash
node --env-file=.env.local scripts/fetch-photos.mjs
```

Skrip melewati file yang sudah ada, jadi aman dijalankan berulang kali.
Entry `peta-bengkel.webp` ditandai `manual` dan dilewati — pasang screenshot peta sendiri.

## Catatan teknis

- Semua gambar dimuat lewat `SafeImage`, jadi halaman tetap rapi meski file belum ada
  (muncul blok warna tema + ikon daun).
- Latar `PageHero` memakai opasitas 15-20% di atas overlay cream, sehingga foto yang
  belum terpasang tetap tidak mengganggu keterbacaan teks.
- Foto hero `hero-craft.webp` (ruang rapat gelap) tidak lagi dipakai di mana pun.

## Teks contoh

Bagian "Cerita Kami" pada halaman Tentang masih berisi **teks contoh** (sudah dibebaskan dari
tahun berdiri dan nama kota karangan pada R0/R2). Pemilik diminta menggantinya dengan cerita
asli bengkel sebelum situs dipublikasikan.