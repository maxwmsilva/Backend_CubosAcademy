const numeros = [1,2,3,4,5,6,7,8,9];
console.log("imprimindo com for tradicional ")
for(let i=0; i< numeros.length; i++){
  console.log(numeros[i]);
}

console.log("imprimindo com while ")
let j = 0;
while(j < numeros.length){
  console.log(numeros[j]);
  j++;
}