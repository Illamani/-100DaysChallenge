var colNum = 0;             //Se declara una variable final para el color del body 
function color(){          
    let maxVal = 0xFFFFFF;  //Maximo valor posible
    let randomNumber = Math.random() * maxVal;  //Multiplica un valor cualquiera(entre 0 y 1) por el maximo valor posible
    randomNumber = Math.floor(randomNumber);    //Toma el valor entero de la cuenta anterior
    randomNumber = randomNumber.toString(16);   //Lo convierte en hexadecimal
    let randColor = randomNumber.padStart(6, 0);   
    colNum = "#" + randColor.toUpperCase()      //Convierte los caracteres no numerico a mayuscula
    //Con eso se crearia el valor numerico para el color
    document.body.style.backgroundColor =  colNum;
    console.log(colNum)
    return colNum;
}
console.log(colNum)