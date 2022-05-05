//EJERCICIO 3: Suma o resta (según elija el usuario) dos números reales


var sumar = function sumar(){

  let n1 = parseInt(prompt(' Introduce un numero'));
  let n2 = parseInt(prompt(' Introduce un numero'));
  let suma = n1 + n2;
  alert(suma);
}

function restar() {
  let n1 = parseInt(prompt(' Introduce un numero'));
  let n2 = parseInt(prompt(' Introduce un numero'));
  let resta = n1 - n2;
  alert(resta);
}