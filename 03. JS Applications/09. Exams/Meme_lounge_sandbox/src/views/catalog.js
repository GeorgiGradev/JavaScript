import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes } from '../api/data.js';
import { memeTemplate } from './common/meme.js';

const catalogTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
        <!-- Display : If there are no memes in database -->
        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : memes.map(memeTemplate)}
    </div>
</section>`;

export async function catalogPage(ctx) {
    const memes = await getAllMemes();
    ctx.render(catalogTemplate(memes));
}
