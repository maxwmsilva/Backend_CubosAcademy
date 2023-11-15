const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

//testee

app.get ('/', async(req, res) =>{
 //select com where 
//conexao.query('select * from agenda where  id= $1', [5])
const agenda = await knex.raw ('select * from agenda');//quey bruta
//const agenda = await knex ('agenda').where('id','!=', 5).debug();
//const agenda = await knex ('agenda').where({id :5, nome:'alguma coisa'}).first().debug();
//first retorna o primeiro objeto que encontrar e não mais o array
//const agenda = await knex ('agenda').where({id :5}).select('id', 'nome').first().debug();


  return res.json(agenda);
});
app.listen (3000 , ()=> console.log ("servidor rodando"))