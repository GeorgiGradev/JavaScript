export function isUserLoggedIn() {
    let authorizationToken = sessionStorage.getItem('authToken');

    return authorizationToken !== null;
}

export function displayNavMenu() {
    let divUser = document.querySelector('#user');
    let divGuest = document.querySelector('#guest');

    if (isUserLoggedIn()) {
        divUser.style.display = 'inline-block';
        divGuest.style.display = 'none';
    } else {
        divUser.style.display = 'none';
        divGuest.style.display = 'inline-block';
    }
}