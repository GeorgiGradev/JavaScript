function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);

    async function load() {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        const ul = document.querySelector('#phonebook');
        ul.innerHTML = '';

        Object.values(data).forEach(value => {
            let li = e('li', { id: value._id }, `${value.person}: ${value.phone}`);
            let button = e('button', {}, 'Delete');
            li.appendChild(button);
            ul.appendChild(li);

            button.addEventListener('click', async (event) => {
                const entryId = event.target.parentNode.id;
                await fetch('http://localhost:3030/jsonstore/phonebook/' + entryId, {
                    method: 'delete'
                });
                load();
            });
        });
    }

    async function create() {
        const personInput = document.querySelector('#person').value;
        const phoneInput = document.querySelector('#phone').value;

        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/' },
            body: JSON.stringify({
                person: personInput,
                phone: phoneInput
            })
        });
        document.querySelector('#person').value = '';
        document.querySelector('#phone').value = '';
    }

}

attachEvents();

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