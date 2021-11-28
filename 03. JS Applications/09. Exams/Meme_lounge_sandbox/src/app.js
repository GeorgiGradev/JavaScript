import * as api from './api/data.js';
window.api = api;

import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';
import { homePage } from './views/home.js';
import { loginPage, registerPage } from './views/auth.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();


page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
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
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
        document.getElementById('user-greeting').textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}
