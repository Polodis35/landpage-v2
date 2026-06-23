import { TraceFlow } from "./TraceFlow";

// Hero — sol: metin + CTA, sağ: TraceFlow.
// CSS-only fade-in animasyonu (Framer Motion gerekmiyor, TraceFlow kendi içinde).

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Sol — metin bloğu */}
          <div className="animate-fade-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-border rounded-full bg-accent/[0.04] mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_12px_rgba(147,201,60,0.45)]" />
              <span className="font-mono text-[0.7rem] tracking-mono uppercase text-accent">
                Yeni Projeler · 2026
              </span>
            </div>

            {/* Başlık */}
            <h1 className="font-display text-display-xl mb-8">
              Dijital{" "}
              <span className="italic font-medium text-accent">Dönüşümde</span>{" "}
              Akıllı Çözümler
            </h1>

            {/* Alt başlık */}
            <p className="text-lg text-muted max-w-prose mb-10 leading-relaxed">
              İşletmelerin süreçlerini hızlandıran, maliyetlerini azaltan ve
              rekabet gücünü artıran yazılım, otomasyon ve yapay zeka çözümleri
              tasarlıyoruz.
            </p>

            {/* CTA'lar */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#iletisim"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3 bg-accent text-bg rounded-full font-semibold text-[0.95rem] hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(147,201,60,0.45)] transition-all duration-300 ease-out-soft"
              >
                Projeyi Başlat
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
              </a>
              <a
                href="#hizmetler"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-3 text-muted hover:text-accent transition-colors duration-300 font-medium text-[0.95rem]"
              >
                Hizmetleri İncele
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sağ — TraceFlow */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <TraceFlow />
          </div>
        </div>
      </div>
    </section>
  );
}