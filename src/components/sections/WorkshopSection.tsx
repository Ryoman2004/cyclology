import React from "react";
import { ExternalLink, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SafeImage } from "@/components/ui/SafeImage";

/** Prefix URL embed yang diizinkan (R6). */
const EMBED_PREFIXES = [
  "https://www.google.com/maps/embed",
  "https://www.openstreetmap.org/export/embed.html",
];

/** Half-website bbox OpenStreetMap, sekitar ±500 m. */
const BBOX_DELTA_LNG = 0.005;
const BBOX_DELTA_LAT = 0.0025;

function isValidEmbedUrl(url: string): boolean {
  const trimmed = url.trim();
  return EMBED_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
}

/**
 * Bagian "Bengkel Upcycle" (alamat + peta).
 * Dipakai di halaman Galeri dan Kontak agar datanya konsisten.
 *
 * Urutan peta (REVISION R6):
 * 1. `mapEmbedUrl` valid  -> iframe embed (Google Maps atau OpenStreetMap).
 * 2. `lat` + `lng` terisi -> embed OpenStreetMap (tanpa API key).
 * 3. Selain itu           -> gambar statis lewat SafeImage.
 * Tombol "Buka di Google Maps" memakai `mapsUrl`.
 */
export function WorkshopSection() {
  const { workshop } = siteConfig;

  const embedUrl = workshop.mapEmbedUrl?.trim() ?? "";
  const hasEmbed = isValidEmbedUrl(embedUrl);
  const hasCoords =
    typeof workshop.lat === "number" && typeof workshop.lng === "number";

  const openStreetMapUrl =
    hasCoords && !hasEmbed
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${
          workshop.lng! - BBOX_DELTA_LNG
        },${workshop.lat! - BBOX_DELTA_LAT},${workshop.lng! + BBOX_DELTA_LNG},${
          workshop.lat! + BBOX_DELTA_LAT
        }&layer=mapnik&marker=${workshop.lat},${workshop.lng}`
      : null;

  const mapFrameClass = "aspect-video w-full overflow-hidden rounded-2xl";

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
              Upcycle{" "}
              <span className="font-serif italic text-terracotta-700">
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

          {/* Peta: embed valid -> OSM (koordinat) -> gambar statis */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-white shadow-soft">
              {hasEmbed ? (
                <iframe
                  src={embedUrl}
                  title={`Peta lokasi bengkel ${workshop.name} di ${workshop.address}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className={`${mapFrameClass} border-0`}
                />
              ) : openStreetMapUrl ? (
                <iframe
                  src={openStreetMapUrl}
                  title={`Peta lokasi bengkel ${workshop.name} di ${workshop.address}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`${mapFrameClass} border-0`}
                />
              ) : (
                <SafeImage
                  src="/images/brand/peta-bengkel.webp"
                  alt={`Peta lokasi bengkel ${workshop.name} di ${workshop.address}`}
                  width={800}
                  height={450}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-video w-full object-cover"
                  fallbackLabel="Peta lokasi bengkel"
                />
              )}
            </div>

            {/* Alamat ringkas + tombol buka peta, tepat di bawah peta */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-muted">
                <MapPin
                  className="mr-1.5 inline h-4 w-4 align-[-3px] text-moss-600"
                  aria-hidden="true"
                />
                {workshop.address}
              </p>
              {workshop.mapsUrl && (
                <a
                  href={workshop.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-moss-600 px-5 text-xs font-semibold uppercase tracking-wider text-moss-600 transition-colors duration-150 hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
                >
                  Buka di Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}