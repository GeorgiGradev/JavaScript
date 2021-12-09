import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteIdea, getIdeaById } from '../api/data.js';

const detailsTemplate = (idea, isOwner, onDelete) => html`
<div class="container home some">
    <img class="det-img" src=${idea.img} />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    ${isOwner ? html`<div class="text-center">
        <a @click=${onDelete} class="btn detb" href="javascript:void(0)">Delete</a>
    </div>` : ''}

</div>`;

export async function detailsPage(ctx) {
    const ideaId = ctx.params.id;
    const idea = await getIdeaById(ideaId);
    const isOwner = ctx.user && idea._ownerId == ctx.user._id;
    ctx.render(detailsTemplate(idea, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteIdea(ideaId);
            ctx.page.redirect('/catalog');
        }
    }
}
