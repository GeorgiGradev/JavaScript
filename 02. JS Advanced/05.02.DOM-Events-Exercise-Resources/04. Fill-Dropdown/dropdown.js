function addItem() {
    let itemTextInput = document.getElementById('newItemText').value;
    var itemValueInput = document.getElementById('newItemValue').value;
    
    let optionElement = document.createElement('option');



    optionElement.textContent = itemTextInput;
    optionElement.value = itemValueInput;
    
    let menu = document.getElementById('menu');
    menu.appendChild(optionElement);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''; 
} 