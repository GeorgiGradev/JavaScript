import { getMyPets } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utility.js';

const profileTemplate = (pets) => html`
<section id="my-pets-page" class="my-pets">
    <h1>My Pets</h1>
    <!-- Display ul: with list-items for every user's pet (if any) -->
    <!-- Display paragraph: If the user doesn't have his own pets  -->
    ${pets.length == 0 ? html`<p class="no-pets">No pets in database!</p>` : html`
    <ul class="my-pets-list">
        ${pets.map(petTemplate)}
    </ul>`}
</section>`;

const petTemplate = (pet) => html`
<li class="otherPet">
    <h3>Name: ${pet.name}</h3>
    <p>Type: ${pet.type}</p>
    <p class="img"><img src=${pet.imageUrl}></p>
    <a class="button" href="/details/${pet._id}">Details</a>
</li>`;

export async function profilePage(ctx){
    const user = getUserData();
    const pets = await getMyPets(user._id);
    ctx.render(profileTemplate(pets));
}

