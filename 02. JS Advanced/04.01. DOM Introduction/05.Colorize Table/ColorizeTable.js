function colorize() {
    const rows = document.querySelectorAll('table tr')

    for (let i = 1; i < rows.length; i+=2) {
        rows[i].style.backgroundColor = 'teal';
    }
}

function colorizeWithChild() {
    [...document.querySelectorAll('table tr:nth-child(odd)')].forEach(x => x.style.backgroundColor = 'teal');
}
 