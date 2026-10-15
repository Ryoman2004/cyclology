import React from "react";
import { NavbarMinimal } from "@/components/layout/NavbarMinimal";

/**
 * Layout landing page Kampagne: hanya NavbarMinimal (SPEC 7.7).
 * Tanpa Footer penuh dan tanpa tombol WhatsApp melayang.
 */
export default function KampanyeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarMinimal />
      <div className="flex flex-1 flex-col">{children}</div>
    </>
  );
}