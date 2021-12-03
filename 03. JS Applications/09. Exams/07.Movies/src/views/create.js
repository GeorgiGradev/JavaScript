import { html } from '../../node_modules/lit-html/lit-html.js';
import { createMovie } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="add-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const movie = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            img: formData.get('imageUrl').trim(),
        };


        if (Object.values(movie).some(x => !x)) {
            return alert('All fields are required!');
        }
        
        await createMovie(movie);
        event.target.reset();
        ctx.page.redirect('/');
    }
}
