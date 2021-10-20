class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) === false){
            throw new Error(`This article model is not included in this gallery!`);
        }
        let currentArticle = this.listOfArticles
                    .find(x => x.articleModel === articleModel.toLowerCase() && x.articleName === articleName);
        if (currentArticle){
            currentArticle.quantity += quantity;

        } else {
            const newArticle = {
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: quantity
            };
            this.listOfArticles.push(newArticle);

        };
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality){
        if (this.guests.some(x => x.guestName === guestName)){
            throw new Error(`${guestName} has already been invited.`);
        }    
        const newGuest = {
            guestName: guestName,
            points: 0,
            purchaseArticles: 0
        };

        if (personality === "Vip"){
             newGuest.points = 500;
        } else if (personality === 'Middle'){
            newGuest.points = 250;
        } else {
            newGuest.points = 100;
        }

        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName){
        const article = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        const guest = this.guests.find(x => x.guestName === guestName);
        if (!article || this.possibleArticles.hasOwnProperty(articleModel) === false) {
            throw new Error(`This article is not found.`);
        }
        if (article.quantity <= 0){
            return `The ${articleName} is not available.`;
        }
        if (!guest){
            return `This guest is not invited.`;
        }
        if (guest.points < this.possibleArticles[articleModel]){
            return `You need to more points to purchase the article.`;
        }

        guest.points -= this.possibleArticles[articleModel];
        article.quantity -= 1;
        guest.purchaseArticles += 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria){
        const output = [];
        if (criteria === 'article'){
            output.push('Articles information:');
            for (const article of this.listOfArticles) {
                output.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
        } else if (criteria === 'guest'){
            output.push('Guests information:');
            for (const guest of this.guests) {
                output.push(`${guest.guestName} - ${guest.purchaseArticles}`);
            }
        }
        return output.join('\n');
    }
}