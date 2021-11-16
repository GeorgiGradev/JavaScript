import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPets } from '../api/data.js';
import { petTemplate } from './common/pet.js';

const profileTemplate = (pets) => html`
<section id="my-pets-page" class="my-pets">
    <h1>My Pets</h1>
    <ul class="my-pets-list">
    ${pets.length == 0 ? html`<p class="no-pets">
            No pets in database!
        </p>`: pets.map(petTemplate)}
    </ul>
</section>`;

export async function profilePage(ctx){
    const userId = ctx.user._id;
    const pets = await getMyPets(userId);
    ctx.render(profileTemplate(pets));
}
