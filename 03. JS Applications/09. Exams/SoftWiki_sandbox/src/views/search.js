import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';
import { articleTemplate } from './common/article.js';

const searchTemplate = (articles, onSearch, query) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        <!-- ${articles.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` :  articles.map(articleTemplate)} -->

        ${(() => {
            if (articles.length == 0 || query == '') {
               return html`<h3 class="no-articles">No matching articles</h3>`;
            } else {
               return articles.map(articleTemplate);
            }
        })()}
    </div>
</section>`;


export async function searchPage(ctx) {
    let articles = [];
    ctx.render(searchTemplate(articles, onSearch));

    async function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('search');
        articles = await search(query);
        event.target.reset();
        ctx.render(searchTemplate(articles, onSearch, query));
    }
}
