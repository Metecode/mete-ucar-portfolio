# meteucar.com

Kişisel portfolyo sitem — kurumsal frontend/full-stack geliştirici olarak
çalışmalarımı, yazılarımı ve projelerimi bir araya getiriyor.

**Canlı:** https://meteucar.com

## Teknolojiler

- **[Astro](https://astro.build)** — içerik odaklı, minimum JavaScript ile
  hızlı statik site
- **TypeScript**
- **Elde yazılmış CSS** — CSS custom property'leriyle kurulmuş tasarım
  token'ları (`src/styles/tokens.css`), framework yok
- İçerik yönetimi için **Astro Content Collections** (Zod şemalı)
- **Formspree** — iletişim formu
- **Netlify** — CI/CD ve hosting

## Öne çıkan özellikler

- Açık/koyu tema (sistem tercihi + kalıcı toggle, ilk boyamada flash yok)
- Erişilebilirlik (WCAG AA), `prefers-reduced-motion` desteği
- Dokunmatik cihazlarda 44px'lik dokunma hedefleri, farede özgün yoğun tasarım
- Performans odaklı: optimize görseller, düşük CLS, minimum JS
- İçerik (projeler, yazılar) markdown dosyalarından besleniyor

## Geliştirme

```bash
npm install
npm run dev      # localhost:4321
npm run build    # üretim derlemesi (dist/)
npm run preview  # derlemeyi yerelde önizle
```

## Yapı

```text
src/
├── components/     # bölüm bileşenleri (Hero, Projects, Contact, ...)
├── content/
│   ├── projects/   # her proje bir markdown dosyası
│   └── articles/   # her yazı bir markdown dosyası
├── layouts/        # BaseLayout: head, tema script'i, global script'ler
├── pages/          # index.astro, 404.astro
└── styles/         # tokens.css (tasarım token'ları) + global.css
```

## İçerik ekleme

Yeni bir proje veya yazı eklemek için ilgili klasöre bir markdown dosyası
bırakmak yeterli. Frontmatter alanları `src/content.config.ts` içindeki Zod
şemasıyla doğrulanır; eksik veya hatalı bir alan varsa derleme hata verir.
