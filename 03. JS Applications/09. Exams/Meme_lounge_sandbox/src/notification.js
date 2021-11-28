const box = document.getElementById('errorBox');

export function notify(message){
    box.innerHTML = `<span>${message}</span>`;
    box.style.display = 'block';
    // правим функция, която да направи обратното след 3 сек ==
    setTimeout(() => {
        box.style.display = 'none';
    }, 3000);
}
// правим го, за да виждаме резултата в конзолата и след това го изтриваме ==
window.notify = notify; 
