/* let maxVal = 0xFFFFFF; // 16777215
let randomNumber = (Math.random() * maxVal);
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber.toString(16)
randomNumber = randomNumber.padStart(6,0)
console.log(randomNumber); */
    var colNum = 0;
function color(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    colNum = "#" + randColor.toUpperCase()
    document.body.style.backgroundColor =  colNum
    console.log(colNum)
    return colNum;
}
console.log(colNum)