// EJERCICIO 5 Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra



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