import { Code2, Layout, Smartphone, Mail, Gamepad2 } from "lucide-react";

export const SITE_DATA = {
    hero: {
        name: "Sofia Shtokalova",
        role: "Frontend & Email Developer",
        status: "Ищу работу / Стажировку",
        description: "Разработчик с 5-летним бэкграундом. Студентка ХПИ. Создаю адаптивные сайты, Pixel Perfect письма и понимаю, как работает код на низком уровне.",
    },
    about: {
        text: [
            "Я в IT уже 5 лет. Мой путь начался в центре «Гранд», где я изучила всё: от компьютерной графики до веб-разработки. Это дало мне понимание того, как работают проекты целиком, а не только их код.",
            "Сейчас я получаю высшее образование в НТУ «ХПИ» по специальности «Инженерия программного обеспечения». Углубленно изучаю C, C++ и C#, что помогает мне писать оптимизированный и логически выверенный код.",
            "У меня есть подтвержденные сертификаты уровня PRO (7 уровень). Я умею работать в команде, соблюдать дедлайны и понимаю важность коммуникации с дизайнерами (так как сама изучала дизайн).",
        ],
    },
    certificates: [
        {
            name: "IT-Course: Full Coverage",
            description: "Комплексный курс: Web (JS, PHP, HTML), C++, Python, Дизайн.",
            image: "/cert-main.jpg"
        },
        {
            name: "Professional Level 7",
            description: "Продвинутый уровень: Программирование и Видеопродакшн.",
            image: "/cert-pro.jpg"
        },
    ],
    skills: [
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JS"] },
        { category: "Engineering", items: ["C / C++", "C#", "OOP", "Algorithms"] }, // Добавил инженерный блок
        { category: "Email Dev", items: ["HTML Email", "MJML", "Litmus", "Responsive"] },
        { category: "Tools", items: ["Figma", "Git", "VS Code", "Netlify", "Vercel"] },
    ],
    projects: [
        {
            slug: "gaming-portal",
            category: "Website",
            title: "Социальный E-commerce проект «PawShop»",
            description: "Многофункциональный зоомагазин с интеграцией платформы для поиска дома бездомным животным. Реализован интерактивный 3D-фон, динамический поиск/фильтрация товаров, система «Избранного» и микро-анимации интерфейса.",
            fullDescription: "Интеграция библиотеки Three.js для создания генеративного фона с частицами и GSAP для плавного появления карточек. Реализована логика «умной» корзины с сохранением состояния в localStorage и звуковым сопровождением.",
            tags: ["Three.js", "GSAP", "JS"],
            links: { demo: "https://petsuppliesforportfoliosk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-7/blob/main/index.html" },
            challenge: "Реализация математического расчета траектории полета товара в корзину (getBoundingClientRect) и оптимизация рендеринга 3D-сцены поверх HTML-контента.",
            image: "/project-site.jpg"
        },

        {
            slug: "coffee-shop",
            category: "Website",
            title: "Сервис предзаказа «Mama's Coffee»",
            description: "Уютный SPA-сайт кофейни с функционалом интернет-магазина. Реализован динамический каталог напитков и десертов, «умная» корзина с подсчетом стоимости добавок (сиропы, топинги) и полностью адаптивный интерфейс.",
            fullDescription: "Использование CSS Grid для построения нестандартной сетки меню. Реализация анимаций появления контента через Intersection Observer API для повышения производительности при скролле.",
            tags: ["HTML", "CSS", "Algorithms"],
            links: { demo: "https://mamascoffeportfoliosk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-6/blob/main/index.html" },
            challenge: "Реализация калькулятора стоимости напитка с учетом разных модификаторов (размер, молоко, добавки) без использования Backend-логики.",
            image: "/project-site2.jpg"
        },
        {
            slug: "lego-landing",
            category: "Website",
            title: "Сервис доставки «Ninjago Sushi»",
            description: "Тематический SPA-сайт доставки еды с уникальным дизайном. Реализован динамический рендеринг каталога из JSON-структуры, мгновенная фильтрация категорий без перезагрузки страницы и полноценная логика корзины с управлением заказом.",
            fullDescription: "Использование backdrop-filter для создания эффекта матового стекла (Glassmorphism) в интерфейсе. Реализация кастомного прелоадера (Loader) с анимацией <ворот> при входе на сайт.",
            tags: ["HTML5", "CSS3", "JS"],
            links: { demo: "https://ninjagosushiforportfoliosk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-5/blob/main/index.html" },
            challenge: "Реализация State Management (управления состоянием) корзины и ее полная синхронизация с DOM-деревом на чистом JavaScript без фреймворков.",
            image: "/project-site3.jpg"
        },
        {
            slug: "architecture-agency",
            category: "Website",
            title: "Сайт эксперта по недвижимости «Kharkiv Estate»",
            description: "Премиальный лендинг для агента по недвижимости с темной темой. Реализован инерционный скролл (Smooth Scroll), параллакс-эффекты, динамическая бегущая строка и каталог объектов с детальным просмотром в модальных окнах.",
            fullDescription: "Интеграция библиотеки Lenis для плавности прокрутки и GSAP ScrollTrigger для сложных анимаций появления контента. Верстка выполнена с использованием CSS Variables для легкой смены цветовых акцентов.",
            tags: ["HTML5", "CSS3", "GSAP / Lenis"],
            links: { demo: "https://kharkivrealtorgulyakoroleva.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-4/blob/main/index.html" },
            challenge: "Синхронизация кастомного плавного скролла с анимациями триггеров (ScrollTrigger) и реализация динамической смены контента в модальном окне через Data-атрибуты.",
            image: "/project-site4.jpg"
        },
        {
            slug: "corporate-site",
            category: "Website",
            title: "Корпоративный сайт «SK.Future»",
            description: "Многостраничный веб-ресурс для IT-компании с каталогом услуг и блогом. Реализована сложная адаптивная верстка, интерактивные формы обратной связи (валидация на JS) и плавные анимации интерфейса.",
            fullDescription: "Использование препроцессора SCSS для модульной архитектуры стилей и методологии БЭМ. Настройка семантической верстки для SEO-оптимизации.",
            tags: ["HTML5", "SCSS", "JS"],
            links: { demo: "https://futureprojectforsk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-3/blob/main/index.html" },
            challenge: "Реализация Pixel Perfect верстки со сложной геометрией (Glassmorphism) и ее полная адаптация под мобильные устройства.",
            image: "/project-site5.jpg"
        },
        {
            slug: "admin-site",
            category: "Website",
            title: "CRM-система управления бизнесом «Nexus Admin Pro»",
            description: "Адаптивная панель администратора (SPA) для управления заказами и клиентской базой. Реализован полноценный UI/UX интерфейс с поддержкой переключения тем (Dark/Light Mode), динамическим обновлением статистики и адаптивностью под мобильные устройства. Интерфейс работает без перезагрузки страниц.",
            fullDescription: "Разработка SPA-архитектуры (Single Page Application) на чистом JavaScript без использования фреймворков. Реализована система маршрутизации между вкладками («Дашборд», «Заказы», «Клиенты») через манипуляцию DOM-классами. Внедрена система темизации через CSS Custom Properties (переменные :root), позволяющая мгновенно переключать цветовую схему приложения. Данные таблиц и статистики рендерятся динамически на основе JavaScript-объектов.",
            tags: ["HTML5", "SCSS", "JS"],
            links: { demo: "https://nexusadminproforsk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-2/blob/main/index.html" },
            challenge: "Ручная отрисовка интерактивных графиков на Canvas API. Вместо использования готовых библиотек, реализован собственный движок визуализации данных на HTML5 Canvas. Написан алгоритм расчета координат точек графика (ctx.lineTo) и динамической заливки градиентом (createLinearGradient) в зависимости от размера контейнера и входящего массива данных.",
            image: "/project-site6.jpg"
        },
        {
            slug: "kazino-site",
            category: "Website",
            title: "Игровая платформа «ROYAL BET»",
            description: "Адаптивный веб-ресурс, симулирующий работу онлайн-казино с функционалом административной панели. Реализована система «умной» фильтрации игр, динамическое управление вероятностью выигрыша (RTP) и сохранение состояния баланса пользователя. Интерфейс полностью адаптирован под мобильные устройства (Mobile First).",
            fullDescription: "Разработка SPA-подобного интерфейса на чистом JavaScript без использования тяжелых фреймворков. Реализована имитация серверного отклика для игрового процесса (спинов) с использованием setTimeout. Внедрена логика сохранения пользовательского баланса в localStorage, что позволяет удерживать прогресс между перезагрузками страницы.",
            tags: ["HTML5", "SCSS", "JS", "LocalStorage"],
            links: { demo: "https://kazinoforsk.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-1/blob/main/index.html" },
            challenge: "Реализация алгоритма RTP Control (Return to Player): Разработка логики административного ползунка, который в реальном времени изменяет математическую вероятность выпадения выигрышной комбинации в скрипте. Интеграция визуальной шкалы «Win/Lose», динамически меняющей цвет в зависимости от <щедрости> настроек.",
            image: "/project-site7.jpg"
        },
        {
            slug: "email-welcome",
            category: "Email",
            title: "Адаптивное HTML-письмо «Newsletter»",
            description: "Кроссбраузерный шаблон для маркетинговых рассылок. Верстка выполнена на таблицах (Table-based layout) для обеспечения максимальной совместимости с почтовыми клиентами (Outlook, Gmail, Apple Mail). Реализована адаптивная структура, трансформирующаяся под мобильные устройства.",
            fullDescription: "Использование XHTML 1.0 Transitional и инлайн-стилей для гарантированного отображения стилей во всех клиентах. Реализация CSS-сбросов для Microsoft Outlook (свойства mso-) и медиа-запросов для перестроения колонок товаров в вертикальный стек на смартфонах.",
            tags: ["HTML Table", "Inline CSS", "Mobile First"],
            links: { demo: "https://htmlnewsletterr.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-8/blob/main/index.html" },
            challenge: "Обеспечение корректного рендеринга в старых версиях MS Outlook и реализация адаптивной сетки (Stacking Columns) без использования современных Flexbox/Grid.",
            image: "/project-email.jpg"
        },
        {
            slug: "email-promo-sale",
            category: "Email",
            title: "Адаптивное HTML-письмо «Newsletter»",
            description: "Кроссбраузерный шаблон для маркетинговых рассылок. Верстка выполнена на таблицах (Table-based layout) для обеспечения максимальной совместимости с почтовыми клиентами (Outlook, Gmail, Apple Mail). Реализована адаптивная структура, трансформирующаяся под мобильные устройства.",
            fullDescription: "Использование XHTML 1.0 Transitional и инлайн-стилей для гарантированного отображения стилей во всех клиентах. Реализация CSS-сбросов для Microsoft Outlook (свойства mso-) и медиа-запросов для перестроения колонок товаров в вертикальный стек на смартфонах.",
            tags: ["HTML Table", "Inline CSS", "Mobile First"],
            links: { demo: "https://htmlnewsletterrr.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-9/blob/main/index.html" },
            challenge: "Обеспечение корректного рендеринга в старых версиях MS Outlook и реализация адаптивной сетки (Stacking Columns) без использования современных Flexbox/Grid.",
            image: "/project-email2.jpg"
        },
        {
            slug: "email-gmail-sale",
            category: "Email",
            title: "Адаптивное HTML-письмо «Newsletter»",
            description: "Кроссбраузерный шаблон для маркетинговых рассылок. Верстка выполнена на таблицах (Table-based layout) для обеспечения максимальной совместимости с почтовыми клиентами (Outlook, Gmail, Apple Mail). Реализована адаптивная структура, трансформирующаяся под мобильные устройства.",
            fullDescription: "Использование XHTML 1.0 Transitional и инлайн-стилей для гарантированного отображения стилей во всех клиентах. Реализация CSS-сбросов для Microsoft Outlook (свойства mso-) и медиа-запросов для перестроения колонок товаров в вертикальный стек на смартфонах.",
            tags: ["HTML Table", "Inline CSS", "Email Dev"],
            links: { demo: "https://htmlnewsletterrrr.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-10/blob/main/index.html" },
            challenge: "Обеспечение корректного рендеринга в старых версиях MS Outlook и реализация адаптивной сетки (Stacking Columns) без использования современных Flexbox/Grid.",
            image: "/project-email3.jpg"
        },
        {
            slug: "email-promo-newsletter",
            category: "Email",
            title: "Адаптивное HTML-письмо «Newsletter»",
            description: "Кроссбраузерный шаблон для маркетинговых рассылок. Верстка выполнена на таблицах (Table-based layout) для обеспечения максимальной совместимости с почтовыми клиентами (Outlook, Gmail, Apple Mail). Реализована адаптивная структура, трансформирующаяся под мобильные устройства.",
            fullDescription: "Использование XHTML 1.0 Transitional и инлайн-стилей для гарантированного отображения стилей во всех клиентах. Реализация CSS-сбросов для Microsoft Outlook (свойства mso-) и медиа-запросов для перестроения колонок товаров в вертикальный стек на смартфонах.",
            tags: ["HTML Table", "Inline CSS", "Email Dev"],
            links: { demo: "https://htmlnewsletterrrrr.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-11/blob/main/index.html" },
            challenge: "Обеспечение корректного рендеринга в старых версиях MS Outlook и реализация адаптивной сетки (Stacking Columns) без использования современных Flexbox/Grid.",
            image: "/project-email4.jpg"
        },
        {
            slug: "email-promo-notification",
            category: "Email",
            title: "Адаптивное HTML-письмо «Newsletter»",
            description: "Кроссбраузерный шаблон для маркетинговых рассылок. Верстка выполнена на таблицах (Table-based layout) для обеспечения максимальной совместимости с почтовыми клиентами (Outlook, Gmail, Apple Mail). Реализована адаптивная структура, трансформирующаяся под мобильные устройства.",
            fullDescription: "Использование XHTML 1.0 Transitional и инлайн-стилей для гарантированного отображения стилей во всех клиентах. Реализация CSS-сбросов для Microsoft Outlook (свойства mso-) и медиа-запросов для перестроения колонок товаров в вертикальный стек на смартфонах.",
            tags: ["HTML Table", "Inline CSS", "Email Dev"],
            links: { demo: "https://htmlnewsletterrrrrr.netlify.app/", repo: "https://github.com/onSophia/my-portfolio-12/blob/main/index.html" },
            challenge: "Обеспечение корректного рендеринга в старых версиях MS Outlook и реализация адаптивной сетки (Stacking Columns) без использования современных Flexbox/Grid.",
            image: "/project-email5.jpg"
        },
    ],
    pricing: [
        {
            title: "HTML Письмо",
            price: "от 1 500 грн",
            description: "Верстка письма, которое не развалится в Outlook.",
            features: ["Табличная верстка", "Тесты отображения", "Адаптив", "Срок: 1-2 дня"],
            icon: Mail,
            popular: false,
        },
        {
            title: "Сайт-визитка",
            price: "от 5 000 грн",
            description: "Легкий сайт для презентации услуг.",
            features: ["Уникальный дизайн", "Анимации", "Мобильная версия", "Срок: 3-5 дней"],
            icon: Layout,
            popular: true,
        },
        {
            title: "Веб-приложение",
            price: "от 9 000 грн",
            description: "Функциональный сайт на React/Next.js.",
            features: ["React", "API", "База данных", "Срок: от 2 недель"],
            icon: Smartphone,
            popular: false,
        },
    ],
    contact: {
        email: "sashtokalova@gmail.com",
        telegram: "https://t.me/sophiaDvl",
        github: "https://github.com/your_username",
    },
};