"use client";

import React, { useEffect, useRef, useState } from "react";

export interface FadeInProps {
  children: React.ReactNode;
  /** Delay dalam ms sebelum transisi dimulai (untuk efek berjenjang). */
  delay?: number;
  className?: string;
}

/**
 * Pembungkus fade-in + naik 8px saat masuk viewport (sekali saja).
 * Menghormati prefers-reduced-motion: jika aktif, konten langsung tampil.
 */
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Untuk prefers-reduced-motion, CSS sudah memaksa tampil (lihat globals.css),
    // jadi pengamat tetap aman dijalankan tanpa cabang khusus.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "fade-in--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
