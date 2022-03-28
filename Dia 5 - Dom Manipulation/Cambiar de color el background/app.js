const btn = document.getElementById("btn");
const color = ["green","blue","yellow","white","pink"];
let index = 0;

btn.addEventListener("mouseover", function onClick(){ //"click" para clickear, 
//"wheel" para cambiar el color con el mouse, y mouseover cada vez que entra al cuadrado del boton
    btn.style.backgroundColor = color[index-1];
    document.body.style.backgroundColor = color[index];
    index = index >= color.length - 1 ? 0 : index + 1;
})


//Este codigo es igual que el anterior, pero con la diferencia que el boton tiene un desfasaje de color
//Con el cambio de color del background

//Tambien encontre algunas funciones divertidas del boton, como click,wheel y mouseover entre tantas otras