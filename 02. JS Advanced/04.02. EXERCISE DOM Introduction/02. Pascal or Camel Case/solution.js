function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let splitted = text.split(' ');

  function pascalCase(splitted) {
    let result = '';
    for (let i = 0; i < splitted.length; i++) {
      for (let k = 0; k < splitted[i].length; k++) {
        if (k == 0) {
          result += splitted[i][k].toUpperCase();
        }
        else {
          result += splitted[i][k].toLowerCase();
        }
      }
    }
    return result;
  }

  function camelCase(splitted) {
    let result = '';
    for (let i = 0; i < splitted.length; i++) {
      for (let k = 0; k < splitted[i].length; k++) {
        if (k == 0 && i == 0) {
          result += splitted[i][k].toLowerCase();
        }
        else if (k == 0 && i != 0) {
          result += splitted[i][k].toUpperCase();
        }
        else {
          result += splitted[i][k].toLowerCase();
        }
      }
    }
    return result;
  }

  let toPascalCase = pascalCase(splitted);
  let toCamelCase = camelCase(splitted);


  if (namingConvention == 'Camel Case') {
    document.getElementById('result').textContent = toCamelCase;
  } else if (namingConvention == 'Pascal Case') {
    document.getElementById('result').textContent = toPascalCase;
  } else {
    document.getElementById('result').textContent = 'Error!'
  }
}