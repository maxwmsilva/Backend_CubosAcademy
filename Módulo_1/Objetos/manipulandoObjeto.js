const Pessoa = {
  nome: "Jose",
  altura: 1.73,
  peso: 60

};
Pessoa.nome = "Max"
Pessoa['nome'] = "Max Willian"

console.log(`Meu nome é ${Pessoa.nome}, ${Pessoa.altura} metros de altura e peso ${Pessoa.peso} kilos`);
