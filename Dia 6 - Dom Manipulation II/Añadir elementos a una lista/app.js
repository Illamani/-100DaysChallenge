//Este ejercicios nos pide que dado una lista de fruta, añadirla a una lista desordenada en html

const listaFrutas = ["manzanas","bananas","naranjas","kiwis","peras"]; 
const lista = document.querySelector("ul");         //Devuelve el primer elemento que coincida con el argumento selecionado

listaFrutas.forEach((fruta)=>{                      //Por cada elemento de listaFrutas
    const elemento = document.createElement("li");  //Crear una variable elemento y lo igual a un List Item (li) 
    elemento.textContent = fruta;                   //Ahora dice, que el texto de esa variable se iguala a cada elemento del array
    lista.appendChild(elemento);                    //El metodo appendChild en este caso,toma la variable elemento y la anexa a la variable lista, osea a las Unordered List(ul)
})