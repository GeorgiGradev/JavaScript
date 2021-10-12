let main;
let createRecipeSection;
let onSuccess;
let setActiveNav;

export function setupCreateRecipe(mainTargetElement, createRecipeTargetSection, onSuccessTarget, onActiveNav) {
    main = mainTargetElement;
    createRecipeSection = createRecipeTargetSection;
    onSuccess = onSuccessTarget;
    setActiveNav = onActiveNav;

    const createRecipeForm = document.querySelector('form');
    createRecipeForm.addEventListener('submit', createNewRecipe);
}

export function showCreateRecipe() {
    main.innerHTML = '';
    main.appendChild(createRecipeSection);
    setActiveNav('CreateRecipeButton');
}

async function createNewRecipe(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let data = Array.from(formData.entries())
        .reduce((p, [key, value]) => Object.assign(p, { [key]: value }), {});

    let body = JSON.stringify({
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(i => i.trim()).filter(i => i !== ''),
        steps: data.steps.split('\n').map(s => s.trim()).filter(s => s !== '')
    });

    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        const data = await response.json();
        sessionStorage.setItem('ownerId', data._ownerId);
        
        event.target.reset();

        onSuccess();
    } catch (error) {
        console.log(error.message);
    }
}