const express = require('express');
const app  = express();

//criando uma rota

app.get('/home', (requisicao,resposta) => {
  resposta.send('Olá Max, esse é o meu primeiro servidor com Express');
} );

app.get('/', (requisicao, resposta) => {
  resposta.send('Essa é a minha rota principal')
});

app.get('/array', (requisicao, resposta) => {
  const array = [1,2,3,4,5,6,7]
  const tamanho = array.length;
  resposta.send(array);
  resposta.send(tamanho);
})
app.listen(3000);


