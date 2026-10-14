import React from "react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Tag } from "lucide-react";

export function CustomOrderCTA() {
  const waLink = buildWhatsAppLink(
    "Halo Cyclology, saya ingin berkonsultasi tentang pesanan khusus atau suvenir ramah lingkungan."
  );

  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-sage-200 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white"
              aria-hidden="true"
            >
              <Tag className="h-5 w-5 text-moss-600" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-semibold leading-snug text-moss-600 sm:text-xl">
                Pesanan Khusus &amp; Suvenir Berkelanjutan
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
                Punya ide custom produk daur ulang atau suvenir ramah lingkungan?
                Konsultasikan langsung ke tim kami.
              </p>
            </div>
          </div>
          <Button variant="whatsapp" href={waLink} className="shrink-0">
            Konsultasi via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
