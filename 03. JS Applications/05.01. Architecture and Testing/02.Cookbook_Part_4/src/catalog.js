import { e } from './dom.js';
import { showDetails } from './recipeDetails.js';

let main;
let catalogSection;
let setActiveNav;

export function setupCatalog(mainTargetElement, sectionTargetElement, onActiveNav) {
    main = mainTargetElement;
    catalogSection = sectionTargetElement;
    setActiveNav = onActiveNav;
}

export async function showCatalog() {
    setActiveNav('CatalogButton');
    catalogSection.innerHTML = '<p style="color: white">Loading...</p>';
    main.appendChild(catalogSection);

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    catalogSection.innerHTML = '';

    cards.forEach(c => catalogSection.appendChild(c));

    main.appendChild(catalogSection);
}


async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name,img,_ownerId'));
    const recipes = await response.json();

    return Object.values(recipes);
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', ownerId: recipe._ownerId, onClick: () => showDetails(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}