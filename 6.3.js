//EJERCICIO 3: Suma o resta (según elija el usuario) dos números reales


var sumar = function sumar(){
  var n1=parseInt(document.getElementById('numero1').value)  
  var n2=parseInt(document.getElementById('numero2').value )

  /* let n1 = parseInt(prompt(' Introduce un numero'));
  let n2 = parseInt(prompt(' Introduce un numero')); */
  
  let resultado =(n1 + n2);
//  alert(suma);

  let texto=document.createTextNode(resultado);
  let parrafo=document.createElement('p')
  parrafo.appendChild(texto);
  document.body.appendChild(parrafo);


}

var restar = function restar(){
  var n1=parseInt(document.getElementById('numero11').value)  
  var n2=parseInt(document.getElementById('numero22').value)

  /* let n1 = parseInt(prompt(' Introduce un numero'));
  let n2 = parseInt(prompt(' Introduce un numero')); */
  
  let resultado =(n1 - n2);
  //  alert(suma);

  let texto=document.createTextNode(resultado);
  let parrafo=document.createElement('p')
  parrafo.appendChild(texto);
  document.body.appendChild(parrafo);


}