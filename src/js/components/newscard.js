export default class NewsCard {
    constructor(cardObj) {
        this.name = cardObj.source.name;
        this.title = cardObj.title;
        this.publishedAt = cardObj.publishedAt;
        this.description = cardObj.description;
        this.urlToImage = cardObj.urlToImage;
        this.url = cardObj.url;
    }

    cardCreate() {
        const link = document.createElement('a');
        link.setAttribute('href', this.url);
        link.setAttribute('target', "blanck");
        link.classList.add("link");
        const cardElement = document.createElement('article');
        const cardImage = document.createElement('div');
        const cardData = document.createElement('p');
        const cardName = document.createElement('h3');
        const cardDescription = document.createElement('p');
        const cardResurse = document.createElement('p');

        cardElement.classList.add("card");
        cardImage.classList.add("card__image-container");
        cardData.classList.add("card__data");
        cardName.classList.add("card__title");
        cardDescription.classList.add("card__description");
        cardResurse.classList.add("card__resurs");

        cardImage.setAttribute('style', "background-image:" + "url('" + this.urlToImage + "');");
        cardImage.textContent = "";

        cardName.textContent = ((this.title.split(" ")).slice(0, 4)).join(" ") + "...";
        cardData.textContent = this.publishedAt;
        if (this.description) {
            cardDescription.textContent = ((this.description.split(" ")).slice(0, 12)).join(" ") + "...";
        }
        cardResurse.textContent = this.name;


        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardData);
        cardElement.appendChild(cardName);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardResurse);
        cardElement.appendChild(link);
        this.cardElement = cardElement;
        return this.cardElement;
    }

}

