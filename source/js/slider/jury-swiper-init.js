// import '../js/swiper-bundle.min.js';
// хмм;
// https://swiperjs.com/get-started#installation
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';
// import Swiper from 'swiper';

// import Swiper from '../../vendor/swiper-bundle.min.js';

const swiper = new Swiper('.swiper-container', {
  loop: false,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

