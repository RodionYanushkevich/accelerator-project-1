// https://swiperjs.com/get-started#installation
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slides = document.querySelectorAll('.slider-juri__slide');
const slidesContainer = document.querySelector('.slider-juri');

const swiper = new Swiper('.slider-juri__swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    },
  },
  on: {
    init: function () {
      updateTabIndexAttribute(this);
    },
    slideChange: function () {
      updateTabIndexAttribute(this);
    },
  },
});


slidesContainer.addEventListener('focusin', (evt) => {
  const focusedSlide = evt.target.closest('.slider-juri__slide');
  if (focusedSlide) {
    const index = Array.from(slides).indexOf(focusedSlide);
    swiper.slideTo(index);
  }
});

function updateTabIndexAttribute(juriSwiper) {
  slides.forEach((slide) => {
    if (juriSwiper.activeIndex < '3'){
      slide.setAttribute('tabindex', '-1');
    } else {
      slide.setAttribute('tabindex', '0');

    }
  });

  const activeSlide = juriSwiper.slides[juriSwiper.activeIndex];
  const nextSlide = juriSwiper.slides[juriSwiper.activeIndex + 1];

  activeSlide.setAttribute('tabindex', '0');
  nextSlide.setAttribute('tabindex', '0');

}
