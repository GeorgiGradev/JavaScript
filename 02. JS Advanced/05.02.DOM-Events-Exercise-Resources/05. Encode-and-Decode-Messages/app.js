function encodeAndDecodeMessages() {
    let messageInput = document.querySelectorAll('#main div textarea')[0];
    let receivedInput = document.querySelectorAll('#main div textarea')[1];


    let button1 = document.querySelectorAll('#main div button')[0];
    let button2 = document.querySelectorAll('#main div button')[1];
    button1.addEventListener('click', onClickCode);
    button2.addEventListener('click', onClickEncode)

    function onClickCode() {
        let output = '';
        for (let i = 0; i < messageInput.value.length; i++) {
            output += String.fromCharCode(messageInput.value[i].charCodeAt() + 1);
           
        }
        receivedInput.value = output;
        messageInput.value = '';
    }

    function onClickEncode() {
        let output = '';
        for (let i = 0; i < receivedInput.value.length; i++) {
            output += String.fromCharCode(receivedInput.value[i].charCodeAt() - 1);
           
        }

        receivedInput.value = output;
    }

}