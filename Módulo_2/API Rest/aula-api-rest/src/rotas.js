const express = require('express');
<<<<<<< HEAD
const instrutores = require('./controladores/instrutores')
const rotas = express();
rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/id', instrutores.)
module.exports = rotas;
=======

const rotas = express();

rotas.get('/',(req,res) => {
  res.send('tudo ok');

});

module.exports = rotas;

>>>>>>> 6c805c593b3e834647fb8bdcb0b1f3f3b92c4cc7
