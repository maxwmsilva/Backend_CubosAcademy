const ProdutosConsumidos = [

  {
    Nome: "Cinema",
    Preco: 30,
    Quatidade: 2
  },
  {
    Nome: "Deck",
    Preco: 80,
    Quatidade: 1
  },
  {
    Nome: "BarDoJaci",
    Preco: 40,
    Quatidade: 1
  },
  {
    Nome: "BarDaMaria",
    Preco: 60,
    Quatidade: 2
  }
];
const cartao = {
  Nome: "Max Willian",
  Idade: 29,
  ProdutosConsumidos: ProdutosConsumidos
};
let soma = 0;
for (let produtos of ProdutosConsumidos) {
  soma += produtos.Preco* produtos.Quatidade
}

console.log(`Olá ${cartao.Nome}, obrigado pela compra,  seu valor total a pagar será R$ ${(soma/100).toFixed(2)}`);
