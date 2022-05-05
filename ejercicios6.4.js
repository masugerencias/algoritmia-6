/*
EJERCICIO 1 Solicita al usuario tres números enteros e indícale cuál es el menor.

var n1 = parseInt(prompt('n1'));
var n2 = parseInt(prompt('n2'));
var n3 = parseInt(prompt('n3'));
console.log(n1 + n2 + n3);

if (n1 <= n2 && n1 <= n3) {
  console.log(n1 + 'es el menor');
} else if (n2 <= n1 && n2 <= n3) {
  console.log(n2 + 'es el menor ');
} else {
  console.log(n3 + 'es el menor');
}
*/
//EJERCICIO 2 Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

// var frase = prompt('Introduce una frase: '); //hola
// var letra = prompt('Introduce una letra: '); //a
// var array = [];

// for (let i = 0; i < frase.length; i++) {
//   if (frase[i] == letra) {
//     array.push(frase[i]);
//   }
// }

// console.log(array.length);

//EJERCICIO 3: Suma o resta (según elija el usuario) dos números reales
// function sumar() {
//   let n1 = parseInt(prompt(' Introduce un numero'));
//   let n2 = parseInt(prompt(' Introduce un numero'));
//   let suma = n1 + n2;
//   alert(suma);
// }

// function restar() {
//   let n1 = parseInt(prompt(' Introduce un numero'));
//   let n2 = parseInt(prompt(' Introduce un numero'));
//   let resta = n1 - n2;
//   alert(resta);
// }

/* EJERCICIO 4: 4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
En caso de error en el usuario o en el password devolver mensaje de error: "Datos incorrectos".
En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte". */

const correctuser = 'admin';
const correctpassword = 1234;
var countuser = 0;
//var countpassword = 0;

do {
  var user = prompt('Dime tu usuario');
  // var password = prompt('Dime tu contraseña');

  if (user === correctuser) {
    alert('Usuario correcto');
  } else {
    alert('Datos incorrectos');
    countuser++;
  }
} while (countuser < 3);
{
  alert('usuario bloqueado 15 mins');
}

/* do {
  var password = prompt('Dime tu password');
  // var password = prompt('Dime tu c ontraseña');

  if (password === corretpassword) {
    alert('Correct password');
  } else {
    alert('Pasword incorrecta');
    countpassword++;
  }
} while (countpassword < 3);
{
  alert('usuario bloqueado 15 mins');
}
 */
// EJERCICIO 5 Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

/* const introducirletra = prompt('Introduce una letra ');

if (introducirletra == 'a') {
  alert(7);
} else {
  if (introducirletra == 'b') {
    alert(9);
  } else {
    if (introducirletra == 'c') {
      alert(101);
    } else {
      alert('Te has equivocado de letra');
    }
  }
} */

// EJERCICIO 6: Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
// El sort()ordena los elementos como cadenas en orden alfabético y ascendente.

/* var array = [
  'sergio,',
  'yann',
  'javier',
  'nacho',
  'davinia',
  'jorge',
  'anibal',
];
var ordenacion = array.sort();
alert(ordenacion);
 */
//VARIACIÓN DEL EJERCICIO USANDO METODO BURBUJA

// var array = [
//   'sergio,',
//   'yann',
//   'javier',
//   'nacho',
//   'davinia',
//   'jorge',
//   'anibal',
// ];
