import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../api/data.js';
import { carTemplate } from './common/car.js';

const catalogTemplate = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        <!-- Display all records -->
        <!-- Display if there are no records -->
        ${(() => {
            if (cars.length === 0) {
                return html` <p class="no-cars">No cars in database.</p>`;
            } else {
                return cars.map(carTemplate);
            }
        })()}
    </div>
</section>`;

export async function catalogPage(ctx) {
    const cars = await getAllCars();
    ctx.render(catalogTemplate(cars));
}
