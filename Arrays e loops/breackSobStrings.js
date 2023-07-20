const palavra = 'Alemana';
console.log(palavra);
for(letra of palavra){
  console.log(letra);

  if(letra === 'h'){
    console.log("tem a letra h")
    break; //interrompe o loop para nao ficar gastanto processamento.
  }
}

if(letra !='h'){
console.log("não tem letra h")
}