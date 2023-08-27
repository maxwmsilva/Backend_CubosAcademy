function solucao(mensagem, tabela) {
  const arrayMensagem = mensagem.split("");

/*   const comparar = arrayMensagem[0];
  console.log(comparar); */

  const msgDescript = arrayMensagem.map(letra => {
    if (tabela.hasOwnProperty(letra)){
      return tabela[letra];
    } else {
      return letra;
    }

  }).join("");

  console.log(msgDescript);
}

return solucao("yeyb", { "y": "a", "e": "m", "b": "r" });
  //return solucao({"e":"u", "w":"o", "y":"c", "r":"b", "s":"s"});
