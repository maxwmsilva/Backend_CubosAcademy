function faixaEtaria(idade) {
  if (idade <= 21) {
    return "jovem";
  } else if (idade < 66) {
    return "adulto";
  } else {
    return "idoso";
 
  }
}

function apresentar(person){
  const determinarFaixaEtaria = faixaEtaria (person.idade);
console.log(`Olá! Meu nome é ${person.nome}, sou um jovem de ${person.idade}  anos,${determinarFaixaEtaria}, ${person.altura}m de altura e sou ${person.profissao}`)

}
const pessoaObj = {
  nome: "Max",
  idade: 29,
  profissao: "Engenheiro",
  altura: 1.68
}

apresentar(pessoaObj);