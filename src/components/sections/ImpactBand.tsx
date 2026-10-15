import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  {
    value: `${siteConfig.impact.productsSold.toLocaleString("id-ID")}+`,
    label: "Produk Dibuat",
    detail: "dari limbah kain perca, denim, dan kaca",
  },
  {
    value: `${siteConfig.impact.artisans.toLocaleString("id-ID")}`,
    label: "Pengrajin Lokal",
    detail: "diberdayakan secara berkeadilan",
  },
];

export function ImpactBand() {
  return (
    <section
      aria-label="Dampak Cyclology"
      className="bg-sage-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-300 flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-5xl font-bold tracking-tight text-moss-600 sm:text-6xl">
          {siteConfig.impact.totalKgSaved.toLocaleString("id-ID")} kg
        </p>
        <p className="text-base text-ink-muted sm:text-lg">
          sampah diselamatkan bersama {siteConfig.name}
        </p>

        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-line bg-white px-6 py-5 shadow-soft"
            >
              <p className="text-2xl font-bold text-moss-600">{stat.value}</p>
              <p className="text-sm font-semibold text-ink">{stat.label}</p>
              <p className="text-xs text-ink-muted">{stat.detail}</p>
            </div>
          ))}
        </div>

        <Link
          href="/dampak"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss-600 underline-offset-4 transition-colors duration-150 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 rounded"
        >
          Lihat dampak kami
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
