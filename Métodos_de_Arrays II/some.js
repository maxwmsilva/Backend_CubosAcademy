/* testa se ao menos um dos elementos do array passam pelo teste, implementando a função callback
passada como argumento e retorna true or false */

const nomes =  [ 'joao','Maria', 'Jose', 'rodrigo'];
const numeros = [1,3,5,7];
const minhaFuncaoCallback =  nomes.some((nome) => {
  return nome  == 'joao';
});

const resultado = numeros.some((numero) =>{
  
     return numero %2 === 0;
 
});
console.log(minhaFuncaoCallback);
console.log(resultado);
