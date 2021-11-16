import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import * as api from './api/data.js';
window.api = api;

import { logout as apiLogout } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { getUserData } from './utility.js';
import { loginPage, registerPage } from './views/auth.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';



const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, catalogPage);
page('/login', decorateContext, loginPage);
page(`/register`, decorateContext, registerPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/my-pets', decorateContext, profilePage);

page.start(); 

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}

function setUserNav() {
    const user = getUserData();

    if (user) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';

        document.getElementById('user-greeting').textContent = `Welcome, ${user.email}`;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}
