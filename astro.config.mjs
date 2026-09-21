// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://meteucar.com',
  // TR varsayilan dil ve kokte kalir (meteucar.com), EN /en altina gider.
  // prefixDefaultLocale:false -> mevcut Turkce URL'ler degismez, eski linkler kirilmaz.
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
