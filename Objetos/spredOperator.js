//espalha o conteudo de um objeto 
//...pessoa usa 3 pontos antes do nome do objeto para espalhar

const pessoa = {
  nome: "Max",
  idade: 20,
  cidade: "Iajubá",
  profissao: "Dev"

};
const endereco = {
  rua: "henriqueto cardinli",
  numero: 20,
  bairro: "Varginha"
};
const objetoFundido = {
  ...pessoa,
  ...endereco,
  
};

console.log(objetoFundido);// juntou os 2 objetos em um só "objeto fundido."