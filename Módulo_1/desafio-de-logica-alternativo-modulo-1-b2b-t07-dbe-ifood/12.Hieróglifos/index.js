function solucao(hieroglifo) {
  let contadorPalavras = 0;

  for (const elemento of hieroglifo) {
    if (typeof elemento === "string") {
      contadorPalavras++;
    }
  }

  console.log(contadorPalavras);
}

solucao([2, "casa", "comida", 3, 4, 4, 5]);
