import { Reveal } from "./Reveal";
import { aboutSpecs } from "@/lib/content";

// About — yapışkan başlık + daraltılmış paragraf + mono teknik künye paneli.

export function About() {
  return (
    <section
      id="hakkimizda"
      className="section-pad-lg relative border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
          {/* Sol — yapışkan başlık */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <div className="font-mono text-[0.75rem] tracking-mono uppercase text-accent mb-6 flex items-center gap-3">
                <span className="block w-8 h-px bg-accent" />
                01 — Hakkımızda
              </div>
              <h2 className="font-display text-display-md text-text">
                Teknolojiyi{" "}
                <span className="italic font-medium text-accent">
                  verimliliğin
                </span>{" "}
                temel unsuru olarak görüyoruz.
              </h2>
            </Reveal>
          </div>

          {/* Sağ — paragraf + künye paneli */}
          <div>
            <Reveal delay={150}>
              <div className="space-y-6 mb-12">
                <p className="text-lg text-muted leading-[1.8] max-w-prose">
                  <strong className="text-text font-medium">OSMX</strong>,
                  işletmelerin dijital dönüşüm süreçlerini hızlandırmak ve
                  sürdürülebilir büyüme elde etmelerini sağlamak amacıyla
                  kurulmuş bir yazılım ve teknoloji firmasıdır.
                </p>
                <p className="text-lg text-muted leading-[1.8] max-w-prose">
                  Teknolojiyi yalnızca bir araç olarak değil,{" "}
                  <strong className="text-text font-medium">
                    verimlilik, ölçeklenebilirlik ve uzun vadeli değer
                  </strong>{" "}
                  oluşturmanın temel unsurlarından biri olarak görüyoruz.
                </p>
                <p className="text-lg text-muted leading-[1.8] max-w-prose">
                  Hedefimiz, işletmeleri geleceğin dijital dünyasına hazırlayan{" "}
                  <strong className="text-text font-medium">
                    güvenilir, yenilikçi ve kalıcı
                  </strong>{" "}
                  sistemler oluşturmaktır.
                </p>
              </div>
            </Reveal>

            {/* Teknik künye paneli */}
            <Reveal delay={250}>
              <div className="border border-border rounded-xl bg-surface overflow-hidden">
                {/* Panel başlığı */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-elevated">
                  <span className="font-mono text-[0.7rem] tracking-mono uppercase text-accent">
                    // teknik.künye
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    README.md
                  </span>
                </div>

                {/* Key:Value satırları */}
                <div className="divide-y divide-border">
                  {aboutSpecs.map((spec) => (
                    <div
                      key={spec.key}
                      className="grid grid-cols-[minmax(0,140px)_1fr] gap-4 px-5 py-3 hover:bg-surface-strong transition-colors duration-200"
                    >
                      <span className="font-mono text-[0.75rem] tracking-mono uppercase text-muted truncate">
                        {spec.key}
                      </span>
                      <span className="font-mono text-[0.85rem] text-text break-words">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Panel altı */}
                <div className="px-5 py-3 border-t border-border bg-bg-elevated flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    # 6 keys · 0 fluff
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
                    EOF
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}