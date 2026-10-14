import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * CTA kolaborasi artikel di bawah grid Blog.
 * Hanya tombol WhatsApp (sesuai model site tanpa backend).
 * Tanpa form newsletter dan tanpa klaim waktu respons (di luar SPEC).
 */
export function BlogCollabCTA() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya punya ide tulisan atau ingin kolaborasi artikel. Boleh berdiskusi?"
  );

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-white px-6 py-10 shadow-soft sm:px-10 sm:py-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
            Ruang Kolaborasi Komunitas
          </span>
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl">
            Ingin Berbagi Cerita atau Kolaborasi Artikel?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Punya inovasi daur ulang di lingkunganmu, pengalaman kriya
            upcycle unik, atau ingin menulis bersama tim kami? Hubungi kami
            via WhatsApp untuk berdiskusi.
          </p>
          <Button variant="whatsapp" href={waLink} icon={<MessageCircle className="h-4 w-4" />}>
            Kirim Ide Tulisan ke WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
