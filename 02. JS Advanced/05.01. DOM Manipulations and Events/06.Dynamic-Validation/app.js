function validate() {
    document.getElementById('email').addEventListener('change', onInput);

    function onInput(event) {
        let email = event.target.value
        const regex = /[a-z]+@[a-z]+.[a-z]+/gm;
        let match = regex.exec(email);

        if (!match){
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}