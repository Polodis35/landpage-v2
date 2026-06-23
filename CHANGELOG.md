# OSMX Landing Page v2 — CHANGELOG

---

## [2026-06-24] [WEB] v2 yeniden tasarım — Next.js + Tailwind + Framer Motion — tamamlandı

**Durum:** v1'den tamamen yeniden yazıldı. Stack değişti (HTML → Next.js), tasarım yönü "Trace" motifi etrafında kuruldu.

### Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (renk/font/spacing tokenları)
- **Framer Motion** (sadece hero giriş animasyonu)

### Tasarım Yönü — "Trace"
- PCB/devre ilhamı: node + ince bağlantı çizgisi
- Sayfa boyunca tutarlı imza öğesi (Hero → About → Services → Process → Contact)
- Tek orkestre edilmiş giriş animasyonu (hero), abartısız scroll reveal

### Korunan Öğeler
- ✅ Renk paleti: `#1a1b13` bg, `#93c93c` accent, `#c7c1aa` text, `#38501d` olive, `#59584c` ebony
- ✅ Font ailesi: Syne (display), Manrope (body), JetBrains Mono (mono)
- ✅ Tipografi: next/font/google ile optimize

### Değişiklikler

**1. HERO**
- Logo frame kaldırıldı → 4 node + 3 trace otomasyon akış şeması (TraceFlow)
- Framer Motion `pathLength` animasyonu (sadece girişte bir kez)
- Node'lar sırayla, path'lerden sonra beliriyor

**2. NAV**
- Logo + linkler + scroll-aware mono sayaç (`// 02 / 05`)
- IntersectionObserver ile aktif bölüm tespiti
- Mobile hamburger menu

**3. HAKKIMIZDA**
- 4 ikon kutusu kaldırıldı → mono teknik künye paneli (key:value)
- Paragraf max-width 65ch (okunabilirlik)

**4. HİZMETLER**
- 12-col bento grid, tutarlı yükseklikler
- Her hizmete özgün SVG şema (terminal, browser, chart, flow, graph, roadmap)
- İlk kart (Yazılım) 7-col geniş, diğerleri 5/5/5/6/6

**5. SÜREÇ**
- 4 adım yatay timeline (desktop), dikey stack (mobil)
- Trace çizgisi node'lar arası
- Hero'daki şema ile aynı görsel dil

**6. İLETİŞİM**
- Sol: 3 adımlı iletişim akışı şeması (Form → Yanıt → İlk görüşme)
- Sağ: kontrastlı form (bg-surface-strong, focus: accent + glow)
- Submit durumları: idle / sending / sent

**7. FOOTER**
- Minimal, OSMX watermark, linkler, copyright

### Erişilebilirlik
- `prefers-reduced-motion` desteği
- `focus-visible` klavyeye özel focus state
- Aria-label ve semantik HTML
- Minimum 44px touch targets

### Yasaklananlar (UYGULANDI)
- ❌ Sahte istatistik (60+ proje, %40 verimlilik vb.)
- ❌ Müşteri logoları / sektör şeridi
- ❌ Sahte testimonial kartları
- ✅ Sadece gerçek, jenerik bilgiler