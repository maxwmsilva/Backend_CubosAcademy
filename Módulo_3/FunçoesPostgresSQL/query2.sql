SELECT now();
SELECT *FROM agendamentos WHERE cast(agendamento as date) > now();
SELECT CAST(agendamento AS date) FROM agendamentos; --puxa somente data o date
select cast (agendamento as time) from agendamentos; -- puxa somente hora o time
SELECT CAST(agendamento AS timestamp) FROM agendamentos; -- puxa hora e data o timestamp

--Age

select age('2022-03-16 12:00:00', '2022-03-15 12:00:00');--puxa o intervalo entre as datas definidas
select age(cast('2022-03-16  12:00:00' as timestamp)); --somente um argumento precisamos converter para o tipo de data
select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now();  --compara uma data com a data atual 


--COALESCE
select * from usuarios; 
select coalesce(NULL, NULL, 'cenoura');
select concat(nome, ' - ', telefone) from usuarios;
select concat(nome, ' - ', COALESCE(telefone, 'Não possui telefone')) from usuarios;
select concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios; --substitui no final com 'não possui'

--Group BY é utilizado para agrupar de acordo com uma condição  

select idade, count(id), sum(idade) from usuarios group by idade;






