import "../vendor/normalise.css";
import "../page/infostyle.css";
import Swiper from '../../node_modules/swiper/swiper-bundle.js';
import GithubApi from '../js/modules/githubapi.js';
import CommitCard from '../js/components/commitcard.js';
import DataStorage from "../js/modules/datastorage.js";
const DataStorageGithub = new DataStorage();



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
       768: {
          slidesPerView: 2,
          spaceBetween: -80,
          centeredSlidesBounds:true,
          loop:false
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: -180
          }
      }
    
  })


  /* Получаем коммиты гитхаба */

/* Константы для настройки гитхаб апи */
const urlGithub = "https://api.github.com/repos/genalll/diplom/commits"
/* Константы для настройки гитхаб апи */
const GithubApis = new GithubApi(urlGithub);
GithubApis.getCommits()
.then(res => {
    if (res.ok) {
        console.log("ОК")
        return res.json();
    }
})
.then(data => {
        DataStorageGithub.addTolocalStorage("massivRenderSlide", data.slice(0,20));
        DataStorageGithub.getTolocalStorage("massivRenderSlide").forEach(element => {
          const CommitCards = new CommitCard(element);
          mySwiper.appendSlide(CommitCards.CommitCardCreate());
          console.log(CommitCards.CommitCardCreate());
        });
})
.catch((err) => {
    console.log(err);
});
/* Получаем коммиты гитхаба */


