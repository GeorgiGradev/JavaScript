let main;
let loginSection;
let onSuccess;
let setActiveNav;

export function setupLogin(mainTargetElement, loginTargetSection, onSuccessTarget, onActiveNav) {
    main = mainTargetElement;
    loginSection = loginTargetSection;
    onSuccess = onSuccessTarget;
    setActiveNav = onActiveNav

    let loginForm = loginSection.querySelector('form');
    loginForm.addEventListener('submit', login);
}

export function showLogin() {
    main.innerHTML = '';
    main.appendChild(loginSection);
    setActiveNav('LoginButton');
}

async function login(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        
        event.target.reset();
        onSuccess();
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}