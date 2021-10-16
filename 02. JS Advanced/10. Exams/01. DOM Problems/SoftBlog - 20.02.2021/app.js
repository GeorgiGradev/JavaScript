function solve() {
   let authorInput = document.querySelector('#creator');
   let titleInput = document.querySelector('#title');
   let categoryInput = document.querySelector('#category');
   let contentInput = document.querySelector('#content');
   let createButton = document.querySelector('form button');
   let section = document.querySelector('div.site-content main section');

   createButton.addEventListener('click', (event) => {
       event.preventDefault();
      let h1 = e('h1', titleInput.value); // =<>

      let categoryStrong = e('strong', categoryInput.value);
      let categoryP = e('p', 'Category:'); // =<>
      categoryP.appendChild(categoryStrong);

      let creatorStrong = e('strong', authorInput.value);
      let creatorP = e('p', 'Creator:'); // =<>
      creatorP.appendChild(creatorStrong);

      let p = e('p', contentInput.value); // =<>

      let deleteButton = e('button', 'Delete', 'btn delete');
      let archiveButton = e('button', 'Archive', 'btn archive');
      let div = e('div', undefined, 'buttons'); // =<>
      div.appendChild(deleteButton);
      div.appendChild(archiveButton);

      let article = e('article');

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(p);
      article.appendChild(div);

      section.appendChild(article);

      deleteButton.addEventListener('click', (event) => {
         event.preventDefault();
         let elementToDelete = event.target.parentNode.parentNode;
         elementToDelete.remove();
      });

      archiveButton.addEventListener('click', (event) => {
         event.preventDefault();
         let elementTitle = event.target.parentNode.parentNode.firstChild.textContent;
         let ol = document.querySelector('.archive-section ol');
         let li = e('li', elementTitle);

         ol.appendChild(li);
         let elementToDelete = event.target.parentNode.parentNode;
         elementToDelete.remove();

         Array.from(ol.children)
         .sort((a,b) =>  a.textContent.localeCompare(b.textContent))
         .forEach(element => ol.appendChild(element));
      });
   });

   function e(type, content, className) {
      const result = document.createElement(type);
      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }
}
