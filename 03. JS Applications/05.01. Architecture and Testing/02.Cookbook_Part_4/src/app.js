import { setupCatalog, showCatalog } from './catalog.js';
import { setupLogin, showLogin } from './login.js';
import { setupRegister, showRegister } from './register.js';
import { setupCreateRecipe, showCreateRecipe } from './recipes.js';
import { setupDetails } from './recipeDetails.js';
import { setupEdit } from './editRecipe.js';
import { logout } from './logout.js';
import { displayNavMenu } from './nav.js';

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const catalogSection = document.querySelector('#CatalogSection');
    setupCatalog(main, catalogSection, setActiveNav);

    // App starts here
    await showCatalog();

    const loginSection = document.querySelector('#LoginSection');
    setupLogin(main, loginSection, showMainScreen, setActiveNav);

    const registerSection = document.querySelector('#RegisterSection');
    setupRegister(main, registerSection, showMainScreen, setActiveNav);

    const createRecipeSection = document.querySelector('#CreateRecipeSection');
    setupCreateRecipe(main, createRecipeSection, showMainScreen, setActiveNav);

    const detailsSection = document.querySelector('#RecipeDetails');
    setupDetails(main, detailsSection, setActiveNav);

    const editRecipeSection = document.querySelector('#EditRecipe');
    setupEdit(main, editRecipeSection, setActiveNav);

    const catalogButton = document.querySelector('#CatalogButton');
    catalogButton.addEventListener('click', async (event) => {
        event.preventDefault();

        await showCatalog();
    });

    const loginButton = document.querySelector('#LoginButton');
    loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        showLogin();
    });

    const registerButton = document.querySelector('#RegisterButton');
    registerButton.addEventListener('click', (event) => {
        event.preventDefault();

        showRegister();
    });

    const createRecipeButton = document.querySelector('#CreateRecipeButton');
    createRecipeButton.addEventListener('click', (event) => {
        event.preventDefault();

        showCreateRecipe();
    });

    const logoutButton = document.querySelector('#LogoutButton');
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();

        logout(showMainScreen);
    });

    displayNavMenu();
});

async function showMainScreen() {
    displayNavMenu();
    await showCatalog();
}

function setActiveNav(targetId) {
    let nav = document.querySelector('nav');
    [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
}