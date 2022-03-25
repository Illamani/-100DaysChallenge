//1) Encontrar la palabra mas larga dentro de una oracion
let findLongestWordLength = (str) => {
    return Math.max(...str.split(" ").map(word =>word.length))
}
//Explicacion 1er ejercicio, el metodo Math.max regresa el mayor valor entre todos los numeros, pero necesita si o si valores numericos.
//Por eso pasamos de la oracion a un conjunto de variables en un array para luego convertirlas en numeros usando el metodo map
//Los 3 puntos suspensivos anterior a "str.split" son para pasar como argumento el valor de los numeros
console.log(findLongestWordLength("Hola me llamo ezequiel y vengo de san nicolas"));

//2) Introduccion a Reduce - suma de todos los valores de un array.
const num = [1,-1,2,3,4];

console.log(num.reduce((acumulador, valorActual)=>{
   return acumulador + valorActual; 
},0)); //Si se omite el valor inicial del acumulador, el acumulador toma el primer valor del array 
//y como tiene una sola linea, se puede omitir el return

//3) Convertir un array de numeros en un string con esos numeros.

const numeros = [1,2,3,4,5,6,7];

console.log(numeros.reduce((acumulador,valorActual)=>{
    return acumulador  + valorActual + ""
},0)) //Si se le quiere agregar un espacio se debe agregar un espacio entre medio de los ""

//4) Dado un array de productos con sus precios, devolver el valor total de esos productos

const valorItems = [
    {nombre : "arroz" , valor : 15},
    {nombre : "fideos" , valor : 25},
    {nombre : "pescado" , valor : 50},
    {nombre : "milanesas" , valor : 30}
]

console.log(valorItems.reduce((total, item) =>{
    return total + item.valor
},0));

//5) Dado un grupo de personas con edades, agrupar en un unico objeto dependiendo de su edad
const personas = [
    {nombre : "Hernan", edad : 32},
    {nombre : "Daniela", edad : 25},
    {nombre : "Oscar", edad : 60},
    {nombre : "Maria Teresa", edad : 55},
]

const resultados = personas.reduce((personasEngrupadas, persona)=>{
    const edad = persona.edad;
    if(personasEngrupadas[edad] == null) personasEngrupadas[edad] = []
    personasEngrupadas[edad].push(persona)
    return personasEngrupadas
},{})

console.log(resultados)

//6) Dado un array de objetos con nombres, edad y si voto o no, contar la cantidad de votos positivos total

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];



function totalVotes(arr) {
    return arr.reduce((acumulador,votoPersona) => {
        const voto = votoPersona.voted;
        if(voto === true){
            acumulador += 1
        }
        return acumulador
     },0)
}
console.log(totalVotes(voters))

//7) Dado una lista de compras, devolver el valor total de los elementos.

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let shoppingSpree = arr => arr.reduce((acumulador,objeto) => {
    return acumulador + objeto.price;
},0)

console.log(shoppingSpree(wishlist))

//8) Dado un array de arrays, unirlos en un unico array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let flatten = arrs => {
    return arrs.reduce((arr,actual) => {
        return arr.concat(actual);
    },[])
}
console.log(flatten(arrays))

//9) Dado un array multidimensional de letras o valores, hacer un objeto con cada valor y sus cantidades
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