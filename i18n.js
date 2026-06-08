const LANG_KEY = 'mursoft-lang';

const translations = {
    ru: {
        'meta.title': 'MurSoftware — простые программы для компьютера',
        'meta.description': 'Маленькие и полезные программы для Windows. Всё бесплатно, код открыт. Есть на GitHub.',
        'nav.home': 'Главная',
        'nav.programs': 'Программы',
        'nav.murflame': 'MurFlame Launcher',
        'nav.about': 'Обо мне',
        'nav.contact': 'Контакты',
        'nav.github': 'GitHub',
        'nav.telegram': 'Telegram',
        'hero.title': 'Простые программы для компьютера',
        'hero.subtitle': 'Здравствуйте! Я делаю маленькие и полезные программы. Они не навязывают рекламу, не следят за вами. Всё работает просто и понятно.',
        'hero.btnProjects': 'Посмотреть программы',
        'hero.btnGithub': 'Мой GitHub',
        'hero.btnTelegram': 'Telegram канал',
        'programs.title': 'Мои программы',
        'programs.subtitle': 'Скачивайте только со страницы GitHub — так надёжнее.',
        'murkms.desc': 'Настройка лицензии Windows за один клик. Очень просто.',
        'murkms.howTitle': 'Как работает',
        'murkms.how': 'Программа сама настраивает Windows. Ничего лишнего не устанавливает.',
        'murtools.desc': 'Сразу несколько полезных штук: MurBlocker, разблокировка файлов и MurKey.',
        'murtools.howTitle': 'Как работает',
        'murtools.how': 'Запустили — и она делает своё дело. Всё просто.',
        'murblocker.desc': 'Закрывает доступ к сайтам и программам к которым попросите.',
        'murblocker.howTitle': 'Как работает',
        'murblocker.how': 'Добавляет пару строчек в системный файл. Всё, больше ничего не трогает.',
        'murblocker.tag.noBg': 'Не грузит компьютер',
        'common.downloadExe': 'Скачать программу (GitHub)',
        'common.sourceCode': 'Посмотреть код (GitHub)',
        'common.virustotal': 'Проверка на вирусы (VirusTotal)',
        'common.versionHistory': 'Что нового в обновлениях',
        'about.title': 'Обо мне',
        'about.desc': 'Привет! Я начинающий разработчик. Делаю маленькие и полезные программы для Windows. Весь код открыт — вы сами можете посмотреть, что внутри нет ничего вредного.',
        'about.f1': 'Открытый код на GitHub',
        'about.f2': 'Программы лёгкие и быстрые',
        'about.f3': 'Никаких секретов',
        'about.f4': 'Совсем бесплатно',
        'about.githubBtn': 'Открыть GitHub',
        'about.telegramBtn': 'Подписаться в Telegram',
        'stats.projects': 'Проектов',
        'stats.opensource': 'Открытый код',
        'murflame.tag4': 'Новинка',
        'stats.releases': 'Скачать на GitHub',
        'contact.title': 'Контакты',
        'contact.subtitle': 'Вопросы или проблемы — пишите!',
        'contact.github': 'GitHub',
        'contact.email': 'Почта',
        'contact.telegram': 'Telegram',
        'contact.telegramDesc': 'Новости и обновления',
        'footer.tagline': 'Маленькие полезные программы для Windows',
        'footer.githubBtn': 'GitHub — Barsik-topYT',
        'footer.telegramBtn': 'Telegram — @MurSoftware',
        'footer.projects': 'Проекты',
        'footer.site': 'На сайте',
        'footer.about': 'Обо мне',
        'footer.programs': 'Программы',
        'footer.contact': 'Контакты',
        'footer.disclaimer': 'Программы сделаны для учёбы и личного использования. Пользуйтесь на свой страх и риск.',
        'theme.aria': 'Сменить тему',
            'theme.title': 'Тёмная или светлая тема',
            'lang.aria': 'Выбор языка',
            'scrollTop.aria': 'Наверх',
            'versions.fallback': 'Список версий',
            'mf.back': 'На главную',
            'mf.badge': 'Новый лаунчер для Minecraft',
            'mf.title': 'MurFlame Launcher',
            'mf.subtitle': 'Простой, быстрый и безопасный лаунчер. Без рекламы, без слежки, с открытым кодом.',
            'mf.download': 'Скачать',
            'mf.github': 'GitHub',
            'mf.features.title': 'Почему MurFlame?',
            'mf.features.subtitle': 'Всё, что нужно для комфортной игры',
            'mf.f1.title': 'Молниеносная скорость',
            'mf.f1.desc': 'Запускается за секунды и быстро загружает любые версии Minecraft',
            'mf.f2.title': 'Полная безопасность',
            'mf.f2.desc': 'Открытый код — вы сами можете проверить, что внутри нет ничего вредного',
            'mf.f3.title': 'Никакой рекламы',
            'mf.f3.desc': 'Играйте без назойливых баннеров и всплывающих окон',
            'mf.download.title': 'Готовы играть?',
            'mf.download.subtitle': 'Скачайте последнюю версию и начинайте!',
            'mf.source': 'Исходный код',
            'mf.mainSite': 'Основной сайт'
        },
        en: {
        'meta.title': 'MurSoftware — simple computer tools',
        'meta.description': 'Small useful Windows tools. Free, open source. Available on GitHub.',
        'nav.home': 'Home',
        'nav.programs': 'Programs',
        'nav.murflame': 'MurFlame Launcher',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.github': 'GitHub',
        'nav.telegram': 'Telegram',
        'hero.title': 'Simple tools for your PC',
        'hero.subtitle': 'Hi! I make small, useful tools for Windows. No ads, no tracking. Everything works simply and clearly.',
        'hero.btnProjects': 'View programs',
        'hero.btnGithub': 'My GitHub',
        'hero.btnTelegram': 'Telegram channel',
        'programs.title': 'My programs',
        'programs.subtitle': 'Download only from GitHub Releases — it\'s safer.',
        'murkms.desc': 'Set up Windows license with one click. Very simple.',
        'murkms.howTitle': 'How it works',
        'murkms.how': 'The program sets up Windows itself. Doesn\'t install anything extra.',
        'murtools.desc': 'Several useful tools in one: disk cleanup, file unlocker, and more.',
        'murtools.howTitle': 'How it works',
        'murtools.how': 'Run it — and it does its job. Simple.',
        'murblocker.desc': 'Blocks websites and apps. No background processes — nothing runs in the background.',
        'murblocker.howTitle': 'How it works',
        'murblocker.how': 'Adds a couple of lines to a system file. That\'s all.',
        'murblocker.tag.noBg': 'No extra load',
        'common.downloadExe': 'Download program (GitHub)',
        'common.sourceCode': 'View source code (GitHub)',
        'common.virustotal': 'Virus check (VirusTotal)',
        'common.versionHistory': 'What\'s new',
        'about.title': 'About me',
        'about.desc': 'Hi! I\'m a beginner developer. I make small, useful Windows tools. All code is open — you can see for yourself there\'s nothing bad inside.',
        'about.f1': 'Open source on GitHub',
        'about.f2': 'Light and fast',
        'about.f3': 'No secrets',
        'about.f4': 'Completely free',
        'about.githubBtn': 'Open GitHub',
        'about.telegramBtn': 'Subscribe on Telegram',
        'stats.projects': 'Projects',
        'stats.opensource': 'Open source',
        'murflame.tag4': 'New',
        'stats.releases': 'Download on GitHub',
        'contact.title': 'Contact',
        'contact.subtitle': 'Questions or problems? Write me!',
        'contact.github': 'GitHub',
        'contact.email': 'Email',
        'contact.telegram': 'Telegram',
        'contact.telegramDesc': 'News and updates',
        'footer.tagline': 'Small useful tools for Windows',
        'footer.githubBtn': 'GitHub — Barsik-topYT',
        'footer.telegramBtn': 'Telegram — @MurSoftware',
        'footer.projects': 'Projects',
        'footer.site': 'On site',
        'footer.about': 'About',
        'footer.programs': 'Programs',
        'footer.contact': 'Contact',
        'footer.disclaimer': 'Programs are for learning and personal use. Use at your own risk.',
        'theme.aria': 'Change theme',
            'theme.title': 'Dark or light theme',
            'lang.aria': 'Language selection',
            'scrollTop.aria': 'Back to top',
            'versions.fallback': 'Version list',
            'mf.back': 'Back to main',
            'mf.badge': 'New Minecraft launcher',
            'mf.title': 'MurFlame Launcher',
            'mf.subtitle': 'Simple, fast and secure launcher. No ads, no tracking, open source.',
            'mf.download': 'Download',
            'mf.github': 'GitHub',
            'mf.features.title': 'Why MurFlame?',
            'mf.features.subtitle': 'Everything you need for comfortable gaming',
            'mf.f1.title': 'Lightning fast',
            'mf.f1.desc': 'Launches in seconds and quickly loads any Minecraft version',
            'mf.f2.title': 'Complete security',
            'mf.f2.desc': 'Open source — you can check for yourself that there\'s nothing malicious inside',
            'mf.f3.title': 'No ads',
            'mf.f3.desc': 'Play without annoying banners and pop-ups',
            'mf.download.title': 'Ready to play?',
            'mf.download.subtitle': 'Download the latest version and get started!',
            'mf.source': 'Source code',
            'mf.mainSite': 'Main site'
        }
    };

function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'ru') return stored;
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('en') ? 'en' : 'ru';
}

function setLang(lang) {
    if (lang !== 'ru' && lang !== 'en') return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangButtons(lang);
    document.dispatchEvent(new CustomEvent('mursoft:langchange', { detail: { lang } }));
}

function t(key, lang) {
    const l = lang || getLang();
    return translations[l]?.[key] ?? translations.ru[key] ?? key;
}

function applyTranslations(lang) {
    const l = lang || getLang();

    document.title = t('meta.title', l);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description', l));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key, l);
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), l));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), l));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.setAttribute('title', t(el.getAttribute('data-i18n-title'), l));
    });
}

function updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
}

function initI18n() {
    const lang = getLang();
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangButtons(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = btn.getAttribute('data-lang');
            if (next && next !== getLang()) {
                setLang(next);
                document.querySelector('.hamburger')?.classList.remove('active');
                document.querySelector('.nav-menu')?.classList.remove('active');
            }
        });
    });
}

if (typeof window !== 'undefined') {
    window.MurSoftI18n = { getLang, setLang, t, applyTranslations, LANG_KEY };
}