export const initMobileMenu = () => {
  const header = document.querySelector('.header');
  const toggleButton = header.querySelector('[data-burger]');

  toggleButton.addEventListener('click', () => {
    header.classList.toggle('is-open');
  });
};
