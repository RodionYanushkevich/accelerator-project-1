// https://swiperjs.com/get-started#installation
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const slides = document.querySelectorAll('.slider-juri__slide');
const slidesContainer = document.querySelector('.slider-juri__swiper');

let isActive = false;

const mousePreventDeffault = (evt) => {
  evt.preventDefault();
};

const updateTabIndexAttribute = () => {
  slides.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
};

const focusSwiperInit = () => {
  slidesContainer.addEventListener('focusin', (evt) => {

    if(evt.target.tagName === 'LI') {
      document.addEventListener('keydown', tabKeydownPreventDeffault);
    }

  }
  );
  slidesContainer.addEventListener('focusout', () => {
    document.removeEventListener('keydown', tabKeydownPreventDeffault);
  });
};

const swiper = new Swiper('.slider-juri__swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      focusSwiperInit(this);
      updateTabIndexAttribute();
    },
    slideChange: function () {
      if (window.innerWidth >= 1366 && !isActive) {
        slidesContainer.addEventListener('mousedown', mousePreventDeffault);
        isActive = true ;
      }
      if (window.innerWidth < 1366 && isActive) {
        slidesContainer.removeEventListener('mousedown', mousePreventDeffault);
        isActive = false ;
      }
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      simulateTouch: true,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
    },
  },
});

function tabKeydownPreventDeffault (evt) {
  const prevSlide = document.querySelector('.swiper-slide-active');
  const nextSlide = document.querySelector('.swiper-slide-next');

  if (evt.key === 'Tab') {
    evt.preventDefault();
    if (evt.shiftKey) {

      swiper.slidePrev();
      prevSlide.focus();
    } else {

      swiper.slideNext();
      nextSlide.focus();
    }
  }

  if (evt.key === 'Escape') {
    evt.preventDefault();
    slidesContainer.querySelector('.swiper-button-next').focus();
  }
}
