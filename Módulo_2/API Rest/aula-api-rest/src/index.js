const express = require('express');
const rotas = require('./rotas');

const app = express();

<<<<<<< HEAD
app.use(express.json()); //só aceita no formato json
app.use(rotas);
=======
app.use(express.json());

app.use(rotas);

>>>>>>> 6c805c593b3e834647fb8bdcb0b1f3f3b92c4cc7
app.listen(3000);