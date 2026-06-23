import { Reveal } from "./Reveal";
import { processSteps } from "@/lib/content";

// Process — 4 adım yatay timeline (desktop), dikey stack (mobil).
// Trace motifi: her adım arası yatay çizgi, node'lar accent halka.

export function Process() {
  return (
    <section
      id="surec"
      className="section-pad-lg relative border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section başlık */}
        <Reveal>
          <div className="mb-16 md:mb-20">
            <div className="font-mono text-[0.75rem] tracking-mono uppercase text-accent mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-accent" />
              03 — Süreç
            </div>
            <h2 className="font-display text-display-lg max-w-[720px]">
              Nasıl <span className="italic font-medium text-accent">çalışıyoruz</span>?
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Yatay trace çizgisi — sadece md+ */}
          <div
            className="hidden md:block absolute top-[15px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            aria-hidden="true"
          />

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.id}
                delay={((i + 1) * 100) as 100 | 200 | 300 | 400}
                className="relative md:px-4 first:md:pl-0 last:md:pr-0"
              >
                {/* Node — yuvarlak, accent halka */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-bg border-2 border-accent grid place-items-center font-mono text-[0.7rem] font-semibold text-accent mb-6">
                  {step.id}
                </div>

                {/* İçerik */}
                <div className="font-mono text-[0.7rem] tracking-mono uppercase text-dim mb-3">
                  // step.{step.id}
                </div>
                <h3 className="font-display text-[1.25rem] font-bold leading-[1.2] mb-3 text-text">
                  {step.title}
                </h3>
                <p className="text-muted text-[0.875rem] leading-relaxed">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}