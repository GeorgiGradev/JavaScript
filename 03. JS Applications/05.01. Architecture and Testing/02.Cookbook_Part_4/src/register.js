let main;
let registerSection;
let onSuccess;
let setActiveNav;

export function setupRegister(mainTargetElement, registerTargetSection, onSuccessTarget, onActiveNav) {
    main = mainTargetElement;
    registerSection = registerTargetSection;
    onSuccess = onSuccessTarget;
    setActiveNav = onActiveNav;

    let registerForm = registerSection.querySelector('form');
    registerForm.addEventListener('submit', register);
}

export function showRegister() {
    main.innerHTML = '';
    main.appendChild(registerSection);
    setActiveNav('RegisterButton');
}

async function register(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let confirmPassword = formData.get('rePass');

    if (password !== confirmPassword) {
        let message = 'Passwords do not match!';

        console.log(message);
        alert(message);

        return false;
    }

    try {
        const response = await fetch('http://localhost:3030/users/register', {
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