import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { beforeAfterGallery, processGallery } from "@/data/gallery";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkshopSection } from "@/components/sections/WorkshopSection";

export const metadata: Metadata = {
  title: `Galeri Transformasi — ${siteConfig.name}`,
  description:
    "Saksikan perjalanan limbah mentah menjadi produk fungsional: dokumentasi sebelum-sesudah dan proses di balik layar bengkel upcycle.",
  openGraph: {
    title: `Galeri Transformasi — ${siteConfig.name}`,
    description:
      "Dokumentasi sebelum-sesudah dan proses di balik layar bengkel upcycle.",
    url: `${siteConfig.url}/galeri`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function GaleriPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <PageHero
        eyebrow="Dokumentasi Karya &amp; Proses"
        title={
          <>
            Transformasi Limbah,{" "}
            <span className="font-serif italic text-terracotta-700">
              Cerita Nyata.
            </span>
          </>
        }
        description="Saksikan bagaimana barang bekas yang terabaikan bertransformasi menjadi produk fungsional bernilai tinggi melalui sentuhan tangan terampil pengrajin lokal Nusantara."
        image="/images/gallery/before-jeans.webp"
        breadcrumb={[{ label: "Galeri" }]}
        chips={
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-moss-600">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              {beforeAfterGallery.length} transformasi
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-moss-600">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              {processGallery.length} tahap proses
            </span>
          </>
        }
      />
      {/* Sebelum & Sesudah */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            align="left"
            label="Eksplorasi Perubahan"
            title={
              <>
                Sebelum &amp;{" "}
                <span className="font-serif italic text-terracotta-700">Sesudah</span>
              </>
            }
            subtitle="Dari material tak terpakai menjadi barang fungsional sehari-hari dengan estetika murni."
            className="w-full"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {beforeAfterGallery.map((item, index) => (
              <FadeIn key={item.id} delay={index * 80}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
                  {/* Dua gambar bersebelahan */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-sage-50">
                      <SafeImage
                        src={item.beforeImage}
                        alt={`Sebelum: ${item.title}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 50vw"
                        className="object-cover"
                        fallbackLabel={item.title}
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-terracotta-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-terracotta-700">
                        Sebelum
                      </span>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-sage-50">
                      <SafeImage
                        src={item.afterImage}
                        alt={`Sesudah: ${item.resultName}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 50vw"
                        className="object-cover"
                        fallbackLabel={item.resultName}
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-sage-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-moss-700">
                        Sesudah
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-moss-600 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                    <Badge variant="neutral">Bahan: {item.material}</Badge>
                    <Badge variant="sage">Hasil: {item.resultName}</Badge>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Di Balik Proses */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            align="left"
            label="Ritual Berkarya"
            title={
              <>
                Di Balik{" "}
                <span className="font-serif italic text-terracotta-700">Proses</span>
              </>
            }
            subtitle="Ketelitian, kesabaran, dan dedikasi pengrajin lokal pada setiap jahitan dan poesan. Transparansi penuh dari limbah mentah hingga siap Anda gunakan."
            className="w-full"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processGallery.map((step, index) => (
              <FadeIn key={step.step} delay={index * 60}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sage-50">
                    <SafeImage
                      src={step.image}
                      alt={`Tahap ${step.step}: ${step.title}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                      fallbackLabel={step.title}
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-moss-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Tahap {step.step}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-moss-600">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-moss-600 transition-colors hover:text-moss-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded"
            >
              Lihat hasil akhirnya di katalog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Bengkel (dummy dari siteConfig.workshop) */}
      <WorkshopSection />
    </main>
  );
}
