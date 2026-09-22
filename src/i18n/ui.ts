// Tum arayuz metinleri burada. Bilesenlerde metin HARDCODE EDILMEZ; t(key, lang)
// ile buradan okunur. tr sozlugu kaynaktir: en, Record<UIKey, string> olarak
// yazildigi icin bir anahtar unutulursa TypeScript derlemede uyarir.

export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'tr';

const tr = {
  // ---------- meta ----------
  'meta.title': 'Mete Uçar — Full-stack Developer',
  'meta.description':
    'Mete Uçar — kurumsal sigorta ürünleri üzerine çalışan mid-level Full-stack developer. React, TypeScript, MUI, React Hook Form, Zod.',
  'meta.404.title': 'Sayfa bulunamadı — Mete Uçar',
  'meta.404.description':
    'Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya doğrudan iletişime geçebilirsiniz.',

  // ---------- erisilebilirlik ----------
  'a11y.skipLink': 'İçeriğe geç',

  // ---------- nav ----------
  'nav.about': 'Hakkımda',
  'nav.work': 'Ne yapıyorum',
  'nav.projects': 'Projeler',
  'nav.writing': 'Yazılar',
  'nav.offTheClock': 'Mesai dışında',
  'nav.contact': 'İletişim',
  'nav.aria.main': 'Ana navigasyon',
  'nav.aria.mobile': 'Mobil navigasyon',
  'nav.aria.theme': 'Temayı değiştir',
  'nav.aria.menuOpen': 'Menüyü aç',
  'nav.aria.menuClose': 'Menüyü kapat',
  'nav.aria.language': 'Dili değiştir',

  // ---------- hero ----------
  'hero.ghost': 'FULL-STACK',
  'hero.line1': 'Karmaşık iş kurallarını,',
  'hero.line2': 'güvenilir sistemlere',
  'hero.line3': 'dönüştürüyorum.',
  'hero.sub':
    "32Bit bünyesinde kurumsal sigorta ürünleri geliştiren bir full-stack developer'ım; React ve TypeScript ile tip güvenli arayüzler, Java ve Spring Boot ile bunları besleyen servisler kuruyorum.",
  'hero.cta.primary': 'İletişime geç',
  'hero.cta.secondary': 'Ne yaptığımı gör',
  'hero.card.role.label': 'role',
  'hero.card.role.value': '"Full-stack developer"',
  'hero.card.focus.label': 'focus',
  'hero.card.focus.value': '"Enterprise systems"',
  'hero.card.stack.label': 'stack',
  'hero.card.stack.value': 'React · TypeScript · Java · Spring Boot',
  'hero.photo.alt': 'Mete Uçar',

  // ---------- stack strip ----------
  'stack.core.label': 'core',
  'stack.forms.label': 'form & validasyon',
  'stack.ui.label': 'arayüz',
  'stack.backend.label': 'backend',

  // ---------- hakkimda ----------
  'about.title': 'Hakkımda',
  'about.p1':
    "32Bit'te full-stack developer olarak enterprise ölçekli sigorta ürünleri geliştiriyorum. İşimin çoğu, karmaşık iş kurallarını — prim hesaplamalarından çok adımlı başvuru akışlarına kadar — güvenilir, tip güvenli arayüzlere dönüştürmekten oluşuyor. React ve TypeScript'i temel alıyor, React Hook Form ve Zod ile form mimarilerini uçtan uca kurguluyor, Material UI üzerinde kurumsal tasarım sistemlerine sadık kalarak üretim yapıyorum.",
  'about.p2':
    "Bir ürünü uçtan uca düşünmeyi seviyorum: React ve TypeScript ile arayüzü kurarken, Java ve Spring Boot ile arkasındaki servisleri de yazıyor, gerektiğinde tasarımı kendim kurguluyorum. Bu, bir işi 'sadece verilen tasarımı koda dökmek' olarak değil, problemin bütününü — veri modelinden son kullanıcının gördüğü ekrana kadar — sahiplenmek olarak görmemi sağlıyor. Beni motive eden şey; hatanın maliyetinin yüksek olduğu sistemlerde sade ve öngörülebilir çözümler kurabilmek.",
  'about.facts.company.label': 'şirket',
  'about.facts.company.value': '32Bit',
  'about.facts.role.label': 'rol',
  'about.facts.role.value': 'Full-stack Developer',
  'about.facts.field.label': 'alan',
  'about.facts.field.value': 'Kurumsal sigorta ürünleri',
  'about.facts.location.label': 'konum',
  'about.facts.location.value': 'Aydın, Türkiye · Remote',

  // ---------- ne yapiyorum ----------
  'work.ghost': 'WORK',
  'work.title': 'Ne yapıyorum',
  'work.card1.file': 'policy-application.tsx',
  'work.card1.title': 'Çok adımlı poliçe başvuru akışları',
  'work.card1.desc':
    'Koşullu dallanan, çok adımlı başvuru akışları kuruyorum — React Hook Form ve Zod discriminated union şemalarıyla; adım bazlı doğrulama, taslak kaydetme ve şemadan otomatik türetilen tipler işin standart parçası.',
  'work.card1.tag1': 'React Hook Form',
  'work.card1.tag2': 'Zod',
  'work.card1.tag3': 'TypeScript',
  'work.card2.file': 'premium-engine.ts',
  'work.card2.title': 'Gerçek zamanlı prim hesaplama ekranları',
  'work.card2.desc':
    'Karmaşık iş kurallarına bağlı, alan değiştikçe anlık güncellenen hesaplama arayüzleri kuruyorum — büyük veri setleriyle performanslı çalışan MUI tablo ve form kombinasyonlarıyla.',
  'work.card2.tag1': 'React',
  'work.card2.tag2': 'MUI',
  'work.card2.tag3': 'Performans',
  'work.card3.file': 'design-system.tsx',
  'work.card3.title': 'Kurumsal form bileşen kütüphaneleri',
  'work.card3.desc':
    'Kurumsal marka kurallarına uygun, erişilebilirlik standartlarına uyumlu, farklı ekiplerin ortak kullandığı form bileşenleri kütüphaneleri kuruyorum — MUI temasını genişleterek.',
  'work.card3.tag1': 'MUI',
  'work.card3.tag2': 'Erişilebilirlik',
  'work.card3.tag3': 'Design system',

  // ---------- projeler ----------
  'projects.title': 'Projeler',
  'projects.intro':
    'Kurumsal işin dışında uçtan uca kendi sorumluluğumda kurduğum projeler — gerçek link, gerçek kod.',
  'projects.empty.text': 'Şu an vitrinde proje yok. Yenileri hazırlanıyor — bu arada',
  'projects.empty.link': 'doğrudan yazabilirsin',
  'projects.preview.placeholder': '[ ekran görüntüsü ]',
  'projects.link.demo': 'Demo',
  'projects.link.repo': 'Repo',

  // ---------- marquee ----------
  'marquee.item1': 'Full-Stack Developer',
  'marquee.item2': 'Enterprise Systems',
  'marquee.item3': 'Tip Güvenli Formlar',
  'marquee.item4': 'React · TypeScript',

  // ---------- yazilar ----------
  'writing.title': 'Yazılar',
  'writing.all': "Medium'da tümünü gör →",
  'writing.empty.text': 'Henüz burada yazı yok. Yeniler',
  'writing.empty.link': 'Medium hesabımda',
  'writing.empty.suffix': 'yayımlanıyor.',

  // ---------- mesai disinda ----------
  'off.title': 'Mesai dışında',
  'off.intro': 'Ekrandan uzaklaştığımda vaktimi nasıl geçirdiğim.',
  'off.photo.fishing.alt': 'Gece balık tutarken',
  'off.photo.hiking.alt': 'Dağ yürüyüşünde',
  'off.photo.paddleboard.alt': 'Deniz üzerinde SUP yaparken',

  // ---------- iletisim ----------
  'contact.title': 'Birlikte çalışalım',
  'contact.intro':
    'Kurumsal ölçekli bir ürün için full-stack desteğine mi ihtiyacınız var, yoksa sadece merhaba mı demek istiyorsunuz — yazın.',
  'contact.form.name': 'İsim',
  'contact.form.email': 'E-posta',
  'contact.form.message': 'Mesaj',
  'contact.form.submit': 'Gönder',
  'contact.form.sending': 'Gönderiliyor...',
  'contact.form.success': 'Mesajın iletildi, teşekkürler.',
  // {email} ve {status} calisma aninda doldurulan yer tutuculardir
  'contact.error.timeout':
    'Gönderim 15 saniyede tamamlanmadı. Bağlantın yavaş olabilir — tekrar dene veya {email} adresine yaz.',
  'contact.error.offline':
    'İnternet bağlantısı yok gibi görünüyor. Bağlanınca “Gönder”e tekrar bas.',
  'contact.error.invalid':
    'Form alanlarından biri kabul edilmedi. E-posta adresini kontrol edip tekrar dene.',
  'contact.error.rateLimit':
    'Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar dene veya {email} adresine yaz.',
  'contact.error.server':
    'Form servisi şu an yanıt vermiyor (hata {status}). Biraz sonra tekrar dene veya {email} adresine yaz.',
  'contact.error.http':
    'Mesaj gönderilemedi (hata {status}). {email} adresinden bana ulaşabilirsin.',
  'contact.error.network':
    'Sunucuya ulaşılamadı. Bağlantını kontrol edip tekrar dene veya {email} adresine yaz.',

  // ---------- footer ----------
  'footer.copyright': '© 2026 Mete Uçar',
  'footer.aria': 'Footer navigasyon',

  // ---------- 404 ----------
  'notfound.code': '404',
  'notfound.title': 'Bu sayfa yok.',
  'notfound.text':
    'Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Aşağıdan ana sayfaya dönebilir veya doğrudan yazabilirsin.',
  'notfound.home': 'Ana sayfaya dön',
  'notfound.contact': 'İletişime geç',
} as const;

