import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export interface BrandLogoProps {
  /** Ukuran ikon daun dalam px. */
  iconSize?: number;
  /** Ukuran wordmark (class Tailwind untuk ukuran teks). */
  wordmarkClassName?: string;
}

/**
 * Logo bersama: ikon daun + wordmark Cyclology.
 * Dipakai Navbar utama dan NavbarMinimal agar keduanya identik (REVISION R3.1).
 */
export function BrandLogo({
  iconSize = 36,
  wordmarkClassName = "text-xl sm:text-2xl",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
    >
      <div
        className="relative shrink-0"
        style={{ height: iconSize, width: iconSize }}
      >
        <Image
          src="/brand/logo.svg"
          alt="Logo Cyclology"
          fill
          sizes={`${iconSize}px`}
          className="object-contain"
        />
      </div>
      <span
        className={`${wordmarkClassName} font-sans font-bold tracking-tight text-moss-600`}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}