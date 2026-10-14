import React from "react";

export interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  as: Component = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center items-center" : "text-left items-start";

  const headingSizeStyles = {
    h1: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-moss-600",
    h2: "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight text-moss-600",
    h3: "text-xl sm:text-2xl font-semibold leading-normal text-moss-600",
  }[Component];

  return (
    <div className={`flex flex-col gap-2.5 max-w-2xl ${alignStyles} ${className}`.trim()}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
          {label}
        </span>
      )}
      <Component className={headingSizeStyles}>{title}</Component>
      {subtitle && (
        <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
