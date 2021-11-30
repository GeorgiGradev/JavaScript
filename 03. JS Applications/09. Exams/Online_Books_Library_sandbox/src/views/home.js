import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/data.js';
import { bookTemplate } from './common/book.js'

const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <!-- Display paragraph: If there are no books in the database -->
    ${books.length == 0 ? html`<p class="no-books">No books in database!</p>` : html` <ul class="other-books-list">
        ${books.map(bookTemplate)}
    </ul>`}
</section>`;

export async function homePage(ctx) {
    const books = await getAllBooks();
    ctx.render(homeTemplate(books));
}
