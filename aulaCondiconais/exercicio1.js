//a vista 10% desconto 
//parcelado em 6x sem juros 

const valorDaCompra = 100;
const numeroDeParcelas =4;
const desconto = valorDaCompra * (10/100);

if( numeroDeParcelas === 1){
  console.log(`valor a vista tem 10% de desconto, devera pagar ${valorDaCompra - desconto}`);

}else {
  console.log(`valor da compra parcelado em ${numeroDeParcelas} vezes é ${valorDaCompra/numeroDeParcelas}`);

}