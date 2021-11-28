import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyMemes } from '../api/data.js';
import { getUserData } from '../utility.js';
import { userTemplate } from './common/meme.js';

const profileTemplate = (memes, user) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${user.gender == 'female' ? "/images/female.png" : "/images/male.png"} >
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        <!-- Display : If user doesn't have own memes  -->
        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : memes.map(userTemplate)}
    </div>
</section>`;

export async function profilePage(ctx){
    const user = getUserData();
    const memes = await getMyMemes(user._id);
    ctx.render(profileTemplate(memes, user));
}
