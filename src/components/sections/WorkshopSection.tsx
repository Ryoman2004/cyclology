import React from "react";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SafeImage } from "@/components/ui/SafeImage";

/**
 * Bagian "Bengkel Upcycle" (dummy dari siteConfig.workshop).
 * Dipakai di halaman Galeri dan Kontak agar datanya konsisten.
 *
 * Aturan peta (SPEC 7.5):
 * - workshop.mapEmbedUrl terisi (berformat embed) -> <iframe> lazy.
 * - kosong atau bukan URL embed -> gambar peta placeholder via SafeImage.
 */
export function WorkshopSection() {
  const { workshop } = siteConfig;
  const isEmbeddable =
    workshop.mapEmbedUrl.trim().length > 0 &&
    workshop.mapEmbedUrl.includes("/embed");

  return (
    <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Teks + info kontak bengkel */}
          <div className="flex flex-col justify-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
              Lokasi &amp; Kunjungan
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-moss-600 sm:text-4xl">
              Bengkel Upcycle{" "}
              <span className="font-serif italic text-moss-700">
                {workshop.name}
              </span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              Semua karya di galeri ini dirakit di bengkel kami. Anda dipersilakan
              untuk berkunjung, belajar memilah limbah, atau berdiskusi langsung
              tentang ide daur ulang Anda.
            </p>

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-moss-600 shadow-soft"
                  aria-hidden="true"
                >
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Alamat Bengkel
                  </span>
                  <span className="text-base font-semibold text-moss-600">
                    {workshop.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-moss-600 shadow-soft"
                  aria-hidden="true"
                >
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Jam Kunjungan
                  </span>
                  <span className="text-base font-semibold text-moss-600">
                    {workshop.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Peta: iframe bila URL embed, placeholder bila tidak */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            {isEmbeddable ? (
              <iframe
                src={workshop.mapEmbedUrl}
                title={`Peta lokasi bengkel ${workshop.name} di ${workshop.address}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-80 w-full border-0 sm:h-96 lg:h-[420px]"
              />
            ) : (
              <SafeImage
                src="/images/gallery/map-placeholder.webp"
                alt={`Peta lokasi bengkel ${workshop.name} di ${workshop.address}`}
                width={800}
                height={500}
                className="h-80 w-full object-cover sm:h-96 lg:h-[420px]"
                fallbackLabel="Peta lokasi bengkel"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
