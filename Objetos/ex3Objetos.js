const ProdutosConsumidos = [
    
    {
      Nome:"Cinema",
      Preco: 30,
      Quatidade: 2
    },
    {
      Nome:"Deck",
      Preco: 80,
      Quatidade: 1
    },
    {
      Nome:"BarDoJaci",
      Preco: 40,
      Quatidade: 1
    },
    {
      Nome:"BarDaMaria",
      Preco: 60,
      Quatidade: 2
    }
  ];
  const cartao = {
  Nome: "Max Willian",
  Idade: 29,
  ProdutosConsumidos: ProdutosConsumidos
};


console.log(cartao.Nome);
console.log(cartao.Idade);
cartao.Idade = 31;
console.log(cartao.Idade);
console.log(cartao.ProdutosConsumidos[0].Nome); //para acessar o produto consumido dentro do array, usamos indice.
console.log(cartao.ProdutosConsumidos[ProdutosConsumidos.length-1].Preco);