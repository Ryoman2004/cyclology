import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogCollabCTA } from "@/components/blog/BlogCollabCTA";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/data/heroes";
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
      {/* Hero halaman Blog */}
      <PageHero
        eyebrow="Koleksi Tulisan &amp; Wawasan"
        title={
          <>
            Jurnal Hijau{" "}
            <span className="font-serif italic text-terracotta-700">
              {siteConfig.name}
            </span>
          </>
        }
        description="Inspirasi, panduan daur ulang praktis, dan kisah bermakna di balik gaya hidup minim sampah bersama pengrajin lokal Nusantara."
        image={heroImages.blog.src}
        breadcrumb={[{ label: "Blog" }]}
        aside={
          <div className="flex w-full max-w-sm shrink-0 divide-x divide-line rounded-2xl border border-line bg-white px-6 py-4 shadow-soft">
            <div className="flex flex-1 flex-col items-center gap-1 px-5">
              <span className="text-2xl font-bold text-moss-600">
                {articleCount}
              </span>
              <span className="text-xs text-ink-muted">Artikel Terbit</span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1 px-5">
              <span className="text-2xl font-bold text-moss-600">
                {categoryCount}
              </span>
              <span className="text-xs text-ink-muted">Kategori Topik</span>
            </div>
          </div>
        }
      />

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
      <FadeIn>      </FadeIn>

      {/* CTA kolaborasi */}
      <FadeIn>
        <BlogCollabCTA />
      </FadeIn>
    </main>
  );
}
