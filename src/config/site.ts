export const siteConfig = {
  name: "Cyclology",
  tagline: "Dari bekas, jadi bermakna.",
  description:
    "Katalog produk daur ulang: tas, dompet, fashion, dekorasi, dan aksesoris karya pengrajin lokal.",
  url: "https://cyclology.vercel.app", // ganti setelah deploy
  whatsappNumber: "62XXXXXXXXXXX", // format internasional, tanpa + dan tanpa 0 di depan
  email: "halo@cyclology.example",
  serviceHours: "Senin - Sabtu, 09.00 - 17.00 WIB",
  social: {
    instagram: "#",
    tiktok: "#",
    facebook: "#",
    youtube: "#",
  }, // diisi akun pribadi pemilik
  impact: {
    totalKgSaved: 1250,
    productsSold: 480,
    artisans: 12,
  }, // placeholder, ganti dengan data asli sebelum dipublikasikan
  founders: [
    {
      name: "Syifa Aulia Akfina",
      role: "Co-Founder",
      photo: "/images/brand/founder-syifa.webp",
      bio: "Kalimat singkat placeholder tentang peran di Cyclology.",
    },
    {
      name: "Fullan Bin Fullin",
      role: "Co-Founder",
      photo: "/images/brand/founder-fullan.webp",
      bio: "Kalimat singkat placeholder tentang peran di Cyclology.",
    },
  ],
  // Bagian "Bengkel" di Galeri (peta + alamat). SEMUA DUMMY, diganti pemilik nanti.
  workshop: {
    name: "Bengkel Upcycle Cyclology",
    address: "Kasongan, Bantul, D.I. Yogyakarta", // dummy
    hours: "Senin - Sabtu, 09.00 - 17.00 WIB", // dummy
    mapEmbedUrl: "", // isi dengan URL embed Google Maps asli
  },
};

export type SiteConfig = typeof siteConfig;
