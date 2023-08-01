function string(texto) {
  const arrayDeLetras = texto.split(""); //split quebra o array em varios itens
  arrayDeLetras.reverse(); //inverte o array.

  let textoInvertido = "";
  for (let letra of arrayDeLetras) {
    //texto invertido = textoInverido + letra;
    textoInvertido += letra;

    }
    console.log(textoInvertido);
  }

  string("Max Willian");