import React from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./Badge";
import { SafeImage } from "./SafeImage";
import { formatDate } from "@/lib/format";
import type { Post } from "@/data/posts";

export interface BlogCardProps {
  post: Post;
  className?: string;
}

const categoryVariant: Record<Post["category"], "sage" | "neutral" | "terracotta"> = {
  Tips: "sage",
  Edukasi: "neutral",
  Cerita: "terracotta",
};

export function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-hover md:p-5 ${className}`.trim()}
    >
      {/* Gambar 16:10 dengan chip kategori di sudut kiri atas */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-sage-50">
        <SafeImage
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          fallbackLabel={post.title}
        />
        <div className="absolute left-3 top-3">
          <Badge variant={categoryVariant[post.category]} className="shadow-soft">
            {post.category}
          </Badge>
        </div>
      </div>

      <h3 className="mt-4 line-clamp-2 text-base font-semibold leading-snug text-moss-600">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
        {post.excerpt}
      </p>

      <p className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-4 text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readMinutes} menit baca
        </span>
      </p>
    </article>
  );
}
