function solucao(notas) {
  let maiorNota = Math.max(...notas);
  let menorNota = Math.min(...notas);
  let mediaTotal = 0;

  for (const nota of notas) {
    if (nota > maiorNota) {
      maiorNota = nota;
    } else if (nota < menorNota) {
      menorNota = nota;
    }
  }

  const diferencaNotas = (maiorNota - menorNota);

  if (diferencaNotas > 2) {
    console.log('RECORRIGIR PROVA');
  } else {
    for (const nota of notas) {
      mediaTotal += nota;
    }

    console.log(mediaTotal / notas.length);
  }
}

solucao([10, 9, 8, 7]);
solucao([10, 10, 9, 9]);
