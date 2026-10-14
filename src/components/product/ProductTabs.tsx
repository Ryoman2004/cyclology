"use client";

import React, { useState } from "react";

export interface ProductTabsProps {
  description: string;
  material: string;
  care: string;
}

type TabId = "deskripsi" | "perawatan";

const tabs: { id: TabId; label: string }[] = [
  { id: "deskripsi", label: "Deskripsi Lengkap" },
  { id: "perawatan", label: "Bahan & Perawatan" },
];

export function ProductTabs({ description, material, care }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("deskripsi");

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Informasi produk"
        className="flex flex-wrap gap-3"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-10 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 sm:text-sm ${
                isActive
                  ? "bg-moss-600 text-white"
                  : "border border-line bg-white text-ink hover:bg-sage-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Panel aktif */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
      >
        {activeTab === "deskripsi" ? (
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
            {description}
          </p>
        ) : (
          <dl className="flex flex-col gap-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Bahan asal
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                {material}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">
                Tips perawatan
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                {care}
              </dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}
