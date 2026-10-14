"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const waUrl = buildWhatsAppLink(
    "Halo Cyclology, saya ingin bertanya seputar produk daur ulang."
  );

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi admin Cyclology via WhatsApp"
      className="fixed bottom-6 right-5 sm:right-8 z-50 flex items-center gap-2 rounded-full bg-moss-600 px-4 py-3 text-white shadow-soft transition-all duration-200 hover:bg-moss-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-xs sm:text-sm font-semibold tracking-wide">
        WhatsApp
      </span>
    </a>
  );
}
