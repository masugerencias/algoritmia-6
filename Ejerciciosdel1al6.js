//EJERCICIO 1 Solicita al usuario tres números enteros e indícale cuál es el menor.

function tresnumeros() {
  var n1 = document.getElementsByName('n1').value;
  var n2 = document.getElementsByName('n2').value;
  var n3 = document.getElementsByName('n3').value;
let resultado=0


  /* var n1 = parseInt(prompt('n1'));
  var n2 = parseInt(prompt('n2'));
  var n3 = parseInt(prompt('n3')); */
//hacer una funcion que 
  if (n1 <= n2 && n1 <= n3) {
    resultado=n1.value ;
  } else if (n2 <= n1 && n2 <= n3) {
    resultado=n2.value ;
  } else {
    resultado=n3.value; 
  }
let texto=document.createTextNode('resultado')
let parrafo=document.createElement('p')
parrafo.appendChild(texto)
document.body.appendChild(parrafo)

}

//EJERCICIO 2 Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

function resolver1() {

  let frase = document.getElementsByName("input1").value
  let letra = document.getElementsByName("input2").value
  let n1 = 0;
  for (let j = 0; j < frase.length; j++) {
      if (frase[j] == letra) {
          n1++;
      }

  }
 // var conten1 = document.createElement("p")

 alert("la letra se repite " + n1 + " veces");
}
//EJERCICIO 3: Suma o resta (según elija el usuario) dos números reales

let sumar = () => {
  var n1 = document.getElementsByName('n1')[0];
 // let n1 = parseInt(prompt(' Introduce un numero'));
 var n2 = document.getElementsByName('n2')[0];
 // let n2 = parseInt(prompt(' Introduce un numero'));
  let suma = n1.value + n2.value;
  alert(suma);
};

let restar = () => {
  let n1 = parseInt(prompt(' Introduce un numero'));
  let n2 = parseInt(prompt(' Introduce un numero'));
  let resta = n1 - n2;
  alert(resta);
};

/* EJERCICIO 4: 4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
En caso de error en el usuario o en el password devolver mensaje de error: "Datos incorrectos".
En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte". */

const correctuser = 'admin';
const correctpassword = 1234;
var countuser = 0;
let usuario = 0;
let contraseña = 0;
let usuariocorrecto = 'admin';
let contraseñacorrecta = 1234;
let contador = 3;

(function () {
  do {
    let usuario = prompt('dime tu usuario');
    let contraseña = prompt('dime tu contraseña');

    if (usuario == usuariocorrecto && contraseña == contraseñacorrecta) {
      alert('Usuario y contraseña correctos');
      contador = 0;
    } else if (usuario != usuariocorrecto || contraseña != contraseñacorrecta) {
      contador--;
      if (contador > 0) {
        alert(
          'Usuario y contraseña incorrectos te quedan ' + contador + ' intentos'
        );
      } else {
        alert('15 mins de espera, se han acabado los intentos');
      }
    }
  } while (contador > 0);
})(); 

// EJERCICIO 5 Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
//VERSION IF ELSE

let unaletra = () => {
  const introducirletra = prompt('Introduce una letra ');

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
  }
};

// VERSION SWITCH
function casos() {
  const introducirletra = prompt('Introduce una letra ');
  switch (introducirletra) {
    case 'a':
      alert(7);
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      break;
    case 'b':
      alert(9);
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break;
    case 'c':
      alert(101);
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      alert('Te has equivocado de letra');
      break;
  }
}

// EJERCICIO 6: Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
// El sort()ordena los elementos como cadenas en orden alfabético y ascendente.

function sort() {
  var array = [
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
}

//VARIACIÓN DEL EJERCICIO USANDO METODO BURBUJA
let burbuja = () => {
  var array = [
    'sergio',
    'yann',
    'javier',
    'nacho',
    'davinia',
    'jorge',
    'anibal',
  ];

  var aux;
  //Algortimo de la burbuja.
  for (let i = 0; i <= array.length; i++) {
    for (let k = 0; k <= array.length; k++) {
      if (array[k] > array[k + 1]) {
        aux = array[k + 1];
        array[k + 1] = array[k];
        array[k] = aux;
      }
    }
  }
  alert(array);
}
