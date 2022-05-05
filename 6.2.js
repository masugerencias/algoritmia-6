//EJERCICIO 2 Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.


//funcion flecha

let contar = ()=>{



var frase = prompt('Introduce una frase: '); //hola
var letra = prompt('Introduce una letra: '); //a
var array = [];

for (let i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    array.push(frase[i]);
  }
}

alert('hay '+(array.length)+' '+ letra + ' en tu frase');
}