import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { ShoppingBag } from "lucide-react";

export function CatalogSection() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="katalog" className="bg-sage-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Produk Katalog"
          subtitle="Pilihan produk upcycle favorit yang siap menemani keseharian sadar lingkunganmu."
        />

        <ProductGrid products={featuredProducts} className="w-full" />

        <div className="flex justify-center pt-2">
          <Button variant="outline" href="/produk" icon={<ShoppingBag className="h-4 w-4" />}>
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  );
}
