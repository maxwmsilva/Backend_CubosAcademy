/* retorna o índice do primeiro elemento do array, correspondente a condição implementada
na função callback, passada como argumento. caso contrario retorna -1 */

const carros = [
  { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata'}
];

const nomes = ['joao', 'ana','rodrigo'];

const resultado = carros.findIndex((carro)=>{
  return carro.nome === 'corola';

});

const resultado2 = nomes.findIndex((nome)=>{
  return nome === 'rodrigo';

});

console.log(resultado);
console.log(resultado2);
//retorna zero por seer o primeiro elemento do array.
//retorna -1 se o elemento não existir dentro do array.

