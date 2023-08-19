function solucao(ano) {
  const anoQuePassou = 1986;
  const periodo =76;
  const conta = ano - anoQuePassou
  if(conta % periodo === 0){
  console.log("VAI PASSAR");
}else{
  console.log("NAO VAI PASSAR");
 }
}
return solucao(2062);