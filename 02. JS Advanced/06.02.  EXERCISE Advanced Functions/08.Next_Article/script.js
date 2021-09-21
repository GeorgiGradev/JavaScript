function getArticleGenerator(articles) {
    return function showNext(){
        if (articles.length > 0){
            let area = document.querySelector('#content');
            let articleArea = document.createElement('article');
            articleArea.textContent = articles.shift();
            area.appendChild(articleArea);
        }
    }
}
