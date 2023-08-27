function solucao(lados) {
  if (lados.length !== 3) {
    console.log('NAO TRIANGULO');
  } else if (lados[1] + lados[2] > lados[0] &&
             lados[0] + lados[2] > lados[1] &&
             lados[0] + lados[1] > lados[2]) {
    console.log('TRIANGULO');
  } else {
    console.log('NAO TRIANGULO');
  }
}

solucao([3, 5, 4]);
solucao([2, 5, 10, 6]);
