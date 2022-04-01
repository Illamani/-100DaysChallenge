//En este ejercicio se pide devolver el valor mas grande de cada array y volverlos un array unico

let numMasLarg = arr => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {      //En esta parte itera por aca elemento del array
      let numMasGrande = arr[i][0];             //Toma una variable del numero mas grande de cada subArray como el primer elemento
      for (let j = 1; j < arr[i].length; j++) { //Aca vuelve a iterar, pero en cada subArray
        if (arr[i][j] > numMasGrande) {         //Consulta si el elemento actual del subArray es el mayor numero
          numMasGrande = arr[i][j];             //De ser cierto iguala la variable a ese valor
        }
      }
      res[i] = numMasGrande;                    //Y luego imprime en la variable res ese valor mas grande en una posicion de una array
    }
    return res;
  }

console.log(numMasLarg([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))   