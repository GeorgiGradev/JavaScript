import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllArticles } from '../api/data.js';
import { articleTemplate } from './common/article.js';

const catalogTemplate = (articles) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>
    ${articles.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : 
        articles.map(articleTemplate)}
</section>`;

export async function catalogPage(ctx) {
    const articles = await getAllArticles();
    ctx.render(catalogTemplate(articles));
}
