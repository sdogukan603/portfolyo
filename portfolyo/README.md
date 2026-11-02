# Portfolyo

Next.js 15 + Tailwind CSS 4 ile yapılmış, Vercel'de yayınlanmaya hazır kişisel portföy sitesi.

## İçeriği düzenleme

Sitedeki tüm metinler tek bir dosyada: **`lib/content.ts`**

- `site`: adın, e-postan, şehrin, sosyal linklerin, "yeni işe açık" durumu
- `hero`: ana başlık ve kısa tanıtım
- `projects`: projelerin (en yenisi en üstte). `hash` alanına 7 karakterlik rastgele harf/rakam yaz.
- `services`, `steps`, `about`: hizmetler, çalışma süreci, hakkımda

Renkleri değiştirmek istersen `app/globals.css` içindeki `@theme` bloğuna bak.

## Bilgisayarında çalıştırma

[Node.js](https://nodejs.org) 20 veya üstü gerekli.

```bash
npm install
npm run dev
```

Sonra tarayıcıda http://localhost:3000 adresini aç. Dosyayı kaydettikçe sayfa otomatik yenilenir.

## Vercel'e yükleme

1. Projeyi GitHub'da yeni bir repoya yükle:
   ```bash
   git init
   git add .
   git commit -m "İlk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADIN/portfolyo.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) adresinde GitHub hesabınla giriş yap.
3. **Add New → Project** de, `portfolyo` reposunu seç, **Deploy** butonuna bas. Ayar değiştirmene gerek yok.
4. Bir dakika içinde `portfolyo-xxx.vercel.app` adresinde yayında olur.

Bundan sonra GitHub'a her `git push` yaptığında Vercel siteyi otomatik günceller.

### Kendi alan adını bağlama

Vercel'de projeye gir, **Settings → Domains** bölümünden alan adını ekle ve gösterdiği DNS kayıtlarını alan adını aldığın firmanın panelinde gir.
