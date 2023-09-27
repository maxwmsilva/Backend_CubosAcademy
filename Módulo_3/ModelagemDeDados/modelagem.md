## tipos de dados numericos
smallint 2 bytes
integer 4 bytes
biginteger 8 bytes

## precisão arbitrária 
numeric variavel 
decimal variável
real e double precision
## tipo seriais (não aceitam numeros negativos ou zeros) . possui alto incremento e não aceita valores nulos 
smallserial 2 bytes
serial  4 bytes
bigserial 8 bytes

## Dados para caracteres
varchar(n)  com comprimento variavel
char(n) armazena exatamente o que for definido
text comprimento varaivel sem limite

## tipo boolean
tamanho = 1byte com valores true, false and NULL
verdadeiro = true, t, yes, on or 1
falso= false, f, no, off ou 0
timestamp 8 bytes
timestampz 8 bytes
date 4 bytes
time 8 bytes
timetz 12 bytes ' 

## constrains ou restrições
primary key (identificador unico de cada registro)
foreign key (representa a chave primaria em um relacionamento)
unique define  o valor da coluna par aser unico entre os registros
not null impede que a coluna receba valores nulos








