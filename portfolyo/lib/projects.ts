// Projeler git log gibi listelenir; en yeni en üstte.
//
// demo: true olan projeler sitede "demo" etiketiyle görünür. Gerçek projeni
//       eklediğinde bu alanı silebilir ya da false yapabilirsin.
// image: ekran görüntüsünü public/projects/ klasörüne koy (16:10 oranı, en az 1280x800),
//        sonra { src: "/projects/dosya.png", alt: "Kısa açıklama" } yaz.
// hash:  7 karakterlik rastgele harf/rakam; sadece görünüm için.

export type Project = {
  hash: string;
  year: string;
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
  demo?: boolean;
};

export const projects: Project[] = [
  {
    hash: "a3f9c21",
    year: "2026",
    name: "Randevu paneli",
    summary: "Bir güzellik salonu için online randevu ve hatırlatma sistemi",
    detail:
      "Müşteriler boş saatleri görüp randevu alıyor, salon tek ekrandan günü yönetiyor. SMS hatırlatmalarıyla gelmeyen randevular belirgin şekilde azaldı.",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    links: [
      { label: "Canlı site", href: "https://ornek.com" },
      { label: "Kaynak kod", href: "https://github.com/sdogukan603" },
    ],
    demo: true,
  },
  {
    hash: "7be04d8",
    year: "2026",
    name: "Stok takip botu",
    summary: "E-ticaret mağazası için stok uyarılarını Telegram'a gönderen bot",
    detail:
      "Mağazanın ürünlerini saatlik kontrol edip kritik seviyeye düşen ürünleri ekibe bildiriyor. Elle yapılan günlük sayım tamamen kalktı.",
    stack: ["Python", "Telegram API", "Cron"],
    links: [{ label: "Kaynak kod", href: "https://github.com/sdogukan603" }],
    demo: true,
  },
  {
    hash: "c51e9fa",
    year: "2025",
    name: "Restoran sitesi",
    summary: "Menü, rezervasyon formu ve harita entegrasyonu olan tanıtım sitesi",
    detail:
      "Sahibinin menüyü kendisinin güncelleyebildiği, mobilde bir saniyenin altında açılan bir site. Yerel aramalarda ilk sayfaya çıktı.",
    stack: ["Astro", "Tailwind", "Vercel"],
    links: [{ label: "Canlı site", href: "https://ornek.com" }],
    demo: true,
  },
  {
    hash: "0d2a6b3",
    year: "2025",
    name: "Fatura dönüştürücü",
    summary: "PDF faturaları Excel tablosuna aktaran masaüstü aracı",
    detail:
      "Bir muhasebe ofisi için ayda yüzlerce faturanın elle girilmesini dakikalara indiren küçük bir araç.",
    stack: ["Python", "pdfplumber", "openpyxl"],
    links: [{ label: "Kaynak kod", href: "https://github.com/sdogukan603" }],
    demo: true,
  },
];
