(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('main-nav');
  var langBtn = document.querySelector('.lang-btn');
  var langMenu = document.querySelector('.lang-menu');

  function closeNav() {
    if (!nav || !burger) return;
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  function closeLang() {
    if (!langMenu || !langBtn) return;
    langMenu.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  }

  if (burger && nav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeLang();
    });
  }
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = langMenu.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeNav();
    });
  }
  document.addEventListener('click', function (e) {
    if (langMenu && !e.target.closest('.lang')) closeLang();
    if (nav && nav.classList.contains('open') && !e.target.closest('.site-header')) closeNav();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeLang(); closeNav(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) closeNav();
  });
})();
