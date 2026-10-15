import Link from "next/link";
import {
  CookingPot,
  Gem,
  LayoutGrid,
  Lamp,
  PenLine,
  Shirt,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { categories, type CategorySlug } from "@/data/categories";

export type CategoryStripSlug = CategorySlug | "semua";

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Shirt,
  Lamp,
  Gem,
  CookingPot,
  PenLine,
  LayoutGrid,
};

interface CategoryStripProps {
  /** Kategori yang ditandai aktif (opsional). */
  activeSlug?: CategoryStripSlug;
  /** Tampilkan item "Semua" di urutan pertama (halaman /produk). */
  showAll?: boolean;
  className?: string;
}

export function CategoryStrip({
  activeSlug,
  showAll = false,
  className = "",
}: CategoryStripProps) {
  const items = [
    ...(showAll
      ? [{ slug: "semua" as const, name: "Semua", icon: "LayoutGrid", href: "/produk" }]
      : []),
    ...categories.map((category) => ({
      slug: category.slug,
      name: category.name,
      icon: category.icon,
      href: `/produk?kategori=${category.slug}`,
    })),
  ];

  return (
    <nav
      aria-label="Kategori produk"
      className={`w-full ${className}`.trim()}
    >
      <ul className="flex items-start justify-start gap-1 overflow-x-auto rounded-2xl border border-line bg-white px-3 py-4 shadow-soft [scrollbar-width:none] sm:justify-between sm:gap-2 sm:px-6 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const Icon = iconMap[item.icon] ?? ShoppingBag;
          const isActive = activeSlug === item.slug;

          return (
            <li key={item.slug} className="shrink-0">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="group flex min-w-22 flex-col items-center gap-2 rounded-xl px-3 pb-1 pt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-150 ${
                    isActive ? "bg-sage-200" : "bg-sage-50 group-hover:bg-sage-200"
                  }`}
                >
                  <Icon
                    className="h-6 w-6 text-moss-600"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className={`border-b-2 pb-1 text-sm font-semibold leading-none transition-colors duration-150 ${
                    isActive
                      ? "border-moss-600 text-moss-600"
                      : "border-transparent text-ink"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
