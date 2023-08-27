function solucao(pedido) {
  const soma = (pedido.brigadeiro+ pedido.cajuzinho+pedido.beijinho);
  //console.log(soma);
  const total = Math.ceil(soma/15)
  console.log(total);
}

solucao({"brigadeiro": 30, "cajuzinho": 20, "beijinho": 60});
