class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {picture: 200, photo: 50, item: 250};
        this.listOfArticles = [];
        this.guests = []
    }

    addArticle( articleModel, articleName, quantity ) {
        if(this.possibleArticles[articleModel.toLowerCase()] == undefined) {
            throw new Error("This article model is not included in this gallery!")
        }
        const article = this.listOfArticles.find(x => x.articleName == articleName);
        if(!article) {
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity})
        } else {
            article.quantity += quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest ( guestName, personality) {
        if(this.guests.find(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points = 50;
            if(personality == 'Vip') {
                points = 500
            } else if(personality == 'Middle') {
                points = 250
            }
          this.guests.push({guestName, points, purchaseArticle: 0})
          return `You have successfully invited ${guestName}!`
        }
    }
    buyArticle ( articleModel, articleName, guestName) {
        const article = this.listOfArticles.find(x => x.articleName == articleName);
        if(!article || article.articleModel != articleModel.toLowerCase()) {
            throw new Error("This article is not found.")
        }
        if(article.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        const guest = this.guests.find(x => x.guestName == guestName)
        if(!guest) {
            return "This guest is not invited."
        }
        const articlePoint = this.possibleArticles[articleModel.toLowerCase()]
        if(articlePoint > guest.points) {
            return "You need to more points to purchase the article."
        }
        article.quantity -= 1;
        guest.purchaseArticle += 1;
        guest.points -= articlePoint
        return `${guestName} successfully purchased the article worth ${articlePoint} points.`
    }

    showGalleryInfo (criteria) {
        let result = []

        if(criteria == 'article') {
            result.push("Articles information:")
            for(let article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
        } else {
            result.push("Guests information:")
            for(let guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }
        return(result.join('\n'))
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




