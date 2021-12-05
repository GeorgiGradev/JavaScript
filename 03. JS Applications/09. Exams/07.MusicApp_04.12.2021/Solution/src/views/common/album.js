import { html } from '../../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../../utility.js';

export const albumTemplate = (album) => html`
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
    
            ${user ? html`<div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>` : null}
    
        </div>
    </div>`;



const user = getUserData();

