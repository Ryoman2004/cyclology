export const siteConfig = {
  name: "Cyclology",
  tagline: "Dari bekas, jadi bermakna.",
  description:
    "Katalog produk daur ulang: tas, dompet, fashion, dekorasi, dan aksesoris karya pengrajin lokal.",
  url: "https://cyclology.vercel.app", // ganti setelah deploy
  whatsappNumber: "6285780870274", // format internasional, tanpa + dan tanpa 0 di depan
  email: "syifaauliaakfina@gmail.com",
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
    artisans: 24,
  }, // placeholder, ganti dengan data asli sebelum dipublikasikan
  founders: [
    {
      name: "Syifa Aulia Akfina",
      role: "Co-Founder",
      photo: "/images/brand/founder-syifa.webp",
      bio: "", // diisi pemilik; kosong berarti bio disembunyikan di UI
    },
    {
      name: "Syaza Ghaisani Nadinda",
      role: "Co-Founder",
      photo: "/images/brand/founder-syaza.webp",
      bio: "", // diisi pemilik; kosong berarti bio disembunyikan di UI
    },
    {
      name: "Rulyan Akasdo",
      role: "Co-Founder",
      photo: "/images/brand/founder-rulyan.webp",
      bio: "", // diisi pemilik; kosong berarti bio disembunyikan di UI
    },
  ],
  // Bagian "Bengkel" di Galeri (peta + alamat). SEMUA DUMMY, diganti pemilik nanti.
  workshop: {
    name: "Cyclology",
    address: "Meruyung, Limo, Depok, Jawa Barat", // dummy
    hours: "Senin - Sabtu, 09.00 - 17.00 WIB", // dummy
    // Link Google Maps biasa; dipakai tombol "Buka di Google Maps".
    mapsUrl: "https://maps.app.goo.gl/C2JG3fZ35JPS3vXV6",
    // URL embed resmi (Bagikan > Sematkan peta > Salin HTML). Kosong = pakai OpenStreetMap.
    mapEmbedUrl: "",
    // Koordinat bengkel, diambil dari link Google Maps di atas.
    lat: -6.3747444,
    lng: 106.77036,
  },
  // Lokasi kota/provinsi. Semua teks halaman memakai nilai ini (REVISION aturan R0.2).
  location: {
    city: "Depok",
    province: "Jawa Barat",
  },
};

export type SiteConfig = typeof siteConfig;
