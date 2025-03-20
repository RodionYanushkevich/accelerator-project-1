// https://swiperjs.com/get-started#installation
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slides = document.querySelectorAll('.slider-juri__slide');
const slidesContainer = document.querySelector('.slider-juri__swiper');

const mousePreventDeffault = () => {
  slidesContainer.addEventListener('mousedown', (evt) => {
    evt.preventDefault();
  });
};

const swiper = new Swiper('.slider-juri__swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      updateTabIndexAttribute(this);
    },
    slideChange: function () {
      updateTabIndexAttribute(this);
      if (window.innerWidth >= 1366) {
        mousePreventDeffault();
      }
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
    },
  },
});

// еще подумай
slidesContainer.addEventListener('focusin', (evt) => {
  const focusedSlide = evt.target.closest('.slider-juri__slide');
  if (focusedSlide) {
    const index = focusedSlide.getAttribute('data-swiper-slide-index');
    swiper.slideTo(index);
    // swiper.slides[swiper.activeIndex + 1].setAttribute('tabindex', '0');
  }
});

function updateTabIndexAttribute() {
  slides.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
}
