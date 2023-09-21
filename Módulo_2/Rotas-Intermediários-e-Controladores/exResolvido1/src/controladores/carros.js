const carros = require('../bancodedados')
/* endpoint de listagem de carros */
const listagemCarros = (req, res) => {
  const { marca, cor } = req.query;
  let resultado = carros;

  if (marca) {
      resultado = resultado.filter((carro) => {
          return carro.marca === marca;
      });
  }

  if (cor) {
      resultado = resultado.filter((carro) => {
          return carro.cor === cor;
      });
  }

  res.send(resultado);
}

/* end point para obter carros */
const obterCarro = (req, res) => {
  //usando desestruturação para pegar o id da rota alocado em index.js
  const {id} = req.params; //usado para pegar os parametros de rotas da propriedade id
  const carroEncontrado = carros.find((carro) => {
    return carro.id === Number(id);

  });
  res.send(carroEncontrado);

}

module.exports = {
  listagemCarros,
  obterCarro
}