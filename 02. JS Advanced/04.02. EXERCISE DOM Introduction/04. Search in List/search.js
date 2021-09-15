function search() {
   let searchElement = document.getElementById('searchText');
   let searchText = searchElement.value;

   let allLiElements = Array.from(document.querySelectorAll('#towns li'));

   allLiElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   });

   let targetLiElements = allLiElements
      .filter(el => el.textContent.includes(searchText))
      .map(el => {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      });


   let result = document.getElementById('result');
   result.textContent = `${targetLiElements.length} matches found`
}
