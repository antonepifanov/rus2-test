export const initRepairSlider = () => {
  const sliderContainer = document.querySelector('[data-repair-slider]');

  // eslint-disable-next-line no-undef
  sliderContainer && new Swiper(sliderContainer, {
    watchOverflow: true,
    lazy: true,
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      577: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      0: {
        slidesPerView: 0.7,
        spaceBetween: 16,
      },
    },
    pagination: {
      el: '[data-repair-slider] .swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
  });
};
