import { getAllPets } from '../api/data.js';
import { html } from '../lib.js';

const homeTemplate = (pets) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All pets (If any) -->
    <!-- Display paragraph: If there are no pets in the database -->
    ${pets.length == 0 ? html`<p class="no-pets">No pets in database!</p>` 
    : html`<ul class="other-pets-list">
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

export async function homePage(ctx) {
    const pets = await getAllPets();
    ctx.render(homeTemplate(pets));
}