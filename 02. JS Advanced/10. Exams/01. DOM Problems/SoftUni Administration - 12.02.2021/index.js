function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');

    let state = {};

    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (!e.target.classList.contains('red')) {
                add(e);
            } else {
                del(e);
            }
        }
    });

    function del(e) {
        let li = e.target.parentNode;
        let ul = li.parentNode;
        let module = ul.parentNode;
        li.remove();
        if (ul.children.length === 0) {
            module.remove();
        }
    }

    function add(e) {
        e.preventDefault();
        if (lecture.value === '' || date.value === '' || moduleName === 'Select module') {
            return;
        }
        let lectureName = lecture.value;
        let dateString = date.value;
        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');
        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex']);

        li.appendChild(lectureH4);
        li.appendChild(delBtn);
        let module;
        let ul;
        let lis;
        if (!state[moduleName.value]) {
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, ['class=module']);

            module.appendChild(h3);
            module.appendChild(ul);

            state[moduleName.value] = { module, ul, lis: [] };
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul;
        }

        state[moduleName.value].lis.push({ li, date: date.value });

        state[moduleName.value].lis.sort((a, b) => 
        { 
            return a.date.localeCompare(b.date); 
        }).forEach(({ li }) => {
            ul.appendChild(li);
        });
        modulesOutput.appendChild(module);
    }

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes
            .map(attr => attr.split('='))
            .forEach(([name, value]) => {
                element.setAttribute(name, value);
            });
        return element;
    }
}