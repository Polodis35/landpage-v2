"use client";

// Services — 12-col bento grid, tutarlı yükseklik, her hizmete özgü SVG şema.

import { useState } from "react";
import { Reveal } from "./Reveal";
import { services } from "@/lib/content";
import { serviceIconMap } from "./ServiceIcons";

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="hizmetler"
      className="section-pad relative border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section başlık */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <div className="font-mono text-[0.75rem] tracking-mono uppercase text-accent mb-4 flex items-center gap-3">
                <span className="block w-8 h-px bg-accent" />
                02 — Hizmetler
              </div>
              <h2 className="font-display text-display-lg max-w-[720px]">
                İşletmenizi <span className="italic font-medium text-accent">geleceğe</span>{" "}
                taşıyan çözümler.
              </h2>
            </div>
            <p className="text-muted max-w-[360px] text-[0.95rem] leading-relaxed">
              Yazılımdan yapay zekaya, otomasyondan danışmanlığa — uçtan uca
              dijital çözümler.
            </p>
          </div>
        </Reveal>

        {/* 12-col bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[1fr]">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap];
            const isHovered = hoveredId === service.id;

            // Span pattern: ilk kart büyük, diğerleri eşit
            // Desktop: 6+6+6+6+6+6 → ama görsel olarak ilk kart geniş
            // Alternatif: 8+4, 6+6, 4+4+4 ...
            const spanClasses = [
              "lg:col-span-7 lg:row-span-2", // Yazılım — büyük
              "lg:col-span-5", // Web
              "lg:col-span-5", // Veri
              "lg:col-span-5", // Otomasyon
              "lg:col-span-6", // AI
              "lg:col-span-6", // Danışmanlık
            ];

            return (
              <Reveal
                key={service.id}
                delay={((i % 3) + 1) * 100 as 100 | 200 | 300}
                className={`${spanClasses[i]} h-full`}
              >
                <article
                  className={`group relative h-full min-h-[320px] p-6 lg:p-8 rounded-2xl border bg-surface overflow-hidden cursor-pointer transition-all duration-500 ease-out-soft flex flex-col ${
                    isHovered
                      ? "border-border-accent-strong -translate-y-1 shadow-[0_12px_32px_rgba(147,201,60,0.12)]"
                      : "border-border"
                  }`}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(service.id)}
                  onBlur={() => setHoveredId(null)}
                  tabIndex={0}
                >
                  {/* Hover glow — cursor tracking yerine basit radial */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(147,201,60,0.08), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* İkon container */}
                  <div
                    className={`relative w-14 h-14 rounded-xl grid place-items-center mb-6 transition-all duration-400 ${
                      isHovered
                        ? "bg-accent text-bg shadow-[0_0_32px_rgba(147,201,60,0.45)]"
                        : "bg-accent/[0.08] text-accent border border-border-accent"
                    }`}
                  >
                    <Icon hovered={isHovered} />
                  </div>

                  {/* Başlık */}
                  <h3 className="font-display font-bold text-[1.5rem] leading-[1.15] tracking-tight mb-3 text-text">
                    {service.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-muted text-[0.95rem] leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  {/* Link — hover'da gap artar */}
                  <span className="inline-flex items-center gap-2 mt-6 font-mono text-[0.75rem] tracking-mono uppercase text-accent transition-all duration-300 group-hover:gap-3">
                    Detaylar
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>

                  {/* Span bilgisi */}
                  <span className="absolute top-4 right-4 font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    0{i + 1}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}