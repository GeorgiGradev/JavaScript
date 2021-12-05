import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';
import { getUserData } from '../utility.js';

//import { albumTemplate } from './common/album.js';

const searchTemplate = (albums, onSearch, name) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${name || ''
            }>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    ${(() => {
    if (query && query != '') {
        return html`<div class="search-result">
        ${albums.length == 0 ? html`<p class="no-result">No result.</p>` : albums.map(albumTemplate)}
    </div>`;
    } else {
        return null;
    }
    })()}

</section>`;

let user = getUserData();
let query;


const albumTemplate = (album) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <!-- <div class="btn-group">
                            <a href="/details/${album._id}" id="details">Details</a>
                        </div> -->
    
            ${user != undefined ? html`<div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>` : null}
    
        </div>
    </div>`;


export async function searchPage(ctx) {
    const name = ctx.querystring.split('=')[1];
    const albums = await search(name);
    user = getUserData();
    ctx.render(searchTemplate(albums, onSearch, name, query));
    console.log(query);

    function onSearch() {
        query = document.getElementById('search-input').value;
        console.log(query);
        if (query == '') {
            return alert("Please enter name!");
        }
        ctx.page.redirect('/search?query=' + query);
    }
}



// ${name != '' ? html`<div class="search-result">
// <!--If have matches-->
// <!--If there are no matches-->
// ${albums.length == 0 ? html`<p class="no-result">No result.</p>` : albums.map(albumTemplate)}
// </div>` : null}