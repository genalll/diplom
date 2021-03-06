export default class NewsApi {
    constructor(url, date, sort, apiKey) {
        this.url = url;
        this.date = date;
        this.sort = sort;
        this.apikey = apiKey
    }

    getNevs(theme) {
        return fetch(this.url + theme + "language=ru&" + "pageSize=100&" + this.date + this.sort + this.apikey)
    }

}