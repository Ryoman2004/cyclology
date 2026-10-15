import React from "react";
import { MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Navbar minimal untuk landing page kampanye (SPEC 7.7).
 * Hanya logo + satu tombol WhatsApp, tanpa tautan menu.
 * Digunakan oleh route group (kampanye).
 */
export function NavbarMinimal() {
  const waUrl = buildWhatsAppLink(
    "Halo Cyclology, saya ingin mengambil Paket Hemat Tanpa Plastik."
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-cream">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <Button variant="whatsapp" href={waUrl} icon={<MessageCircle className="h-4 w-4 shrink-0" />}>
          Pesan via WhatsApp
        </Button>
      </div>
    </header>
  );
}