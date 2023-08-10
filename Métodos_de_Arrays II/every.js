/* every testa se todos os elementos do array passam pelo teste implementado na function callback,
uma vez passado o argumento ele retorna true or false. */
const frutas = ['Abacaxi', 'Manga','Melancia'];
const numeros = [1,2,3,4,5];

// const resultado = frutas.every((elementoAtual)=> {
//   return elementoAtual !='Abacaxi';

// });
const resultado = numeros.every((numeros) => {
  return numeros < 5;
});

console.log(resultado);
//retorna false porque tem o 5 no array e 5=5 então retorna false para que todos os elementos são menores do que 5!

