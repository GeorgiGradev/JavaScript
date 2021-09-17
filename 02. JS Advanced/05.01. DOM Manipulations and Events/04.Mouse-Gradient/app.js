function attachGradientEvents() {
    document.querySelector('#gradient').addEventListener('mousemove', onMove);

    function onMove(event) {
        const offsetX = event.offsetX;
        const percentage = Math.floor(offsetX / event.target.clientWidth * 100); 
        
        document.getElementById('result').textContent = `${Number(percentage)}%`;
    }
}
