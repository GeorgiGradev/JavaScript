function validate() {
    document.getElementById('email').addEventListener('change', onInput);

    function onInput(event) {
        let email = event.target.value;
        const pattern = /^\w+@\w+.\w+$/gm;
        let match = pattern.test(email);

        if (!match){
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}