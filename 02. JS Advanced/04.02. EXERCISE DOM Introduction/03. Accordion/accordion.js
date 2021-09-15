function toggle() {
    if (document.getElementsByClassName('button')[0].textContent == 'More') {
        document.getElementById('extra').style.display = 'block'
        document.querySelector('.button').textContent = 'Less'
    } else {
        document.getElementById('extra').style.display = 'none';
        document.querySelector('.button').textContent = 'More'
    }
}