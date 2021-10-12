import { e } from './dom.js';
import { isUserLoggedIn } from './nav.js';
import { showEdit } from './editRecipe.js';

let main;
let detailsSection;
let setActiveNav;

export function setupDetails(targetMain, detailsTargetSection, onActiveNav) {
    main = targetMain;
    detailsSection = detailsTargetSection;
    setActiveNav = onActiveNav;
}

export async function showDetails(id) {
    // setActiveNav();

    detailsSection.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(detailsSection);

    const recipe = await getRecipeById(id);
    detailsSection.innerHTML = '';
    detailsSection.appendChild(createRecipeCard(recipe));
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    if (isUserLoggedIn() &&
        sessionStorage.getItem('userId') === recipe._ownerId) {
        let divControls = e('div', { className: 'controls' },
            e('button', { onClick: () => showEdit(recipe._id), className: 'recipeButton' }, '\u270E Edit'),
            e('button', { onClick: onDelete, className: 'recipeButton' }, '\u2716 Delete'));

        result.appendChild(divControls);
    }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            deleteRecipeById(recipe._id);
        }
    }
}

async function getRecipeById(id) {
    const response = await fetch(`http://localhost:3030/data/recipes/${id}`);
    const recipe = await response.json();

    return recipe;
}

async function deleteRecipeById(id) {
    const authToken = sessionStorage.getItem('authToken');

    try {
        const response = await fetch(`http://localhost:3030/data/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': authToken
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        detailsSection.innerHTML = '';
        detailsSection.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
    } catch (err) {
        alert(err.message);
    }
}