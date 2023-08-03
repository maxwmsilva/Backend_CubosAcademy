//slice pega uma fatia de um array
function filter(dados){ //filter filtra 80%
  const startIndex= Math.round(dados.length *10/100); //round aproxima o valor
  const endIndex = Math.floor(dados.length* 90/100);
  const fatia = dados.slice(startIndex, endIndex)
  console.log(startIndex, endIndex);
  console.log(fatia);
}


const dados  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,0,0];

filter(dados);