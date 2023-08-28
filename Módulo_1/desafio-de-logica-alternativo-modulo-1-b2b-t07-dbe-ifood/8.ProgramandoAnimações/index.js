function solucao(velocidade, pulando, atacando) {
  if (atacando) {
    console.log('ATACANDO');
  } else if (pulando) {
    console.log('PULANDO');
  } else if (velocidade === 0) {
    console.log('PARADO');
  } else if (velocidade <= 30) {
    console.log('ANDANDO');
  } else {
    console.log('CORRENDO');
  }

}

solucao(80, true, true);


