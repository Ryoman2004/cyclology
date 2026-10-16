import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SafeImage } from "@/components/ui/SafeImage";
import { BlogCard } from "@/components/ui/BlogCard";
import { ShareWhatsAppButton } from "@/components/share/ShareWhatsAppButton";
import { siteConfig } from "@/config/site";
import { posts, type Post } from "@/data/posts";
import { formatDate } from "@/lib/format";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const categoryVariant: Record<Post["category"], "sage" | "neutral" | "terracotta"> = {
  Tips: "sage",
  Edukasi: "neutral",
  Cerita: "terracotta",
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const shareText = `Baca artikel ini di ${siteConfig.name}: ${post.title}`;

  // 3 artikel terkait: kategori sama lebih dulu, lalu sisanya.
  const relatedPosts = [
    ...posts.filter((p) => p.category === post.category && p.slug !== post.slug),
    ...posts.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    url: articleUrl,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <article className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb + kembali */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Breadcrumb
              items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-moss-600 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Kembali ke Blog
            </Link>
          </div>

          {/* Header artikel */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={categoryVariant[post.category]}>
                {post.category}
              </Badge>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readMinutes} menit baca
              </span>
            </div>

            <h1 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl lg:text-4xl">
              {post.title}
            </h1>

            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {post.excerpt}
            </p>
          </header>

          {/* Gambar utama */}
          <div className="relative mt-8 aspect-16/10 w-full overflow-hidden rounded-2xl bg-sage-50">
            <SafeImage
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
              fallbackLabel={post.title}
            />
          </div>

          {/* Isi artikel */}
          <div className="mt-8 flex flex-col gap-5">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bagikan */}
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold text-moss-600">
                Bagikan Artikel Ini
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted">
                Bantu sebarkan inspirasi hijau ke lebih banyak orang.
              </p>
            </div>
            <ShareWhatsAppButton
              path={`/blog/${post.slug}`}
              text={shareText}
              icon={<Share2 className="h-4 w-4" />}
            >
              Bagikan via WhatsApp
            </ShareWhatsAppButton>
          </div>
        </div>
      </article>

      {/* Artikel terkait */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-line bg-sage-50 py-12 sm:py-16">
          <div className="mx-auto flex max-w-300 flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Baca Juga
              </span>
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl">
                Artikel Terkait
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {relatedPosts.map((related) => (
                <FadeIn key={related.slug}>
                  <BlogCard post={related} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA ke katalog */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-moss-600 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              Lihat Produk di Balik Cerita Ini
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-sage-200 sm:text-base">
              Setiap produk kami dibuat dari material daur ulang oleh
              pengrajin lokal. Jelajahi katalognya sekarang.
            </p>
            <Button variant="light" href="/produk" size="lg">
              Lihat Katalog Produk
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
