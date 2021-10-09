document.querySelectorAll('form')[1].addEventListener('submit', login);

async function login(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:3030/users/login',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('ownerId', data._id);
    window.location.pathname = 'index.html';
}