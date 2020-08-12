import "./vendor/normalise.css";
import "./page/style.css";
import NewsApi from './js/modules/newsapi.js';
import NewsCard from './js/components/newscard.js';
import GithubApi from './js/modules/githubapi.js';
import CommitCard from './js/components/commitcard.js';



/* Получаем json новостей */

/**Константы для настройки апи новостей **/
const url = 'https://praktikum.tk/news/v2/everything?'; 
const date =   'from=2020-08-05&';
const sort =    "sortBy=popularity&";
const apiKey= 'apiKey=0de7c12f4e8247faada22fa0dfb2c30d';
/**Константы для настройки апи новостей **/

const NewsApitoAnaliser = new NewsApi(url,date,sort,apiKey);

NewsApitoAnaliser.getNevs("q=Екатеринбург&")
    .then(res => {
        if (res.ok) {
            console.log("ОК")
            return res.json();
        }
    })
    .then(data => {
        console.log(data);
        /* Создаем 1 карту */
        const NewsCards = new NewsCard(data.articles[0]);
        /* Создаем 1 карту */
    })
    .catch((err) => {
        console.log(err);
    });
/* Получаем json новостей */







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
    console.log(data[0]);
    console.log(new CommitCard(data[0]));

})
.catch((err) => {
    console.log(err);
});
/* Получаем коммиты гитхаба */