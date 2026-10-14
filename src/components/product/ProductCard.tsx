import Link from "next/link";
import { Leaf, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatKg, formatRupiah } from "@/lib/format";
import { categories } from "@/data/categories";
import type { Product } from "@/data/products";

const categoryNames: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.name])
);

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const badge =
    product.isNew
      ? { label: "Baru", variant: "terracotta" as const }
      : product.stock === "terbatas"
        ? { label: "Terbatas", variant: "terracotta" as const }
        : null;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-hover md:p-6">
      {/* Gambar produk */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-sage-50">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover"
          fallbackLabel={product.name}
        />
        {badge && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </div>
        )}
      </div>

      {/* Label kategori */}
      <p className="mt-4 text-xs italic text-ink-muted">
        {categoryNames[product.category] ?? product.category}
      </p>

      {/* Nama produk */}
      <h3 className="mt-1 line-clamp-2 min-h-10 text-base font-semibold leading-snug text-moss-600">
        {product.name}
      </h3>

      {/* Harga */}
      <p className="mt-1 text-base font-semibold text-moss-600">
        {formatRupiah(product.price)}
      </p>

      {/* Badge dampak */}
      <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
        <Leaf className="h-3.5 w-3.5 shrink-0 text-sage-500" aria-hidden="true" />
        {formatKg(product.impactKg)} kg limbah diselamatkan
      </p>

      {/* Tombol detail (seluruh kartu diklik lewat stretched link) */}
      <Link
        href={`/produk/${product.slug}`}
        className="mt-4 inline-flex min-h-9.5 w-full items-center justify-center gap-2 rounded-full border border-moss-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-moss-600 transition-colors duration-150 after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 group-hover:bg-sage-50"
      >
        <ShoppingBag className="h-4 w-4 shrink-0" aria-hidden="true" />
        Lihat Detail
      </Link>
    </article>
  );
}
