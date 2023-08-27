const express = require('express');

const app = express();

app.get('/', (req,resp) =>{
  //console.log(req); //mostra no terminal a requisição do cliente pela porta 3000
  resp.send('Pagina inicial rotas e intermediario');
});





const port = 3000;
app.listen(port, () => console.log(`server running on port 3000`));