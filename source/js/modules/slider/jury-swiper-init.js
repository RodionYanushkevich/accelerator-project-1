// https://swiperjs.com/get-started#installation
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slides = document.querySelectorAll('.slider-juri__slide');

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
      updateSlidesList(this);
      updateTabIndexAttribute(this);
    },
  },
});

function updateSlidesList(juriSwiper) {
  slides.forEach((slide) => {
    slide.addEventListener('focus', (evt) => {
      if (juriSwiper.activeIndex < '4') {
        if (evt.target.classList.contains('swiper-slide-next')) {
          juriSwiper.slideNext();
        }
      }
    });

  }
  );
}

function updateTabIndexAttribute(juriSwiper) {
  slides.forEach((slide) => {
    slide.setAttribute('tabindex', '-1');
  });
  const activeSlide = juriSwiper.slides[juriSwiper.activeIndex];
  const nextSlide = juriSwiper.slides[juriSwiper.activeIndex + 1];
  activeSlide.setAttribute('tabindex', '0');
  nextSlide.setAttribute('tabindex', '0');
  if (juriSwiper.activeIndex > '3') {
    juriSwiper.slides[7].addEventListener('blur', () => {
      juriSwiper.slideTo(0);
    });

    slides.forEach((slide) => {
      slide.setAttribute('tabindex', '0');
    });
  }
}
