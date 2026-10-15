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
    src: "/images/hero/home/background-home-hero.webp",
    alt: "Bengkel upcycle: pengrajin menjahit denim di meja kerja",
    page: "Beranda (latar)",
  },
  homeProduct: {
    src: "/images/hero/home/gambar-home-hero.webp",
    alt: "Tas denim upcycle dan vas kaca di atas meja kayu",
    page: "Beranda (foto produk)",
  },
  products: {
    src: "/images/hero/product/background-product-hero.webp",
    alt: "Pengrajin menjahit denim di bengkel upcycle",
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
    src: "/images/hero/home/background-home-hero.webp",
    alt: "Bengkel upcycle: pengrajin menjahit denim di meja kerja",
    page: "FAQ",
  },
  impact: {
    src: "/images/hero/home/background-home-hero.webp",
    alt: "Bengkel upcycle: pengrajin menjahit denim di meja kerja",
    page: "Eco-Impact",
  },
} as const satisfies Record<string, HeroImage>;

export type HeroKey = keyof typeof heroImages;

/** Foto blok "Cerita Kami" di halaman Tentang. */
export const storyImage = {
  src: "/images/hero/story-tentang.webp",
  alt: "Suasana bengkel Cyclology saat mengolah limbah tekstil",
};