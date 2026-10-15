import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

// Ikon media sosial SVG bersih & tajam
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-moss-900 text-cream">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info (2 cols on lg) */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg p-1 -ml-1 w-fit"
            >
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="Logo Cyclology"
                  fill
                  sizes="32px"
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-sage-200 max-w-sm">
              {siteConfig.description} Setiap karya buatan tangan pengrajin lokal
              memberi napas baru bagi bumi dan cerita bermakna untuk keseharian Anda.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Cyclology"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-moss-700 text-cream transition-colors hover:bg-sage-500 hover:text-moss-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.tiktok && (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Cyclology"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-moss-700 text-cream transition-colors hover:bg-sage-500 hover:text-moss-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Cyclology"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-moss-700 text-cream transition-colors hover:bg-sage-500 hover:text-moss-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Cyclology"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-moss-700 text-cream transition-colors hover:bg-sage-500 hover:text-moss-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  <YouTubeIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Nav 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-200">
              Navigasi Cepat
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/90">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Kisah Pengrajin
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Galeri & Proses
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Tanya Jawab (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Nav 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-200">
              Katalog & Inspirasi
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/90">
              <li>
                <Link
                  href="/produk"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Blog Inspirasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Cara Pemesanan WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Inisiatif Hijau */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sage-200">
              Inisiatif Hijau
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/90">
              <li>
                <Link
                  href="/dampak"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Dampak Lingkungan (Eco-Impact)
                </Link>
              </li>
              <li>
                <Link
                  href="/kampanye/bulan-tanpa-plastik"
                  className="transition-colors hover:text-sage-200 focus-visible:underline"
                >
                  Kampanye Bulan Tanpa Plastik
                </Link>
              </li>
              <li className="pt-2 text-xs text-sage-200/80">
                Jam Layanan: <br />
                {siteConfig.serviceHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-moss-700 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-sage-200">
          <p>
            © {currentYear} {siteConfig.name}. Hak Cipta Dilindungi. Dibuat dengan cinta untuk bumi Indonesia.
          </p>
          <p className="font-medium tracking-wide text-cream">
            Upcycled in Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
