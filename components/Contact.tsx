"use client";

// Contact — sol: iletişim akışı şeması, sağ: form.
// Trace motifi ile uyumlu (node + çizgi).
// Sahte istatistik/harita YOK.

import { useState } from "react";
import { Reveal } from "./Reveal";
import { contactFlow } from "@/lib/content";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Form gerçek submit (backend eklenebilir)
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 600);
  }

  return (
    <section
      id="iletisim"
      className="section-pad-lg relative border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section başlık */}
        <Reveal>
          <div className="mb-16 md:mb-20">
            <div className="font-mono text-[0.75rem] tracking-mono uppercase text-accent mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-accent" />
              04 — İletişim
            </div>
            <h2 className="font-display text-display-lg max-w-[720px] mb-6">
              Projenizi{" "}
              <span className="italic font-medium text-accent">birlikte</span>{" "}
              hayata geçirelim.
            </h2>
            <p className="text-muted text-[1.05rem] leading-relaxed max-w-[520px]">
              Dijital dönüşüm yolculuğunuzda ilk adımı birlikte atalım.
              Detayları konuşmak için aşağıdaki formu doldurun — size geri
              döneriz.
            </p>
          </div>
        </Reveal>

        {/* 2 kolon: sol akış şeması, sağ form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          {/* Sol — iletişim akışı şeması */}
          <Reveal delay={100}>
            <div className="lg:sticky lg:top-32">
              <div className="border border-border rounded-2xl bg-surface overflow-hidden">
                {/* Panel başlığı */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-elevated">
                  <span className="font-mono text-[0.7rem] tracking-mono uppercase text-accent">
                    // iletişim.akışı
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    03 steps
                  </span>
                </div>

                {/* Steps — dikey */}
                <div className="relative p-6">
                  {contactFlow.map((step, i) => (
                    <div
                      key={step.id}
                      className={`relative flex gap-5 ${
                        i < contactFlow.length - 1 ? "pb-8" : ""
                      }`}
                    >
                      {/* Dikey trace çizgisi — son step hariç */}
                      {i < contactFlow.length - 1 && (
                        <div
                          className="absolute left-[15px] top-[32px] bottom-0 w-px bg-gradient-to-b from-accent/50 to-accent/10"
                          aria-hidden="true"
                        />
                      )}

                      {/* Node */}
                      <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-bg border-2 border-accent grid place-items-center font-mono text-[0.7rem] font-semibold text-accent z-10">
                        {step.id}
                      </div>

                      {/* İçerik */}
                      <div className="pt-1">
                        <h3 className="font-display text-[1.05rem] font-bold leading-tight mb-1 text-text">
                          {step.title}
                        </h3>
                        <p className="text-muted text-[0.85rem] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Panel altı */}
                <div className="px-5 py-3 border-t border-border bg-bg-elevated flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    # 03 steps · 0 wait
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    → flow.ok
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sağ — form */}
          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 border border-border-strong rounded-2xl bg-surface overflow-hidden"
              noValidate
            >
              {/* Glow köşesi */}
              <div
                className="absolute -top-1/2 -right-1/4 w-3/5 h-[200%] bg-[radial-gradient(circle,rgba(147,201,60,0.08),transparent_70%)] pointer-events-none"
                aria-hidden="true"
              />

              {/* Ad Soyad + Şirket */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[0.7rem] tracking-mono uppercase text-muted mb-2"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 bg-surface-strong border border-border-strong rounded-lg text-text font-body text-[0.95rem] placeholder:text-dim transition-all duration-300 focus:border-accent focus:bg-bg focus:outline-none focus:shadow-[0_0_0_3px_rgba(147,201,60,0.08),0_0_16px_rgba(147,201,60,0.45)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block font-mono text-[0.7rem] tracking-mono uppercase text-muted mb-2"
                  >
                    Şirket
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Şirketiniz (opsiyonel)"
                    className="w-full px-4 py-3 bg-surface-strong border border-border-strong rounded-lg text-text font-body text-[0.95rem] placeholder:text-dim transition-all duration-300 focus:border-accent focus:bg-bg focus:outline-none focus:shadow-[0_0_0_3px_rgba(147,201,60,0.08),0_0_16px_rgba(147,201,60,0.45)]"
                  />
                </div>
              </div>

              {/* E-posta */}
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block font-mono text-[0.7rem] tracking-mono uppercase text-muted mb-2"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@firma.com"
                  className="w-full px-4 py-3 bg-surface-strong border border-border-strong rounded-lg text-text font-body text-[0.95rem] placeholder:text-dim transition-all duration-300 focus:border-accent focus:bg-bg focus:outline-none focus:shadow-[0_0_0_3px_rgba(147,201,60,0.08),0_0_16px_rgba(147,201,60,0.45)]"
                />
              </div>

              {/* Konu — hizmet */}
              <div className="mb-4 relative">
                <label
                  htmlFor="service"
                  className="block font-mono text-[0.7rem] tracking-mono uppercase text-muted mb-2"
                >
                  Konu
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  placeholder="Yazılım Geliştirme, Otomasyon, ..."
                  className="w-full px-4 py-3 bg-surface-strong border border-border-strong rounded-lg text-text font-body text-[0.95rem] placeholder:text-dim transition-all duration-300 focus:border-accent focus:bg-bg focus:outline-none focus:shadow-[0_0_0_3px_rgba(147,201,60,0.08),0_0_16px_rgba(147,201,60,0.45)]"
                />
              </div>

              {/* Mesaj */}
              <div className="mb-6 relative">
                <label
                  htmlFor="message"
                  className="block font-mono text-[0.7rem] tracking-mono uppercase text-muted mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className="w-full px-4 py-3 bg-surface-strong border border-border-strong rounded-lg text-text font-body text-[0.95rem] placeholder:text-dim transition-all duration-300 resize-y min-h-[120px] focus:border-accent focus:bg-bg focus:outline-none focus:shadow-[0_0_0_3px_rgba(147,201,60,0.08),0_0_16px_rgba(147,201,60,0.45)]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg rounded-xl font-semibold text-[0.95rem] transition-all duration-300 hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(147,201,60,0.45)] disabled:opacity-60 disabled:cursor-wait"
              >
                {status === "idle" && (
                  <>
                    Mesajı Gönder
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </>
                )}
                {status === "sending" && (
                  <>
                    Gönderiliyor
                    <span className="inline-block w-3 h-3 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                  </>
                )}
                {status === "sent" && (
                  <>
                    Gönderildi
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </>
                )}
              </button>

              {/* Form altı — meta */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                <span>// form.v1</span>
                <span>Secure · No tracking</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}