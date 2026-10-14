import React from "react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Clock, MessageCircle } from "lucide-react";

export function CTABanner() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya tertarik dengan produk upcycle kamu. Boleh minta info ketersediaan stok?"
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-moss-600 px-6 py-14 text-center sm:px-12">
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            Mulai pilih barang favoritmu
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-sage-200 sm:text-base">
            Tertarik dengan salah satu produk kami atau ingin custom pesanan suvenir ramah
            lingkungan? Hubungi kami langsung di WhatsApp untuk cek ketersediaan stok.
          </p>
          <Button
            variant="light"
            href={waLink}
            size="lg"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Chat WhatsApp Sekarang
          </Button>
          <p className="inline-flex items-center gap-1.5 text-xs text-sage-200">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Biasanya membalas dalam hitungan menit ({siteConfig.serviceHours})
          </p>
        </div>
      </div>
    </section>
  );
}
