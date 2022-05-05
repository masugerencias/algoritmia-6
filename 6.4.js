// EJERCICIO 4: 4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
// En caso de error en el usuario o en el password devolver mensaje de error: "Datos incorrectos".
// En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte". */




let usuariocorrecto='admin';
let contraseñacorrecta=1234;
let contador=3;

   


do{
    let usuario= prompt('dime tu usuario');
    let contraseña= prompt('dime tu contraseña');
    
    if(usuario==usuariocorrecto&&contraseña==contraseñacorrecta){
        alert('Bienvenido')
        contador=0;
    }else if (usuario!=usuariocorrecto||contraseña!=contraseñacorrecta){
        contador--;
        alert('datos incorrectos')}
    else if (contador=0){
        alert('15 mins de espera') //no me hce caso
        }
    
    

    }while(contador>0); 
 



 
    