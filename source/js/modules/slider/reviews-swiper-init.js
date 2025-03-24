import Swiper from '../../vendor/swiper-bundle.min';

new Swiper('.reviews-slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', },
  breakpoints: {
    1366: {
      simulateTouch: false,
    },
  }});
