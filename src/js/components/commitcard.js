export default class CommitCard {
    constructor(cardObj) {
        this.name=cardObj.commit.author.name;
        this.email=cardObj.commit.author.email;
        this.date=cardObj.commit.committer.date;
        this.message=cardObj.commit.message;
        this.avatar_url=cardObj.author.avatar_url;
    }

    CommitCardCreate() {
        const swiperSlide = document.createElement('div');
        const slideElement = document.createElement('article');
        const slideData = document.createElement('p');
        const slideNameContainer = document.createElement('div');
        const slideImage = document.createElement('div');
        const SlideContacktContainer = document.createElement('div');
        const slideName = document.createElement('h3');
        const slideDescription = document.createElement('p');
        const SlideMailLinck = document.createElement('a');

        swiperSlide.classList.add("swiper-slide");
        slideElement.classList.add("slide");
        slideData.classList.add("slide__data");
        slideNameContainer.classList.add("slide__name-container");
        slideImage.classList.add("slide__image-container");
        SlideContacktContainer.classList.add("slide__contackt-container");
        slideName.classList.add("slide__name");
        slideDescription.classList.add("slide__description");
        SlideMailLinck.classList.add("slide__mail-linck");

        slideImage.setAttribute('style', "background-image:" + "url('" + this.avatar_url + "');");
        slideData.textContent=this.date;
        slideName.textContent=this.name;
        slideDescription.textContent=this.message;
        SlideMailLinck.textContent=this.email;
        
        SlideContacktContainer.appendChild(slideName);
        SlideContacktContainer.appendChild(SlideMailLinck);
        slideNameContainer.appendChild(slideImage);
        slideNameContainer.appendChild(SlideContacktContainer);
        slideElement.appendChild(slideData);
        slideElement.appendChild(slideNameContainer);
        slideElement.appendChild(slideDescription);
        swiperSlide.appendChild(slideElement);
        this.swiperSlide = swiperSlide;
        return swiperSlide;

 }

}

