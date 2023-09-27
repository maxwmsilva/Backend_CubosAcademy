--select
select * from produtos; -- puxa todos os dados da tabela 

--update faz a atualização dentro da tabela
update produtos set categoria = 'Calças',
preco = 12950
where descricao is null;

--Nunca executar update sem where
update produtos set descricao = 'linda';

select * from produtos;

--Delete 

delete from produtos where descricao is null

--Nunca executar delete sem where
delete from produtos;

select * from produtos;


insert into produtos (nome, descricao, preco, categoria) values ('Caderno', 'Linda Camisa', 5990, 'Roupas');
insert into produtos (nome, preco, categoria) values ('Caderno', 2000, 'Material escolar');
insert into produtos (nome, descricao, preco, categoria) values ('Calça Jeans', NULL, 12900, 'Roupas'),('Bermuda', 'Bermuda longa preta', 12900, 'Roupas');

update produtos set nome = 'Caderno de 10 materias' where id = 3;
update produtos set categoria = 'Calças', preco = 12950 where descricao is null;
update produtos set nome = 'Caderno'; -- NUNCA FAÇA ISSO (UPDATE SEM WHERE)

delete from produtos where id = 1;
delete from produtos where descricao is null;
delete from produtos; -- NUNCA FAÇA ISSO 2 (DELETE SEM WHERE)
select * from produtos;


