// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}
