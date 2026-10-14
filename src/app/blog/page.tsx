import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogLiteracyBanner } from "@/components/blog/BlogLiteracyBanner";
import { BlogCollabCTA } from "@/components/blog/BlogCollabCTA";
import { siteConfig } from "@/config/site";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description:
    "Inspirasi, panduan daur ulang praktis, dan kisah bermakna di balik gaya hidup minim sampah bersama pengrajin lokal Nusantara.",
  openGraph: {
    title: `Blog — ${siteConfig.name}`,
    description:
      "Panduan daur ulang praktis dan kisah bermakna di balik gaya hidup minim sampah.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  // Angka faktual dari data (bukan statistik karangan).
  const articleCount = posts.length;
  const categoryCount = new Set(posts.map((p) => p.category)).size;

  return (
    <main className="flex-1">
      {/* Header halaman Blog */}
      <section className="border-b border-line py-8 sm:py-12">
        <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} className="mb-6" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-terracotta-500"
                  aria-hidden="true"
                />
                Koleksi Tulisan &amp; Wawasan
              </span>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-moss-600 sm:text-4xl lg:text-5xl">
                Jurnal Hijau{" "}
                <span className="font-serif italic text-moss-700">
                  {siteConfig.name}
                </span>
              </h1>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Inspirasi, panduan daur ulang praktis, dan kisah bermakna di
                balik gaya hidup minim sampah bersama pengrajin lokal
                Nusantara.
              </p>
            </div>

            {/* Dua angka faktual dari data, bukan klaim "34+"/"100%" */}
            <div className="flex shrink-0 divide-x divide-line rounded-2xl border border-line bg-white px-6 py-4 shadow-soft">
              <div className="flex flex-col items-center gap-1 px-5">
                <span className="text-2xl font-bold text-moss-600">
                  {articleCount}
                </span>
                <span className="text-xs text-ink-muted">Artikel Terbit</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-5">
                <span className="text-2xl font-bold text-moss-600">
                  {categoryCount}
                </span>
                <span className="text-xs text-ink-muted">Kategori Topik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel unggulan */}
      {featured && (
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <FeaturedArticle post={featured} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Filter + grid artikel */}
      <FadeIn>
        <BlogFilter posts={rest} />
      </FadeIn>

      {/* Banner literasi */}
      <FadeIn>
        <BlogLiteracyBanner />
      </FadeIn>

      {/* CTA kolaborasi */}
      <FadeIn>
        <BlogCollabCTA />
      </FadeIn>
    </main>
  );
}
