"use client";

import React, { useState } from "react";
import { Leaf } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatKg } from "@/lib/format";
import type { Product } from "@/data/products";

export interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.gallery?.length
    ? product.gallery
    : [product.image];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-sage-50">
        <SafeImage
          src={images[activeIndex]}
          alt={`${product.name} — foto ${activeIndex + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          fallbackLabel={product.name}
        />
        {/* Badge "100% Upcycled" pojok kiri atas */}
        <div className="absolute left-3 top-3 z-10">
          <Badge variant="terracotta">100% Upcycled</Badge>
        </div>
        {/* Chip dampak pojok kanan bawah */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-moss-600 shadow-soft">
            <Leaf className="h-3.5 w-3.5 text-sage-500" aria-hidden="true" />
            ≈ {formatKg(product.impactKg)} kg limbah diselamatkan
          </span>
        </div>
      </div>

      {images.length > 1 && (
        <ul className="grid grid-cols-4 gap-3">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={image}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Tampilkan foto ${index + 1} dari ${images.length}`}
                  aria-current={isActive}
                  className={`relative aspect-square w-full overflow-hidden rounded-xl border bg-sage-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-moss-600 ring-2 ring-sage-500"
                      : "border-line hover:border-sage-500"
                  }`}
                >
                  <SafeImage
                    src={image}
                    alt={`Thumbnail ${index + 1} — ${product.name}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                    fallbackLabel={product.name}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
