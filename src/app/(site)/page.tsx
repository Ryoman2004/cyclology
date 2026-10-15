import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { StorySection } from "@/components/sections/StorySection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { Leaf, MessageCircle, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { heroImages } from "@/data/heroes";

export default function Home() {
  return (
    <main className="flex-1">
<PageHero
        tone="dark"
        eyebrow="Produk Daur Ulang Lokal"
        title={
          <>
            Barang bekas,{" "}
            <span className="font-serif italic text-sage-200">cerita baru.</span>
          </>
        }
        description="Koleksi kurasi aksesoris, busana perca, dan perlengkapan rumah daur ulang karya pengrajin Indonesia. Mengurangi jejak sampah dengan sentuhan estetika mindful."
        image={heroImages.home.src}
        actions={
          <>
            <Button
              variant="light"
              href="/produk"
              icon={<ShoppingBag className="h-4 w-4" />}
            >
              Belanja Sekarang
            </Button>
            <Button
              variant="ghost"
              href="/tentang"
              icon={<Leaf className="h-4 w-4" />}
            >
              Kenali Cyclology
            </Button>
          </>
        }
        chips={
          <>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5 text-sage-200" aria-hidden="true" />
              Pesan langsung via WhatsApp
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>
              {products.length} produk &middot; {categories.length} kategori
            </span>
          </>
        }
        aside={
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/60 bg-sage-50 shadow-soft">
            <SafeImage
              src={heroImages.homeProduct.src}
              alt={heroImages.homeProduct.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              fallbackLabel="Karya Upcycle Cyclology"
            />
            <div className="absolute bottom-4 left-4 z-10">
              <Badge
                variant="terracotta"
                icon={<Leaf className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                100% Karya Upcycle
              </Badge>
            </div>
          </div>
        }
      />

      <FadeIn>
        <ValueStrip />
      </FadeIn>

      <FadeIn>
        <CatalogSection />
      </FadeIn>

      <FadeIn>
        <ImpactBand />
      </FadeIn>

      <FadeIn>
        <StorySection />
      </FadeIn>

      <FadeIn>
        <BlogPreview />
      </FadeIn>

      <FadeIn>
        <CTABanner />
      </FadeIn>
    </main>
  );
}
