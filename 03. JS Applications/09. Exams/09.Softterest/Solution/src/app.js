import * as api from './api/data.js';
window.api = api;

import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout as apiLogout } from './api/data.js';
import { getUserData } from './utility.js';
import { loginPage, registerPage } from './views/auth.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';

const main = document.querySelector("main");
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();


page(decorateContext);
page('/login', loginPage);
page('/register', registerPage);
page('/', homePage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
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
        document.getElementById('createId').style.display = '';
        document.getElementById('logoutId').style.display = '';
        document.getElementById('loginId').style.display = 'none';
        document.getElementById('registerId').style.display = 'none';

    } else {
        document.getElementById('createId').style.display = 'none';
        document.getElementById('logoutId').style.display = 'none';
        document.getElementById('loginId').style.display = '';
        document.getElementById('registerId').style.display = '';
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}