export type UIKey = keyof typeof tr;

const en: Record<UIKey, string> = {
  // ---------- meta ----------
  'meta.title': 'Mete Uçar — Full-stack Developer',
  'meta.description':
    'Mete Uçar — mid-level full-stack developer building enterprise insurance products. React, TypeScript, MUI, React Hook Form, Zod.',
  'meta.404.title': 'Page not found — Mete Uçar',
  'meta.404.description':
    "The page you're looking for doesn't exist. Head back home or get in touch directly.",

  // ---------- erisilebilirlik ----------
  'a11y.skipLink': 'Skip to content',

  // ---------- nav ----------
  'nav.about': 'About',
  'nav.work': 'What I do',
  'nav.projects': 'Projects',
  'nav.writing': 'Writing',
  'nav.offTheClock': 'Off the clock',
  'nav.contact': 'Contact',
  'nav.aria.main': 'Main navigation',
  'nav.aria.mobile': 'Mobile navigation',
  'nav.aria.theme': 'Toggle theme',
  'nav.aria.menuOpen': 'Open menu',
  'nav.aria.menuClose': 'Close menu',
  'nav.aria.language': 'Change language',

  // ---------- hero ----------
  'hero.ghost': 'FULL-STACK',
  'hero.line1': 'I turn complex',
  'hero.line2': 'business rules into',
  'hero.line3': 'systems you can trust.',
  'hero.sub':
    'A full-stack developer building enterprise insurance products at 32Bit — type-safe interfaces with React and TypeScript, backed by services I build with Java and Spring Boot.',
  'hero.cta.primary': 'Get in touch',
  'hero.cta.secondary': 'See what I do',
  'hero.card.role.label': 'role',
  'hero.card.role.value': '"Full-stack developer"',
  'hero.card.focus.label': 'focus',
  'hero.card.focus.value': '"Enterprise systems"',
  'hero.card.stack.label': 'stack',
  'hero.card.stack.value': 'React · TypeScript · Java · Spring Boot',
  'hero.photo.alt': 'Mete Uçar',

  // ---------- stack strip ----------
  'stack.core.label': 'core',
  'stack.forms.label': 'form & validation',
  'stack.ui.label': 'ui',
  'stack.backend.label': 'backend',

  // ---------- hakkimda ----------
  'about.title': 'About',
  'about.p1':
    'I build enterprise-scale insurance products as a full-stack developer at 32Bit. Most of my work is about turning complex business rules — from premium calculations to multi-step application flows — into reliable, type-safe interfaces. I build on React and TypeScript, architect forms end to end with React Hook Form and Zod, and ship on top of Material UI while staying true to enterprise design systems.',
  'about.p2':
    "I like thinking a product through end to end: building the interface with React and TypeScript while also writing the services behind it in Java and Spring Boot, and shaping the design myself when needed. It means I don't see the job as merely turning a given design into code, but as owning the whole problem — from the data model to the screen the user sees. What drives me is building simple, predictable solutions in systems where the cost of a mistake is high.",
  'about.facts.company.label': 'company',
  'about.facts.company.value': '32Bit',
  'about.facts.role.label': 'role',
  'about.facts.role.value': 'Full-stack Developer',
  'about.facts.field.label': 'field',
  'about.facts.field.value': 'Enterprise insurance products',
  'about.facts.location.label': 'location',
  'about.facts.location.value': 'Aydın, Türkiye · Remote',

  // ---------- ne yapiyorum ----------
  'work.ghost': 'WORK',
  'work.title': 'What I do',
  'work.card1.file': 'policy-application.tsx',
  'work.card1.title': 'Multi-step policy application flows',
  'work.card1.desc':
    'I build conditionally branching, multi-step application flows — with React Hook Form and Zod discriminated-union schemas. Step-level validation, draft saving, and types auto-derived from the schema are all part of the standard setup.',
  'work.card1.tag1': 'React Hook Form',
  'work.card1.tag2': 'Zod',
  'work.card1.tag3': 'TypeScript',
  'work.card2.file': 'premium-engine.ts',
  'work.card2.title': 'Real-time premium calculation screens',
  'work.card2.desc':
    'I build calculation interfaces driven by complex business rules that update instantly as fields change — with MUI table and form combinations that stay performant on large datasets.',
  'work.card2.tag1': 'React',
  'work.card2.tag2': 'MUI',
  'work.card2.tag3': 'Performance',
  'work.card3.file': 'design-system.tsx',
  'work.card3.title': 'Enterprise form component libraries',
  'work.card3.desc':
    'I build shared form component libraries used across teams — aligned with corporate brand guidelines and accessibility standards — by extending the MUI theme.',
  'work.card3.tag1': 'MUI',
  'work.card3.tag2': 'Accessibility',
  'work.card3.tag3': 'Design system',

  // ---------- projeler ----------
  'projects.title': 'Projects',
  'projects.intro':
    'Projects I built end to end, on my own — outside my day job. Real links, real code.',
  'projects.empty.text': 'No projects on show right now. New ones are on the way — in the meantime,',
  'projects.empty.link': 'reach out directly',
  'projects.preview.placeholder': '[ screenshot ]',
  'projects.link.demo': 'Demo',
  'projects.link.repo': 'Repo',

  // ---------- marquee ----------
  'marquee.item1': 'Full-Stack Developer',
  'marquee.item2': 'Enterprise Systems',
  'marquee.item3': 'Type-Safe Forms',
  'marquee.item4': 'React · TypeScript',

  // ---------- yazilar ----------
  'writing.title': 'Writing',
  'writing.all': 'See all on Medium →',
  'writing.empty.text': 'No posts here yet. New ones go up',
  'writing.empty.link': 'on my Medium',
  'writing.empty.suffix': '.',

  // ---------- mesai disinda ----------
  'off.title': 'Off the clock',
  'off.intro': 'How I spend my time when I step away from the screen.',
  'off.photo.fishing.alt': 'Night fishing',
  'off.photo.hiking.alt': 'On a mountain hike',
  'off.photo.paddleboard.alt': 'Paddleboarding at sea',

  // ---------- iletisim ----------
  'contact.title': "Let's work together",
  'contact.intro':
    'Whether you need full-stack support for an enterprise-scale product or just want to say hello — drop me a line.',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.message': 'Message',
  'contact.form.submit': 'Send',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Your message has been sent — thank you.',
  'contact.error.timeout':
    "The request didn't finish within 15 seconds. Your connection may be slow — try again or email {email}.",
  'contact.error.offline':
    'You appear to be offline. Once you reconnect, hit "Send" again.',
  'contact.error.invalid':
    'One of the form fields was rejected. Check your email address and try again.',
  'contact.error.rateLimit':
    'Too many attempts. Try again in a few minutes or email {email}.',
  'contact.error.server':
    "The form service isn't responding right now (error {status}). Try again shortly or email {email}.",
  'contact.error.http':
    "Couldn't send your message (error {status}). You can reach me at {email}.",
  'contact.error.network':
    "Couldn't reach the server. Check your connection and try again, or email {email}.",

  // ---------- footer ----------
  'footer.copyright': '© 2026 Mete Uçar',
  'footer.aria': 'Footer navigation',

  // ---------- 404 ----------
  'notfound.code': '404',
  'notfound.title': "This page doesn't exist.",
  'notfound.text':
    'The address may be mistyped, or the page may have moved. Head back home below, or reach out directly.',
  'notfound.home': 'Back to home',
  'notfound.contact': 'Get in touch',
};

