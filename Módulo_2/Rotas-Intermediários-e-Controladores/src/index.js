const express = require('express');
const { filtrarProfessores, encontrarProfessor } = require('./controladores/professores')


const app = express();

const primeiroIntermediario = (req, res, next) => {
  console.log(`Passei no intermediario midle`); //para todas as duas rotas ele vai passar pelo midleware e chegar no controlador de listagem do professor.
  //return res.send(`algo deu errado`);
  next();//vai continuar com as solicitações
}

const segundoIntermediario = (req, res, next) => {
  console.log(`Passei no segundo intermediario midle`); //para todas as duas rotas ele vai passar pelo midleware e chegar no controlador de listagem do professor.
  //return res.send(`algo deu errado`);
  next();

}


const intermediarioDarota = (req, res, next) => {
  console.log(`Passei no intermediario Da rota`);
  next();
  }
//rotas de midlewere
app.use(primeiroIntermediario) //qualquer chamada de rota passa pelos intermediarios antes de chegar no controlador 
app.use(segundoIntermediario)


//:id -> cria um parametro de rota id 

//local host:3000/professores
app.get('/professores', segundoIntermediario, intermediarioDarota, filtrarProfessores);
//ultima function que passa é o controlador 

//local host:3000/professores/2
app.get('/professores/:id', encontrarProfessor);

//listen port 3001
const port = 3001;
app.listen(port, () => console.log(`server running on 3001`));d