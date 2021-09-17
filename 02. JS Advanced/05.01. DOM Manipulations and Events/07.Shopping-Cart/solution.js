function solve() {
   const output = document.querySelector('textarea');
   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', onClick);

   document.querySelector('.checkout').addEventListener('click', onCheckOut);


   function onClick(event) {
      if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product') {

         const product = event.target.parentNode.parentNode;
         let price = Number(product.querySelector('.product-line-price').textContent);
         let title = product.querySelector('.product-title').textContent;

         cart.push({
            title,
            price
         });
         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function onCheckOut() {
      const result = cart.reduce((acc, item) => {
         acc.items.push(item.title);
         acc.total += item.price;
         return acc;
      }, { items: [], total: 0 });
      
      output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`
      disableButtons();
   }

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }

}


