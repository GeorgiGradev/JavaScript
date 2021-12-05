import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllAlbums } from '../api/data.js';
import { getUserData } from '../utility.js';
//import { albumTemplate } from './common/album.js';

const catalogTemplate = (albums) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    <!--No albums in catalog-->
    ${albums.length == 0 ? html`<p>No Albums in Catalog!</p>` : albums.map(albumTemplate)}

</section>`;

let user = getUserData();

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


export async function catalogPage(ctx) {
    const albums = await getAllAlbums();
    user = getUserData();
    ctx.render(catalogTemplate(albums));
}
