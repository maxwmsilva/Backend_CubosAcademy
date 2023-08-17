const number = "97.50"; //replace é um método que ela funciona apenas com string
const numero = 97.50;
const numberString = String(numero); // converter numero para string
const parte = number.replace(".",",");

console.log(parte);
console.log(number);
console.log(numberString);