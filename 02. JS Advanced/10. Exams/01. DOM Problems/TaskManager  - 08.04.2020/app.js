function solve() {
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addHandler);

    function addHandler(event){
        event.preventDefault();
        const task = taskField.value;
        const description = descriptionField.value;
        const date = dateField.value;
        if (task === '' || description === '' || date === ''){
            return;
        }

        const div = document.querySelector('.orange').parentElement.nextElementSibling;
        const startBtn = e('button', { className: 'green'}, 'Start');
        const deleteBtn = e('button', { className: 'red'}, 'Delete');
        const elementToAppend = e('article', {}, 
                                    e('h3', {}, task), 
                                    e('p', {}, `Description: ${description}`),
                                    e('p', {}, `Due Date: ${date}`),
                                    e('div', { className: 'flex'}, startBtn, deleteBtn )    
                                );
        div.appendChild(elementToAppend);

        deleteBtn.addEventListener('click', deleteHandler);
        startBtn.addEventListener('click', startHandler);
        
    }

    function deleteHandler(event){
        const articleToRemove = event.target.parentElement.parentElement;
        articleToRemove.remove();
    }

    function startHandler(event){
        const article = event.target.parentElement.parentElement;
        const div = document.querySelectorAll('.wrapper section')[2].querySelectorAll('div')[1];
        div.appendChild(article);

        const deleteBtn = event.target;
        const finishBtn = event.target.nextElementSibling;


        deleteBtn .className = 'red';
        deleteBtn .textContent = 'Delete';
        finishBtn.className = 'orange';
        finishBtn.textContent = 'Finish';

        deleteBtn.addEventListener('click', deleteHandler);
        finishBtn.addEventListener('click', finishHandler);

    
    }

    function finishHandler(event){
        const article = event.target.parentElement.parentElement;
        const div = document.querySelectorAll('.wrapper section')[3].querySelectorAll('div')[1];
        div.appendChild(article);
        const divToRemove = article.querySelector('div');
        divToRemove.remove();


    }

    
    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }

}