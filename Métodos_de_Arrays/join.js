function inverterString(texto) {
  const arrayDeLetras = texto.split(""); //split quebra o array em varios itens
  arrayDeLetras.reverse(); //inverte o array.

  const textoInverting = arrayDeLetras.join("");
  console.log(textoInverting);
}

inverterString("Max Willian");