export default class NewsCard {
    constructor(cardObj) {
        this.name=cardObj.source.name;
        this.title=cardObj.title;
        this.publishedAt=cardObj.publishedAt;
        this.description=cardObj.description;
        this.urlToImage=cardObj.urlToImage;
        this.url=cardObj.url;
    }

    CardCreate() {
        
    }

}

