import React from "react";
import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/data/heroes";
import { faqs } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Tanya Jawab — ${siteConfig.name}`,
  description:
    "Temukan jawaban seputar pemesanan, produk, dan pengiriman karya daur ulang Cyclology.",
  openGraph: {
    title: `Tanya Jawab — ${siteConfig.name}`,
    description:
      "Jawaban atas pertanyaan umum seputar pemesanan, produk, dan pengiriman.",
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function FaqPage() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya punya pertanyaan yang belum terjawab di halaman FAQ. Boleh dibantu?"
  );

  return (
    <main className="flex-1">
      {/* Hero */}
<PageHero
        align="center"
        eyebrow="Tanya Jawab"
        title={
          <>
            Pertanyaan{" "}
            <span className="font-serif italic text-terracotta-700">Umum.</span>
          </>
        }
        description="Temukan jawaban seputar pemesanan, produk daur ulang, dan pengiriman dari tim Cyclology."
        image={heroImages.faq.src}
        breadcrumb={[{ label: "Tanya Jawab" }]}
      />
      {/* Accordion FAQ */}
      <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Accordion
              items={faqs.map((faq) => ({
                id: faq.id,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* Kartu "Masih ada pertanyaan?" */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-white px-6 py-12 text-center shadow-soft sm:px-12">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50 text-moss-600"
                aria-hidden="true"
              >
                <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div className="flex max-w-xl flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-moss-600 sm:text-3xl">
                  Masih ada pertanyaan?
                </h2>
                <p className="text-base leading-relaxed text-ink-muted">
                  Tim kami siap membantu Anda menemukan karya upcycle yang tepat
                  atau menjawab pertanyaan lain seputar pemesanan.
                </p>
              </div>
              <Button variant="whatsapp" href={waLink} size="lg">
                Tanya via WhatsApp
              </Button>
            </div>
          </FadeIn>

          {/* Tautan media sosial */}
          <FadeIn delay={100}>
            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Ikuti Kami
              </span>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                Dapatkan kabar terbaru, tips gaya hidup hijau, dan proses di
                balik layar setiap minggunya.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.social.tiktok && (
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                  >
                    TikTok
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                  >
                    Facebook
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-moss-600 transition-colors hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
