# OSMX — Landing Page v2

Dijital dönüşüm, otomasyon ve yapay zeka ajansı için tasarlanmış modern landing page.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (marka paleti ve font tokenları)
- **Framer Motion** (sadece hero giriş animasyonu)

## Tasarım Yönü — "Trace"

PCB/devre estetiğinden gelen **node + ince bağlantı çizgisi** motifi, sayfa boyunca tutarlı bir imza öğesi olarak kullanılır:

- **Hero**: 4 node + 3 trace içeren otomasyon akış şeması (Framer Motion `pathLength` giriş animasyonu)
- **Hakkımızda**: Mono teknik künye paneli (key:value, README.md havası)
- **Hizmetler**: Her hizmete özgü SVG şema (terminal, browser, chart, flow, graph, roadmap)
- **Süreç**: 4 adım yatay timeline, trace çizgisi ile
- **İletişim**: 3 adımlı iletişim akışı şeması + kontrastlı form

## Renk Paleti (KORUNDU)

| Token | Değer | Kullanım |
|-------|-------|----------|
| `bg` | `#1a1b13` | Ana arka plan (carbon black) |
| `bg-elevated` | `#232520` | Yüzey katmanları |
| `surface` | `#2a2c26` | Kart yüzeyleri |
| `text` | `#c7c1aa` | Birincil metin (pale oak) |
| `accent` | `#93c93c` | Birincil vurgu (yellow green) |
| `accent-bright` | `#a8dc4f` | Hover / aktif durum |
| `olive` | `#38501d` | İkincil vurgu |
| `ebony` | `#59584c` | Muted vurgu |

## Tipografi (KORUNDU)

- **Syne** — display (başlıklar)
- **Manrope** — body
- **JetBrains Mono** — mono (teknik etiketler)

## Bölümler

| # | Bölüm | İçerik |
|---|-------|--------|
| 01 | Hakkımızda | Yapışkan başlık + mono teknik künye paneli |
| 02 | Hizmetler | 12-col bento grid, her biri özgün SVG şema ile |
| 03 | Süreç | 4 adım yatay timeline, trace motifi |
| 04 | İletişim | İletişim akışı şeması + kontrastlı form |

## Çalıştırma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

`vercel.json` otomatik olarak Next.js framework'ünü algılar. Push sonrası Vercel otomatik deploy yapar.

## Erişilebilirlik

- `prefers-reduced-motion` desteği (animasyonlar devre dışı)
- `focus-visible` klavyeye özel focus state
- Aria-label ve semantik HTML
- Minimum 44px touch targets
- WCAG AA kontrast oranları