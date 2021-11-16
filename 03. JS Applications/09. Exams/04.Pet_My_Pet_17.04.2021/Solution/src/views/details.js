import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePet, getPetById, getTotalLikesCount, likePet, didUserLikePet } from '../api/data.js';

const detailsTemplate = (pet, isOwner, isLoggedIn, totalLikesCount, onDelete, onClickLike, didUserLike) => html`
<section id="details-page" class="details">
    <div class="pet-information">
        <h3>Name: ${pet.name}</h3>
        <p class="type">Type: ${pet.type}</p>
        <p class="img"><img src=${pet.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this pet )  -->
            ${isOwner ? html`
            <a class="button" href="/edit/${pet._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : ''}

            <!-- Bonus -->
            <!-- Like button ( only for logged-in users, which is not creators of the current pet ) -->
       
            <!-- FISRT OPTION: if statement inside template literal-->
            ${(() => {
              if (didUserLike == 0) {
                  if (isLoggedIn && !isOwner){
                   return html`<a @click=${onClickLike} class="button" id="likeId" href="javascript:void(0)">Like</a>`;
                  }
                }
            })()}

            <!-- SECOND OPTION: ternary operator -->
            <!--
                   ${didUserLike == 0 ? html`${isLoggedIn && !isOwner ? html`<a @click=${onClickLike} class="button"
                id="likeId" href="javascript:void(0)">Like</a>` : ''}` : ''}
            -->

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikesCount}</span>
            </div>
        </div>
    </div>
    <div class="pet-description">
        <h3>Description:</h3>
        <p>${pet.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await getPetById(petId);
    const user = ctx.user;
    let userId;
    let didUserLike;

    if (user != null) {
        userId = ctx.user._id;
        didUserLike = await didUserLikePet(petId, userId);  // returns 0 if not liked OR 1 if liked
    }

    const isOwner = user && pet._ownerId == user._id;
    const isLoggedIn = user != undefined;
    let totalLikesCount = await getTotalLikesCount(petId);
    ctx.render(detailsTemplate(pet, isOwner, isLoggedIn, totalLikesCount, onDelete, onClickLike, didUserLike));

    async function onClickLike() {
        const like = {
            petId: petId
        };
        await likePet(like);
        totalLikesCount = await getTotalLikesCount(petId);
        didUserLike = await didUserLikePet(petId, userId);
        ctx.render(detailsTemplate(pet, isOwner, isLoggedIn, totalLikesCount, onDelete, didUserLike));
    }

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deletePet(petId);
            ctx.page.redirect('/');
        }
    }
}
