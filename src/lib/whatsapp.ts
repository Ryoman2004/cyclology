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

/**
 * Membangun tautan WhatsApp TANPA nomor tujuan, dipakai untuk tombol bagikan
 * supaya pengguna sendiri yang memilih penerima. Jangan pakai untuk pemesanan.
 * @param text Pesan yang sudah memuat teks ringkasan dan URL halaman.
 * @returns Format URL https://wa.me/?text=<encodedText>
 */
export function buildWhatsAppShareLink(text: string): string {
  if (!text || text.trim() === "") {
    return "https://wa.me/";
  }
  return `https://wa.me/?text=${encodeURIComponent(text.trim())}`;
}
