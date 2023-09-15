--count
select COUNT(*) from usuarios where idade >= 18; --puxa a quantidade de registros encontrada 

--adiciona apelido para puxar a qtd de usuarios
select count(*) as quatidadeUser from usuarios where idade >= 18;

select *, nome as "nome completo" from usuarios where idade >=18; --passa o alias como apelido por causa das aspas vira uma string

--Concact -> sevre para concatenar registros 
select nome || email as nomeEmail from usuarios;
select nome || ' - ' || email as nomeEmail from usuarios;
select concat(nome, ' - ', email, ' - ', idade) as nome_email_idade from usuarios;

--AVG e ROUND
select * from usuarios;
select avg(idade) from usuarios where idade >= 18; --avg retorna a média de todos os valores passados no parâmetro
select round(avg(idade)) from usuarios; --round arredonda para cima ou para baixo o valor da média para o inteiro mais próximo
select round(avg(idade), 3 /*numero de casas decimais*/) from usuarios;

--MIN e Max
select min(idade) from usuarios;
select max(idade) from usuarios;
select min(nome), max(nome) from usuarios;
select min(cadastro) as "menorData", max(cadastro) as "maiorData" from usuarios;

--SUM = soma os valores
select  sum (idade) from usuarios;

--Cast conversão de dados
select idade::text from usuarios; --converteu int para string , idade virou campo de texto 
select '123'::integer;
select 12 + '4'; --somente um dos 2 podem ser string
select cast (idade as text) from usuarios;

--NOW


















