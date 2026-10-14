export type CategorySlug =
  | "tas-dompet"
  | "fashion"
  | "dekorasi-rumah"
  | "aksesoris"
  | "rumah-tangga"
  | "alat-tulis";

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: string; // Nama ikon lucide-react
  description: string;
}

export const categories: Category[] = [
  {
    slug: "tas-dompet",
    name: "Tas & Dompet",
    icon: "ShoppingBag",
    description: "Tas jinjing, selempang, dan pouch tangguh dari denim dan spanduk daur ulang.",
  },
  {
    slug: "fashion",
    name: "Fashion",
    icon: "Shirt",
    description: "Busana perca patchwork, jaket reworked, dan aksesoris sandang penuh karakter.",
  },
  {
    slug: "dekorasi-rumah",
    name: "Dekorasi Rumah",
    icon: "Lamp",
    description: "Sentuhan estetika ruang dari botol kaca rekondisi dan olahan kayu palet.",
  },
  {
    slug: "aksesoris",
    name: "Aksesoris",
    icon: "Gem",
    description: "Pemanis gaya harian dari anyaman limbah plastik, kertas, dan tutup botol.",
  },
  {
    slug: "rumah-tangga",
    name: "Rumah Tangga",
    icon: "CookingPot",
    description: "Perlengkapan fungsional harian ramah lingkungan dari sisa perca dan kaleng.",
  },
  {
    slug: "alat-tulis",
    name: "Alat Tulis",
    icon: "PenLine",
    description: "Buku catatan kertas daur ulang dan tempat pensil estetik untuk meja kerja Anda.",
  },
];
