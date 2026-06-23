// OSMX — sayfa içerik verileri
// Sahte istatistik, müşteri logosu, testimonial YOK.
// Sadece hizmet/süreç tanımları ve teknik künye.

export const heroFlow = [
  { id: "trigger", label: "Lead Geldi", sub: "Webhook" },
  { id: "classify", label: "Sınıflandır", sub: "AI / Rule" },
  { id: "notify", label: "Bildirim Gönder", sub: "Email / Slack" },
  { id: "follow", label: "Takip", sub: "CRM" },
] as const;

export const aboutSpecs = [
  { key: "stack", value: "Next.js · Node · n8n · PostgreSQL" },
  { key: "kuruluş", value: "2024 · İstanbul" },
  { key: "odak", value: "Yazılım · Otomasyon · AI Ajanları" },
  { key: "çalışma şekli", value: "Sözleşmeli proje modeli" },
  { key: "yanıt süresi", value: "İş günlerinde 24 saat" },
  { key: "konuşma dili", value: "Türkçe · İngilizce" },
] as const;

export const services = [
  {
    id: "yazilim",
    title: "Yazılım Geliştirme",
    desc: "İşletmenizin süreçlerine özel, hazır sistemlerin yetersiz kaldığı noktalarda tasarlanan web, masaüstü ve özel amaçlı uygulamalar.",
    icon: "code",
  },
  {
    id: "web",
    title: "Web Sitesi Geliştirme",
    desc: "Markanızı dijital dünyada temsil eden, modern ve hızlı web siteleri. Performans ve erişilebilirlik gözetilerek.",
    icon: "browser",
  },
  {
    id: "veri",
    title: "Veri Analizi",
    desc: "Reklam, pazarlama, SEO ve operasyon verilerinin değerlendirilmesi. Karar alma sürecini somut veriyle destekleyen raporlama.",
    icon: "chart",
  },
  {
    id: "otomasyon",
    title: "Otomasyon Sistemleri",
    desc: "Tekrarlayan iş süreçlerinin otomatikleştirilmesi. Müşteri yönetimi, veri işleme, belge analizi ve iş akışları için uçtan uca akışlar.",
    icon: "flow",
  },
  {
    id: "ai",
    title: "Yapay Zeka Ajanları",
    desc: "Müşteri takibi, raporlama, randevu yönetimi ve veri analizi süreçlerini otonom hale getiren AI ajanları.",
    icon: "graph",
  },
  {
    id: "danismanlik",
    title: "Dijital Danışmanlık",
    desc: "Süreç analizi, teknoloji değerlendirmesi ve dijital büyüme stratejileri konusunda yol haritası.",
    icon: "roadmap",
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Keşif & Analiz",
    desc: "Mevcut süreçlerin analizi, ihtiyaçların net tanımı.",
  },
  {
    id: "02",
    title: "Tasarım & Planlama",
    desc: "Teknik mimari, kullanıcı deneyimi ve yol haritası.",
  },
  {
    id: "03",
    title: "Geliştirme & Test",
    desc: "Modern teknolojilerle inşa, kalite testleriyle stabilizasyon.",
  },
  {
    id: "04",
    title: "Teslim & Destek",
    desc: "Devreye alma, uzun vadeli teknik destek ve iyileştirme.",
  },
] as const;

export const contactFlow = [
  { id: "01", title: "Form Gönder", desc: "Mesajınız bize ulaşır." },
  { id: "02", title: "Yanıt Süreci", desc: "İş günlerinde 24 saat içinde." },
  { id: "03", title: "İlk Görüşme", desc: "Keşif toplantısı planlanır." },
] as const;

export const navSections = [
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "hizmetler", label: "Hizmetler" },
  { id: "surec", label: "Süreç" },
  { id: "iletisim", label: "İletişim" },
] as const;