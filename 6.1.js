//EJERCICIO 1 Solicita al usuario tres números enteros e indícale cuál es el menor.




function calcular (){



  
var n1=document.getElementById('numero1').value;  
var n2=document.getElementById('numero2').value;  
var n3=document.getElementById('numero3').value;  
resultado=0;

/* var n1 = parseInt(prompt('n1'));
var n2 = parseInt(prompt('n2'));
var n3 = parseInt(prompt('n3')); */


if (n1 <= n2 && n1 <= n3) {
  resultado=n1;
} else if (n2 <= n1 && n2 <= n3) {
  resultado=n2;
} else {
  resultado=n3;}



let texto=document.createTextNode(resultado);
let parrafo=document.createElement('p')
parrafo.appendChild(texto);
document.body.appendChild(parrafo);
}