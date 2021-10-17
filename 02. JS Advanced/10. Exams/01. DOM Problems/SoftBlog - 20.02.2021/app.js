function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');

   createBtn.addEventListener('click', addHandler);

   function addHandler(event) {
      event.preventDefault();
      const author = authorField.value;
      const title = titleField.value;
      const category = categoryField.value;
      const content = contentField.value;


      const section = document.querySelector('.site-content main section');
      const deleteBtn = e('button', { className: 'btn delete' }, 'Delete');
      const archiveBtn = e('button', { className: 'btn archive' }, 'Archive');

      const elementToAdd = e('article', {},
         e('h1', {}, title),
         e('p', {}, 'Category:', e('strong', {}, category)),
         e('p', {}, 'Creator:', e('strong', {}, author)),
         e('p', {}, content),
         e('div', { className: 'buttons' }, deleteBtn, archiveBtn)
      );
      section.appendChild(elementToAdd);

      deleteBtn.addEventListener('click', deleteHandler);
      archiveBtn.addEventListener('click', archiveHandler);
   }

   function deleteHandler(event) {
      const article = event.target.parentNode.parentNode;
      article.remove();
   }

   function archiveHandler(event){
      const article = event.target.parentNode.parentNode;
      const title = article.querySelector('h1').textContent;
      const ol = document.querySelector('.archive-section ol');
      const li = e('li', {}, title);
      ol.appendChild(li);
      article.remove();

      Array.from(ol.children)
      .sort((a,b) =>  a.textContent.localeCompare(b.textContent))
      .forEach(element => ol.appendChild(element));
   }

   function e(type, attributes, ...content) {
      const result = document.createElement(type);

      for (let [attr, value] of Object.entries(attributes || {})) {
         if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
         } else {
            result[attr] = value;
         }
      }

      content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

      content.forEach(e => {
         if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
         } else {
            result.appendChild(e);
         }
      });

      return result;
   }

}
