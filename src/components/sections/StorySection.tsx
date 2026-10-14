import React from "react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { Leaf } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Foto pengrajin */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-sage-50 shadow-soft">
            <SafeImage
              src="/images/gallery/proses-4-menjahit.webp"
              alt="Pengrajin lokal sedang menjahit potongan kain perca"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              fallbackLabel="Kisah pengrajin Cyclology"
            />
          </div>

          {/* Teks cerita */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Tentang Kami
            </span>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl lg:text-4xl">
              Setiap jahitan menyimpan{" "}
              <span className="font-serif italic text-moss-700">harapan</span> baru.
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Kami lahir dari kepedulian terhadap limbah tekstil dan botol kaca sekali pakai
              di kota-kota kita. Bersama komunitas pengrajin lokal, kami mengubah bahan yang
              terbuang menjadi produk berkualitas tinggi yang fungsional, estetis, dan
              berdaya guna panjang.
            </p>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Kami tidak menggunakan sistem keranjang belanja instan karena setiap produk
              memiliki corak unik dan stok terbatas. Melalui WhatsApp, kami menyapa Anda
              secara personal.
            </p>
            <Button
              variant="primary"
              href="/tentang"
              icon={<Leaf className="h-4 w-4" />}
              className="mt-2"
            >
              Baca Kisah Pengrajin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
