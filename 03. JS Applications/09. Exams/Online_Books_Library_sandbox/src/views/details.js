import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteBook, getBookById, getTotalLikesCount, likeBook, didUserLikeBook} from '../api/data.js';
import { getUserData } from '../utility.js';

const detailsTemplate = (book, isOwner, onDelete, totalLikes, user, clickLike, didUserLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}

            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${(() => {
                if (user && !isOwner && didUserLike == 0) {
                   return html`<a @click=${clickLike} class="button" href="javascript:void(0)">Like</a>`; 
                }
            })()}
            
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>

        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    const user = getUserData();
    const isOwner = user && book._ownerId == user._id;
    let totalLikes = await getTotalLikesCount(bookId);
    let didUserLike = user && await didUserLikeBook(bookId, user._id);
    update();

    async function clickLike(){
        await likeBook({ bookId: bookId});
        totalLikes = await getTotalLikesCount(bookId);
        didUserLike = await didUserLikeBook(bookId, user._id);
        update();
    }

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }

    async function update() {
        ctx.render(detailsTemplate(book, isOwner, onDelete, totalLikes, user, clickLike, didUserLike));
    }
}
