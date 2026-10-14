import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ProductCatalog } from "@/components/product/ProductCatalog";
import { CustomOrderCTA } from "@/components/sections/CustomOrderCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Katalog Produk — ${siteConfig.name}`,
  description:
    "Jelajahi katalog produk daur ulang Cyclology: tas, fashion, dekorasi rumah, aksesoris, dan alat tulis upcycle karya pengrajin lokal.",
  openGraph: {
    title: `Katalog Produk — ${siteConfig.name}`,
    description:
      "Kurasi produk upcycle unik buatan tangan pengrajin lokal untuk keseharian sadar lingkungan.",
    url: `${siteConfig.url}/produk`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ProdukPage() {
  return (
    <main className="flex-1">
      <Suspense fallback={null}>
        <ProductCatalog />
      </Suspense>
      <CustomOrderCTA />
    </main>
  );
}
