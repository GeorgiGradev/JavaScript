function getStudents() {
    getAllStudent();
    document.querySelector('#form').addEventListener('submit', onSubmit);
}
getStudents();

async function getAllStudent() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    let tBody = document.querySelector('#results tBody');

    Object.values(data).map(value => {
        const elements = e('tr', {},
            e('td', {}, value.firstName),
            e('td', {}, value.lastName),
            e('td', {}, value.facultyNumber),
            e('td', {}, Number(value.grade)),
        );
        tBody.appendChild(elements);
    });
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        return alert('All fields are required');
    }
    if (isNaN(Number(grade)) == true || Number.isInteger(Number(facultyNumber)) == false) {
        return alert('Grade and faculty number must be numbers');
    }

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: Number(grade),
        })
    });
    document.querySelector('#results tBody').innerHTML = '';
    getAllStudent();

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