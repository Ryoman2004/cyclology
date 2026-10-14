import React from "react";
import { HeartHandshake, Leaf, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Bahan 100% Bekas",
    description:
      "Limbah denim, kaca, dan perca tekstil diselamatkan dari pembuangan akhir di Nusantara.",
  },
  {
    icon: HeartHandshake,
    title: "Dibuat Tangan oleh Pengrajin Lokal",
    description:
      "Pemberdayaan komunitas penjahit dan artisan lokal dengan prinsip upah yang adil.",
  },
  {
    icon: MessageCircle,
    title: "Pesan Mudah via WhatsApp",
    description:
      "Konsultasi produk ramah dan transaksi langsung tanpa repot sistem checkout.",
  },
];

export function ValueStrip() {
  return (
    <section aria-label="Nilai Cyclology" className="border-y border-line bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {values.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-start gap-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-50"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-moss-600" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold leading-snug text-moss-600">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
