import * as api from './api/data.js';
window.api = api;

import { render, page } from './lib.js';
import { logout as apiLogout } from "./api/data.js";
import { getUserData } from './utility.js';
import { loginPage, registerPage } from './views/auth.js';
import { homePage } from './views/home.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout, false);

setUserNav();
page(decorateContext);
page('/login', loginPage);
page('/register', registerPage);
page('/', homePage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/my-pets', profilePage);
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}

function setUserNav() {
    const user = getUserData();
    if (user){
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${user.email}`;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}