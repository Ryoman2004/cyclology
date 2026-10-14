export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "Pemesanan" | "Produk" | "Pengiriman";
}

export const faqs: FAQItem[] = [
  {
    id: "cara-memesan",
    question: "Bagaimana cara memesan produk di Cyclology?",
    answer:
      "Cukup telusuri katalog produk kami, pilih barang yang Anda sukai, lalu klik tombol 'Pesan via WhatsApp'. Pesan otomatis berisi nama produk, harga, dan tautan halaman akan langsung disiapkan di WhatsApp. Admin kami akan segera membalas untuk mengonfirmasi ketersediaan stok dan memberikan instruksi pembayaran.",
    category: "Pemesanan",
  },
  {
    id: "pembayaran-online",
    question: "Apakah ada pembayaran online otomatis di website?",
    answer:
      "Website Cyclology dirancang sebagai katalog digital tanpa sistem keranjang belanja atau gateway pembayaran rumit. Seluruh konfirmasi pembayaran dilakukan secara personal dan aman melalui transfer bank yang diverifikasi langsung oleh admin kami di WhatsApp.",
    category: "Pemesanan",
  },
  {
    id: "proses-pengiriman",
    question: "Bagaimana sistem dan durasi pengiriman barang?",
    answer:
      "Pesanan dikirimkan menggunakan jasa kurir ekspedisi tepercaya (seperti JNE, SiCepat, atau J&T) dengan estimasi pengiriman 2-5 hari kerja tergantung lokasi Anda. Seluruh produk dikemas menggunakan kemasan kardus daur ulang dan tali serat alami tanpa menggunakan plastik sekali pakai.",
    category: "Pengiriman",
  },
  {
    id: "keaslian-daur-ulang",
    question: "Apakah produknya benar-benar dibuat dari bahan daur ulang?",
    answer:
      "Benar. 100% material utama kami berasal dari limbah jeans afkir, kain perca garmen, spanduk vinil pameran, botol kaca kafe, serta kayu palet peti kemas. Seluruh bahan melalui proses pembersihan, sterilisasi higienis, dan pengujian kelayakan sebelum diolah menjadi produk baru.",
    category: "Produk",
  },
  {
    id: "cara-merawat",
    question: "Bagaimana cara merawat produk berbahan upcycle?",
    answer:
      "Setiap produk memiliki petunjuk perawatan spesifik di halaman detailnya. Secara umum, produk tekstil disarankan dicuci dengan tangan menggunakan detergen lembut dan diangin-anginkan di tempat teduh. Untuk produk kayu dan kaca, cukup bersihkan menggunakan kain lap microfiber lembap.",
    category: "Produk",
  },
  {
    id: "desain-custom",
    question: "Bisakah saya memesan desain custom atau suvenir acara dalam jumlah banyak?",
    answer:
      "Tentu saja! Kami melayani pemesanan khusus suvenir pernikahan ramah lingkungan, merchandise kantor, atau kustomisasi ukuran tertentu. Silakan hubungi admin kami melalui tombol WhatsApp atau formulir Kontak untuk mendiskusikan konsep, ketersediaan bahan, dan jadwal pengerjaan.",
    category: "Pemesanan",
  },
  {
    id: "kebijakan-retur",
    question: "Bagaimana kebijakan tukar atau retur barang jika terjadi kendala?",
    answer:
      "Kepuasan Anda adalah prioritas kami. Jika produk yang Anda terima mengalami kerusakan akibat cacat produksi saat pengiriman, silakan kirimkan video unboxing ke WhatsApp admin kami maksimal 2x24 jam setelah paket diterima untuk proses penggantian produk atau solusi terbaik.",
    category: "Pemesanan",
  },
  {
    id: "kabar-terbaru",
    question: "Bagaimana cara mengikuti kabar terbaru dan rilisan produk Cyclology?",
    answer:
      "Anda dapat membaca artikel terbaru di halaman Blog kami atau mengikuti akun media sosial resmi kami di Instagram, TikTok, Facebook, dan YouTube. Tautan media sosial kami tersedia di bagian bawah (footer) website ini.",
    category: "Produk",
  },
];
