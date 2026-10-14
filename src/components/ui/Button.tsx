import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "min-h-[38px] px-4 py-1.5 text-xs",
    md: "min-h-[44px] px-6 py-2.5 text-xs sm:text-sm",
    lg: "min-h-[48px] px-8 py-3 text-sm sm:text-base",
  }[size];

  const variantStyles = {
    primary: "bg-moss-600 text-white hover:bg-moss-700 active:bg-moss-900",
    outline:
      "border border-moss-600 text-moss-600 bg-transparent hover:bg-sage-50 active:bg-sage-200",
    whatsapp: "bg-moss-600 text-white hover:bg-moss-700 active:bg-moss-900",
  }[variant];

  const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  const content = (
    <>
      {variant === "whatsapp" && (icon || <MessageCircle className="w-4 h-4 shrink-0" />)}
      {variant !== "whatsapp" && icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
