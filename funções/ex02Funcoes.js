function faixaEtaria(idade) {
  if (idade <= 21) {
    return "jovem";
  } else if (idade < 66) {
    return "adulto";
  } else {
    return "idoso";
  }
}

console.log(faixaEtaria(30));
console.log(faixaEtaria(20));
console.log(faixaEtaria(70));