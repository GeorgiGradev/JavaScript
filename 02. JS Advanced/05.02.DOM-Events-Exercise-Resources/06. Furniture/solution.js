function solve() {
  let inputArea = document.querySelectorAll('#exercise textarea')[0];
  let generateButton = document.querySelectorAll('#exercise button')[0];
  let outputArea = document.querySelectorAll('#exercise textarea')[1];
  let buyButton = document.querySelectorAll('#exercise button')[1];

  generateButton.addEventListener('click', generateText);
  buyButton.addEventListener('click', buy);
  let tbodyElement = document.querySelector('tbody');

  function generateText() {
    let parsedInput = JSON.parse(inputArea.value);

    for (const element of parsedInput) {
      let trElement = document.createElement('tr');

      let tdImage = document.createElement('td');
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdDecFactor = document.createElement('td');
      let tdInput = document.createElement('td');


      let img = document.createElement('img');
      img.setAttribute('src', element.img)
      tdImage.appendChild(img);

      let pName = document.createElement('p');
      pName.textContent = element.name;
      tdName.appendChild(pName);

      let pPrice = document.createElement('p');
      pPrice.textContent = element.price;
      tdPrice.appendChild(pPrice);

      let pDecFactor = document.createElement('p');
      pDecFactor.textContent = element.decFactor;
      tdDecFactor.appendChild(pDecFactor);

      let inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'checkbox')
      tdInput.appendChild(inputElement);


      trElement.appendChild(tdImage);
      trElement.appendChild(tdName);
      trElement.appendChild(tdPrice);
      trElement.appendChild(tdDecFactor);
      trElement.appendChild(tdInput);

      tbodyElement.appendChild(trElement);
    }
  }
  
  function buy(){
     // let rows = Array.from(document.querySelectorAll('.table tbody tr'));
     // let selectedRows = rows.filter(row => row.querySelectorAll('input:checked').length > 0)
      const selectedRows = Array.from(tbodyElement.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode);
      let totalPrice = 0;
      let furniture = [];
      let decFactor = 0;
    console.log(selectedRows);
      for (const row of selectedRows) {
        const cells = row.children;
        totalPrice += Number(cells[2].children[0].textContent);
        furniture.push(cells[1].children[0].textContent);
        decFactor += Number(cells[3].children[0].textContent);
      }

      outputArea.textContent = `Bought furniture: ${furniture.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor / selectedRows.length}`
  }
}