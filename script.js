// Кнопка «Наверх»
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Бургер-меню
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const toggleMenu = (open) => {
  const isOpen = open ?? !menu.classList.contains('open');
  menu.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
};

burger.addEventListener('click', () => toggleMenu());

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) toggleMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleMenu(false);
});