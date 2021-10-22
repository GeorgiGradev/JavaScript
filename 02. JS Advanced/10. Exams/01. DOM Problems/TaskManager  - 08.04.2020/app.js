function solve() {
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dueDateField = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addHandler);

    function addHandler(event){
        event.preventDefault();
        const task = taskField.value;
        const description = descriptionField.value;
        const dueDate = dueDateField.value;
        if (task === '' || description === '' || dueDate === ''){
            return;
        }
        const openElement = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
        const startBtn = e('button', { className: 'green'}, 'Start');
        const deleteBtn = e('button', { className: 'red'}, 'Delete');
        const elementToAttach = e('article', {}, 
                                    e('h3', {}, task), 
                                    e('p', {}, `Description: ${description}`),
                                    e('p', {}, `Due Date: ${dueDate}`),
                                    e('div', { className: 'flex'}, startBtn, deleteBtn));

        openElement.appendChild(elementToAttach);

        deleteBtn.addEventListener('click', () => {
            elementToAttach.remove();
        });

        startBtn.addEventListener('click', () => startHandler(elementToAttach, startBtn, deleteBtn));
    }

    function startHandler(elementToAttach, startBtn, deleteBtn){
        const deleteButton  = startBtn;
        const finishButton = deleteBtn;
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';

        const progressElement = document.getElementById('in-progress');
        progressElement.appendChild(elementToAttach);

        deleteButton.addEventListener('click', () => {
            elementToAttach.remove();
        });

        finishButton.addEventListener('click', () => {
            const completeElement = document.querySelectorAll('section')[3].querySelectorAll('div')[1];
            completeElement.appendChild(elementToAttach);
            elementToAttach.querySelector('div').remove();
            
        });
        
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