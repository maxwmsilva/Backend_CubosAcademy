const pessoa = {
  nome: "Max",
  idade: 10,
  cidade: "itajubá",
  profissao: "Dev"

};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, cidade, ...outros} = pessoa;
console.log(nome, idade, cidade);
console.log(outros);
