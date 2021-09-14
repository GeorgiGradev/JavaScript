function calc() {
    let firstInput = document.getElementById('num1').value;
    let secondInput = document.getElementById('num2').value;
    let result = document.getElementById('sum');
    result.value = Number(firstInput) + Number(secondInput);
}
  