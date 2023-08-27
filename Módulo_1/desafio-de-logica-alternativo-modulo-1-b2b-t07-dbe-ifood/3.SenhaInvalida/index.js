function solucao(senhaDigitada) {
  if (senhaDigitada.length >= 8) {
    for (let i = 0; i < senhaDigitada.length; i++) {
      if (senhaDigitada[i] + 1 === senhaDigitada[i + 1] &&
        senhaDigitada[i] + 2 === senhaDigitada[i + 2])
      {
        console.log('INVALIDA');
        return;
      }
    };


    console.log('VALIDA');
  } else {
    console.log('INVALIDA');
  }
}

return solucao([5, 3, 8, 5, 5, 5, 7,9])