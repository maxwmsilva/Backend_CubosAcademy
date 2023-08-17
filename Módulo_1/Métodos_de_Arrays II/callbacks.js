const print = (nome) => {
  console.log(nome)
}

print('guido');
/* ................................................................. */
const imprimirGuido =() =>{
  console.log('Guido Cerqueira');
}

//imprimirGuido();


//setTimeout(imprimirGuido, 10000);

setTimeout(() => { //arrow function
  console.log('Cubos Academy');
}, 1000);

//setTimeout fica repetindo conforme definido os milisegundos
setTimeout(function() { // function normal 
  console.log('Max Willian');
}, 2000);