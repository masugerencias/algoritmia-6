let array=['pablo','victor','maria','jose','andres','cristian','sebastian'];

let aux

for(let i=0;i<array.length-1;i++){
      for(let j=0;j<array.length-1;j++)//para cada vuelta que de, no la vuelva ha hacer.
            if(array[i]<array[j+1]){//aqui hay que ir pasandose la que no queremos creo...con las 3 variables, i, j y aux.
                  array[i]=array[j+1];
                  array[j+1]=aux;
//que lio hay aqui

}
}
console.log(array)

