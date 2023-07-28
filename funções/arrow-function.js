//norma function
function soma(x, y) {
  //
  const resultado = x + y;
  return resultado;
}
//arrow function, falando que é uma function () => {}
const somaArrow = (x, y) => {
  const resultado = x + y;
  return resultado;
  
}
console.log (soma(5,2)+ "normal function");
console.log (somaArrow(5,2)+ "Com arrow function");

//use DRY - don't repeat yourself. 
