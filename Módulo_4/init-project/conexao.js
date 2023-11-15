const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'postgres',
    database : 'knex.js',
    port : 5432
  }
});

module.exports = knex;

