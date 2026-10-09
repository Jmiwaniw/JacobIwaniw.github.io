const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
if (button && nav) {
  button.hidden = false;
  document.documentElement.classList.add('has-js');
  const closeMenu = () => { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); button.textContent = 'Menu'; };
  button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); button.textContent = open ? 'Close' : 'Menu'; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { closeMenu(); button.focus(); } });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
}
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
