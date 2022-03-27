//1)Dado un array con dos numero devolver la suma entre los dos numeros, independientemente de su posicion

let sumAll= (arr) =>{
    let max = Math.max(arr[0],arr[1]);      //Designa la variable max al valor mas grande entre los dos elementos del array
    let min = Math.min(arr[0],arr[1]);      //Designa la variable min al valor mas chico entre los dos elementos del array
    let suma = 0;                           
  
    for(let i = min;i <= max;i++){          //Crea una iteracion for con valor de i igual a min y valor de parada igual a max
      suma += i;                            //Suma en la variable suma los valores entre min y max, independientemente de si en el array min esta primero o segundo
    }
    return suma;
  }
  
  console.log(sumAll([4,2]))

//2)Dado dos arrays retornar un array con elementos que aparescan solo en uno de esos arrays

let diffArray = (arr1,arr2) => {
    var newArr = [];
    let onlyInFirst = (first,second) =>{          //Crea una funcion que toma dos argumentos
      for(var i = 0;i < first.length;i++){        //Crea una iteracion
        if(second.indexOf(first[i]) === -1){      
  //El metodo indexOf toma un array y consulta si tiene algun argumento, si lo tiene lo devuelve
  //si no lo tiene devuelve un -1; por eso aca itera sobre el primer elemento(first) y en caso
  //de que second no tenga ese argumento
  
          newArr.push(first[i])                   //pushea en el array la iteracion de first[i]
        }
      }
    }
    onlyInFirst(arr1,arr2);                       //Hace la funcion iteradora con los argumentos arr1 y arr2
    onlyInFirst(arr2,arr1);                       //Hace la misma funcion, pero con los argumentos invertidos
  
    return newArr
  }
  
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))



//3) Dado un array con un array y otros valores como argumentos, crear un nuevo array con los valores filtrados por argumentos del array
let destroyer = (arr) =>{
    var valsToRemove = Array.from(arguments).slice(1);
    //Este variable crea un array a partir de los elementos cortados ("slice") del 2do argumento
    return arr.filter(val =>valsToRemove.includes(val) == false);
    //Retorna el filtrado del array, a cada valor del array consulta si no tiene los valores a filtrar, de ser asi los retorna
} 
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//4) Dado una oracion, retornar un string cambiando espacio por "-"
let spinalCase =(str) => {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");


//5) Dada una oracion, retornar la misma oracion pero con todos las primeras letras de las palabras en mayuscula
let titleCase = (str) => {
    return str          //Anida metodos
      .toLowerCase()    //lleva a todas las palabras a minuscula
      .split(" ")       //Separa por un espacio cada palabra del str y los convierte en un array
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))      
      //Aca usa el metodo map,a cada valor del array reemplaza su primer caracater (charAt(0)) con el mismo caracter, pero en mayuscula
      .join(" ");       //Por ultimo a cada elemento del array los convierte en un unico string con una separacion de un espacio
  }
  
 console.log(titleCase("I'm a little tea pot")); 
