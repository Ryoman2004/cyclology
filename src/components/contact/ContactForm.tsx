"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const subjectOptions = [
  "Tanya produk",
  "Pesan custom",
  "Kerja sama",
  "Lainnya",
] as const;

type Subject = (typeof subjectOptions)[number];

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^0-9]/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState<Subject>("Tanya produk");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const messageLength = message.length;

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const cleanName = sanitize(name);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);

    if (!cleanName) {
      next.name = "Nama wajib diisi.";
    }
    if (cleanPhone && !isValidPhone(cleanPhone)) {
      next.phone = "Nomor tidak valid. Gunakan 9-15 digit angka.";
    }
    if (!cleanMessage) {
      next.message = "Pesan wajib diisi.";
    } else if (cleanMessage.length > 500) {
      next.message = "Pesan maksimal 500 karakter.";
    }
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const cleanName = sanitize(name);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message).slice(0, 500);

    const lines = [
      `Halo ${"Cyclology"}, saya ingin menghubungi tim Anda.`,
      `Nama: ${cleanName}`,
      cleanPhone ? `Nomor WhatsApp: ${cleanPhone}` : undefined,
      `Subjek: ${subject}`,
      `Pesan: ${cleanMessage}`,
    ].filter(Boolean) as string[];

    const link = buildWhatsAppLink(lines.join("\n"));
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-white px-6 py-14 text-center shadow-soft sm:px-10">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50 text-moss-600"
          aria-hidden="true"
        >
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <div className="flex max-w-md flex-col gap-2">
          <h2 className="text-xl font-semibold text-moss-600 sm:text-2xl">
            Pesan siap dikirim
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted">
            WhatsApp sudah dibuka di tab baru dengan pesan Anda. Jika tab tidak
            terbuka otomatis, silakan kirim ulang pesan atau hubungi kami
            langsung.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setMessage("");
            setSubject("Tanya produk");
            setErrors({});
          }}
        >
          Tulis Pesan Baru
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      {/* Nama */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="text-sm font-semibold text-moss-600"
        >
          Nama <span className="text-terracotta-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="min-h-[48px] rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-ink-muted focus:border-moss-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
        />
        {errors.name && (
          <p
            id="contact-name-error"
            className="flex items-center gap-1.5 text-xs text-terracotta-700"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Nomor WhatsApp */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-phone"
          className="text-sm font-semibold text-moss-600"
        >
          Nomor WhatsApp{" "}
          <span className="font-normal text-ink-muted">(opsional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="08xxxxxxxxxx"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className="min-h-[48px] rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-ink-muted focus:border-moss-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
        />
        {errors.phone && (
          <p
            id="contact-phone-error"
            className="flex items-center gap-1.5 text-xs text-terracotta-700"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Subjek */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-subject"
          className="text-sm font-semibold text-moss-600"
        >
          Subjek <span className="text-terracotta-500">*</span>
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value as Subject)}
          className="min-h-[48px] rounded-xl border border-line bg-white px-4 text-sm text-ink focus:border-moss-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
        >
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Pesan */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-moss-600"
        >
          Pesan <span className="text-terracotta-500">*</span>
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 500))}
          placeholder="Tuliskan pesan Anda..."
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : "contact-message-count"
          }
          className="min-h-[120px] rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-moss-600 focus:outline-none focus:ring-2 focus:ring-sage-500"
        />
        <div className="flex items-center justify-between gap-3">
          {errors.message ? (
            <p
              id="contact-message-error"
              className="flex items-center gap-1.5 text-xs text-terracotta-700"
            >
              <AlertCircle
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span
            id="contact-message-count"
            className="text-xs tabular-nums text-ink-muted"
          >
            {messageLength} / 500
          </span>
        </div>
      </div>

      <Button
        type="submit"
        variant="whatsapp"
        size="lg"
        className="mt-1 w-full"
        icon={<Send className="h-4 w-4" aria-hidden="true" />}
      >
        Kirim via WhatsApp
      </Button>

      <p className="text-center text-xs leading-relaxed text-ink-muted">
        Data yang Anda isi hanya diproses di perangkat Anda dan dikirim langsung
        melalui WhatsApp.
      </p>
    </form>
  );
}
