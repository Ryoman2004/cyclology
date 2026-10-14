export interface BeforeAfterItem {
  id: string;
  title: string;
  material: string;
  resultName: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface ProcessItem {
  step: number;
  title: string;
  description: string;
  image: string;
}

export const beforeAfterGallery: BeforeAfterItem[] = [
  {
    id: "jeans-ke-tote-bag",
    title: "Celana Jeans Afkir Menjadi Tote Bag",
    material: "Jeans denim bekas",
    resultName: "Tote Bag Denim Bekas",
    description:
      "Dua potong celana denim yang telah usang diuraikan jahitannya dan dirakit ulang menjadi tas jinjing lapang dengan saku luar fungsional.",
    beforeImage: "/images/gallery/before-jeans.webp",
    afterImage: "/images/gallery/after-tote-bag.webp",
  },
  {
    id: "botol-ke-vas",
    title: "Botol Kaca Minuman Menjadi Vas Estetik",
    material: "Botol kaca kafe rekondisi",
    resultName: "Vas Botol Kaca Bekas",
    description:
      "Botol sirup dan soda kaca dipotong tepiannya menggunakan pemotong khusus, diamplas halus, dan dihiasi lilitan tali serat alami.",
    beforeImage: "/images/gallery/before-botol.webp",
    afterImage: "/images/gallery/after-vas.webp",
  },
  {
    id: "palet-ke-hiasan-dinding",
    title: "Kayu Palet Bekas Menjadi Panel Dinding",
    material: "Peti kemas kayu pinus",
    resultName: "Hiasan Dinding Kayu Palet",
    description:
      "Bilah kayu palet peti kemas dibersihkan dari paku, diserut halus, dan dirangkai membentuk pola mozaik geometris khas gaya Skandinavia.",
    beforeImage: "/images/gallery/before-palet.webp",
    afterImage: "/images/gallery/after-hiasan-dinding.webp",
  },
  {
    id: "spanduk-ke-tas-selempang",
    title: "Spanduk Vinil Promosi Menjadi Tas Selempang",
    material: "Spanduk vinil baliho",
    resultName: "Tas Selempang Banner Bekas",
    description:
      "Lembaran vinil promosi tebal dicuci bersih dan dipotong polanya untuk menghasilkan tas selempang tahan air dengan motif eksklusif.",
    beforeImage: "/images/gallery/before-banner.webp",
    afterImage: "/images/gallery/after-tas-selempang.webp",
  },
];

export const processGallery: ProcessItem[] = [
  {
    step: 1,
    title: "Memilah Bahan Baku",
    description:
      "Mengumpulkan dan menyortir limbah jeans, botol kaca, serta perca kain dari mitra untuk memastikan kelayakan serat dan strukturnya.",
    image: "/images/gallery/proses-1-memilah.webp",
  },
  {
    step: 2,
    title: "Pembersihan & Sanitasi",
    description:
      "Mencuci material secara menyeluruh menggunakan pembersih ramah lingkungan dan mengeringkannya di bawah sinar matahari.",
    image: "/images/gallery/proses-2-mencuci.webp",
  },
  {
    step: 3,
    title: "Pemotongan Pola",
    description:
      "Membuat pola potongan presisi dengan memaksimalkan seluruh bagian kain agar menghasilkan limbah sisa seminimal mungkin.",
    image: "/images/gallery/proses-3-memotong.webp",
  },
  {
    step: 4,
    title: "Penjahitan Presisi",
    description:
      "Menjahit potongan perca dan denim menggunakan benang nilon kuat dengan jahitan ganda di titik-titik rawan tekanan.",
    image: "/images/gallery/proses-4-menjahit.webp",
  },
  {
    step: 5,
    title: "Perakitan Komponen",
    description:
      "Memasang aksesoris pendukung seperti ritsleting daur ulang, tali webbing, gesper logam, dan pelapis furing katun.",
    image: "/images/gallery/proses-5-merakit.webp",
  },
  {
    step: 6,
    title: "Sentuhan Akhir (Finishing)",
    description:
      "Merapikan sisa benang, menyetrika kain dengan uap panas, serta mengoleskan beeswax pelindung pada produk kayu.",
    image: "/images/gallery/proses-6-finishing.webp",
  },
  {
    step: 7,
    title: "Pengecekan Kualitas (QC)",
    description:
      "Memeriksa kekuatan sambungan jahitan, fungsi ritsleting, dan kebersihan detail setiap produk sebelum siap didistribusikan.",
    image: "/images/gallery/proses-7-qc.webp",
  },
  {
    step: 8,
    title: "Pengemasan Ramah Lingkungan",
    description:
      "Membungkus produk dengan kertas daur ulang berpita tali rami tanpa perekat plastik, siap dikirimkan kepada pemesan.",
    image: "/images/gallery/proses-8-pengemasan.webp",
  },
];
