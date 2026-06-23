import { navSections } from "@/lib/content";

// Footer — minimal. Marka, linkler, copyright.

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border py-12 md:py-16">
      {/* Büyük OSMX watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] text-center font-display font-extrabold opacity-[0.04] pointer-events-none whitespace-nowrap"
        style={{ fontSize: "18vw", letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        OSMX · OSMX · OSMX ·
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Marka */}
          <div className="flex items-center gap-3 font-display font-extrabold text-lg">
            <div className="w-9 h-9 rounded-md bg-accent text-bg grid place-items-center font-mono font-semibold text-[0.9rem]">
              ΣX
            </div>
            <span>OSMX</span>
          </div>

          {/* Linkler */}
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-body text-sm text-muted">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Alt çizgi */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[0.7rem] tracking-mono uppercase text-dim">
          <span>© {year} OSMX — Tüm hakları saklıdır.</span>
          <span>// Dijital Dönüşümde Akıllı Çözümler</span>
        </div>
      </div>
    </footer>
  );
}