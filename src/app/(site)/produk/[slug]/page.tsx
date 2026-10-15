import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Leaf,
  MessageCircle,
  Package,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatKg, formatRupiah } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductTabs } from "@/components/product/ProductTabs";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: `${product.name} — ${siteConfig.name}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — ${siteConfig.name}`,
      description: product.shortDescription,
      url: `${siteConfig.url}/produk/${product.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const categoryHref = `/produk?kategori=${product.category}`;

  const waMessage = [
    "Halo Cyclology, saya tertarik dengan produk berikut:",
    `Produk: ${product.name}`,
    `Harga: ${formatRupiah(product.price)}`,
    `Link: ${siteConfig.url}/produk/${product.slug}`,
    "Apakah masih tersedia?",
  ].join("\n");

  const similarProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `${siteConfig.url}${product.image}`,
    url: `${siteConfig.url}/produk/${product.slug}`,
    material: product.material,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "IDR",
      availability:
        product.stock === "tersedia"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      url: `${siteConfig.url}/produk/${product.slug}`,
    },
  };

  const specItems = [
    {
      icon: Package,
      label: "Bahan asal",
      value: product.material,
    },
    {
      icon: Leaf,
      label: "Dampak lingkungan",
      value: `${formatKg(product.impactKg)} kg limbah diselamatkan dari TPA`,
    },
  ];

  const trustChips = [
    { icon: MessageCircle, label: "Konsultasi desain & jahitan" },
    { icon: Truck, label: "Siap kirim ke seluruh Indonesia" },
    { icon: PackageCheck, label: "QC kualitas sebelum dikirim" },
  ];

  return (
    <main className="flex-1">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb + kembali */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Breadcrumb
              items={[
                { label: "Produk", href: "/produk" },
                ...(category ? [{ label: category.name, href: categoryHref }] : []),
                { label: product.name },
              ]}
            />
            <Link
              href="/produk"
              className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-moss-600 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Kembali ke Katalog Produk
            </Link>
          </div>

          {/* Galeri + info */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery product={product} />

            <div className="flex flex-col items-start gap-5">
              {/* Label kategori */}
              {category && (
                <Link
                  href={categoryHref}
                  className="text-xs font-semibold uppercase tracking-wider text-ink-muted transition-colors hover:text-moss-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded"
                >
                  {category.name}
                </Link>
              )}

              <h1 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              <p className="text-3xl font-bold tracking-tight text-moss-600">
                {formatRupiah(product.price)}
              </p>

              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {product.shortDescription}
              </p>

              {/* Kartu spesifikasi */}
              <div className="w-full rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base font-semibold text-moss-600">
                    Spesifikasi Material &amp; Dampak
                  </h2>
                  <Badge
                    variant={
                      product.stock === "tersedia" ? "sage" : "terracotta"
                    }
                  >
                    {product.stock === "tersedia"
                      ? "Stok Tersedia"
                      : "Stok Terbatas"}
                  </Badge>
                </div>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {specItems.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-50"
                        aria-hidden="true"
                      >
                        <Icon
                          className="h-4 w-4 text-moss-600"
                          strokeWidth={1.75}
                        />
                      </span>
                      <div className="flex flex-col">
                        <dt className="text-xs text-ink-muted">{label}</dt>
                        <dd className="text-sm font-semibold text-ink">
                          {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-50"
                      aria-hidden="true"
                    >
                      <ShieldCheck
                        className="h-4 w-4 text-moss-600"
                        strokeWidth={1.75}
                      />
                    </span>
                    <div className="flex flex-col">
                      <dt className="text-xs text-ink-muted">Ketersediaan</dt>
                      <dd className="text-sm font-semibold text-ink">
                        {product.stock === "tersedia"
                          ? "Tersedia"
                          : "Terbatas — segera hubungi admin"}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Panel pemesanan WhatsApp */}
              <div className="w-full rounded-2xl border border-line bg-sage-50 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-base font-semibold text-moss-600">
                    Pesan Melalui Percakapan Langsung
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                    <span
                      className="h-2 w-2 rounded-full bg-moss-600"
                      aria-hidden="true"
                    />
                    Admin aktif ({siteConfig.serviceHours})
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-line bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-terracotta-700">
                    Format pesan otomatis:
                  </p>
                  <p className="mt-1.5 text-sm italic leading-relaxed text-ink-muted">
                    &ldquo;{waMessage.split("\n").join(" ")}&rdquo;
                  </p>
                </div>

                <Button
                  variant="whatsapp"
                  href={buildWhatsAppLink(waMessage)}
                  size="lg"
                  className="mt-5 w-full"
                >
                  Pesan via WhatsApp
                </Button>

                <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                  Pesanan dikonfirmasi langsung oleh admin kami.
                </p>
              </div>

              {/* Chip kepercayaan */}
              <ul className="flex flex-wrap gap-2 pt-1">
                {trustChips.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-medium text-ink-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-moss-600" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Deskripsi & Perawatan */}
      <section className="border-t border-line py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ProductTabs
            description={product.description}
            material={product.material}
            care={product.care}
          />
        </div>
      </section>

      {/* Produk serupa — judul rata kiri seperti desain */}
      {similarProducts.length > 0 && (
        <section className="border-t border-line bg-sage-50 py-12 sm:py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Katalog Terkait
              </span>
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-moss-600 sm:text-3xl">
                Produk Serupa yang Mungkin Kamu Suka
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Pilihan karya upcycle seirama dari material daur ulang
                berkualitas tinggi.
              </p>
            </div>

            <ProductGrid products={similarProducts} className="w-full" />

            <div className="flex justify-center pt-2">
              <Button variant="outline" href="/produk">
                Lihat Semua Koleksi
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
