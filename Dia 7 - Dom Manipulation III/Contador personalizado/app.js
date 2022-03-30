var contador = document.getElementById("contador");
var count = 0;

function menos(){
    count = count - 1;
    contador.textContent = count;
}
function mas(){
    count = count + 1;  
    contador.textContent = count;
}
function cero() {
    count = 0;
    contador.textContent = count;
}
