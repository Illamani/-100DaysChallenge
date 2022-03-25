const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];


let contadorDeLetras = arr =>{
    return arr
    .flat()
    .reduce((acumulador,letraActual)=>{
        if(acumulador[letraActual]){
            acumulador[letraActual] += 1;
        }
        else{
            acumulador[letraActual] = 1;
        }
        return acumulador
    },{})
}

console.log(contadorDeLetras(input))