function solve() {
  let text = document.querySelector('body div textarea').value;

  function splitText(text) {

    let pattern = /[A-Z]+[^.]*./gm;
    let match = pattern.exec(text);

    let array = [];

    while (match != null) {
      array.push(match[0]);
      match = pattern.exec(text);
    }

    let arrayof3Sentences = [];

    while (array.length > 0) {
      let counter = 0;
      let bigSentance = ''
      while (array.length > 0 && counter < 3) { 
        bigSentance += array[0];
        array.shift();
        counter++;
      }
      arrayof3Sentences.push(bigSentance);
    }

    let outputArray = [];
    for (let i = 0; i < arrayof3Sentences.length; i++) {
      outputArray.push(`<p>${arrayof3Sentences[i]}</p>`)
    }
 
    return outputArray;
  }

  let array = splitText(text)
  let output = document.getElementById('output');

  for (let i = 0; i < array.length; i++) {
    output.innerHTML += array[i]
  }
}