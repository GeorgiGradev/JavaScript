function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //1. Select elements
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = searchElement.value;

     // 1.a Clear files from previous search
      rowElements.forEach(el => el.removeAttribute('class'))

      //2. Find matching row elements to text
      //3. Modify style for matching rows
      rowElements
         .filter(row => row.textContent.toLowerCase().includes(searchText.toLowerCase()))
         .map(row => row.classList.add('select'))

      //4. Clear txt field
     searchElement.value = ''; 
   }
}