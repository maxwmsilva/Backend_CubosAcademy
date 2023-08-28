function solucao(texto) {
  const vogais = ["a", "e", "i", "o", "u"];
  const analise = texto.split(" ");
  //console.log(analise);

const semVogal =  analise.filter(palavra => {
  const temVogal = vogais.some(vogal => palavra.includes(vogal));
  return !temVogal && palavra.trim() !== "";//trim para remover
  //os espaços em branco.
});

const erros = semVogal.length;
console.log(erros);
}
//solucao("sdxw wre cubos pt  o a");