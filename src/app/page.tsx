import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { SafeImage } from "@/components/ui/SafeImage";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { formatRupiah } from "@/lib/format";
import { siteConfig } from "@/config/site";
import { Sparkles, ShoppingBag, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  const sampleAccordion = [
    {
      id: "cara-pesan",
      question: "Bagaimana cara memesan produk di Cyclology?",
      answer:
        "Pilih produk yang Anda sukai, lalu klik tombol 'Pesan via WhatsApp'. Pesan otomatis berisi nama produk dan tautan akan dibuat, lalu admin kami akan membalas ketersediaan stok serta instruksi pembayaran langsung.",
    },
    {
      id: "bahan-baku",
      question: "Apakah seluruh produk dibuat dari bahan daur ulang?",
      answer:
        "Ya, 100% material utama kami berasal dari jeans bekas afkir, limbah botol kaca kafe, spanduk vinil, hingga perca tekstil garmen yang dikurasi dan disanitasi secara higienis sebelum diolah kembali.",
    },
    {
      id: "pengiriman",
      question: "Bagaimana proses pengiriman barang?",
      answer:
        "Kami bekerja sama dengan ekspedisi tepercaya ke seluruh Indonesia dengan standar pengemasan ramah lingkungan (eco-packaging) bebas plastik sekali pakai.",
    },
  ];

  const waOrderUrl = buildWhatsAppLink(
    "Halo Cyclology, saya ingin berkonsultasi mengenai produk upcycle."
  );

  return (
    <main className="flex-1">
      {/* Hero Preview Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              <Badge variant="neutral" icon={<Leaf className="h-3.5 w-3.5 text-moss-600" />}>
                Produk Daur Ulang Lokal
              </Badge>

              <SectionHeading
                align="left"
                as="h1"
                title={
                  <span>
                    Barang bekas,{" "}
                    <span className="font-serif italic text-moss-700">
                      cerita baru.
                    </span>
                  </span>
                }
                subtitle="Koleksi kurasi aksesoris, busana perca, dan perlengkapan rumah daur ulang karya pengrajin Indonesia. Mengurangi jejak sampah dengan sentuhan estetika mindful."
              />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" href="/produk" icon={<ShoppingBag className="h-4 w-4" />}>
                  Belanja Sekarang
                </Button>
                <Button variant="outline" href="/tentang" icon={<Sparkles className="h-4 w-4" />}>
                  Kenali Cyclology
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-ink-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-moss-600" />
                  <span>Pemesanan langsung & ramah via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-terracotta-700" />
                  <span>Pengemasan bebas plastik</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-sage-50 shadow-soft">
              <SafeImage
                src="/images/hero/hero-craft.webp"
                alt="Produk kurasi daur ulang Cyclology"
                fill
                priority
                className="object-cover"
                fallbackLabel="Koleksi 100% Upcycled Artistry"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <Badge variant="terracotta" icon={<Sparkles className="h-3.5 w-3.5" />}>
                  100% Upcycled Artistry
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase & Verification (Fase 1) */}
      <section className="bg-sage-50 py-16 border-y border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <SectionHeading
            label="Komponen Dasar & Pertanyaan Umum"
            title="Sistem Komponen & Tanya Jawab"
            subtitle={`Seluruh komponen dibangun sesuai panduan desain dan terhubung dengan konfigurasi WhatsApp (${siteConfig.whatsappNumber}).`}
          />

          {/* Demonstration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft flex flex-col gap-2">
              <Badge variant="terracotta">Aksen Baru</Badge>
              <h3 className="font-semibold text-moss-600 text-sm">Pemberdayaan Lokal</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Mendukung {siteConfig.impact.artisans} pengrajin lokal dengan upah berkeadilan.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft flex flex-col gap-2">
              <Badge variant="neutral">Format Rupiah</Badge>
              <h3 className="font-semibold text-moss-600 text-sm">{formatRupiah(85000)}</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Harga transparan tanpa biaya tersembunyi atau biaya platform.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-soft flex flex-col gap-2">
              <Badge variant="sage">Total Dampak</Badge>
              <h3 className="font-semibold text-moss-600 text-sm">{siteConfig.impact.totalKgSaved} kg Sampah</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Sampah kain & kaca berhasil dialihkan dari pembuangan akhir.
              </p>
            </div>
          </div>

          {/* Accordion Component */}
          <Accordion items={sampleAccordion} defaultOpenId="cara-pesan" />

          {/* CTA Action */}
          <div className="flex justify-center pt-4">
            <Button variant="whatsapp" href={waOrderUrl}>
              Konsultasi Langsung via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
