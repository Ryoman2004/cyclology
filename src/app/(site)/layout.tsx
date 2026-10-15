import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

/**
 * Layout untuk halaman situs (Navbar penuh + Footer + tombol WhatsApp melayang).
 * Dipakai seluruh halaman kecuali landing page kampanye.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}