import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteBook, getBookById, getTotalLikesCount, likeBook, didUserLikeBook } from '../api/data.js';

const detailsTemplate = (book, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, didUserLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`:''}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${(() => {
              if (didUserLike == 0) {
                  if (isLoggedIn && !isOwner){
                   return html`<a @click=${onClickLike} class="button" id="likeId" href="javascript:void(0)">Like</a>`;
                  }
                }
            })()}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikesCount}</span>
            </div>
            
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx){
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    const user = ctx.user;
    let userId;
    let didUserLike;

    if (user != null){
        userId = user._id;
        didUserLike = await didUserLikeBook(bookId, userId);
    }
    
    const isOwner = user && book._ownerId == user._id;
    const isLoggedIn = user != undefined;
    let totalLikesCount = await getTotalLikesCount(bookId);
    ctx.render(detailsTemplate(book, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, didUserLike));

    async function onClickLike(){
        const like = {
            bookId: bookId,
        };
        await likeBook(like);
        totalLikesCount = await getTotalLikesCount(bookId);
        didUserLike = await didUserLikeBook(bookId, userId);
        ctx.render(detailsTemplate(book, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, didUserLike));
    }

    async function onDelete(){
        const confirmed = confirm('Are you sure?');
        if (confirmed){
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }
}
