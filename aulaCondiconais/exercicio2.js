//a vista 10% desconto 
//parcelado em 6x sem juros 
// entre 7 e 12x o novo montante sera diferente M=C(1+i)^n 

const valorDaCompra = 100;
const numeroDeParcelas =12;
const desconto = (valorDaCompra * (10/100)).toFixed(2);
const valorCjuros = (valorDaCompra*(1+1/100)**numeroDeParcelas).toFixed(2);  

if( numeroDeParcelas === 1){
  console.log(`valor a vista tem 10% de desconto, devera pagar ${valorDaCompra - desconto}`);

}else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
  console.log(`valor da compra parcelado em ${numeroDeParcelas} vezes é ${valorDaCompra/numeroDeParcelas}`);
  
}else if (numeroDeParcelas >= 7 && numeroDeParcelas <=12){
  console.log(`com juros o valor será: ${valorCjuros}`)

}else{
  console.log("numero de parcelas invalidas")
}