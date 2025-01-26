export const initRepairSlider = () => {
  const sliderContainer = document.querySelector('[data-repair-slider]');

  // eslint-disable-next-line no-undef
  sliderContainer && new Swiper(sliderContainer, {
    watchOverflow: true,
    lazy: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      0: {
        slidesPerView: 0.3,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: '[data-repair-slider] .swiper-pagination',
      clickable: true,
      bulletElement: 'button',
    },
  });
};
