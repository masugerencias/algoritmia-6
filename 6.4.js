// EJERCICIO 4: 4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
// En caso de error en el usuario o en el password devolver mensaje de error: "Datos incorrectos".
// En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte". */



function usuarioContrasenia(){
let usuariocorrecto='admin';
let contraseñacorrecta=1234;
let contador=3;

   


do{
   /*  let usuario= prompt('dime tu usuario');
    let contraseña= prompt('dime tu contraseña'); */
    
    
    var usuario=document.getElementById('usuario').value  
    var contraseña=document.getElementById('contraseña').value
    var resultado=0;
    if (usuario == usuariocorrecto && contraseña == contraseñacorrecta) {
        resultado='Usuario y contraseña correctos';
        contador = 0;
      } else if (usuario != usuariocorrecto || contraseña != contraseñacorrecta) {
        contador--;
        if (contador > 0) {
          resultado=('Usuario y contraseña incorrectos te quedan ' + contador + ' intentos')  ;
        } else {
            resultado='15 mins de espera, se han acabado los intentos';
        }
      }
    } while (contador > 0);
 

    let texto=document.createTextNode(resultado);
    let parrafo=document.createElement('p')
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);

}
    