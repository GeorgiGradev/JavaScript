window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const addBtn = document.getElementById('add');
    let totalPrice = 0;
    addBtn.addEventListener('click', addHandler);

    function addHandler(event) {
        event.preventDefault();
        const model = modelField.value;
        let year = yearField.value;
        const description = descriptionField.value;
        let price = priceField.value;
       

        if (model === '' || description === '' ||
            Number.isNaN(Number(year)) || year < 1 ||
            Number.isNaN(Number(price)) || price < 1) {
            return;
        }
        price = Number(price);
        const tBody = document.getElementById('furniture-list');
        const moreLestBtn = e('button', { className: 'moreBtn' }, 'More Info');
        const buyBtn = e('button', { className: 'buyBtn' }, 'Buy it');
        const trInfo = e('tr', { className: 'info' },
                            e('td', {}, model),
                            e('td', {}, price.toFixed(2)),
                            e('td', {}, moreLestBtn, buyBtn));
        const trHide = e('tr', { className: 'hide' },
                            e('td', {}, `Year: ${year}`),
                            e('td', { colSpan: '3' }, `Description: ${description}`));

        tBody.appendChild(trInfo);
        tBody.appendChild(trHide);

        moreLestBtn.addEventListener('click', () => {
            if (moreLestBtn.textContent === 'More Info'){
                moreLestBtn.textContent = 'Less Info';
                trHide.style = 'display: contents';
            } else {
                moreLestBtn.textContent = 'More Info';
                trHide.style = 'display: none';
            }
        });

        buyBtn.addEventListener('click', (event) => {
            trInfo.remove();
            trHide.remove();
            
            totalPrice += price;
            document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
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