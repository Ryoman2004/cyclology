import React from "react";
import { Recycle } from "lucide-react";

/**
 * Banner literasi sirkular di halaman Blog.
 * Teks disederhanakan: tanpa angka komunitas (klaim tak bisa dibuktikan)
 * dan tanpa tombol "Simpan Bacaan" (di luar SPEC).
 */
export function BlogLiteracyBanner() {
  return (
    <section className="border-t border-line bg-sage-50 py-12 sm:py-16">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-5 rounded-2xl bg-sage-200 px-6 py-8 sm:flex-row sm:items-center sm:gap-6 sm:px-10">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white"
            aria-hidden="true"
          >
            <Recycle className="h-5 w-5 text-moss-600" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-semibold text-moss-600 sm:text-lg">
              Inisiatif Literasi Sirkular
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Setiap pembacaan memicu kesadaran pengurangan sampah di
              lingkungan sekitar kita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
