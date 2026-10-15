import React from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

export interface PageHeroProps {
  /** Label kecil di atas judul (uppercase). */
  eyebrow?: string;
  /** Judul besar; aksen Lora dibuat di dalam (lihat DESIGN_SYSTEM 2). */
  title: React.ReactNode;
  /** Paragraf singkat di bawah judul. */
  description?: React.ReactNode;
  /** Path foto latar (file lokal di /public/images). */
  image: string;
  /** Breadcrumb opsional di atas judul. */
  breadcrumb?: BreadcrumbItem[];
  /** Tombol / aksi utama. */
  actions?: React.ReactNode;
  /** Konten sisi kanan (kartu, kolase foto, statistik). */
  aside?: React.ReactNode;
  /** Chip kecil di bawah aksi. */
  chips?: React.ReactNode;
  /** Opasitas foto latar. Default 20% (mobile sedikit lebih rendah). */
  intensity?: "soft" | "normal";
  /**
   * "light" = hero krem (default, halaman pada umumnya).
   * "dark"   = hero gelap: teks putih di atas foto workshop + overlay moss-900.
   */
  tone?: "light" | "dark";
}

/**
 * Hero halaman dengan foto latar + overlay warna solid (tanpa gradient).
 * Satu foto `priority` per halaman; foto ini dekoratif (alt kosong).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  actions,
  aside,
  chips,
  intensity = "normal",
  tone = "light",
}: PageHeroProps) {
  const isDark = tone === "dark";
  const photoOpacity = isDark
    ? "opacity-100"
    : intensity === "soft"
      ? "opacity-10 sm:opacity-15"
      : "opacity-15 sm:opacity-20";

  return (
    <section
      className={`relative isolate overflow-hidden ${isDark ? "bg-moss-900" : "bg-cream"}`}
    >
      {/* Foto latar (dekoratif) */}
      <SafeImage
        src={image}
        alt=""
        fill
        sizes="100vw"
        priority
        aria-hidden="true"
        className={`object-cover ${photoOpacity}`}
      />
      {/* Overlay warna solid, bukan gradient */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-moss-900/70" : "bg-cream/70"}`}
      />

      <div className="relative mx-auto max-w-300 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {breadcrumb && (
          <Breadcrumb items={breadcrumb} className="mb-6" />
        )}

        <div
          className={
            aside
              ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              : "flex max-w-3xl flex-col items-start gap-5"
          }
        >
          <div className="flex flex-col items-start gap-5">
            {eyebrow &&
              (isDark ? (
                <span className="rounded-full bg-sage-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-moss-700">
                  {eyebrow}
                </span>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                  {eyebrow}
                </span>
              ))}

            <h1
              className={`text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
                isDark ? "text-white" : "text-moss-600"
              }`}
            >
              {title}
            </h1>

            {description && (
              <p
                className={`max-w-2xl text-base leading-relaxed ${
                  isDark ? "text-sage-200" : "text-ink-muted"
                }`}
              >
                {description}
              </p>
            )}

            {actions && (
              <div className="flex flex-wrap items-center gap-3 pt-1">{actions}</div>
            )}

            {chips && (
              <div
                className={`flex flex-wrap items-center gap-2 pt-1 text-xs font-medium ${
                  isDark ? "text-sage-200" : "text-ink-muted"
                }`}
              >
                {chips}
              </div>
            )}
          </div>

          {aside && <div className="w-full">{aside}</div>}
        </div>
      </div>
    </section>
  );
}