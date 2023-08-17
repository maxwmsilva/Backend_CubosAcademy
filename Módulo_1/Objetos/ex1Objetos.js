const pessoa = {
  nome: "Max Willian",
  idade: "29",
  altura: "1.68",
  temCNH: true,
  apelido: ["Dé", " e Ps"]
}
//criando  a variavel fora do escopo para servir em todo o codigo 

const cnh = (pessoa.temCNH ? "possui" : "não possui");

 //cuidado para não esquecer de referenciar o objeto em pessoa.temCNH

// if (pessoa.temCNH){
//  cnh = "possui";
//  }else{
//  cnh = "não possui"
//}


console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, com altura ${pessoa.altura}m de altura, ${cnh} CNH e apelidos`); //${pessoa.apelido[0]} e ${pessoa.apelido[1]}`); 

//usando for of para resolver o apelido
for(let apelidos of pessoa.apelido){
  console.log(`-${apelidos}`);
}

