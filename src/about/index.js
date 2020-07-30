import "../vendor/normalise.css";
import Swiper from '../../node_modules/swiper/swiper-bundle.esm.browser.js';
import '../../node_modules/swiper/swiper-bundle.css';
import "../page/infostyle.css";

console.log("info");

const mySwiper= new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween:-180,
    updateOnWindowResize:true,	
    watchOverflow: false,
    updateOnWindowResize:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
       640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: -180
          }
      }
    
  })