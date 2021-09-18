function create(words) {
   let mainDiv = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph  = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';  
      div.appendChild(paragraph);
      mainDiv.appendChild(div);
   }

   mainDiv.addEventListener('click', showParagraph);

   function showParagraph(event) {
      let p = event.target.querySelector('body #content div p');
      p.style.display = 'block';
   }
}