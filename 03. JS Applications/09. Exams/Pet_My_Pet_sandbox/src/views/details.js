import { html } from '../lib.js';
import { deletePet, didUserLikePet, getPetById, getTotalLikesCount, likePet } from '../api/data.js';
import { getUserData } from '../utility.js';

const detailsTemplate = (pet, isOwner, onDelete, user, didUserLike, likesCount, onClickLike) => html`
<section id="details-page" class="details">
    <div class="pet-information">
        <h3>Name: ${pet.name}</h3>
        <p class="type">Type: ${pet.type}</p>
        <p class="img"><img src=${pet.imageUrl}></p>
        <div class="actions">
            ${isOwner ? html` <a class="button" href="/edit/${pet._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}

            <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) -->
            ${(() => {
               if (user){
                   if (!isOwner && didUserLike == 0){
                   return html`<a @click=${onClickLike} class="button" href="javascript:void(0)">Like</a>`;
                   }
               }
            })()}
            
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likesCount}</span>
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
    const user = getUserData();
    const isOwner = user && user._id == pet._ownerId;
    let didUserLike;
    let likesCount = await getTotalLikesCount(petId);
    update();

    if (user){
        const userId = user._id;
        didUserLike = await didUserLikePet(petId, userId);
        likesCount = await getTotalLikesCount(petId);
        update();
    }

    async function onClickLike(){
        await likePet({petId: petId});
        likesCount = await getTotalLikesCount(petId);
        didUserLike = await didUserLikePet(petId, user._id);
        update();
    }
    
    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            deletePet(petId);
            ctx.page.redirect('/');
        }
    }

    async function update() {
        ctx.render(detailsTemplate(pet, isOwner, onDelete, user, didUserLike, likesCount, onClickLike));
    }
}