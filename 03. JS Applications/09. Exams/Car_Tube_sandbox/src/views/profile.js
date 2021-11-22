import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyCars } from '../api/data.js';
import { carTemplate } from './common/car.js';

const profileTemplate = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        <!-- Display if there are no records -->
        ${cars.length == 0 ? html` <p class="no-cars"> You haven't listed any cars yet.</p>` : cars.map(carTemplate)}
       
    </div>
</section>`;

export async function profilePage(ctx){
    const userId = ctx.user._id;
    const cars = await getMyCars(userId);
    ctx.render(profileTemplate(cars));
}
