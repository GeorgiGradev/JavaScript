const box = document.getElementById('errorBox');

export function notify(message){
    box.innerHTML = `<span>${message}</span>`;
    box.style.display = 'block';
    // правим функция, която да направи обратното след 3 сек
    setTimeout(() => {
        box.style.display = 'none';
    }, 3000);
}