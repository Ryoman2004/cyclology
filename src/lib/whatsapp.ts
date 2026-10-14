import { siteConfig } from "@/config/site";

/**
 * Membangun tautan WhatsApp resmi dengan nomor dari siteConfig.
 * @param message Pesan opsional yang akan dikirim pembeli ke admin.
 * @returns Format URL https://wa.me/<nomor>?text=<encodedMessage>
 */
export function buildWhatsAppLink(message?: string): string {
  const number = siteConfig.whatsappNumber;
  if (!message || message.trim() === "") {
    return `https://wa.me/${number}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message.trim())}`;
}
