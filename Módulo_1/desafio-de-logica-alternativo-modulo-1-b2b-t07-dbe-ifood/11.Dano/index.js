function solucao(personagem) {
  if (personagem.vida <= 0 || personagem.vida === 1 ) {
    console.log('FIM DE JOGO');
  } else {
    personagem.vida -= 1;
    console.log(personagem.vida);
  }
}

 solucao({"nome":"Kratos","classe":"back-end","vida":15});
