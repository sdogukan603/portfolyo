# Portfolyo

Next.js 15 (App Router) + Tailwind CSS 4 ile yapılmış kişisel portföy sitesi. Vercel'de yayında.

## İçeriği düzenleme

| Ne değişecek | Dosya |
| --- | --- |
| Ad, e-posta, linkler, müsaitlik, site adresi | `lib/content.ts` → `site` |
| Ana başlık ve tanıtım | `lib/content.ts` → `hero` |
| Hizmetler, süreç, hakkımda, teknolojiler, iletişim metni | `lib/content.ts` |
| Projeler | `lib/projects.ts` |
| Renkler | `app/globals.css` → `@theme` |
| Link paylaşım görseli | `app/opengraph-image.png` (1200x630) |

### Proje eklemek

`lib/projects.ts` dosyasındaki listeye yeni bir nesne ekle; en yenisi en üstte durur.

- `demo: true` olan projelerde sitede **demo** etiketi görünür. Gerçek projelerde bu satırı sil.
- Ekran görüntüsü için görseli `public/projects/` klasörüne koy (16:10 oranı, en az 1280x800).
  Sonra projeye `image: { src: "/projects/dosya.png", alt: "Kısa açıklama" }` ekle.

## Bilgisayarında çalıştırma

[Node.js](https://nodejs.org) 20 veya üstü gerekli.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Yayınlama

GitHub'a her `git push` yaptığında Vercel siteyi otomatik günceller.

```bash
git add .
git commit -m "Açıklama"
git push
```

Kendi alan adını bağlarsan `lib/content.ts` içindeki `site.url` değerini de güncelle; arama motoru ve paylaşım bağlantıları bu adresi kullanır.

## Yapı

- `app/page.tsx`: sayfa (server component)
- `components/SiteHeader.tsx`: sabit üst menü, aktif bölüm göstergesi, mobil menü (client)
- `components/ProjectTimeline.tsx`: git log görünümlü projeler; yerleşik `<details>` ile açılır, JavaScript gerektirmez
- `components/CopyEmail.tsx`, `components/LocalTime.tsx`: küçük client bileşenleri
- `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.png`: SEO ve paylaşım
