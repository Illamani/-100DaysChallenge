//Antes que nada, voy a explicar brevemente el metodo filter, este metodo es bastante simple
//de explicar, toma un array y lo filtra hacia uno nuevo dependiendo de un parametro a cumplir
//El primer ejemplo, es una funcion que dada un array con numeros devuelva otro array con
//numeros mayor a un parametro.

//1) Dado un array con numeros, filtrar los valores menores a 5;

let fiveAndGreaterOnly = arr =>{
    return arr.filter(nums => nums > 5)
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//2) Dado un array de numeros, retornar valores que solo sean impares.

let evensOnly = arr =>{
    return arr.filter(nums => nums%2 == 0); 
}

console.log(evensOnly([3, 6, 8, 2,11,12]));

//3) Dado un array de strings, retornar un array con aquellas palabras con menos de 5 caracteres

let fiveCharactersOrFewerOnly = arr =>{
    return arr.filter(palabra => palabra.length < 5);
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//4) Dado un array de objeto con personas, retornar un nuevo arreglo que filtre aquello que no pertecen al club;

let peopleWhoBelongToTheIlluminati = obj =>{
    return obj.filter(persona => persona.member == true);
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

//5) Hacer un array con aquellas persona que son mayores de 18 años

let ofAge = obj =>{
    return obj.filter(persona => persona.age >= 18);
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 