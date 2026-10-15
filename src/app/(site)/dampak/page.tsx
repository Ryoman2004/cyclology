import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Calculator, Leaf } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/data/heroes";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { formatKg } from "@/lib/format";

export const metadata: Metadata = {
  title: `Dampak — ${siteConfig.name}`,
  description:
    "Lihat berapa banyak sampah yang telah kami selamatkan dan bagaimana setiap produk berkontribusi pada daur ulang di Cyclology.",
  openGraph: {
    title: `Dampak — ${siteConfig.name}`,
    description:
      "Transparansi angka dampak lingkungan dan sosial Cyclology.",
    url: `${siteConfig.url}/dampak`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const { impact } = siteConfig;

interface CategoryImpact {
  slug: string;
  name: string;
  totalKg: number;
  productCount: number;
}

function getCategoryImpact(): CategoryImpact[] {
  return categories
    .map((category) => {
      const inCategory = products.filter((p) => p.category === category.slug);
      const totalKg = inCategory.reduce((sum, p) => sum + p.impactKg, 0);
      return {
        slug: category.slug,
        name: category.name,
        totalKg,
        productCount: inCategory.length,
      };
    })
    .filter((c) => c.totalKg > 0)
    .sort((a, b) => b.totalKg - a.totalKg);
}

const stats = [
  { label: "Produk Terjual", value: impact.productsSold, suffix: "" },
  { label: "Pengrajin Lokal", value: impact.artisans, suffix: "" },
  { label: "Jenis Produk", value: products.length, suffix: "" },
  { label: "Kategori", value: categories.length, suffix: "" },
];

export default function DampakPage() {
  const categoryImpact = getCategoryImpact();
  const maxKg = categoryImpact[0]?.totalKg ?? 1;
  const totalKg = impact.totalKgSaved;

  return (
    <main className="flex-1">
      {/* Hero */}
      <PageHero
        eyebrow="Transparansi &amp; Akuntabilitas"
        title={
          <>
            Angka Nyata Dibalik{" "}
            <span className="font-serif italic text-terracotta-700">
              Setiap Karya
            </span>
          </>
        }
        description="Kami percaya transparansi adalah bagian dari tanggung jawab. Berikut catatan dampak sosial dan lingkungan dari perjalanan Cyclology."
        image={heroImages.impact.src}
        breadcrumb={[{ label: "Dampak" }]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">          {/* Angka besar total kg */}
          <FadeIn>
            <div className="mt-10 flex flex-col items-center gap-2 rounded-2xl border border-line bg-sage-50 p-8 sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Total Estimasi Sampah Diselamatkan
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-bold tracking-tight text-moss-600 sm:text-7xl">
                  {formatKg(totalKg)}
                </span>
                <span className="text-2xl font-semibold text-moss-600 sm:text-3xl">
                  kg
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-muted">
                Setara berat {impact.productsSold} produk yang kembali
                menjadi barang berguna, bukan timbunan sampah.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3 kartu statistik */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map(({ label, value, suffix }, index) => (
              <FadeIn key={label} delay={index * 80}>
                <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-line bg-white p-6 text-center shadow-soft">
                  <span className="text-4xl font-bold tracking-tight text-moss-600 sm:text-5xl">
                    {value.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                    {label}
                  </span>
                  {suffix && (
                    <span className="text-xs text-ink-muted">{suffix}</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Grafik batang per kategori */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            label="Sebaran Dampak"
            title="Dampak per Kategori Produk"
            subtitle="Estimasi kg limbah yang diselamatkan, dihitung dari perkiraan berat bahan bekas pada setiap produk."
            align="left"
          />

          <div className="mt-8 flex flex-col gap-5">
            {categoryImpact.map((cat, index) => {
              const percentage = (cat.totalKg / maxKg) * 100;
              return (
                <FadeIn key={cat.slug} delay={index * 60}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-moss-600">
                        {cat.name}
                      </span>
                      <span className="text-sm font-semibold text-ink-muted">
                        {formatKg(cat.totalKg)} kg
                      </span>
                    </div>
                    <div
                      className="h-3 w-full overflow-hidden rounded-full bg-sage-50"
                      role="img"
                      aria-label={`${cat.name}: ${formatKg(cat.totalKg)} kilogram`}
                    >
                      <div
                        className="h-full rounded-full bg-moss-600 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-ink-muted">
                      {cat.productCount} jenis produk
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bagaimana kami menghitung */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                  aria-hidden="true"
                >
                  <Calculator className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="text-xl font-semibold text-moss-600 sm:text-2xl">
                  Bagaimana Kami Menghitung?
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  Setiap produk di katalog kami memiliki perkiraan berat bahan
                  bekas yang dipakai untuk membuatnya. Angka perkiraan itu
                  disimpan bersama detail produk.
                </p>
                <p>
                  Angka di atas adalah jumlah perkiraan berat tersebut dari
                  seluruh produk dalam satu kategori, sehingga mencerminkan total
                  kontribusi kategori tersebut terhadap pengurangan timbunan
                  sampah.
                </p>
                <p>
                  Angka ini adalah estimasi berdasarkan berat material, bukan
                  hasil pengukuran laboratorium. Karena itu kami tidak
                  menampilkan angka pengurangan emisi karbon.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Catatan placeholder */}
          <p className="mt-8 text-center text-xs leading-relaxed text-ink-muted">
            <Leaf className="mr-1 inline h-3.5 w-3.5 align-[-2px] text-sage-500" aria-hidden="true" />
            Angka contoh, akan diganti data asli.
          </p>
        </div>
      </section>

      {/* CTA ke katalog */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-moss-600 px-6 py-12 sm:px-12">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                Bantu Angka Ini Terus Bertumbuh
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-sage-200 sm:text-base">
                Setiap produk yang Anda pilih ikut menyelamatkan material dari
                timbunan sampah dan mendukung pengrajin lokal.
              </p>
              <Button
                variant="light"
                href="/produk"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Jelajahi Katalog
              </Button>
            </div>
</FadeIn>
        </div>
      </section>
    </main>
  );
}
