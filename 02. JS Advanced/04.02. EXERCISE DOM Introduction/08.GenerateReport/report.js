
function generateReport() {
    const output = document.getElementById('output');
    const checkbuttons = Array.from(document.querySelectorAll('thead th input')); // TODO

    let indexes = [];
    checkbuttons.forEach((b, i) => {
        if (b.checked){
            indexes.push(i);
        }
    });

    let resultArray = [];
    const tableHead = document.querySelectorAll('thead th');
    const tableRows = Array.from(document.querySelectorAll('tbody tr')); // TODO

    for (const row of tableRows) {
        let obj = {};
        for (const index of indexes) {
            let currentRow = row.children[index].textContent;
            let currentName = tableHead[index].textContent.toLowerCase().trim(); // TODO
            obj[currentName] = currentRow;
        }
        resultArray.push(obj);
    }
    output.value = JSON.stringify(resultArray, null, 4)
} 