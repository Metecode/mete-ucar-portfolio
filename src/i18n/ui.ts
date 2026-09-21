// Tum arayuz metinleri burada. Bilesenlerde metin HARDCODE EDILMEZ; t(key, lang)
// ile buradan okunur. tr sozlugu kaynaktir: en, Record<UIKey, string> olarak
// yazildigi icin bir anahtar unutulursa TypeScript derlemede uyarir.
//
// NOT: "[EN]" onekli degerler henuz cevrilmemis placeholder'lardir. Gercek
// Ingilizce metinler geldikce bu onekler kaldirilacak. Onek tasimayan en
// degerleri (teknoloji adlari, e-posta, mono etiketler) bilerek iki dilde aynidir.

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
  'about.facts.location.value': 'İstanbul, Türkiye',

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
  'meta.title': '[EN] Mete Uçar — Full-stack Developer',
  'meta.description':
    '[EN] Mete Uçar — kurumsal sigorta ürünleri üzerine çalışan mid-level Full-stack developer. React, TypeScript, MUI, React Hook Form, Zod.',
  'meta.404.title': '[EN] Sayfa bulunamadı — Mete Uçar',
  'meta.404.description':
    '[EN] Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya doğrudan iletişime geçebilirsiniz.',

  // ---------- erisilebilirlik ----------
  'a11y.skipLink': '[EN] İçeriğe geç',

  // ---------- nav ----------
  'nav.about': '[EN] Hakkımda',
  'nav.work': '[EN] Ne yapıyorum',
  'nav.projects': '[EN] Projeler',
  'nav.writing': '[EN] Yazılar',
  'nav.offTheClock': '[EN] Mesai dışında',
  'nav.contact': '[EN] İletişim',
  'nav.aria.main': '[EN] Ana navigasyon',
  'nav.aria.mobile': '[EN] Mobil navigasyon',
  'nav.aria.theme': '[EN] Temayı değiştir',
  'nav.aria.menuOpen': '[EN] Menüyü aç',
  'nav.aria.menuClose': '[EN] Menüyü kapat',
  'nav.aria.language': '[EN] Dili değiştir',

  // ---------- hero ----------
  'hero.ghost': 'FULL-STACK',
  'hero.line1': '[EN] Karmaşık iş kurallarını,',
  'hero.line2': '[EN] güvenilir sistemlere',
  'hero.line3': '[EN] dönüştürüyorum.',
  'hero.sub':
    "[EN] 32Bit bünyesinde kurumsal sigorta ürünleri geliştiren bir full-stack developer'ım; React ve TypeScript ile tip güvenli arayüzler, Java ve Spring Boot ile bunları besleyen servisler kuruyorum.",
  'hero.cta.primary': '[EN] İletişime geç',
  'hero.cta.secondary': '[EN] Ne yaptığımı gör',
  'hero.card.role.label': 'role',
  'hero.card.role.value': '"Full-stack developer"',
  'hero.card.focus.label': 'focus',
  'hero.card.focus.value': '"Enterprise systems"',
  'hero.card.stack.label': 'stack',
  'hero.card.stack.value': 'React · TypeScript · Java · Spring Boot',
  'hero.photo.alt': 'Mete Uçar',

  // ---------- stack strip ----------
  'stack.core.label': 'core',
  'stack.forms.label': '[EN] form & validasyon',
  'stack.ui.label': '[EN] arayüz',
  'stack.backend.label': 'backend',

  // ---------- hakkimda ----------
  'about.title': '[EN] Hakkımda',
  'about.p1':
    "[EN] 32Bit'te full-stack developer olarak enterprise ölçekli sigorta ürünleri geliştiriyorum. İşimin çoğu, karmaşık iş kurallarını — prim hesaplamalarından çok adımlı başvuru akışlarına kadar — güvenilir, tip güvenli arayüzlere dönüştürmekten oluşuyor. React ve TypeScript'i temel alıyor, React Hook Form ve Zod ile form mimarilerini uçtan uca kurguluyor, Material UI üzerinde kurumsal tasarım sistemlerine sadık kalarak üretim yapıyorum.",
  'about.p2':
    "[EN] Bir ürünü uçtan uca düşünmeyi seviyorum: React ve TypeScript ile arayüzü kurarken, Java ve Spring Boot ile arkasındaki servisleri de yazıyor, gerektiğinde tasarımı kendim kurguluyorum. Bu, bir işi 'sadece verilen tasarımı koda dökmek' olarak değil, problemin bütününü — veri modelinden son kullanıcının gördüğü ekrana kadar — sahiplenmek olarak görmemi sağlıyor. Beni motive eden şey; hatanın maliyetinin yüksek olduğu sistemlerde sade ve öngörülebilir çözümler kurabilmek.",
  'about.facts.company.label': '[EN] şirket',
  'about.facts.company.value': '32Bit',
  'about.facts.role.label': '[EN] rol',
  'about.facts.role.value': 'Full-stack Developer',
  'about.facts.field.label': '[EN] alan',
  'about.facts.field.value': '[EN] Kurumsal sigorta ürünleri',
  'about.facts.location.label': '[EN] konum',
  'about.facts.location.value': '[EN] İstanbul, Türkiye',

  // ---------- ne yapiyorum ----------
  'work.ghost': 'WORK',
  'work.title': '[EN] Ne yapıyorum',
  'work.card1.file': 'policy-application.tsx',
  'work.card1.title': '[EN] Çok adımlı poliçe başvuru akışları',
  'work.card1.desc':
    '[EN] Koşullu dallanan, çok adımlı başvuru akışları kuruyorum — React Hook Form ve Zod discriminated union şemalarıyla; adım bazlı doğrulama, taslak kaydetme ve şemadan otomatik türetilen tipler işin standart parçası.',
  'work.card1.tag1': 'React Hook Form',
  'work.card1.tag2': 'Zod',
  'work.card1.tag3': 'TypeScript',
  'work.card2.file': 'premium-engine.ts',
  'work.card2.title': '[EN] Gerçek zamanlı prim hesaplama ekranları',
  'work.card2.desc':
    '[EN] Karmaşık iş kurallarına bağlı, alan değiştikçe anlık güncellenen hesaplama arayüzleri kuruyorum — büyük veri setleriyle performanslı çalışan MUI tablo ve form kombinasyonlarıyla.',
  'work.card2.tag1': 'React',
  'work.card2.tag2': 'MUI',
  'work.card2.tag3': '[EN] Performans',
  'work.card3.file': 'design-system.tsx',
  'work.card3.title': '[EN] Kurumsal form bileşen kütüphaneleri',
  'work.card3.desc':
    '[EN] Kurumsal marka kurallarına uygun, erişilebilirlik standartlarına uyumlu, farklı ekiplerin ortak kullandığı form bileşenleri kütüphaneleri kuruyorum — MUI temasını genişleterek.',
  'work.card3.tag1': 'MUI',
  'work.card3.tag2': '[EN] Erişilebilirlik',
  'work.card3.tag3': 'Design system',

  // ---------- projeler ----------
  'projects.title': '[EN] Projeler',
  'projects.intro':
    '[EN] Kurumsal işin dışında uçtan uca kendi sorumluluğumda kurduğum projeler — gerçek link, gerçek kod.',
  'projects.empty.text': '[EN] Şu an vitrinde proje yok. Yenileri hazırlanıyor — bu arada',
  'projects.empty.link': '[EN] doğrudan yazabilirsin',
  'projects.preview.placeholder': '[ screenshot ]',
  'projects.link.demo': 'Demo',
  'projects.link.repo': 'Repo',

  // ---------- marquee ----------
  'marquee.item1': 'Full-Stack Developer',
  'marquee.item2': 'Enterprise Systems',
  'marquee.item3': '[EN] Tip Güvenli Formlar',
  'marquee.item4': 'React · TypeScript',

  // ---------- yazilar ----------
  'writing.title': '[EN] Yazılar',
  'writing.all': "[EN] Medium'da tümünü gör →",
  'writing.empty.text': '[EN] Henüz burada yazı yok. Yeniler',
  'writing.empty.link': '[EN] Medium hesabımda',
  'writing.empty.suffix': '[EN] yayımlanıyor.',

  // ---------- mesai disinda ----------
  'off.title': '[EN] Mesai dışında',
  'off.intro': '[EN] Ekrandan uzaklaştığımda vaktimi nasıl geçirdiğim.',
  'off.photo.fishing.alt': '[EN] Gece balık tutarken',
  'off.photo.hiking.alt': '[EN] Dağ yürüyüşünde',
  'off.photo.paddleboard.alt': '[EN] Deniz üzerinde SUP yaparken',

  // ---------- iletisim ----------
  'contact.title': '[EN] Birlikte çalışalım',
  'contact.intro':
    '[EN] Kurumsal ölçekli bir ürün için full-stack desteğine mi ihtiyacınız var, yoksa sadece merhaba mı demek istiyorsunuz — yazın.',
  'contact.form.name': '[EN] İsim',
  'contact.form.email': '[EN] E-posta',
  'contact.form.message': '[EN] Mesaj',
  'contact.form.submit': '[EN] Gönder',
  'contact.form.sending': '[EN] Gönderiliyor...',
  'contact.form.success': '[EN] Mesajın iletildi, teşekkürler.',
  'contact.error.timeout':
    '[EN] Gönderim 15 saniyede tamamlanmadı. Bağlantın yavaş olabilir — tekrar dene veya {email} adresine yaz.',
  'contact.error.offline':
    '[EN] İnternet bağlantısı yok gibi görünüyor. Bağlanınca “Gönder”e tekrar bas.',
  'contact.error.invalid':
    '[EN] Form alanlarından biri kabul edilmedi. E-posta adresini kontrol edip tekrar dene.',
  'contact.error.rateLimit':
    '[EN] Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar dene veya {email} adresine yaz.',
  'contact.error.server':
    '[EN] Form servisi şu an yanıt vermiyor (hata {status}). Biraz sonra tekrar dene veya {email} adresine yaz.',
  'contact.error.http':
    '[EN] Mesaj gönderilemedi (hata {status}). {email} adresinden bana ulaşabilirsin.',
  'contact.error.network':
    '[EN] Sunucuya ulaşılamadı. Bağlantını kontrol edip tekrar dene veya {email} adresine yaz.',

  // ---------- footer ----------
  'footer.copyright': '© 2026 Mete Uçar',
  'footer.aria': '[EN] Footer navigasyon',

  // ---------- 404 ----------
  'notfound.code': '404',
  'notfound.title': '[EN] Bu sayfa yok.',
  'notfound.text':
    '[EN] Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Aşağıdan ana sayfaya dönebilir veya doğrudan yazabilirsin.',
  'notfound.home': '[EN] Ana sayfaya dön',
  'notfound.contact': '[EN] İletişime geç',
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
