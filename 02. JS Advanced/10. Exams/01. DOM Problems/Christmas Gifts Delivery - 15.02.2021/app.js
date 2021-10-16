function solution() {
    const[gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');

    document.querySelector('button').addEventListener('click', addGift);
    

    function addGift() {

        let name = input.value;
        input.value = '';

        const li = e('li', name, 'gift');
        const sendButton = e('button', 'Send', 'sendButton');
        const discardButton = e('button', 'Discard', 'discardButton')

        li.appendChild(sendButton);
        li.appendChild(discardButton);
        gifts.appendChild(li);

        Array.from(gifts.children)
        .sort((a,b) => a.textContent
        .localeCompare(b.textContent))
        .forEach(g => gifts.appendChild(g));

        sendButton.addEventListener('click', sentGift);
        discardButton.addEventListener('click', discardedGifts);
    }

    function sentGift(event) {
        let giftName = event.target.parentNode.childNodes[0].textContent;
        let element = event.target.parentNode;
        element.remove();

        let li = e('li', giftName, 'gift');
        sent.appendChild(li);
    }

    function discardedGifts(event){
        let giftName = event.target.parentNode.childNodes[0].textContent;
        let element = event.target.parentNode;
        element.remove();

        let li = e('li', giftName, 'gift');
        discarded.appendChild(li);
    }
 


    function e(type, content, className){
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}
