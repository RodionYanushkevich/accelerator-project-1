// https://swiperjs.com/get-started#installation
// import 'swiper/css';

import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const swiper = new Swiper('.reviews-slider', {
  modules:[Navigation],
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
