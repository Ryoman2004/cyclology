"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Search, SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CategoryStrip, type CategoryStripSlug } from "@/components/product/CategoryStrip";
import { ProductGrid } from "@/components/product/ProductGrid";
import { categories, type CategorySlug } from "@/data/categories";
import { products } from "@/data/products";

const PAGE_SIZE = 12;

type SortOption = "terbaru" | "harga-asc" | "harga-desc";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "terbaru", label: "Terbaru" },
  { value: "harga-asc", label: "Harga terendah" },
  { value: "harga-desc", label: "Harga tertinggi" },
];

function isCategorySlug(value: string | null): value is CategorySlug {
  return categories.some((c) => c.slug === value);
}

export function ProductCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const kategoriParam = searchParams.get("kategori");

  const activeSlug: CategoryStripSlug =
    isCategorySlug(kategoriParam) ? kategoriParam : "semua";

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("terbaru");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Debounce ringan untuk pencarian
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeSlug !== "semua") {
      result = result.filter((p) => p.category === activeSlug);
    }

    const q = debouncedQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    if (sort === "harga-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "harga-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else {
      // "Terbaru": produk unggulan (featured) diurutkan lebih dahulu
      result = [...result].sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
      );
    }

    return result;
  }, [activeSlug, debouncedQuery, sort]);

  // Reset paginasi saat filter berubah (pola render-adjust, tanpa effect)
  const [filterKey, setFilterKey] = useState(
    `${activeSlug}|${debouncedQuery}|${sort}`
  );
  const currentFilterKey = `${activeSlug}|${debouncedQuery}|${sort}`;
  if (filterKey !== currentFilterKey) {
    setFilterKey(currentFilterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const totalFiltered = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / PAGE_SIZE));
  const currentPage = Math.min(
    Math.ceil(visibleCount / PAGE_SIZE),
    totalPages
  );
  const hasMore = visibleCount < totalFiltered;

  const handleReset = () => {
    setQuery("");
    setSort("terbaru");
    router.push("/produk");
  };

  return (
    <>
      {/* Header katalog */}
      <section className="bg-sage-50 py-8 sm:py-12">
        <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Produk" }]} className="mb-4" />
          <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Kurasi Ramah Lingkungan
              </span>
              <h1 className="text-2xl font-bold leading-snug tracking-tight text-moss-600 sm:text-3xl lg:text-4xl">
                Katalog Semua Produk
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base lg:text-right">
              Temukan kurasi karya{" "}
              <span className="font-serif italic text-moss-700">upcycle</span>{" "}
              unik buatan tangan pengrajin lokal untuk keseharian sadar
              lingkunganmu.
            </p>
          </div>
        </div>
      </section>

      {/* Strip kategori + toolbar + grid */}
      <section className="bg-sage-50 py-10 sm:py-14">
        <div className="mx-auto flex max-w-300 flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <CategoryStrip showAll activeSlug={activeSlug} />

          {/* Search, hitungan hasil, dan sort */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <label htmlFor="cari-produk" className="sr-only">
                Cari produk
              </label>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                aria-hidden="true"
              />
              <input
                id="cari-produk"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk daur ulang..."
                className="min-h-11 w-full rounded-xl border border-line bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-ink-muted focus:border-moss-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
              <p className="text-xs text-ink-muted" aria-live="polite">
                Menampilkan {Math.min(visibleCount, totalFiltered)} dari{" "}
                {totalFiltered} produk
              </p>
              <div className="relative">
                <label htmlFor="urutkan-produk" className="sr-only">
                  Urutkan produk
                </label>
                <select
                  id="urutkan-produk"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="min-h-11 appearance-none rounded-xl border border-line bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-sage-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      Urutkan: {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Hasil */}
          {totalFiltered > 0 ? (
            <>
              <ProductGrid products={visibleProducts} className="w-full" />

              <div className="flex flex-col items-center gap-3 pt-2">
                {hasMore && (
                  <Button
                    variant="outline"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    icon={<ChevronDown className="h-4 w-4" />}
                  >
                    Muat Lebih Banyak Produk
                  </Button>
                )}
                <p className="text-xs text-ink-muted">
                  Halaman {currentPage} dari {totalPages}
                </p>
              </div>
            </>
          ) : (
            /* Hasil kosong */
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white px-6 py-16 text-center shadow-soft">
              <SearchX
                className="h-10 w-10 text-sage-500"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1.5">
                <h2 className="text-base font-semibold text-moss-600">
                  Produk tidak ditemukan
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                  Coba gunakan kata kunci lain atau lihat seluruh koleksi kami
                  dengan mengatur ulang filter.
                </p>
              </div>
              <Button variant="outline" onClick={handleReset}>
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
