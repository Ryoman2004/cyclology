import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * CTA kolaborasi artikel di bawah grid Blog.
 * Layout dua kolom (teks + foto) supaya tidak ada ruang kosong berlebih.
 * Hanya tombol WhatsApp (sesuai model site tanpa backend).
 */
export function BlogCollabCTA() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya punya ide tulisan atau ingin kolaborasi artikel. Boleh berdiskusi?"
  );

  return (
    <section className="border-t border-line py-14 sm:py-16">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Ruang Kolaborasi Komunitas
            </span>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl">
              Ingin Berbagi Cerita atau Kolaborasi Artikel?
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Punya inovasi daur ulang di lingkunganmu, pengalaman kriya
              upcycle unik, atau ingin menulis bersama tim kami? Hubungi kami
              via WhatsApp untuk berdiskusi.
            </p>
            <Button
              variant="whatsapp"
              href={waLink}
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Kirim Ide Tulisan ke WhatsApp
            </Button>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-sage-50">
            <SafeImage
              src="/images/gallery/proses-3-memotong.webp"
              alt="Pemotong memotong pola kain perca di bengkel"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
              fallbackLabel="Kolaborasi artikel Cyclology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}