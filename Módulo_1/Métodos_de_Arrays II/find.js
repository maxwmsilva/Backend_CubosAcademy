/* retorna o primeiro elemento do array, correspondente a condição implementada na function callback
caso contrario retorna unfefined */


const usuarios = [
  {nome: 'Max', idade: 17},
  {nome: 'Jessica', idade: 27},
  {nome: 'Bel', idade: 49},
  {nome: 'Airton', idade: 63},
];

const nomes = ['joao', 'ana', 'jose']; 

const numeros = [1,2,3,4,5];

const resultadoUsuarios = usuarios.find((nom)=>{
  return nom.nome === 'Bel';
});


const resultado = nomes.find((nome)=>{
  return nome === 'ana';
});
const numero = numeros.find((numero)=>{
  return numero === 3;
});
console.log(resultadoUsuarios);
console.log(resultado);
console.log(numero);