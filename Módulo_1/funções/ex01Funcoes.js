function pessoa(nome, idade, altura, profissao){
  console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura}m de altura e sou ${profissao}`)
}
pessoa("João", 12, 1.4, "Estudante");


//fazendo com const
//Não esquecer decolocar o sinal de =  senao nao é declarado o objeto
const pessoaObj = {
  nome: "Max",
  idade: 29,
  profissao: "Engenheiro",
  altura: 1.68
}

function apresentar(person){
  console.log(`Olá! Meu nome é ${person.nome}, sou um jovem de ${person.idade} anos, ${person.altura}m de altura e sou ${person.profissao}`)

}
apresentar(pessoaObj);
