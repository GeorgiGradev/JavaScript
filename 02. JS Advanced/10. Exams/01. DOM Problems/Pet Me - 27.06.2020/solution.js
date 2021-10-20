function solve() {
    let nameField = document.querySelectorAll('#container input')[0];
    let ageField = document.querySelectorAll('#container input')[1];
    let kindField = document.querySelectorAll('#container input')[2];
    let currentOwnerField = document.querySelectorAll('#container input')[3];
    const addBtn = document.querySelector('#container button');

    addBtn.addEventListener('click', addHandler);

    function addHandler(event) {
        event.preventDefault();

        const name = nameField.value;
        const age = ageField.value;
        const kind = kindField.value;
        const currentOwner = currentOwnerField.value;

        if (name === '' || Number.isNaN(Number(age)) === true || age.trim() == '' || kind === '' || currentOwner === '') {
            return;
        }

        const ul = document.querySelector('#adoption ul');
        const contactBtn = e('button', {}, 'Contact with owner');

        const li = e('li', {},
                        e('p', {}, e('strong', {}, name), ' is a ', e('strong', {}, age), ' year old ', e('strong', {}, kind)),
                        e('span', {}, `Owner: ${currentOwner}`),
                        contactBtn);
        ul.appendChild(li);

        nameField.value = '';
        ageField.value = '';
        kindField.value = '';
        currentOwnerField.value = '';

        contactBtn.addEventListener('click', contactHandler);
    }

    function contactHandler(event) {
        const p = event.target.parentNode;
        const yesBtn = e('button', {}, 'Yes! I take it!');
        const div = e('div', {},
            e('input', { placeholder: 'Enter your names' }),
            yesBtn);
        const contactBtn = event.target;
        contactBtn.remove();
        p.appendChild(div);

        yesBtn.addEventListener('click', yesHandler);
    }

    function yesHandler(event) {

        const inputField = event.target.parentNode.firstChild;
        const input = inputField.value;
        if (input === '') {
            return;
        }

        const element = event.target.parentNode.parentNode;
        element.querySelector('span').textContent = `New Owner: ${input}`;
        element.querySelector('div').remove();
        const checkBtn = e('button', {}, 'Checked');
        element.appendChild(checkBtn);
        const ul = document.querySelector('#adopted ul');
        ul.appendChild(element);


        checkBtn.addEventListener('click', () => {
            element.remove();
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