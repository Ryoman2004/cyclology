import React from "react";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Recycle, Share2, ShieldCheck, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/data/heroes";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ShareWhatsAppButton } from "@/components/share/ShareWhatsAppButton";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Kampanye Bulan Tanpa Plastik — ${siteConfig.name}`,
  description:
    "Mulai langkah kecil hidup lebih tenang tanpa sampah plastik dengan paket hemat upcycle dari pengrajin lokal.",
  openGraph: {
    title: `Kampanye Bulan Tanpa Plastik — ${siteConfig.name}`,
    description:
      "Paket hemat upcycle untuk mengganti kantong sekali pakai dengan karya tahan lama.",
    url: `${siteConfig.url}/kampanye/bulan-tanpa-plastik`,
    siteName: siteConfig.name,
    type: "website",
  },
};

// Tiga produk isi paket hemat (sesuai SPEC 7.7).
const packageSlugs = [
  "tote-bag-denim-bekas",
  "pouch-kemasan-kopi",
  "alas-gelas-kain-perca",
] as const;

const DISCOUNT = 0.1; // diskon 10%

const benefits = [
  {
    icon: ShieldCheck,
    title: "Hemat Jangka Panjang",
    description:
      "Satu tas & pouch kokoh menggantikan ratusan kantong kreksek sekali pakai bertahun-tahun. Investasi gaya hidup sekali pakai, untuk pemakaian harian.",
  },
  {
    icon: Recycle,
    title: "Berdampak Langsung",
    description:
      "Menyelamatkan material sisa dari timbunan sampah dan pencemaran ekosistem sungai laut. Tercatat dalam log transparansi daur kami.",
  },
  {
    icon: Truck,
    title: "Dukungan untuk Ibu Perajin",
    description:
      "Setiap paket menjamin upah layak dan jam kerja fleksibel bagi pengrajin perempuan di bengkel kami. Pemberdayaan ekonomi mandiri.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pesan Paket Hemat",
    description:
      "Klik tombol WhatsApp untuk mengamankan paket hemat bulan ini. Katalog khusus sudah disiapkan untuk kemudahan Anda.",
  },
  {
    number: "02",
    title: "Konfirmasi Corak",
    description:
      "Kurator kami akan memilihkan motif kain perca & denim terbaik dari stok terkini. Anda tinggal memilih sesuai selera personal.",
  },
  {
    number: "03",
    title: "Pakai & Tularkan Inspirasi",
    description:
      "Paket tiba tanpa selotip plastik. Mulailah membawa barang belanja bebas kantong kreksek dan jadilah bagian dari perubahan.",
  },
];

