"use client";

// Nav — scroll-aware mono sayaç + aktif bölüm tespiti.
// Logo (sol) · Linkler (orta) · Sayaç + CTA (sağ).

import { useEffect, useState } from "react";
import { navSections } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = hero, 1-4 = sections
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll — scrolled state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aktif bölüm — IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", ...navSections.map((s) => s.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // En çok görünür olan bölümü aktif yap
        let bestIndex = activeIndex;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const idx = sectionIds.indexOf(entry.target.id);
          if (idx !== -1 && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = idx;
          }
        });
        if (bestRatio > 0.05) setActiveIndex(bestIndex);
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7],
        rootMargin: "-30% 0px -50% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sayaç formatı: 01 / 05
  const total = navSections.length + 1; // hero + 4 section
  const counter = `// ${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border py-3"
          : "py-5"
      }`}
      aria-label="Ana navigasyon"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 font-display font-extrabold text-lg tracking-tight"
            aria-label="OSMX ana sayfa"
          >
            <div className="w-9 h-9 rounded-md bg-accent text-bg grid place-items-center font-mono font-semibold text-[0.9rem] tracking-tight">
              ΣX
            </div>
            <span>OSMX</span>
          </a>

          {/* Desktop linkler */}
          <ul className="hidden md:flex items-center gap-8">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="font-body text-sm font-medium text-muted hover:text-text transition-colors duration-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Sağ — sayaç + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <span
              className="font-mono text-[0.7rem] tracking-mono uppercase text-muted tabular-nums"
              aria-live="polite"
            >
              {counter}
            </span>
            <a
              href="#iletisim"
              className="inline-flex items-center px-5 py-2 border border-border-accent rounded-full text-sm font-medium text-text hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300"
            >
              Proje Başlat →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] grid place-items-center"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-text transition-transform duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-text transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-text transition-transform duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-border pt-4">
            <ul className="flex flex-col gap-1">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 font-body text-sm font-medium text-muted hover:text-text hover:bg-surface rounded-md transition-colors duration-200"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-3 border-t border-border flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-mono uppercase text-muted">
                  {counter}
                </span>
                <a
                  href="#iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center px-4 py-2 bg-accent text-bg rounded-full text-sm font-semibold"
                >
                  Proje Başlat →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}