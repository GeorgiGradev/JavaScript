function focused() {
   Array.from(document.querySelectorAll('input')).forEach(element => {
        element.addEventListener('focus', onFocus);
        element.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentNode.className = '';
    }
}