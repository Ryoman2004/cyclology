import React from "react";
import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Kontak — ${siteConfig.name}`,
  description:
    "Hubungi tim Cyclology untuk pemesanan, kolaborasi, atau pertanyaan seputar karya daur ulang kami.",
  openGraph: {
title: `Kontak — ${siteConfig.name}`,
    description:
      "Hubungi tim Cyclology untuk pemesanan, kolaborasi, atau pertanyaan seputar karya daur ulang.",
    url: `${siteConfig.url}/kontak`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function KontakPage() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya ingin menghubungi tim Anda melalui WhatsApp."
  );

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Kontak" }]} className="mb-6" />
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Hubungi Kami
            </span>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-moss-600 sm:text-5xl">
              Mari Terhubung,{" "}
              <span className="font-serif italic text-terracotta-700">
                Ciptakan Kebaikan.
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Punya pertanyaan seputar kurasi karya upcycle, pesanan suvenir
              berkelanjutan, atau sekadar ingin menyapa pengrajin lokal kami?
              Kami senang mendengar dari Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Kartu Info */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Form (3 kolom) */}
            <div className="lg:col-span-3">
              <SectionHeading
                as="h2"
                align="left"
                label="Formulir Pesan Cepat"
                title={
                  <>
                    Kirim Pesan{" "}
                    <span className="font-serif italic text-terracotta-700">
                      Langsung
                    </span>
                  </>
                }
                subtitle="Isi detail di bawah ini untuk memulai percakapan terformat rapi langsung dengan kurator kami melalui WhatsApp."
                className="mb-8 w-full"
              />
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Kartu info (2 kolom) */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <FadeIn>
                <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      WhatsApp
                    </span>
                    <span className="text-lg font-semibold tabular-nums text-moss-600">
                      +{siteConfig.whatsappNumber}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Cara tercepat untuk berdiskusi, cek ketersediaan stok, atau
                    berkonsultasi tentang pesanan custom Anda.
                  </p>
                  <Button variant="whatsapp" href={waLink} className="mt-1 w-full">
                    Chat via WhatsApp
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600">
                    <Mail className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lg font-semibold text-moss-600 transition-colors hover:text-moss-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Untuk keperluan yang lebih formal seperti proposal kerja
                    sama, siaran pers, atau permintaan tertulis lainnya.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={160}>
                <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600">
                    <Clock className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Jam Layanan
                    </span>
                    <span className="text-base font-semibold text-moss-600">
                      {siteConfig.serviceHours}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Pesan di luar jam layanan akan kami balas pada jam kerja
                    berikutnya.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={240}>
                <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-50 text-moss-600">
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Media Sosial
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {siteConfig.social.instagram && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        Instagram
                      </a>
                    )}
                    {siteConfig.social.tiktok && (
                      <a
                        href={siteConfig.social.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        TikTok
                      </a>
                    )}
                    {siteConfig.social.facebook && (
                      <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        Facebook
                      </a>
                    )}
                    {siteConfig.social.youtube && (
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Bengkel (dummy dari siteConfig.workshop, sama dengan Galeri) */}
      <WorkshopSection />

      {/* Catatan lokasi */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                aria-hidden="true"
              >
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Catatan Kunjungan
                </span>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Kunjungan ke bengkel dipersilakan berdasarkan kesepakatan
                  terlebih dahulu melalui WhatsApp. Alamat dan peta di atas
                  merupakan data sementara yang akan diperbarui oleh pemilik.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
