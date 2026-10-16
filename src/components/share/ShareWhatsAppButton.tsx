"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppShareLink } from "@/lib/whatsapp";
import { Button, type ButtonProps } from "@/components/ui/Button";

interface ShareWhatsAppButtonProps {
  /** Path halaman yang dibagikan, mis. "/blog/judul-artikel". */
  path: string;
  /** Teks ajakan sebelum URL, mis. "Baca artikel ini di Cyclology: ...". */
  text: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Tombol bagikan ke WhatsApp tanpa nomor tujuan: penerima dipilih pengguna.
 * URL diambil dari domain yang sedang dipakai (window.location.origin) saat
 * klik, dengan cadangan siteConfig.url bila dijalankan di luar browser.
 */
export function ShareWhatsAppButton({
  path,
  text,
  variant = "whatsapp",
  size = "md",
  className = "",
  icon,
  children,
}: ShareWhatsAppButtonProps) {
  const handleClick = () => {
    const origin =
      typeof window === "undefined" ? "" : window.location.origin;
    const url = `${origin || siteConfig.url}${path}`;
    window.open(
      buildWhatsAppShareLink(`${text}\n${url}`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      icon={icon}
      type="button"
      onClick={handleClick}
      aria-label={`${typeof children === "string" ? children : "Bagikan"} lewat WhatsApp di tab baru`}
    >
      {children}
    </Button>
  );
}