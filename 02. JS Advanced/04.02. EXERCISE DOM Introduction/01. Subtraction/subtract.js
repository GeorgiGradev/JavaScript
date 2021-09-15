function subtract() {
    const firstCell = Number(document.getElementById('firstNumber').value);
    const secondCell = Number(document.getElementById('secondNumber').value);
   document.getElementById('result').textContent = firstCell - secondCell;
}