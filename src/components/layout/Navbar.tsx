"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  Home,
  Leaf,
  ShoppingBag,
  Image as ImageIcon,
  FileText,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { BrandLogo } from "@/components/layout/BrandLogo";

export interface NavbarProps {
  minimal?: boolean;
}

const navLinks = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Produk", href: "/produk", icon: ShoppingBag },
  { name: "Tentang", href: "/tentang", icon: Leaf },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Galeri", href: "/galeri", icon: ImageIcon },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Kontak", href: "/kontak", icon: MessageSquare },
];

export function Navbar({ minimal = false }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Kunci scroll body ketika drawer mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const waUrl = buildWhatsAppLink(
    "Halo Cyclology, saya ingin berkonsultasi mengenai pemesanan produk upcycle."
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-cream transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        {!minimal && (
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors hover:text-moss-600 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 ${
                    isActive
                      ? "font-semibold text-moss-600"
                      : "text-ink-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-moss-600" />
                  )}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-moss-600 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-soft transition-colors hover:bg-moss-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Pesan via WhatsApp</span>
          </a>

          {/* Avatar admin: tautan WhatsApp (design/home.png menampilkan avatar di sisi ini) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi admin Cyclology via WhatsApp"
            className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-sage-50 text-moss-600 transition-colors duration-150 hover:bg-sage-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Mobile Hamburger Button */}
          {!minimal && (
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-moss-600 hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Navigation (Slide-in Menu) */}
      {!minimal && isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-cream p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/brand/logo.svg"
                    alt="Logo Cyclology"
                    width={28}
                    height={28}
                  />
                  <span className="text-lg font-bold text-moss-600">
                    {siteConfig.name}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Tutup menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full p-2 text-moss-600 hover:bg-sage-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="mt-6 flex flex-col gap-2" aria-label="Navigasi Seluler">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-sage-200 text-moss-600"
                          : "text-ink hover:bg-sage-50"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-moss-600" aria-hidden="true" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Info & WhatsApp Action */}
            <div className="pt-6 border-t border-line mt-6 flex flex-col gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-moss-600 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-soft transition-colors hover:bg-moss-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Pesan via WhatsApp</span>
              </a>

              <div className="rounded-xl bg-sage-50 p-4 border border-line">
                <p className="text-xs font-semibold text-moss-600">
                  {siteConfig.name} Indonesia
                </p>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Mengolah sisa materi menjadi karya fungsional penuh makna.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
