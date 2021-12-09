import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllIdeas } from '../api/data.js';

const catalogTemplate = (ideas) => html`
<div id="dashboard-holder">
    ${ideas.length == 0 ? html`<h1>No ideas yet! Be the first one :)</h1>` : ideas.map(ideaTemplate)}
</div>`;

const ideaTemplate = (idea) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src=${idea.img} alt="Card image cap">
    <a class="btn" href="/details/${idea._id}">Details</a>
</div>`;

export async function catalogPage(ctx) {
    const ideas = await getAllIdeas();
    console.log(ideas);
    ctx.render(catalogTemplate(ideas));
    
}

