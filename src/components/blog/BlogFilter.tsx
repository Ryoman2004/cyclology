"use client";

import React, { useMemo, useState } from "react";
import { BlogCard } from "@/components/ui/BlogCard";
import type { Post } from "@/data/posts";

export interface BlogFilterProps {
  posts: Post[];
}

const categories = ["Semua", "Tips", "Edukasi", "Cerita"] as const;
type Category = (typeof categories)[number];

export function BlogFilter({ posts }: BlogFilterProps) {
  const [active, setActive] = useState<Category>("Semua");

  const counts = useMemo(() => {
    const map: Record<Category, number> = {
      Semua: posts.length,
      Tips: 0,
      Edukasi: 0,
      Cerita: 0,
    };
    for (const p of posts) {
      if (p.category === "Tips") map.Tips += 1;
      else if (p.category === "Edukasi") map.Edukasi += 1;
      else if (p.category === "Cerita") map.Cerita += 1;
    }
    return map;
  }, [posts]);

  const filtered = useMemo(
    () => (active === "Semua" ? posts : posts.filter((p) => p.category === active)),
    [posts, active]
  );

  return (
    <section className="border-t border-line py-12 sm:py-16">
      <div className="mx-auto flex max-w-300 flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Header + filter chips */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl">
              Eksplorasi Topik
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              Pilih gagasan sesuai fokus minat keberlanjutan Anda
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter artikel berdasarkan kategori"
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-moss-600 bg-moss-600 text-white"
                      : "border-line bg-white text-ink-muted hover:border-sage-500 hover:text-moss-600"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[11px] leading-none ${
                      isActive ? "bg-white/20 text-white" : "bg-sage-50 text-ink-muted"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid hasil */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            aria-live="polite"
          >
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-line bg-white px-6 py-12 text-center text-sm text-ink-muted">
            Belum ada artikel pada kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
