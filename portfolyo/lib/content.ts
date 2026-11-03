// Sitedeki metinlerin tamamı burada. Projeler için: lib/projects.ts

export const site = {
  name: "Doğukan Şahin",
  handle: "dogukansahin", // üst barda görünen kısa ad
  role: "Freelance yazılım geliştirici",
  url: "https://dogukansahinportfolyo.vercel.app", // kendi alan adını bağlarsan burayı değiştir
  city: "İzmir",
  timeZone: "Europe/Istanbul",
  available: true, // yeni işe açık değilsen false yap
  email: "dogukansahin1319@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/sdogukan603" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kullaniciadi" },
    { label: "Upwork", href: "https://upwork.com/freelancers/kullaniciadi" },
  ],
  description:
    "İzmir'de freelance yazılım geliştirici. İşletmeler için web uygulamaları, backend servisleri, API entegrasyonları ve otomasyonlar geliştiriyorum.",
  keywords: [
    "freelance yazılım geliştirici",
    "Next.js geliştirici",
    "backend geliştirme",
    "API entegrasyonu",
    "otomasyon",
    "İzmir",
  ],
};

export const nav = [
  { id: "isler", label: "İşler" },
  { id: "hizmetler", label: "Hizmetler" },
  { id: "hakkimda", label: "Hakkımda" },
  { id: "iletisim", label: "İletişim" },
];

export const hero = {
  headline: "Fikrini hızlı ve sağlam çalışan yazılıma dönüştürüyorum.",
  intro:
    "İşletmeler ve girişimler için web uygulamaları, backend servisleri, API entegrasyonları ve iş akışını hızlandıran otomasyonlar geliştiriyorum. Net kapsam, düzenli iletişim, zamanında teslim.",
};

// icon: "api" | "plug" | "terminal" | "window"
export const services = [
  {
    icon: "api",
    title: "Backend ve API geliştirme",
    body: "Uygulamanın arkasındaki sunucu tarafı: veri modeli, kimlik doğrulama, ödeme akışı ve dışarıya açılan API'ler.",
    tags: ["REST", "Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: "plug",
    title: "API entegrasyonları",
    body: "Kullandığın servisleri birbirine bağlarım: ödeme sistemleri, CRM, e-posta, kargo ya da muhasebe yazılımları.",
    tags: ["Stripe / iyzico", "Webhook", "OAuth"],
  },
  {
    icon: "terminal",
    title: "Otomasyon ve botlar",
    body: "Elle tekrarlanan işleri script ve botlara devrederim; raporlar, bildirimler ve veri aktarımları kendiliğinden çalışır.",
    tags: ["Python", "Cron", "Telegram"],
  },
  {
    icon: "window",
    title: "Web uygulamaları ve siteler",
    body: "Hızlı açılan, mobilde düzgün görünen, arama motorlarında bulunabilen paneller, uygulamalar ve kurumsal siteler.",
    tags: ["Next.js", "React", "Tailwind"],
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
    body: "Haftalık ara teslimlerle ilerlerim; her aşamayı canlı bir linkten takip edersin.",
  },
  {
    title: "Teslim ve destek",
    body: "Yayına alırım, nasıl kullanacağını gösteririm, ilk ay ücretsiz destek veririm.",
  },
];

export const about = {
  lead: "Merhaba, ben Doğukan. İşletmelerin her gün kullandığı, bakımı kolay yazılımlar geliştiriyorum.",
  body: [
    "Kodu yazmadan önce işin neden yapıldığını anlamaya çalışırım. Bazen en iyi çözüm daha az kod yazmaktır; bazen de elle yapılan bir işi tamamen ortadan kaldıran küçük bir otomasyondur.",
    "Teslim ettiğim projelerin gerçekten kullanılmasını ve benden sonra da kolayca geliştirilebilmesini önemsiyorum.",
  ],
  // Kendi kullandığın teknolojilerle güncelle
  stack: [
    { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Python", "REST API", "Webhook"] },
    { group: "Database", items: ["PostgreSQL", "SQLite", "Redis"] },
    { group: "DevOps ve araçlar", items: ["Git", "GitHub Actions", "Docker", "Vercel"] },
  ],
};

export const contact = {
  heading: "Aklında bir proje varsa konuşalım.",
  body: "Ne yapmak istediğini birkaç cümleyle yaz. 24 saat içinde kapsam ve tahmini süreyle dönüş yaparım.",
  subject: "Proje hakkında",
};
