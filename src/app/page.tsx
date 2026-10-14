import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { StorySection } from "@/components/sections/StorySection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

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
