document.querySelector('form').addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    if (email == '' || password == '' || repass == '') {
        return alert('All fields are required');
    } else if (password !== repass) {
        return alert('Passwords don\'t match');
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/'},
        body: JSON.stringify({ email, password})
    });

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = 'index.html';
}