//En este ejercicio se busca repetir n veces el string(str)
//Se utiliza la reclusion para poder hacer este ejercicio, se repite hasta que n sea igual a 1
//A partir de ahi se concatenan todas las str 

let repetir = (str,n) =>{
    if(n === 1) return str;
    return str+ repetir(str,n-1);
}
console.log(repetir("str",3))