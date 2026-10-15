import React from "react";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { BookOpen } from "lucide-react";

export function BlogPreview() {
  const latestPosts = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="border-t border-line bg-sage-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kabar & Inspirasi Hijau"
          subtitle="Tips gaya hidup minim sampah dan cerita di balik karya upcycle."
        />

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline" href="/blog" icon={<BookOpen className="h-4 w-4" />}>
            Baca Semua Artikel
          </Button>
        </div>
      </div>
    </section>
  );
}
