const express = require('express');
const servidor = express();

const arrayUser = [
  { id: 11, nome: 'joao', idade: 23 },
  { id: 2, nome: 'maria', idade: 18 },
  { id: 4, nome: 'ana', idade: 30 },
  { id: 1, nome: 'rodrigo', idade: 17 },
  { id: 123, nome: 'rodrigo', idade: 17 }
];
/* Criando uma rota  */

servidor.get('/usuarios', (req, res) => {
  res.send(arrayUser);

});

servidor.get('/rota', (req, res) => {
  res.send('Nomes dos usuarios em  http://localhost:3000/usuarios')
});

servidor.listen(3000, () => {
  console.log('servidor inicializado na porta 3000');
});