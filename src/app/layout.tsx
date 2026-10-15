import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/brand/logo.png", type: "image/png", sizes: "500x500" },
    ],
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
