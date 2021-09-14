function extractText() {
    let liElements = [...document.getElementsByTagName('li')];
    let elementText = liElements.map(e => e.textContent); 
    document.getElementById('result').value = elementText.join('\n');
}