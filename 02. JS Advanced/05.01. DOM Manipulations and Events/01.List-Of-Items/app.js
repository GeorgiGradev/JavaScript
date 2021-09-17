function addItem() {
    const text = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = text;
    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = ''

}