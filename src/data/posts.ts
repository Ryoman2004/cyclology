export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // array paragraf artikel (4-6 paragraf)
  category: "Tips" | "Edukasi" | "Cerita";
  date: string; // ISO date format YYYY-MM-DD
  readMinutes: number;
  image: string;
}

export const posts: Post[] = [
  {
    slug: "5-cara-mudah-memilah-sampah-di-rumah",
    title: "5 Cara Mudah Memilah Sampah di Rumah",
    excerpt:
      "Langkah sederhana yang bisa dimulai dari dapur dan ruang keluarga untuk mempermudah alur daur ulang lingkungan sekitar.",
    category: "Tips",
    date: "2025-05-14",
    readMinutes: 4,
    image: "/images/blog/5-cara-mudah-memilah-sampah-di-rumah.webp",
    content: [
      "Memilah sampah sering kali terasa membingungkan bila kita membayangkan sistem yang rumit dengan banyak wadah berbeda. Padahal, kunci utama keberhasilan pemilahan sampah di rumah berawal dari kesederhanaan dan konsistensi kebiasaan sehari-hari.",
      "Langkah pertama adalah memisahkan dua kategori dasar: sampah organik dan sampah anorganik. Sampah sisa makanan, kulit buah, dan sayuran bisa langsung dialihkan ke komposter sederhana atau lubang biopori di pekarangan rumah agar tidak menimbulkan bau tidak sedap di tempat sampah utama.",
      "Untuk kategori anorganik, pastikan material kering dan bersih sebelum dikumpulkan. Kaleng minuman, botol kaca, serta kemasan plastik yang sudah dibilas air tidak akan menarik serangga dan jauh lebih mudah diterima oleh bank sampah atau pengrajin upcycle lokal.",
      "Sediakan satu kardus khusus di sudut ruangan untuk menampung kertas, kardus bekas paket belanja online, dan majalah lama. Menjaga kertas tetap kering adalah syarat utama agar seratnya tetap memiliki nilai daur ulang yang tinggi.",
      "Terakhir, pisahkan sampah berbahaya seperti baterai bekas, lampu bohlam, atau kemasan obat-obatan ke dalam wadah tersendiri. Dengan mempraktikkan langkah ini, kita sudah meringankan beban petugas kebersihan dan memberi jalan bagi terciptanya siklus daur ulang yang bersih.",
    ],
  },
  {
    slug: "apa-bedanya-daur-ulang-upcycle-dan-reuse",
    title: "Apa Bedanya Daur Ulang, Upcycle, dan Reuse?",
    excerpt:
      "Memahami perbedaan mendasar ketiga istilah sirkular agar kita semakin bijak memperlakukan barang di sekitar kita.",
    category: "Edukasi",
    date: "2025-05-08",
    readMinutes: 5,
    image: "/images/blog/apa-bedanya-daur-ulang-upcycle-dan-reuse.webp",
    content: [
      "Di tengah maraknya gerakan kepedulian lingkungan, istilah daur ulang (recycling), upcycling, dan reuse kerap digunakan secara bergantian. Meski sama-sama bertujuan memperpanjang usia pakai material, ketiganya memiliki konsep operasional yang cukup berbeda.",
      "Reuse atau penggunaan kembali adalah tindakan paling mendasar, yakni memakai barang berulang kali untuk fungsi yang sama atau serupa tanpa mengubah bentuk fisiknya secara signifikan. Contoh paling akrab adalah membawa tas belanja berbahan kain atau mencuci botol kaca untuk wadah air minum harian.",
      "Sementara itu, daur ulang (recycling) umumnya melibatkan proses pengolahan industri di mana suatu material dihancurkan terlebih dahulu menjadi bahan baku mentah. Misalnya, botol plastik dicacah menjadi serpihan pelet lalu dilebur kembali menjadi serat sintetis atau wadah baru dengan penurunan mutu tertentu.",
      "Upcycling mengambil pendekatan yang lebih kreatif dan bernilai tambah. Upcycle mengubah barang bekas atau limbah menjadi produk baru yang memiliki kualitas, nilai estetika, atau fungsi yang lebih tinggi dibanding barang asalnya tanpa harus melalui proses peleburan energi tinggi.",
      "Sebagai contoh, sepasang celana jeans bekas yang didekonstruksi menjadi tote bag kuat atau botol sirup kafe yang dipoles menjadi vas bunga adalah bentuk nyata upcycling. Upcycle tidak hanya menyelamatkan materi dari tempat pembuangan, tetapi juga menghidupkan kembali nilai seni kriya tangan lokal.",
    ],
  },
  {
    slug: "merawat-tas-dan-pakaian-dari-bahan-daur-ulang",
    title: "Merawat Tas dan Pakaian dari Bahan Daur Ulang",
    excerpt:
      "Panduan praktis merawat koleksi busana perca dan tas denim upcycle agar awet bertahun-tahun tanpa kehilangan pesona.",
    category: "Tips",
    date: "2025-04-29",
    readMinutes: 3,
    image: "/images/blog/merawat-tas-dan-pakaian-dari-bahan-daur-ulang.webp",
    content: [
      "Memiliki busana atau tas hasil karya upcycle memberikan kepuasan tersendiri karena setiap jahitan membawa cerita dan karakter material yang unik. Agar karya istimewa ini tetap awet dan nyaman digunakan bertahun-tahun, perawatan yang tepat sangat diperlukan.",
      "Kunci pertama adalah metode pencucian. Sangat disarankan untuk mencuci tas denim atau kemeja perca dengan tangan menggunakan air bersuhu ruang. Gesekan putaran mesin cuci yang terlalu kuat dapat meregangkan sambungan jahitan artistik perca dan mempercepat pudarnya warna serat kain.",
      "Gunakan detergen cair berbahan lembut dan hindari pemutih pakaian berklorin keras. Jika terdapat noda kecil pada permukaan tas, cukup bersihkan area bernoda menggunakan sikat gigi berbulu halus yang telah dibasahi air sabun secara memutar.",
      "Pada tahap penjemuran, hindari memeras kain dengan cara dipelintir terlalu kencang. Cukup tekan perlahan dengan handuk kering, lalu angin-anginkan di area teduh yang memiliki sirkulasi udara baik tanpa terpapar sinar matahari terik langsung.",
      "Untuk penyetrikaan, gunakan suhu sedang dan lapisi permukaan pakaian dengan kain katun tipis di atasnya. Dengan perawatan yang penuh kehati-hatian, produk upcycle Anda tidak hanya berumur panjang tetapi juga akan membentuk patina khas yang semakin menawan seiring waktu.",
    ],
  },
  {
    slug: "kisah-di-balik-jeans-bekas-yang-jadi-tote-bag",
    title: "Kisah di Balik Jeans Bekas yang Jadi Tote Bag",
    excerpt:
      "Perjalanan sepotong celana denim afkir dari tumpukan tak terpakai hingga bertransformasi menjadi tas fungsional.",
    category: "Cerita",
    date: "2025-04-20",
    readMinutes: 5,
    image: "/images/blog/kisah-di-balik-jeans-bekas-yang-jadi-tote-bag.webp",
    content: [
      "Denim adalah salah satu material tekstil paling tangguh yang pernah diciptakan manusia. Sayangnya, ketika celana jeans mengalami robek di area tertentu atau ukurannya sudah tidak muat, sebagian besar dari kain yang masih kokoh tersebut sering kali berakhir terbengkalai begitu saja di lemari.",
      "Di bengkel Cyclology, perjalanan transformasi ini dimulai dengan proses kurasi. Setiap celana denim bekas yang terkumpul diperiksa ketebalan seratnya, dicuci secara higienis, dan diuraikan jahitannya untuk memisahkan bagian saku, ban pinggang, serta panel kaki yang masih sangat prima.",
      "Ibu-ibu pengrajin kemudian memetakan pola potongan baru. Saku belakang jeans yang ikonik dipertahankan posisinya sebagai saku luar tote bag yang praktis untuk menyimpan ponsel atau kunci. Sambungan kain dirancang sedemikian rupa agar menghadirkan kontras warna biru denim yang harmonis.",
      "Proses penjahitan membutuhkan keahlian khusus dan jarum tebal karena lapisan denim yang dilipat ganda memiliki ketebalan cukup tinggi. Setiap jahitan diperkuat dengan benang nilon berkualitas demi menjamin tas mampu menahan beban berat bawaan sehari-hari.",
      "Saat sepotong jeans selesai bertransformasi menjadi sebuah tote bag yang rapi, ada rasa syukur mendalam. Barang yang tadinya dianggap usang kini siap kembali menemani langkah pemilik barunya dengan fungsi dan kebanggaan baru.",
    ],
  },
  {
    slug: "plastik-sekali-pakai-alternatif-yang-bisa-dimulai-hari-ini",
    title: "Plastik Sekali Pakai: Alternatif yang Bisa Dimulai Hari Ini",
    excerpt:
      "Opsi pengganti praktis untuk mengurangi ketergantungan pada wadah sekali pakai dalam rutinitas belanja dan makan.",
    category: "Edukasi",
    date: "2025-04-12",
    readMinutes: 4,
    image: "/images/blog/plastik-sekali-pakai-alternatif-yang-bisa-dimulai-hari-ini.webp",
    content: [
      "Plastik sekali pakai telah menjadi bagian tak terpisahkan dari kehidupan modern karena kepraktisan dan harganya yang terjangkau. Namun, kemudahan beberapa menit tersebut meninggalkan sisa materi yang bertahan di bumi hingga ratusan tahun lamanya.",
      "Kabar baiknya, perubahan gaya hidup tidak harus dilakukan secara drastis dalam satu malam. Memulai dari hal-hal kecil yang realistis justru sering kali menjadi fondasi kebiasaan berkelanjutan yang paling efektif dan bertahan lama.",
      "Salah satu langkah paling mudah adalah selalu menyiapkan tas belanja lipat dan kantong jaring kecil di dalam tas kerja atau bagasi kendaraan. Dengan membiasakan diri menolak kantong kresek saat berbelanja di minimarket atau pasar, kita sudah mengurangi puluhan lembar plastik setiap bulannya.",
      "Langkah berikutnya adalah membawa botol minum sendiri dan wadah makanan tahan karat saat membeli makanan pesan bawa pulang. Banyak kedai kopi dan tempat makan lokal kini bahkan memberikan apresiasi bagi pelanggan yang membawa wadah sendiri.",
      "Pilihan mindful lainnya adalah beralih ke sedotan berbahan bambu atau baja tahan karat, serta menggunakan beeswax wrap sebagai pengganti plastik cling wrap pembungkus makanan di rumah. Kebiasaan kecil yang konsisten akan menciptakan dampak positif yang bermakna bagi lingkungan sekitar.",
    ],
  },
  {
    slug: "ide-dekorasi-rumah-dari-botol-kaca-bekas",
    title: "Ide Dekorasi Rumah dari Botol Kaca Bekas",
    excerpt:
      "Sentuhan estetika hangat dan tenang dari botol kaca minuman rekondisi untuk menghias sudut meja dan ruang kerja.",
    category: "Tips",
    date: "2025-04-03",
    readMinutes: 3,
    image: "/images/blog/ide-dekorasi-rumah-dari-botol-kaca-bekas.webp",
    content: [
      "Botol kaca bekas minuman sirup, soda, atau kecap memiliki siluet bentuk yang sebenarnya sangat elegan. Daripada langsung membuangnya ke tempat sampah, botol-botol ini bisa disulap menjadi elemen dekorasi pemanis ruangan yang berkelas.",
      "Cara paling praktis adalah membersihkan label stiker dengan merendam botol dalam air hangat bersabun, lalu menggunakannya sebagai vas propagasi air untuk tanaman hias berakar air seperti sirih gading. Kejernihan kaca memperlihatkan pertumbuhan akar yang indah di bawah sinar jendela.",
      "Ide berikutnya adalah menambahkan lilitan tali rami atau benang goni di bagian leher botol untuk memberikan aksen rustic alami. Padukan dengan ranting kering atau bunga edelweiss budidaya untuk menciptakan suasana meja makan bernuansa hangat.",
      "Bagi Anda yang menyukai lilin aromaterapi, botol kaca berwarna amber atau hijau zaitun dapat dipotong rapi dan dijadikan wadah lilin kedelai wangi. Pendar apinya akan membiaskan cahaya temaram yang menenangkan di malam hari.",
      "Dengan sedikit kreativitas dan sentuhan personal, benda-benda sederhana di sekitar kita dapat memiliki kehidupan kedua yang mempercantik rumah tanpa perlu membeli pernak-pernik baru yang mahal.",
    ],
  },
];
