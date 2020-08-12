export default class CommitCard {
    constructor(cardObj) {
        this.name=cardObj.commit.author.name;
        this.email=cardObj.commit.author.email;
        this.date=cardObj.commit.committer.date;
        this.message=cardObj.commit.message;
        this.avatar_url=cardObj.author.avatar_url;
    }

    CommitCardCreate() {
        
    }

}

