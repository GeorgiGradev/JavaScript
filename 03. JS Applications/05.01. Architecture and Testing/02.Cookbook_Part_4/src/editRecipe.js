import { showDetails } from './recipeDetails.js';

let main;
let editSection;
let setActiveNav;
let recipeId;

export function setupEdit(targetMain, editTargetSection, onActiveNav) {
    main = targetMain;
    editSection = editTargetSection;
    setActiveNav = onActiveNav;
    const form = editTargetSection.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    async function onSubmit(data) {
        const body = JSON.stringify({
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        });

        const authToken = sessionStorage.getItem('authToken');
        if (authToken == null) {
            return alert('You\'re not logged in!');
        }

        try {
            const response = await fetch(`http://localhost:3030/data/recipes/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': authToken
                },
                body
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            showDetails(recipeId);
        } catch (err) {
            alert(err.message);
            console.error(err.message);
        }
    }
}


export async function showEdit(id) {
    // setActiveNav();
    main.innerHTML = '';
    main.appendChild(editSection);

    recipeId = id;
    const recipe = await getRecipeById(recipeId);

    editSection.querySelector('[name="name"]').value = recipe.name;
    editSection.querySelector('[name="img"]').value = recipe.img;
    editSection.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    editSection.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}

async function getRecipeById(id) {
    const response = await fetch(`http://localhost:3030/data/recipes/${id}`);
    const recipe = await response.json();

    return recipe;
}