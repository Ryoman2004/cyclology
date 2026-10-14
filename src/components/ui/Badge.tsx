import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "terracotta" | "neutral" | "sage";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Badge({
  variant = "terracotta",
  size = "sm",
  icon,
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors select-none";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  }[size];

  const variantStyles = {
    terracotta: "bg-terracotta-100 text-terracotta-700",
    neutral: "bg-sage-50 text-moss-600 border border-line",
    sage: "bg-sage-200 text-moss-700",
  }[variant];

  return (
    <span
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
