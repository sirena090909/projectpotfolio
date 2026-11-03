// Кнопка «Наверх»
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Порог появления (в пикселях)
const SHOW_AFTER = 300;

// Следим за прокруткой и показываем/скрываем кнопку
window.addEventListener('scroll', () => {
  if (window.scrollY > SHOW_AFTER) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Плавно прокручиваем к началу страницы
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

// Закрыть меню по клику на пункт (на мобиле)
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.matchMedia('(max-width: 768px)').matches) {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Закрыть по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
});
 

