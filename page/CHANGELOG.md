# CHANGELOG

## OSMX Landing Page

---

[2026-06-23] [WEB] OSMX landing page ilk sürüm oluşturuldu — Hero (asimetrik grid + ΣX logo + slogan + CTA + marquee), Hakkımızda (yapışkan başlık + metin + 4 değer pilli), Hizmetler (asimetrik bento grid — 6 kart), Süreç (4 aşamalı timeline), İletişim (4 bilgi kartı + çalışan form), Footer (dev OSMX watermark marquee); Syne + JetBrains Mono + Manrope tipografi; AOS scroll reveal + CSS keyframes (marquee, glow-pulse, float, pulse); mouse-tracked radial glow servis kartlarında; responsive (1024px + 640px breakpoint) — tamamlandı, tek dosya `index.html`

[2026-06-23] [WEB] Marka paleti güncellendi — `renk kodları.txt`'ten okunan kodlar uygulandı: `#93c93c` yellow green (birincil vurgu), `#c7c1aa` pale oak (metin), `#1a1b13` carbon black (arka plan), `#38501d` olive leaf, `#59584c` ebony — tamamlandı

[2026-06-23] [WEB] UI temizliği yapıldı — hero logo frame köşe etiketleri kaldırıldı (`ΣX.MARK`, `v.2026`, `EST. 2026`, `— TR`), `// Index` ve `// Status` meta elemanları silindi, 6 servis kartından `// 0X / Service` yorum etiketleri kaldırıldı — tamamlandı

[2026-06-23] [WEB] Smooth scroll düzeltildi — nav linklerine tıklayınca sayfa direkt hedef bölüme ışınlanıyordu; `scroll-margin-top: 80px` + `scrollIntoView({behavior:'smooth'})` ile değiştirildi, artık yumuşak kayarak gidiyor — tamamlandı

[2026-06-23] [WEB] Deploy yapısı kuruldu — görseller ve `index.html` `page/` klasörüne taşındı, göreceli path'ler güncellendi; `vercel.json` (root → `/page` rewrite), `README.md`, `.gitignore` eklendi; GitHub + Vercel deploy'a hazır — tamamlandı

[2026-06-23] [WEB] v2 düzeltmeleri uygulandı — Hero sağ glow kutusu kaldırılıp yerine otomasyon akış diyagramı + 3 istatistik kartı konuldu; hero altına trust bar eklendi; Hakkımızda spacing sıkılaştırılıp pillar hover'ları eklendi; Hizmetler bento grid yeniden düzenlendi (üst karta terminal mockup, kart yükseklikleri eşitlendi, görseller eklendi); Süreç'e ok akışı bağlayıcı çizgisi eklendi; İletişim formu contrast/focus state belirginleştirildi, sol tarafa mini harita eklendi; sosyal kanıt/testimonial bölümü eklendi; section padding'leri 96-120px standardına getirildi; mobil breakpoint'ler kontrol edildi — marka paleti ve font seçimleri korundu — tamamlandı