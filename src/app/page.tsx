import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-cream">
      <div className="flex flex-col items-center gap-6 max-w-lg">
        <Image
          src="/brand/logo.svg"
          alt={`Logo ${siteConfig.name}`}
          width={64}
          height={64}
          priority
        />
        <h1 className="text-4xl font-bold text-moss-600 sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-ink font-serif italic">
          &ldquo;{siteConfig.tagline}&rdquo;
        </p>
        <p className="text-sm text-ink-muted">
          {siteConfig.description}
        </p>
      </div>
    </main>
  );
}
