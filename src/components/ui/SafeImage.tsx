"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Leaf } from "lucide-react";

export interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackLabel?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackLabel,
  className = "",
  fill,
  width,
  height,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  // Jika src kosong atau terjadi error pemuatan
  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-sage-50 text-sage-500 select-none overflow-hidden ${
          fill ? "absolute inset-0 w-full h-full" : ""
        } ${className}`.trim()}
        style={{
          width: fill ? undefined : width,
          height: fill ? undefined : height,
        }}
        role="img"
        aria-label={alt || "Gambar Cyclology"}
      >
        <Leaf className="w-8 h-8 stroke-[1.5] text-sage-500 mb-1" />
        <span className="text-[11px] font-medium text-ink-muted text-center px-2 line-clamp-1">
          {fallbackLabel || alt || "Cyclology Upcycle"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