export default function KampanyeBulanTanpaPlastikPage() {
  // Harga paket dihitung dari data produk, diskon 10% (SPEC 7.7).
  const packageItems = packageSlugs.map((slug) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      throw new Error(`Produk paket hemat tidak ditemukan: ${slug}`);
    }
    return product;
  });

  const normalPrice = packageItems.reduce((sum, p) => sum + p.price, 0);
  const packagePrice = Math.round(normalPrice * (1 - DISCOUNT));
  const savings = normalPrice - packagePrice;

  const waMessage = [
    "Halo Cyclology, saya ingin mengambil Paket Hemat Tanpa Plastik.",
    `Harga paket: ${formatRupiah(packagePrice)}`,
    `Link: ${siteConfig.url}/kampanye/bulan-tanpa-plastik`,
    "Apakah paketnya masih tersedia?",
  ].join("\n");
  const waLink = buildWhatsAppLink(waMessage);
  const shareText = `Yuk ikut Bulan Tanpa Plastik bersama ${siteConfig.name}!`;
  const campaignPath = "/kampanye/bulan-tanpa-plastik";

  return (
    <main className="flex-1">
      {/* Hero */}
      <PageHero
        eyebrow="Kampanye Khusus &middot; Bulan Tanpa Plastik"
        title={
          <>
            Mulai Langkah Kecil, Hidup Lebih Tenang{" "}
            <span className="font-serif italic text-terracotta-700">
              Tanpa Sampah Plastik.
            </span>
          </>
        }
        description="Ganti kebiasaan kantong sekali pakai dengan karya upcycle tahan lama buatan tangan perajin lokal."
        image={heroImages.campaign.src}
        actions={
          <>
            <Button
              variant="whatsapp"
              href={waLink}
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Ambil Paket Hemat
            </Button>
            <Button variant="outline" href="/kontak" size="lg">
              Tanya Tim Kurator
            </Button>
          </>
        }
        aside={
          <div className="grid grid-cols-3 gap-3">
            {packageItems.map((product) => (
              <div
                key={product.slug}
                className="overflow-hidden rounded-xl border border-line bg-white shadow-soft"
              >
                <div className="relative aspect-square w-full bg-sage-50">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 16vw, 30vw"
                    className="object-cover"
                    fallbackLabel={product.name}
                  />
                </div>
                <p className="px-2 py-2 text-[10px] font-medium leading-tight text-ink-muted">
                  {product.name}
                </p>
              </div>
            ))}
            <p className="col-span-3 text-center text-sm font-semibold text-moss-600">
              Harga paket {formatRupiah(packagePrice)}
            </p>
          </div>
        }
      />
      {/* 3 kartu manfaat */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Nilai Nyata
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-moss-600 sm:text-3xl">
              Mengapa Bergabung Bulan Ini?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <FadeIn key={title} delay={index * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold text-moss-600">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Kartu Paket Hemat */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Tayangan Terbatas
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-moss-600 sm:text-3xl">
              Paket Hemat Tanpa Plastik
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Satu set esensial untuk berbagai kebutuhan belanja bebas kantong
              kreksek.
            </p>
          </div>

          <FadeIn>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              {/* Kepala kartu */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-moss-600 px-6 py-4 sm:px-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Paket Utama Edisi Spesial
                </span>
                <span className="text-xs text-sage-200">
                  Tersedia selama stok masih ada
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-3">
                {/* Daftar isi paket */}
                <div className="flex flex-col gap-5 lg:col-span-2">
                  <h3 className="text-xl font-semibold text-moss-600">
                    Trilogi Esensial Harian
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Setiap elemen dirancang dengan jahitan ganda anti-robek
                    dan material daur ulang yang telah disterilisasi higienis.
                  </p>

                  <ul className="flex flex-col gap-4">
                    {packageItems.map((product, index) => (
                      <li
                        key={product.slug}
                        className="flex items-start gap-3 rounded-xl border border-line bg-sage-50 p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss-600 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-moss-600">
                            {product.name}
                          </span>
                          <span className="text-sm leading-relaxed text-ink-muted">
                            {product.shortDescription}
                          </span>
                          <span className="text-xs font-semibold text-terracotta-700">
                            {formatRupiah(product.price)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-line bg-white p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-moss-600">
                      Bonus ikut paket:
                    </span>
                    <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-muted">
                      <li>Kemasan 100% daur ulang &amp; serat singkong</li>
                      <li>Kartu cerita pengrajin berbasis kertas daur ulang</li>
                      <li>Panduan perawatan kain agar awet bertahun-tahun</li>
                    </ul>
                  </div>
                </div>

                {/* Ringkasan harga + CTA */}
                <div className="flex flex-col gap-5">
                  <div className="relative overflow-hidden rounded-xl bg-sage-50">
                    <SafeImage
                      src={packageItems[0].image}
                      alt="Isi Paket Hemat Tanpa Plastik"
                      width={600}
                      height={450}
                      className="h-48 w-full object-cover"
                      fallbackLabel="Paket Hemat Tanpa Plastik"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-terracotta-100 px-3 py-1 text-xs font-semibold text-terracotta-700">
                      Hemat {formatRupiah(savings)} ({Math.round(DISCOUNT * 100)}%)
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Harga Spesial Paket
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-moss-600">
                      {formatRupiah(packagePrice)}
                    </span>
                    <span className="text-sm text-ink-muted line-through">
                      {formatRupiah(normalPrice)}
                    </span>
                  </div>

                  <Button variant="whatsapp" href={waLink} size="lg" className="w-full">
                    Ambil Paket Hemat
                  </Button>

                  <p className="text-xs leading-relaxed text-ink-muted">
                    Siap kirim hari ini &middot; Subsidi ongkir se-Indonesia
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 langkah cara ikut */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Alur Bergabung
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-moss-600 sm:text-3xl">
              3 Langkah Sederhana Bergabung
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Proses personal tanpa keranjang belanja rumit. Kami melayani
              setiap pemesanan secara langsung via WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(({ number, title, description }, index) => (
              <FadeIn key={title} delay={index * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="text-4xl font-bold text-sage-200">
                    {number}
                  </span>
                  <h3 className="text-lg font-semibold text-moss-600">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA diulang */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-moss-600 px-6 py-12 text-center sm:px-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-200">
                Ambil Bagian
              </span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                Siap Memulai Bulan Tanpa Plastik Anda Hari Ini?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-sage-200 sm:text-base">
                Ketersediaan paket sangat bergantung pada kurasi limbah mentah
                yang kami selamatkan minggu ini. Bergabunglah bersama puluhan
                pemilik gaya hidup mindful lainnya.
              </p>
<div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="light" href={waLink} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Ambil Paket Hemat
                </Button>
                <ShareWhatsAppButton
                  path={campaignPath}
                  text={shareText}
                  variant="ghost"
                  size="lg"
                  icon={<Share2 className="h-4 w-4" />}
                >
                  Bagikan Kampanye
                </ShareWhatsAppButton>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs text-sage-200">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Bebas konsultasi via WhatsApp &middot; Garansi jahitan rapi
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Catatan */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-center text-xs leading-relaxed text-ink-muted">
            Angka harga paket dihitung otomatis dari data produk dengan diskon
            10%. Angka contoh, akan diganti data asli.
          </p>
        </div>
      </section>
    </main>
  );
}
