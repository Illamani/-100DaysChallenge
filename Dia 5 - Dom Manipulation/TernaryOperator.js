//El operador ternario, es un operador que dada una coindicion devuelve un resultado u otro

//1)En este caso, dada la edad de una persona devolver si es mayor o menor

var age = 19;
console.log((age >= 18)? "Sos un adulto":"Sos un chico");

//2)En este segundo caso ademas de consologear si es mayor o no, tambien setea una variable a true o false dependiendo de la edad

var stop;

age > 18 ? (
    console.log("Bueno, sos mayor de 18"),
    stop = false
):(
    console.log("Sos menor de 18"),
    stop = true
);

//3)Ternario del Dom Manipulation 
const color = ["green","blue","yellow","white","pink"];
let index = 0;
index = index >= color.length - 1 ? 0 : index + 1;
//En este caso el ternario va a ser un ciclo sin fin del index,que luego ese index se utiliza para elegir un color.
//El ternario consulta si el index es mayor o igual al largo del array color, de ser asi iguala index a 0, de no ser asi suma un valor al index
