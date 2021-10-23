window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const songField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    let totalLikes = 0;

    addBtn.addEventListener('click', addHandler);

    function addHandler(event){
        event.preventDefault();
        const genre = genreField.value;
        const song = songField.value;
        const author = authorField.value;
        const date = dateField.value;

        if (genre === '' || song === '' || author === '' || date === ''){
            return;
        }

        genreField.value = '';
        songField.value = '';
        authorField.value = '';
        dateField.value = '';

        const divAllHits = document.querySelector('.all-hits-container');
        const saveBtn  = e('button', { className: 'save-btn'}, 'Save song');
        const likeBtn = e('button', { className: 'like-btn'}, 'Like song');
        const deleteBtn = e('button', { className: 'delete-btn'}, 'Delete');

        const div = e('div', { className: 'hits-info'}, 
                        e('img', { src: './static/img/img.png'}),
                        e('h2', {}, `Genre: ${genre}`),
                        e('h2', {}, `Name: ${song}`),
                        e('h2', {}, `Author: ${author}`),   
                        e('h3', {}, `Date: ${date}`),
                        saveBtn,
                        likeBtn,
                        deleteBtn                
        );
        
        divAllHits.appendChild(div);

        likeBtn.addEventListener('click', () => {
            totalLikes += 1;
            likeBtn.disabled = true;
            let likesCounter = document.querySelector('#total-likes p');
            likesCounter.textContent = `Total Likes: ${totalLikes}`;
        });

        saveBtn.addEventListener('click', () => {
            const divSavedHit = document.querySelector('.saved-container');
            divSavedHit.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        });

        deleteBtn.addEventListener('click', () => {
            div.remove();
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