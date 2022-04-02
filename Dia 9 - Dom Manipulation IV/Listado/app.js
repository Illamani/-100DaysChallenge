const nombreItem = document.getElementById("userInput");    //Crea una variable del texto
const btn = document.getElementById("enter");               //Crea una variable del boton
btn.addEventListener("click",addListItem);                  //Crea un eventListener, por cada click invoca a la funcion addListItem
                                                            

function addListItem(){
    const lista = document.getElementById("list");              //Crea una variable de las lista desordenada (ul)  
    const li = document.createElement("li");                    //Crea un list Item(li)
    const valorItem = document.createTextNode(nombreItem.value);//Crea un textNode a partir del valor del texto
    li.appendChild(valorItem);                                  //Anida el texto al li
    lista.appendChild(li);                                      //Anida la li a la lista entera  
    console.log(valorItem)                                      //Consologea el valorItem para corroborar
}