//1) Hacer un array con numero que son el doble del array inicial.

let doubleNumbers = (arr) =>{               //Arrow Function.
    return arr.map(numero =>{                
        return numero * 2;                  //El metodo map va a retornar siempre un array
    });
}
console.log(doubleNumbers([1,2,3,4]))       //El metodo map siempre va a necesitar un array como parametro.

function numerosDobles(arr) {               //Standar function
    return arr.map(function(numeros){        //Toma una funcion anonima en este caso
        return numeros * 2;
    });
}
console.log(numerosDobles([1,2,3,4,5]));

//2) Tomar un array de numero y hacer un array de strings

let stringItUp = (arr) =>{
    return arr.map(letra =>{
        return letra + ""
    })
} 
console.log(stringItUp([1,2,3,4]))

function stringItUp(arr){
    return arr.map(function(letra){
        return letra + "";
    })
}

console.log(stringItUp([1,2,3,4]));

//3) Añadir man a cada heroe dentro del array

let nombres = ["spider","iron","super","ant","bat"];
let añadirSufijo = nombres.map(primer => primer + "man");
console.log(añadirSufijo)

//4) Añadir woman y man a cada heroe dependiendo de su posicion
let nombre = ["wonder","cat","spider","iron","super","ant","bat"]
let superHeroe = nombre.map(function(prefijo,indice){
    return (indice < 2) ? prefijo + "woman" : prefijo + "man"
})
console.log(superHeroe)

//5) Redondear una lista de numeros.
let numeros = [8.4,4.9,2.3,4.1];

let redondeados = numeros.map(function(num){
    return Math.round(num);
})
console.log(redondeados)

//6) Cambiar de string a numeros
let numeros1 = ["8","4","50","1"];

let pasajeDeStringANumer = numeros.map(function(num){
    return Number(num);
})
console.log(pasajeDeStringANumer)