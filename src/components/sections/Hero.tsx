import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { Leaf, ShoppingBag, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Konten kiri */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="neutral" icon={<Leaf className="h-3.5 w-3.5 text-moss-600" />}>
              Produk Daur Ulang Lokal
            </Badge>

            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-moss-600">
              Barang bekas,{" "}
              <span className="font-serif italic text-moss-700">cerita baru.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              Koleksi kurasi aksesoris, busana perca, dan perlengkapan rumah daur ulang
              karya pengrajin Indonesia. Mengurangi jejak sampah dengan sentuhan estetika
              mindful.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" href="/produk" icon={<ShoppingBag className="h-4 w-4" />}>
                Belanja Sekarang
              </Button>
              <Button variant="outline" href="/tentang" icon={<Sparkles className="h-4 w-4" />}>
                Kenali Cyclology
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs font-medium text-ink-muted">
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-moss-600" aria-hidden="true" />
                Pemesanan langsung &amp; ramah via WhatsApp
              </span>
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-moss-600" aria-hidden="true" />
                Dikurasi dari barang bekas
              </span>
            </div>
          </div>

          {/* Foto kanan */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-sage-50 shadow-soft">
            <SafeImage
              src="/images/hero/hero-craft.webp"
              alt="Produk kurasi daur ulang Cyclology"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
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
  );
}
