const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerText.split(" ").map(word =>word.length > 8 ? `<span style = "background-color :yellow"> ${word}</span>`:word)
.join(" ");


//Bueno, en este caso se nos pide cambiar el color de las palabras que tengan 8 o mas letras,
//Para esto se uso el texto Lorem Ipsum, con el contenedor de p, se igualo una constante paragraph a ese elemento
//Despues de eso al HTML del parafo se le empezo a aplicar algunos metodos.
//Primero innerText, que nos dice que sos va a actuar en el texto del parafo, dsp split(" ") que separa cada palabra en un array
//Luego el metodo map que junto con la ayuda de un operador ternario devuelve otro array, a aquellas palabras con 8 caracteres o mas les agrega un color amarillo
//A aquellas palabras menores de 8 caracteres la retornaba sin cambios. por ultimo, une a cada elemento del array en un string con el metodo join(" ")