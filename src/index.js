import "./vendor/normalise.css";
import "./page/style.css";
import NewsApi from './js/modules/newsapi.js';
import NewsCard from './js/components/newscard.js';
import DataStorage from "./js/modules/datastorage.js";
import Datas from "./js/utelites/utilites.js";
import FormValidator from "./js/components/formvalid.js";
const numberOfCardInmore = 3;
const palaceContener = document.querySelector(".result-container__cards");
const Contener = document.querySelector(".result-container");
const DataStorages = new DataStorage();
const searchButton = document.querySelector(".search__button");
const searchMoreBtn = document.querySelector(".result-container__more");
const preLoader = document.querySelector(".search-result");
const noResult = document.querySelector(".noresult");
const dataSet = new Datas();
const FormValidators = new FormValidator(document.querySelector(".search__form"));
const erorsApi = document.querySelector(".eror");
const url = 'https://nomoreparties.co/news/v2/everything?';
const date = 'from=' + dataSet.getDataSevenDaysAgo() + '&';
const sort = "sortBy=popularity&";
const apiKey = 'apiKey=0de7c12f4e8247faada22fa0dfb2c30d';
const NewsApitoAnaliser = new NewsApi(url, date, sort, apiKey);
function searchSubmit(event) {
    const nameSearch = document.querySelector(".search__input").value;
    erorsApi.textContent = "";
    searchMoreBtn.removeAttribute('style', "display");
    preLoader.setAttribute('style', "display:" + "flex" + ";");
    noResult.setAttribute('style', "display:" + "none" + ";");
    event.preventDefault();
    palaceContener.innerHTML = "";
    NewsApitoAnaliser.getNevs("q=" + nameSearch + "&")
        .then(res => {
            if (!res.ok) {
                console.log(res.status);
                return Promise.reject(`Ошибка: ${res.status}`);
            }
            if (res.ok) {
                Contener.setAttribute('style', "display:" + "flex" + ";");
                return res.json();
            }
        })
        .then(data => {
            DataStorages.addTolocalStorage("name", document.querySelector(".search__input").value);
            if (data.articles.length < 1) {
                preLoader.setAttribute('style', "display:" + "none" + ";");
                Contener.setAttribute('style', "display:" + "none" + ";");
                noResult.setAttribute('style', "display:" + "flex" + ";");
            }
            DataStorages.addTolocalStorage("nevsArrForData", data.articles);
            data.articles.forEach(element => {
                element.publishedAt = dataSet.dataTransform(element.publishedAt);
            });
            preLoader.setAttribute('style', "display:" + "none" + ";");
            DataStorages.addTolocalStorage("nevsArr", data.articles);
            DataStorages.getTolocalStorage("nevsArr").slice(0, numberOfCardInmore).forEach(element => {
                const NewsCards = new NewsCard(element);
                palaceContener.appendChild(NewsCards.cardCreate());
            });
            DataStorages.addTolocalStorage("massivRender", DataStorages.getTolocalStorage("nevsArr").slice(0, numberOfCardInmore));
            DataStorages.addTolocalStorage("nevsArrPush", DataStorages.getTolocalStorage("nevsArr").slice(numberOfCardInmore));
        })
        .catch((err) => {
            console.log(err);
            erorsApi.textContent = err + " Новости не найдутся произошла ошибка сети.";
            Contener.setAttribute('style', "display:" + "none" + ";");
        });
}
function searchMore() {
    (DataStorages.getTolocalStorage("nevsArrPush")).slice(0, numberOfCardInmore).forEach(element => {
        const NewsCards = new NewsCard(element);
        palaceContener.appendChild(NewsCards.cardCreate());
    });
    DataStorages.addTolocalStorage("nevsArrPush", DataStorages.getTolocalStorage("nevsArrPush").slice(numberOfCardInmore));
    let massivRender = DataStorages.getTolocalStorage("nevsArr").slice(0, DataStorages.getTolocalStorage("nevsArr").length - DataStorages.getTolocalStorage("nevsArrPush").length);
    DataStorages.addTolocalStorage("massivRender", massivRender);
    if (DataStorages.getTolocalStorage("nevsArrPush").length == 0) {
        searchMoreBtn.setAttribute('style', "display:" + "none" + ";");
    }

};
if (DataStorages.getTolocalStorage("nevsArrPush")) {
    Contener.setAttribute('style', "display:" + "none" + ";");
}

if (DataStorages.getTolocalStorage("massivRender") !== null) {
    if (DataStorages.getTolocalStorage("massivRender").length != 0) {
        Contener.setAttribute('style', "display:" + "flex" + ";");
        DataStorages.getTolocalStorage("massivRender").forEach(element => {
            const NewsCards = new NewsCard(element);
            palaceContener.appendChild(NewsCards.cardCreate());
        });
        document.querySelector(".search__input").value = DataStorages.getTolocalStorage("name");
    }
};
searchButton.addEventListener('click', searchSubmit);
searchMoreBtn.addEventListener('click', searchMore);
FormValidators.valid();

3







