const express = require('express');
const { listagemCarros, obterCarro } = require('./controladores/carros');
const { validarSenha } = require('./intermediarios');

const app = express();

app.use(validarSenha);

app.get('/carros', listagemCarros);
app.get('/carros/:id', obterCarro);

const port =3000;
app.listen(port, () => console.log(`server running on  3000 port`));