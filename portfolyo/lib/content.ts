// Sitedeki tüm metinler burada. Yalnızca bu dosyayı düzenlemen yeterli.

export const site = {
  name: "Adın Soyadın",
  handle: "kullaniciadi", // header'da görünen kısa ad
  role: "Freelance yazılım geliştirici",
  city: "İzmir",
  timeZone: "Europe/Istanbul",
  available: true, // yeni işe açık değilsen false yap
  email: "merhaba@alanadin.com",
  links: [
    { label: "GitHub", href: "https://github.com/kullaniciadi" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kullaniciadi" },
    { label: "Upwork", href: "https://upwork.com/freelancers/kullaniciadi" },
  ],
  // Arama motorları ve link önizlemeleri için
  description:
    "İşletmeler için hızlı, bakımı kolay web siteleri, uygulamalar ve otomasyonlar geliştiren freelance yazılımcı.",
};

export const hero = {
  headline: "Fikrini hızlı ve sağlam çalışan yazılıma dönüştürüyorum.",
  intro:
    "Küçük işletmeler ve girişimler için web siteleri, web uygulamaları ve iş akışını hızlandıran otomasyonlar geliştiriyorum. Net kapsam, düzenli iletişim, zamanında teslim.",
};

export const services = [
  {
    title: "Web siteleri",
    body: "Hızlı açılan, Google'da bulunabilen, mobilde düzgün görünen kurumsal siteler ve açılış sayfaları.",
  },
  {
    title: "Web uygulamaları",
    body: "Panel, rezervasyon, üyelik ya da ödeme gerektiren uygulamalar; uçtan uca, yayına kadar.",
  },
  {
    title: "Otomasyon ve entegrasyon",
    body: "Elle yapılan tekrar eden işleri script ve botlarla otomatikleştirme, servisleri birbirine bağlama.",
  },
  {
    title: "Bakım ve hata düzeltme",
    body: "Mevcut projede hata ayıklama, performans iyileştirme ve düzenli güncelleme.",
  },
];

// Projeler git log gibi listelenir; en yeni en üstte.
// Bunlar örnek içerik: kendi projelerinle değiştir.
export const projects = [
  {
    hash: "a3f9c21",
    year: "2026",
    name: "Randevu paneli",
    summary: "Bir güzellik salonu için online randevu ve hatırlatma sistemi",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    detail:
      "Müşteriler boş saatleri görüp randevu alıyor, salon tek ekrandan günü yönetiyor. SMS hatırlatmalarıyla gelmeyen randevular belirgin şekilde azaldı.",
    links: [
      { label: "Canlı site", href: "https://ornek.com" },
      { label: "Kaynak kod", href: "https://github.com/kullaniciadi/randevu" },
    ],
  },
  {
    hash: "7be04d8",
    year: "2026",
    name: "Stok takip botu",
    summary: "E-ticaret mağazası için stok uyarılarını Telegram'a gönderen bot",
    stack: ["Python", "Telegram API", "Cron"],
    detail:
      "Mağazanın ürünlerini saatlik kontrol edip kritik seviyeye düşen ürünleri ekibe bildiriyor. Elle yapılan günlük sayım tamamen kalktı.",
    links: [{ label: "Kaynak kod", href: "https://github.com/kullaniciadi/stok-bot" }],
  },
  {
    hash: "c51e9fa",
    year: "2025",
    name: "Restoran sitesi",
    summary: "Menü, rezervasyon formu ve Google Haritalar entegrasyonu olan tanıtım sitesi",
    stack: ["Astro", "Tailwind", "Vercel"],
    detail:
      "Sahibinin menüyü kendisinin güncelleyebildiği, mobilde bir saniyenin altında açılan bir site. Yerel aramalarda ilk sayfaya çıktı.",
    links: [{ label: "Canlı site", href: "https://ornek.com" }],
  },
  {
    hash: "0d2a6b3",
    year: "2025",
    name: "Fatura dönüştürücü",
    summary: "PDF faturaları Excel tablosuna aktaran masaüstü aracı",
    stack: ["Python", "pdfplumber", "openpyxl"],
    detail:
      "Bir muhasebe ofisi için ayda yüzlerce faturanın elle girilmesini dakikalara indiren küçük bir araç.",
    links: [{ label: "Kaynak kod", href: "https://github.com/kullaniciadi/fatura" }],
  },
];

export const steps = [
  {
    title: "Tanışma",
    body: "Kısa bir görüşmede ihtiyacı, bütçeyi ve takvimi konuşuruz.",
  },
  {
    title: "Teklif",
    body: "Kapsamı, teslim tarihini ve fiyatı yazılı olarak netleştiririm.",
  },
  {
    title: "Geliştirme",
    body: "Haftalık ara teslimlerle ilerlerim; her aşamayı canlı linkten görürsün.",
  },
  {
    title: "Teslim ve destek",
    body: "Yayına alırım, nasıl kullanacağını gösteririm, ilk ay ücretsiz destek veririm.",
  },
];

export const about = {
  body: [
    "Merhaba, ben Adın. Birkaç yıldır web ve otomasyon projeleri geliştiriyorum. İşimde en çok önem verdiğim şey, teslim ettiğim şeyin gerçekten kullanılması ve kolayca bakımının yapılabilmesi.",
    "Kodu yazmadan önce işin neden yapıldığını anlamaya çalışırım. Bazen en iyi çözüm daha az kod yazmaktır.",
  ],
  tools: [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel",
    "Git",
  ],
};
