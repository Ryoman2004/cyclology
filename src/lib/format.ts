/**
 * Format angka ke format mata uang Rupiah tanpa desimal.
 * Contoh: 85000 -> "Rp85.000"
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\s+/g, "");
}

/**
 * Format angka kilogram ke gaya Indonesia (koma desimal).
 * Contoh: 0.6 -> "0,6"; 2 -> "2,0"; 0.05 -> "0,05"
 */
export function formatKg(kg: number): string {
  return kg.toLocaleString("id-ID", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
}

/**
 * Format tanggal ISO ke format tanggal Bahasa Indonesia yang rapi.
 * Contoh: "2025-05-14" -> "14 Mei 2025"
 */
export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return dateStr;
    }
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return dateStr;
  }
}
