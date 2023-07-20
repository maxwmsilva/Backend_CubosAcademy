const palavra = 'abracadeiraa'; //5 letras
let qtd = 0;
for (let letra of palavra) {
  if (letra === 'a') {
    qtd++;
  }
}
console.log(`A quantidade de letras é igual ao idice qtd sendo: ${qtd}`);

