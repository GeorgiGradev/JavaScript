import { html } from '../lib.js';
import { deletePet, getPetById } from '../api/data.js';
import { getUserData } from '../utility.js';

const detailsTemplate = (pet, isOwner, onDelete) => html`
<section id="details-page" class="details">
    <div class="pet-information">
        <h3>Name: ${pet.name}</h3>
        <p class="type">Type: ${pet.type}</p>
        <p class="img"><img src=${pet.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this pet )  -->
            ${isOwner ? html` <a class="button" href="/edit/${pet._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}


            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
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

    ctx.render(detailsTemplate(pet, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            deletePet(petId);
            ctx.page.redirect('/');
        }
    }
}