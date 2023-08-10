/* filter, ele cria um  novo array com todos os elementos das function correspondente
a função callback. */

const numeros = [1,2,3,4,5,1];

const resultadoNumeros = numeros.filter((numero) => {
  return numero === 1;
});

console.log(resultadoNumeros);//retorna um novo array com os elementos pedidos na busca.
console.log(numeros);