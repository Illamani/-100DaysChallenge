var lista = document.querySelectorAll("li");
var par = document.getElementById("parafo");
var par1 = document.querySelector("p")
function getCount() {
    
    par.textContent = lista.length;

    if(lista.length<5){
        par1.style.backgroundColor ="white";
    }
    else{
        document.body.style.backgroundColor = "red"
    } 
   }
