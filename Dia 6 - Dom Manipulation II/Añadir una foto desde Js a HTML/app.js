const imageSrc = 'https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw';
//Crea una variable "imageSrc" y la iguala a la direccion HTTP de la foto que se quiere
const divElement = document.querySelector("div");   //Crea una variable y la iguala al primer div con querySelecto
const imgElement = document.createElement("img")    //Crea una imagen y la iguala a la variable imgElement

imgElement.src = imageSrc;          //Dado que imgElement es una foto tiene un src que lo iguala a la foto de internet
divElement.appendChild(imgElement); //Y con el metodo appendChild inserta la imagen en el div de html                 
