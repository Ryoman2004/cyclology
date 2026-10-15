/**
 * Foto latar tiap halaman (dipakai komponen PageHero).
 *
 * File foto ini sengaja belum ada di repo: seluruh foto diunduh pemilik lewat
 * `scripts/fetch-photos.mjs` (butuh API key). Sebelum file tersedia, SafeImage
 * menampilkan blok warna tema sehingga tampilan tetap rapi.
 *
 * Referensi: scripts/photo-manifest.json bagian "heroes".
 */

export interface HeroImage {
  /** Path file lokal di /public/images/hero. */
  src: string;
  /** Alt teks deskriptif (foto latar bersifat dekoratif, jadi teks ini tetap bermakna). */
  alt: string;
  /** Nama halaman pemakai. */
  page: string;
}

export const heroImages = {
  home: {
    src: "/images/hero/hero-beranda.webp",
    alt: "Bahan daur ulang: potongan kain dan tekstur denim",
    page: "Beranda",
  },
  homeProduct: {
    src: "/images/hero/hero-beranda-produk.webp",
    alt: "Tas denim, vas kaca, dan produk upcycle di atas meja kayu",
    page: "Beranda (foto produk)",
  },
  products: {
    src: "/images/hero/hero-produk.webp",
    alt: "Berbagai produk daur ulang buatan tangan tersusun rapi",
    page: "Katalog Produk",
  },
  about: {
    src: "/images/hero/hero-tentang.webp",
    alt: "Tangan pengrajin menjahit di bengkel",
    page: "Tentang",
  },
  blog: {
    src: "/images/hero/hero-blog.webp",
    alt: "Buku catatan dan tanaman di meja dengan cahaya alami",
    page: "Blog",
  },
  gallery: {
    src: "/images/hero/hero-galeri.webp",
    alt: "Bahan daur uplink yang sedang dipilah",
    page: "Galeri",
  },
  contact: {
    src: "/images/hero/hero-kontak.webp",
    alt: "Meja kayu sederhana dengan tanaman",
    page: "Kontak",
  },
  campaign: {
    src: "/images/hero/hero-kampanye.webp",
    alt: "Tas kain yang dapat dipakai ulang",
    page: "Kampanye",
  },
  faq: {
    src: "/images/hero/hero-beranda.webp",
    alt: "Bahan daur ulang: potongan kain dan tekstur denim",
    page: "FAQ",
  },
  impact: {
    src: "/images/hero/hero-tentang.webp",
    alt: "Tangan pengrajin menjahit di bengkel",
    page: "Eco-Impact",
  },
} as const satisfies Record<string, HeroImage>;

export type HeroKey = keyof typeof heroImages;

/** Foto blok "Cerita Kami" di halaman Tentang. */
export const storyImage = {
  src: "/images/hero/story-tentang.webp",
  alt: "Suasana bengkel Cyclology saat mengolah limbah tekstil",
};