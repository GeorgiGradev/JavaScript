import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllPets } from '../api/data.js';
import { petTemplate } from './common/pet.js';

const catalogTemplate = (pets) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-pets-list">
        ${pets.length == 0 ? html`<p class="no-pets">
            No pets in database!
        </p>`: pets.map(petTemplate)}
    </ul>
</section>`;

export async function catalogPage(ctx) {
    const pets = await getAllPets();
    ctx.render(catalogTemplate(pets));
}
