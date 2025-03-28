import Swiper from '../../vendor/swiper-bundle.min';

const slidesContainer = document.querySelector('.slider-juri__swiper');
const slides = document.querySelectorAll('.slider-juri__slide');
const nextButton = slidesContainer.querySelector('.swiper-button-next');

let isActive = false;
let isTabPressed = false;

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
      document.addEventListener('keydown', tabKeydownEvents);
    }
  }
  );
  slidesContainer.addEventListener('focusout', () => {
    document.removeEventListener('keydown', tabKeydownEvents);
  });
};

const swiper = new Swiper('.slider-juri__swiper', {
  loop: true,
  speed: 300,
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
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
    },
  },
});


function tabKeydownEvents (evt) {
  const prevSlide = slidesContainer.querySelector('.swiper-slide-active');
  const nextSlide = slidesContainer.querySelector('.swiper-slide-next');

  if (evt.key === 'Tab') {
    evt.preventDefault();
    if (evt.shiftKey) {

      swiper.slidePrev();
      prevSlide.focus();


    } else if(!isTabPressed){

      if (swiper.realIndex === swiper.slides.length - 1 && +prevSlide.getAttribute('data-swiper-slide-index') === swiper.slides.length - 1) {
        nextButton.focus();
        return;
      }

      swiper.slideNext();
      nextSlide.focus();

      isTabPressed = true;

      setTimeout(() => {
        isTabPressed = false;
      }, 300);
    }
  }

  if (evt.key === 'Escape') {
    evt.preventDefault();
    nextButton.focus();
  }
}
