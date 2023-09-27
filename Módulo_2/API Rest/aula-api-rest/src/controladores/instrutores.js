const {instrutores} = require('../bancodedados')

const listarInstrutores  = (req, res) => {
  return res.status(200).json(instrutores);

}
const obterIntrutor = (req, res) => {
  const { id } = req.params; //pega todos os parametros passados na rota

  const instrutor = instrutores.find((instrutor) => { //busca dentro do array o elemento de acordo com a condição ]
  return instrutor.id == Number(id);
  });
  if (!instrutor){
    return res.status(404).json({mensagem: 'Instrutor não encontrado!'});
  }

  return res.status(200).json(instrutor);
  
module.exports = {
  listarInstrutores
}

