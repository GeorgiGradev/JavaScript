import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteGame, getGameById, createComment, getComments } from '../api/data.js';
import { getUserData } from '../utility.js';

const detailsTemplate = (game, isOwner, onDelete, comments, onClickComment, user) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : html``}
            <ul>
                ${comments.map(commentTemplate)}
            </ul>
        </div>

        ${isOwner ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${user && !isOwner ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onClickComment} class="form">
            <textarea id="addComment" name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : null}
</section>`;

const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;


export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
    const user = getUserData();
    const isOwner = user && game._ownerId == user._id;
    let comments = await getComments(gameId);
    update();

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteGame(gameId);
            ctx.page.redirect('/');
        }
    }

    async function onClickComment(event) {
        event.preventDefault();
        const textArea = document.getElementById("addComment");
        if (textArea.value != "") {
            await createComment({
                gameId: gameId,
                comment: textArea.value
            });
            comments = await getComments(gameId);
            event.target.reset();
            update();
        } else {
            return alert("Please enter comment!");
        }
    }
    async function update() {
        ctx.render(detailsTemplate(game, isOwner, onDelete, comments, onClickComment, user));
    }
}
