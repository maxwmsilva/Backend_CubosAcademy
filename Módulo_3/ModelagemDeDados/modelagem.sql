





--cria a base aula_modelagem
create database aula_modelagem

--exclui a base de dados
drop database aula_modelagem

-- tabela editora livraria (é uma entidade)
create table editoras(
	id serial primary key,
	nome text not null,
	cnpj text unique, 
	data_nascimento timestamp default now() --puxa data e hora no exato momento
); --not null afirma que o campo é obrigatório
insert into editoras (nome,cnpj) values ('Cubos Academy', '00112233445566');

--
create table livros (isbn integer primary key,
                     editora_id integer references editoras(id), --id é referencia da tabela editora
                     --foreign key editora_id references editora(id), seria a mesma coisa que references
                     titulo text not null,
                     data_publicacao date not null
                     );
--inserção de livros, relacionamento de 1 -> N
insert into livros (isbn, editora_id, titulo, data_publicacao)
values (12345, 1, 'BackEnd com Node.js', '2021-12-01');

--tabela endereços 

create table enderecos (
  id serial primary key,
	editora_id integer references editoras(id), --if referencia a tabela editoras
  cep text not null, 
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
  

);

--inserir endereços com relacionamento de 1 -> 1
insert into enderecos(editora_id, cep)
values(1, '37501157') -- entre aspas ja que é do tipo text


create table categorias (
	id serial primary key,
  	nome text not null
);

create table livro_categoria (
	livro_isbn integer references livros(isbn),
  	categoria_id integer references categorias(id)
);

insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Nodejs');

insert into livro_categoria 
(livro_isbn, categoria_id)
values
(12345, 1),
(12345, 2),
(12345, 3),
(12346, 2);


create table comentarios (
	id serial primary key,
  	descricao text not null,
  	comentario_id integer references comentarios(id),
  	livro_isbn integer references livros(isbn)
);

insert into comentarios (livro_isbn, descricao) values (12345, 'Livro muito bom');

insert into comentarios (comentario_id, descricao) values (1, 'Obrigado pelo elogio');

alter table categorias add column descricao text;

--alter table categorias drop column descricao;

alter table categorias alter column descricao type varchar(100);

create table telefones (
  id serial primary key, 
  editora_id integer,
  numero text
 
);
--relação de N -> N
alter table telefones
add constraint fk_telefones_editoras 
foreign key (editora_id) references editoras (id);



                     
                     





