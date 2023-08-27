function solucao(d, gabarito) {
  let j = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] === gabarito[j]) {
      j++;
    }
  }
  if (j === gabarito.length) {
    console.log('PROVA COMPLETA');

  } else {
    console.log('PROVA INCOMPLETA');
  }

}

solucao(["cavalo", "pedra", "tartaruga"],
  ["cavalo", "pedra", "morcego"]);

solucao(["lambari", "campanhia", "namoro"]
["lambari", "campanhia", "namoro"]);


solucao(["aviao", "cadeira", "caneco"],
["pedra", "limpeza", "tigre", "macaco"]);