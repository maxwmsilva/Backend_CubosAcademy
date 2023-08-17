function imprimir(dia,mes,ano){

  const diaFormatado = String(dia).padStart(2, "0"); //convert number to string
  const mesFormatado = `${mes}`.padStart(2, "0"); //convert number to string
  const anoFormatado = `${ano}`.padStart(4, "0"); //convert number to string
  console.log(`${diaFormatado}/${mesFormatado}/${ano}`);  
}

imprimir(1,2,202);