export const ui = { tr, en } as const;

/** Sozlukten metin okur. Anahtar o dilde yoksa varsayilan dile duser. */
export function t(key: UIKey, lang: Lang): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

/** Bilinmeyen bir degeri gecerli bir dil koduna indirger. */
export function toLang(value: string | undefined | null): Lang {
  return value && value in ui ? (value as Lang) : defaultLang;
}

/**
 * URL'den aktif dili cikarir. prefixDefaultLocale:false oldugu icin
 * "/" ve "/404" -> tr, "/en/..." -> en.
 */
export function getLangFromUrl(url: URL): Lang {
  return toLang(url.pathname.split('/')[1]);
}

/**
 * Yolu dil onekinden arindirir: "/en/foo" -> "foo", "/" -> "".
 * getRelativeLocaleUrl / getAbsoluteLocaleUrl'e verilecek yol budur.
 */
export function stripLangFromPath(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] && parts[0] in ui) parts.shift();
  return parts.join('/');
}

/** Icerik koleksiyonlarindaki { tr, en } alanlarindan aktif dildekini secer. */
export function pick<T>(field: Record<Lang, T>, lang: Lang): T {
  return field[lang] ?? field[defaultLang];
}

/** "{email}" gibi yer tutuculari doldurur. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match
  );
}
