NK101 Nepal - static site (NE root + /en/)
=========================================

Структура
---------
/                      главная (непальский)
/register/  /apk/  /bonuses/  /slots/  /slots/sugar-rush-1000/
/en/ + те же пути     английская версия
/go/index.html         редирект на реф-ссылку (заменить REF_LINK - 3 вхождения в одном файле)
/css/style.css         общие стили (брейкпоинты 960 / 768 / 420)
/js/main.js            бургер-меню + переключатель языка
/img/                  сюда положить картинки (список ниже)
/sitemap.xml  /robots.txt  /404.html

Что заменить
------------
1. /go/index.html  ->  REF_LINK на реальную реф-ссылку.
2. Если домен будет не nk101.onrender.com - заменить "https://nk101.onrender.com"
   во всех html (canonical, hreflang, og:url, JSON-LD) и в sitemap.xml + robots.txt.

Картинки (имена файлов уже прописаны в html, alt на языке страницы)
-------------------------------------------------------------------
Логотип и иконки
  img/nk101-logo.webp            192x60  (шапка и футер)
  img/favicon.png                32x32
  img/apple-touch-icon.png       180x180

Hero-баннеры (1200x600, первый экран каждой страницы, также og:image)
  img/home-hero.webp
  img/register-hero.webp
  img/apk-hero.webp
  img/bonuses-hero.webp
  img/slots-hero.webp
  img/sugar-rush-1000-hero.webp

Баннеры в тексте (1024x440)
  главная:          img/home-games.webp, img/home-register.webp, img/home-mobile.webp
  register:         img/register-steps.webp, img/register-login.webp
  apk:              img/apk-install.webp, img/apk-safety.webp
  bonuses:          img/bonuses-welcome.webp, img/bonuses-deposit.webp
  slots:            img/slots-types.webp, img/slots-mobile.webp
  sugar-rush-1000:  img/sugar-rush-1000-grid.webp, img/sugar-rush-1000-free-spins.webp

Одни и те же файлы используются в NE и EN версиях.
