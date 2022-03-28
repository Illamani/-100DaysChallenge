const btn = document.getElementById("btn");             //Se asigna una variable btn al elemento boton
                                                        //Se le asigna mediante su ID = "btn"

let index = 0;

const colors = ["salmon","black","white","pink"]

btn.addEventListener("click",function onClick(){        //Crea una funcion que depende del "click" del boton
    btn.style.color = "white";                          //Comienza con color blanco
    btn.style.backgroundColor = colors[index];          //Cambia el color del boton dependiendo del index que se encuentre
    index = index >= colors.length - 1 ? 0 : index + 1 ;//Utiliza el operador ternario 
})