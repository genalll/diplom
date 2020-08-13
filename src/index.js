import "./vendor/normalise.css";
import "./page/style.css";
import NewsApi from './js/modules/newsapi.js';
import NewsCard from './js/components/newscard.js';
import DataStorage from "./js/modules/datastorage.js";
import Datas from "./js/utelites/utilites.js";
const palaceContener = document.querySelector(".result-container__cards");
const Contener = document.querySelector(".result-container");
const DataStorages = new DataStorage();
const searchButton = document.querySelector(".search__button");
const searchMoreBtn = document.querySelector(".result-container__more");
const preLoader = document.querySelector(".search-result");
const noResult = document.querySelector(".noresult");
const dataSet = new Datas();




/* Получаем json новостей */

/**Константы для настройки апи новостей **/
const url = 'https://praktikum.tk/news/v2/everything?';
const date = 'from='+dataSet.getDataSevenDaysAgo()+'&';
const sort = "sortBy=popularity&";
const apiKey = 'apiKey=0de7c12f4e8247faada22fa0dfb2c30d';
/**Константы для настройки апи новостей **/

const NewsApitoAnaliser = new NewsApi(url, date, sort, apiKey);


function searchSubmit() {
    searchMoreBtn.removeAttribute('style', "display");
    Contener.setAttribute('style', "display:" + "flex" + ";");
    preLoader.setAttribute('style', "display:" + "flex" + ";");
    noResult.setAttribute('style', "display:" + "none" + ";");
    event.preventDefault();
    palaceContener.innerHTML = "";
    const nameSearch = document.querySelector(".search__input").value;
    DataStorages.addTolocalStorage("name", document.querySelector(".search__input").value);
    NewsApitoAnaliser.getNevs("q=" + nameSearch + "&")
        .then(res => {
            if (res.ok) {
                console.log("ОК")
                return res.json();
            }
        })
        .then(data => {
            if (data.articles.length<1){
                preLoader.setAttribute('style', "display:" + "none" + ";");
                Contener.setAttribute('style', "display:" + "none" + ";");
                noResult.setAttribute('style', "display:" + "flex" + ";");
            }
            data.articles.forEach(element => {
                element.publishedAt = dataSet.dataTransform(element.publishedAt);
              });
            console.log(data);
            preLoader.setAttribute('style', "display:" + "none" + ";");
            DataStorages.addTolocalStorage("nevsArr", data.articles);
            DataStorages.getTolocalStorage("nevsArr").slice(0, 3).forEach(element => {
                const NewsCards = new NewsCard(element);
                palaceContener.appendChild(NewsCards.cardCreate());
            });
            DataStorages.addTolocalStorage("massivRender", DataStorages.getTolocalStorage("nevsArr").slice(0, 3));
            DataStorages.addTolocalStorage("nevsArrPush", DataStorages.getTolocalStorage("nevsArr").slice(3));
        })
        .catch((err) => {
            console.log(err);
        });
}
/* Получаем json новостей */

function searchMore() {
    (DataStorages.getTolocalStorage("nevsArrPush")).slice(0, 3).forEach(element => {
        const NewsCards = new NewsCard(element);
        palaceContener.appendChild(NewsCards.cardCreate());
    });
    DataStorages.addTolocalStorage("nevsArrPush", DataStorages.getTolocalStorage("nevsArrPush").slice(3));
    //console.log(DataStorages.getTolocalStorage("nevsArrPush"))
    //console.log(DataStorages.getTolocalStorage("nevsArr"))
    let massivRender = DataStorages.getTolocalStorage("nevsArr").slice(0, DataStorages.getTolocalStorage("nevsArr").length - DataStorages.getTolocalStorage("nevsArrPush").length);
    DataStorages.addTolocalStorage("massivRender", massivRender);
    console.log(DataStorages.getTolocalStorage("massivRender"));
    if (DataStorages.getTolocalStorage("nevsArrPush").length==0){
        searchMoreBtn.setAttribute('style', "display:" + "none" + ";");
    }
};




if (DataStorages.getTolocalStorage("massivRender").length!=0) {
    Contener.setAttribute('style', "display:" + "flex" + ";");
    DataStorages.getTolocalStorage("massivRender").forEach(element => {
        const NewsCards = new NewsCard(element);
        palaceContener.appendChild(NewsCards.cardCreate());
    });
    document.querySelector(".search__input").value = DataStorages.getTolocalStorage("name");
};





searchButton.addEventListener('click', searchSubmit);
searchMoreBtn.addEventListener('click', searchMore);










