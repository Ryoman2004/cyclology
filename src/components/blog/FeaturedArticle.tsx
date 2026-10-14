import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/format";
import type { Post } from "@/data/posts";

const categoryVariant: Record<Post["category"], "sage" | "neutral" | "terracotta"> = {
  Tips: "sage",
  Edukasi: "neutral",
  Cerita: "terracotta",
};

export interface FeaturedArticleProps {
  post: Post;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-shadow duration-200 hover:shadow-soft-hover lg:grid-cols-2">
      {/* Gambar + badge artikel pilihan */}
      <div className="relative aspect-16/10 w-full lg:aspect-auto lg:h-full lg:min-h-[360px]">
        <SafeImage
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          fallbackLabel={post.title}
        />
        <div className="absolute left-4 top-4">
          <Badge
            variant="terracotta"
            icon={<BookOpen className="h-3 w-3" />}
            className="shadow-soft"
          >
            Artikel Pilihan
          </Badge>
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={categoryVariant[post.category]}>{post.category}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readMinutes} menit baca
          </span>
        </div>

        <h2 className="text-xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-2xl">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
          >
            {post.title}
          </Link>
        </h2>

        <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-200 text-xs font-semibold text-moss-700"
              aria-hidden="true"
            >
              TC
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-ink">
                Tim Kurator {siteConfig.name}
              </span>
              <time dateTime={post.date} className="text-xs text-ink-muted">
                {formatDate(post.date)}
              </time>
            </div>
          </div>
          <span className="pointer-events-none inline-flex items-center gap-2 rounded-full bg-moss-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white">
            Baca Artikel
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
