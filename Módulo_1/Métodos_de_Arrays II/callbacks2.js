// const imprimir = () =>{
//   console.log('Olá alunos e alunas ');
//   clearInterval(interval); // interrompe o interval 
// }
// //executa a cada intervalo de tempo definido , ele entra basicamente em loop
// const interval  = setInterval(imprimir, 2000);


let numero =10
const contador =  setInterval(function(){
  console.log(numero)

  numero--
  if (numero ==0){
    console.log('Boooooom');
    clearInterval(contador)
  }
}, 1000)