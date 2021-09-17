function addItem() {

    let input = document.getElementById('newItemText');
    let element = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    element.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', remove)
    
    document.getElementById('items').appendChild(element);

    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }

    function remove(event) {
        event.target.parentNode.remove(element);
    }
}