//EJERCICIO 1 Solicita al usuario tres números enteros e indícale cuál es el menor.




function tresnumeros (){

var n1 = parseInt(prompt('n1'));
var n2 = parseInt(prompt('n2'));
var n3 = parseInt(prompt('n3'));


if (n1 <= n2 && n1 <= n3) {
  alert(n1 + ' es el nº menor');
} else if (n2 <= n1 && n2 <= n3) {
    alert(n2 + ' es el nº menor ');
} else {
    alert(n3 + ' es el nº menor');
}
}

