function deleteByEmail() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let email = document.querySelector('label input[name = "email"]').value;
    let isDeleted = false;

    for (let row of rows) {
        if (row.children[1].textContent == email) {
            row.parentNode.removeChild(row);
            isDeleted = true;
        }
    }

    isDeleted == false ? document.getElementById('result').textContent = 'Not found.' :document.getElementById('result').textContent = "Deleted.";
    document.querySelector('label input').value = '';
}