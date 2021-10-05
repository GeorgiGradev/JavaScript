async function loadRepos() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;


    const response = await fetch(url);
    // if (!response.Ok) {
    //     throw new Error('Request Error');
    // }

    const data = await response.json();

    const ulElement = document.getElementById('repos');
    ulElement.innerHTML = "";
    data.forEach(r => {
        const liElement = document.createElement('li');
        liElement.textContent = r.full_name;
        ulElement.appendChild(liElement);
    });
}