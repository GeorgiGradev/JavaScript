window.addEventListener('load', toggleButtons);
const login = document.getElementById('guest').children[0];
const logoutButton = document.createElement('button');
logoutButton.textContent = 'Logout';
logoutButton.id = 'logout';
logoutButton.addEventListener('click', logout);

function attachEvents() {
    document.getElementsByClassName('load')[0].addEventListener('click', loadCatches);
    document.getElementById('addForm').addEventListener('submit', addCatch);
    document.getElementById('catches').addEventListener('click', invokeHandler);
}

function logout() {
    fetch('http://localhost:3030/users/login', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        }
    });

    sessionStorage.removeItem('accessToken');
    window.location.pathname = 'index.html';
}

function invokeHandler(event) {
    if (event.target.textContent == 'Update') {
        updateCatch(event);
    } else if (event.target.textContent == 'Delete') {
        deleteCatch(event);
    }
}

async function updateCatch(event) {
    const [angler, weight, species, location, bait, captureTime] = event.target.parentNode.querySelectorAll('input');
    const id = event.target.parentNode.dataset.id;
    const token = sessionStorage.getItem('accessToken');

    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            angler: angler.value, weight: weight.value, species: species.value, 
            location: location.value, bait: bait.value, 'captureTime ': captureTime.value
        })
    });

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }
}

async function deleteCatch(event) {
    const id = event.target.parentNode.dataset.id;
    const token = sessionStorage.getItem('accessToken');

    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: { 'X-Authorization': token }
    });
    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }
    loadCatches();
}

function toggleButtons() {
    const token = sessionStorage.getItem('accessToken');
    const buttons = document.querySelectorAll('button');
    const guest = document.getElementById('guest');
    
    if (token != null) {
        const ownerId = sessionStorage.getItem('ownerId');
        buttons.forEach(b => {
            b.disabled = false;
            if ((b.textContent == 'Update' || b.textContent == 'Delete') && b.parentNode.dataset.owner != ownerId) {
                b.disabled = true;
            }
        });
        guest.children[0].remove();
        guest.appendChild(logoutButton);
    } else {
        buttons.filter(b => b.textContent != 'Load').forEach(b => b.disabled = true);
        guest.children[0].remove();
        guest.appendChild(login);
    }
}

async function addCatch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    const token = sessionStorage.getItem('accessToken');

    const response = await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ angler, weight, species, location, bait, 'captureTime ': captureTime })
    });

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }

    event.target.reset();
    loadCatches();
}

async function loadCatches() {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();
    const catches = document.querySelector('#catches');
    catches.innerHTML = '';
    data.map(createDiv).forEach(c => catches.appendChild(c));
    toggleButtons();

    function createDiv(data) {
        const div = document.createElement('div');
        div.dataset.id = data._id;
        div.dataset.owner = data._ownerId;
        div.className = 'catch';
        const anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';
        const anglerInput = document.createElement('input');
        anglerInput.className = 'angler';
        anglerInput.type = 'text';
        anglerInput.value = data.angler;
        const anglerHr = document.createElement('hr');
        div.appendChild(anglerLabel);
        div.appendChild(anglerInput);
        div.appendChild(anglerHr);

        const weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';
        const weightInput = document.createElement('input');
        weightInput.className = 'weight';
        weightInput.type = 'number';
        weightInput.value = data.weight;
        const weightHr = document.createElement('hr');
        div.appendChild(weightLabel);
        div.appendChild(weightInput);
        div.appendChild(weightHr);

        const speciesLabel = document.createElement('label');
        speciesLabel.textContent = 'Species';
        const speciesInput = document.createElement('input');
        speciesInput.className = 'species';
        speciesInput.type = 'text';
        speciesInput.value = data.species;
        const speciesHr = document.createElement('hr');
        div.appendChild(speciesLabel);
        div.appendChild(speciesInput);
        div.appendChild(speciesHr);

        const locationLabel = document.createElement('label');
        locationLabel.textContent = 'Location';
        const locationInput = document.createElement('input');
        locationInput.className = 'location';
        locationInput.type = 'text';
        locationInput.value = data.location;
        const locationHr = document.createElement('hr');
        div.appendChild(locationLabel);
        div.appendChild(locationInput);
        div.appendChild(locationHr);

        const baitLabel = document.createElement('label');
        baitLabel.textContent = 'Bait';
        const baitInput = document.createElement('input');
        baitInput.className = 'bait';
        baitInput.type = 'text';
        baitInput.value = data.bait;
        const baitHr = document.createElement('hr');
        div.appendChild(baitLabel);
        div.appendChild(baitInput);
        div.appendChild(baitHr);

        const capturelabel = document.createElement('label');
        capturelabel.textContent = 'Capture time';
        const captureInput = document.createElement('input');
        captureInput.className = 'captureTime';
        captureInput.type = 'number';
        captureInput.value = data['captureTime '];
        const captureHr = document.createElement('hr');
        div.appendChild(capturelabel);
        div.appendChild(captureInput);
        div.appendChild(captureHr);

        const updateBut = document.createElement('button');
        updateBut.disabled = true;
        updateBut.className = 'update';
        updateBut.textContent = 'Update';
        div.appendChild(updateBut);

        const deleteBut = document.createElement('button');
        deleteBut.disabled = true;
        deleteBut.className = 'delete';
        deleteBut.textContent = 'Delete';
        div.appendChild(deleteBut);

        return div;
    }
}

attachEvents();