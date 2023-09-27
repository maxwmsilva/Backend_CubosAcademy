const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json()); //só aceita no formato json
app.use(rotas);
app.listen(3000);