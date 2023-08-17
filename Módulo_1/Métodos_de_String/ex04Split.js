const nome = "max willian marcelino da silva";
const arrayDeNomes = nome.split(" "); //separa em array menores o array nome
console.log(arrayDeNomes);

let nomeFormatado = "";
for (let item of arrayDeNomes) {
  //transformar a inicial de cada item em maiúscula
  let primeiraLetra = item.slice(0, 1); //o slice pega uma fatia de uma string 
  let restanteDoNome = item.slice(1);
  nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome
  
}
console.log(nome);
console.log(nomeFormatado.trim());



