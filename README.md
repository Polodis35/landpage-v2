# OSMX — Dijital Dönüşümde Akıllı Çözümler

OSMX yazılım ajansının kurumsal landing page'i.

**Slogan:** Dijital Dönüşümde Akıllı Çözümler

---

## Yapı

```
osmx_landingpage/
├── vercel.json          # Vercel deploy ayarları
├── README.md
└── page/                # Deploy edilen dizin
    ├── index.html       # Tek sayfa — tüm CSS/JS gömülü
    ├── logo.png         # OSMX logosu
    ├── yazilim-gelistirme.png
    ├── website.png
    ├── data-analysis.png
    ├── automation.png
    ├── ai-icon.png
    ├── consultation.png
    ├── hizmetler.md     # Marka metin kaynağı
    ├── renk kodları.txt # Marka paleti
    └── CHANGELOG.md
```

## Marka Paleti

| Renk | Kod | Kullanım |
|---|---|---|
| Carbon Black | `#1a1b13` | Ana arka plan |
| Pale Oak | `#c7c1aa` | Birincil metin |
| Yellow Green | `#93c93c` | Birincil vurgu |
| Olive Leaf | `#38501d` | İkincil vurgu / derinlik |
| Ebony | `#59584c` | Muted tonlar |

## Teknoloji

- **HTML5** tek dosya, gömülü CSS + JS
- **AOS 2.3.1** — scroll animasyonları (CDN)
- **Google Fonts** — Syne, JetBrains Mono, Manrope
- Bağımlılık yok, build yok, framework yok

## Deploy (Vercel)

1. Repo'yu GitHub'a push'la
2. Vercel → New Project → repo'yu seç
3. Vercel otomatik algılar; hiçbir ayar gerekmez
4. `vercel.json` root dizin → `page/`'den serve eder

Alternatif: Vercel dashboard'da **Settings → Root Directory** = `page` ayarla, `vercel.json` gerekmez.

## Lisans

© 2026 OSMX — Tüm hakları saklıdır.