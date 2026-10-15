import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Leaf, Recycle, ShoppingBag, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroImages, storyImage } from "@/data/heroes";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Tentang Kami — ${siteConfig.name}`,
  description:
    "Kenali perjalanan Cyclology: mengubah limbah pakai menjadi karya bernilai guna, didukung pengrajin perempuan lokal.",
  openGraph: {
    title: `Tentang Kami — ${siteConfig.name}`,
    description:
      "Perjalanan Cyclology mengubah limbah pakai menjadi karya bernilai guna bersama pengrajin perempuan lokal.",
    url: `${siteConfig.url}/tentang`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const missions = [
  {
    icon: Recycle,
    title: "Kurangi Limbah",
    description:
      "Menyelamatkan material mentah dari jeans bekas, perca kain, hingga banner terpal agar tidak berakhir di tanah dan saluran air.",
  },
  {
    icon: Users,
    title: "Dukung Pengrajin Lokal",
    description:
      "Memberdayakan ibu rumah tangga dan pengrajin kriya lokal dengan upah layak serta jam kerja fleksibel yang bermakna.",
  },
  {
    icon: Leaf,
    title: "Edukasi Gaya Hidup Hijau",
    description:
      "Mengajak masyarakat sadar akan siklus hidup barang, merawat pakaian lama, dan menumbuhkan kebiasaan konsumsi minim jejak karbon.",
  },
];

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Kumpulkan",
    description:
      "Pengumpulan dan kurasi limbah mentah dari industri garmen, restoran, dan donasi warga yang dirawat cermat berdasarkan serat serta kekuatannya.",
  },
  {
    number: "02",
    icon: Recycle,
    title: "Olah",
    description:
      "Pencucian higienis dengan sabun lerak alami bebas deterjen keras, perancangan pola presisi tanpa sisa potong berlebih, dan penjahitan ganda berkekuatan tinggi oleh para pengrajin.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Hadirkan",
    description:
      "Uji kualitas ketat secara manual, pengemasan bebas plastik dengan serat singkong dan tali rami alami, lalu dikirim untuk menemani keseharian mindful Anda.",
  },
];

export default function TentangPage() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya ingin berdiskusi tentang kolaborasi atau ide daur ulang bersama tim Anda."
  );

  return (
    <main className="flex-1">
      {/* Hero */}
      <PageHero
        eyebrow={`Tentang ${siteConfig.name}`}
        title={
          <>
            Mengubah Limbah Jadi Berkah, Menghadirkan{" "}
            <span className="font-serif italic text-terracotta-700">
              Karya Bernilai Guna.
            </span>
          </>
        }
        description={`${siteConfig.name} berkomitmen menyelamatkan material sisa pakai dan mentransformasi limbah tekstil menjadi perlengkapan artisan bernilai tahan lama, sambil mendukung pengrajin perempuan mandiri di ${siteConfig.location.city} dan sekitarnya.`}
        image={heroImages.about.src}
        breadcrumb={[{ label: "Tentang Kami" }]}
        aside={
          <div className="flex w-full max-w-sm items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-50 text-moss-600"
              aria-hidden="true"
            >
              <Leaf className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-moss-600">
                Dikerjakan Tangan
              </span>
              <p className="text-sm leading-relaxed text-ink-muted">
                Setiap karya memakai bahan dari barang bekas dan dikerjakan
                bertahap di studio kami.
              </p>
            </div>
          </div>
        }
      />

      {/* Strip tiga penekanan */}
      <section className="pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft sm:grid-cols-3 sm:gap-6 sm:p-8">
              {[
                { icon: Recycle, label: "Limbah Daur Ulang" },
                { icon: Users, label: "Pengrajin Lokal" },
                { icon: Leaf, label: "Bahan dari Barang Bekas" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-base font-semibold uppercase tracking-wide text-moss-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cerita Kami */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-sage-50 shadow-soft">
                <SafeImage
                  src={storyImage.src}
                  alt={storyImage.alt}
                  width={900}
                  height={600}
                  className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
                  fallbackLabel="Bengkel Cyclology"
                />
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                  Cerita Kami
                </span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-moss-600 sm:text-4xl">
                  Perjalanan Mengembalikan Napas Barang Terlupakan
                </h2>
                <p className="text-base leading-relaxed text-ink-muted">
                  {siteConfig.name} lahir dari kepedulian
                  sederhana: melihat gunungan sisa kain garmen industri, selimut
                  terbungkus, serta limbah botol kaca yang menumpuk tanpa
                  kepastian di tempat pembuangan akhir. Padahal, di balik setiap
                  serpih material tersebut tersimpan ketahanan dan tekstur yang
                  belum tuntas diuji waktu.
                </p>
                <p className="text-base leading-relaxed text-ink-muted">
                  Bersama sekelompok ibu rumah tangga dan pengrajin kriya di{" "}
                  {siteConfig.location.city}, kami mulai mengurai, mencuci dengan sabun
                  biji lerak alami, dan mendesain ulang sisa-sisa kain tersebut
                  menjadi tas harian tahan lama, pouch serbaguna, dan dekorasi
                  meja yang berkarakter. Kami membuktikan bahwa ekonomi sirkular
                  tidak harus mengorbankan estetika modern.
                </p>
                <blockquote className="mt-2 rounded-2xl border-l-4 border-terracotta-500 bg-sage-50 p-5">
                  <p className="text-sm italic leading-relaxed text-ink-muted">
                    &ldquo;Bagi kami, setiap helai sisa kain dan botol kosong
                    bukan sekadar sampah, melainkan kanvas yang menanti fungsi
                    barunya.&rdquo;
                  </p>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Misi & Komitmen */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            align="center"
            className="mx-auto"
            title={
              <>
                Misi &amp; Komitmen{" "}
                <span className="font-serif italic text-terracotta-700">
                  Keberlanjutan
                </span>
              </>
            }
            subtitle="Tiga pilar utama penggerak langkah, riset material, dan etika kurasi setiap karya."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missions.map(({ icon: Icon, title, description }, index) => (
              <FadeIn key={title} delay={index * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-7">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-50 text-moss-600"
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

      {/* Pendiri Kami */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            align="center"
            className="mx-auto"
            title={
              <>
                Pendiri{" "}
                <span className="font-serif italic text-terracotta-700">Kami</span>
              </>
            }
            subtitle="Tiga sosok di balik perintisan misi sirkular dan kurasi kriya."
          />

          <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {siteConfig.founders.map((founder, index) => (
              <FadeIn key={founder.name} delay={index * 100}>
                <article className="flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-sage-50">
                    <SafeImage
                      src={founder.photo}
                      alt={`Foto ${founder.name}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      fallbackLabel={founder.name}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-semibold text-moss-600">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                      {founder.role}
                    </span>
                    {founder.bio && (
                      <p className="text-sm leading-relaxed text-ink-muted">
                        {founder.bio}
                      </p>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja Kami */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            align="center"
            className="mx-auto"
            title={
              <>
                Cara Kerja{" "}
                <span className="font-serif italic text-terracotta-700">Kami</span>
              </>
            }
            subtitle="Alur transparan dari material terabaikan hingga menjadi karya fungsional siap pakai."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }, index) => (
              <FadeIn key={title} delay={index * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-sage-200">
                      {number}
                    </span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                  </div>
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

      {/* CTA Kolaborasi */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-6 rounded-2xl bg-moss-600 px-6 py-12 text-center sm:px-12 sm:py-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-200">
                Kolaborasi Berkelanjutan
              </span>
              <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Mari Jadi Bagian dari Gerakan Daur Ulang Bersama{" "}
                {siteConfig.name}
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-sage-200">
                Punya ide kolaborasi, pasokan limbah berkualitas, atau ingin
                memesan suvenir ramah lingkungan bernuansa kriya lokal? Kami
                selalu siap berbincang hangat.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="light" href={waLink} size="lg">
                  Konsultasi Bersama Tim Kami
                </Button>
                <Button
                  variant="outline"
                  href="/produk"
                  size="lg"
                  className="border-sage-200 text-white hover:bg-moss-700 hover:text-white"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Lihat Katalog Produk
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bagian Bengkel (dummy dari siteConfig.workshop) */}
      <WorkshopSection />
    </main>
  );
}
