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

```javascript
// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado
// 500 (Internal Server Error) = falhas causadas pelo servidor
```