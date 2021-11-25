import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles } from '../api/data.js';

const homeTemplate = (js, cSharp, java, python) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        <article>
        ${!js  ? html`<h3 class="no-articles">No articles yet</h3>` : html`
            <h3>${js.title}</h3>
            <p>${js.content}</p>
            <a href="/details/${js._id}" class="btn details-btn">Details</a>
       `}
        </article>
    </section>
    
    <section class="recent csharp">
    <h2>C#</h2>
        <article>
        ${!cSharp  ? html`<h3 class="no-articles">No articles yet</h3>` : html`
            <h3>${cSharp.title}</h3>
            <p>${cSharp.content}</p>
            <a href="/details/${cSharp._id}" class="btn details-btn">Details</a>
       `}
        </article>
    </section>

    <section class="recent java">
    <h2>Java</h2>
        <article>
        ${!java  ? html`<h3 class="no-articles">No articles yet</h3>` : html`
            <h3>${java.title}</h3>
            <p>${java.content}</p>
            <a href="/details/${java._id}" class="btn details-btn">Details</a>
       `}
        </article>
    </section>

    <section class="recent python">
    <h2>Python</h2>
        <article>
        ${!python  ? html`<h3 class="no-articles">No articles yet</h3>` : html`
            <h3>${python.title}</h3>
            <p>${python.content}</p>
            <a href="/details/${python._id}" class="btn details-btn">Details</a>
       `}
        </article>
    </section>
 
</section>`;

export async function homePage(ctx) {
    const articles = await getRecentArticles();
    console.log(articles);

    const js = articles.find(x => x.category == 'JavaScript');
    const cSharp = articles.find(x => x.category == 'C#');
    const java = articles.find(x => x.category == 'Java');
    const python = articles.find(x => x.category == 'Python');

    ctx.render(homeTemplate(js, cSharp, java, python));

}
