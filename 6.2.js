//EJERCICIO 2 Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.


//funcion flecha

let contar = ()=>{


  var frase=document.getElementById('fraseid').value;  
  var letra=document.getElementById('letraid').value;  
  let contador=0;


/* var frase = prompt('Introduce una frase: '); //hola
var letra = prompt('Introduce una letra: '); //a */

for (let i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    contador++
  }
}
let texto=document.createTextNode('Tu frase tiene ' + contador+ ' letras ' + letra);
let parrafo=document.createElement('p')
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

}