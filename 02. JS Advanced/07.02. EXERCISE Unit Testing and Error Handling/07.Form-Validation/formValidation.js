function validate() {
    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/m;  
    let emailPattern = /^.*@.*\..*$/m;
    let passwordPattern = /^[\w]{5,15}$/m;  //
    let companyFieldPattern = /^[1-9][0-9]{3}$/m;  

    const usernameField = document.querySelector('#username');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const confirmPasswordField = document.querySelector('#confirm-password');
    const checkBox = document.querySelector('#company')
    const companyInfoArea = document.querySelector('#companyInfo');
    const companyNumberField = document.querySelector('#companyNumber');
    const submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let isDataValid = true;
        let isCompanyNumberValid = false;
        
        if (!usernamePattern.exec(usernameField.value)) {
            usernameField.style = 'border-color: red';
            isDataValid = false;
        } else {
            usernameField.removeAttribute('style');
        }

        if (!emailPattern.exec(emailField.value)) {
            emailField.style = 'border-color: red';
            isDataValid = false;
        } else {
            emailField.removeAttribute('style');
        }

        if (!passwordPattern.exec(confirmPasswordField.value) || passwordField.value !== confirmPasswordField.value) {
            passwordField.style = 'border-color: red';
            isDataValid = false;
        } else {
            passwordField.removeAttribute('style');
        }

        if (!passwordPattern.exec(confirmPasswordField.value) || passwordField.value !== confirmPasswordField.value) {
            confirmPasswordField.style = 'border-color: red';
            isDataValid = false;
        } else {
            confirmPasswordField.removeAttribute('style');
        }

        if (!companyFieldPattern.exec(companyNumberField.value) && checkBox.checked ==true) {
            companyNumberField.style = 'border-color: red';
            isCompanyNumberValid = false;
        } else if (companyFieldPattern.exec(companyNumberField.value) && checkBox.checked ==true){
            companyNumberField.removeAttribute('style');
            isCompanyNumberValid = true;
        }

        if (isDataValid && checkBox.checked ==false){
            document.querySelector('#valid').style = 'display: block';
        } else if (isDataValid && checkBox.checked ==true && isCompanyNumberValid){
            document.querySelector('#valid').style = 'display: block';
        } else {
            document.querySelector('#valid').style = 'display: none';
        }
    });

    checkBox.addEventListener('change', (event) => {
        if (event.target.checked == true){
            companyInfoArea.style.display = 'block';

        } else {
            companyInfoArea.style.display = 'none';
        }
    });
}
