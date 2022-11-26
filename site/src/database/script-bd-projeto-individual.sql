-- CRIAÇÃO DO BANCO
create database if not exists allabout;
use allabout;

-- CRIAÇÃO DAS TABELAS NECESSÁRIAS PARA FUNCIONAMENTO DO PROJETO
-- CRIAÇÃO DA TABELA DE USUÁRIO NO QUAL RECEBERÁ EMAIL E SENHA(CRIPTOGRAFADA) E
-- QUAL MÚSICA SERÁ VOTADA
create table if not exists usuario (
id int primary key auto_increment,
nome varchar(30) not null,
email varchar(256) unique not null,
senha varchar(70) not null,
musicaVotada varchar(45),
jaVotou char(1) default 0
);

-- CRIAÇÃO DA TABELA DE FEEDBACK, DA QUAL UM USUÁRIO FAZZ UNICA E SOMENTE UM FEEDBACK
-- E UM FEEDBACK É UNICA E SOMENTE DE UM USUÁRIO
create table if not exists feedback (
id int primary key auto_increment,
nota tinyint not null,
mensagem varchar(512) not null,
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

-- TABELA DE CONTATO QUE RECEBERÁ SUGESTÕES, REPORTS E ETC
-- SEM A NECESSIDADE DE ESTAR LOGADO OU DE UM CADASTRO
create table if not exists contato (
id int primary key auto_increment,
email varchar(256) not null,
mensagem varchar(512) not null
);

-- CRIAÇÃO DA TABELA DE COMENTÁRIO QUE RECEBERÁ A MENSAGEM E DE QUAL USUÁRIO É AQUELA MENSAGEM
-- NO QUAL UM COMENTÁRIO É DE UM USUÁRIO E UM USUÁRIO FAZ QUANTOS COMENTÁRIO QUISER
create table if not exists comentario (
id int primary key auto_increment,
mensagem varchar(512),
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

insert into usuario values
(null,'Carlos','carlos@gmail.com',sha2('12345678',256),'Bom Senso',1),
(null,'Eduardo','eduardo@gmail.com',sha2('12345678',256),'Bom Senso',1),
(null,'Oliveira','oliveira@gmail.com',sha2('12345678',256),'Universo Em Desencanto',1),
(null,'Possoni','possoni@gmail.com',sha2('12345678',256),'Contacto Com o Mundo Racional',1),
(null,'Yago','yago@gmail.com',sha2('12345678',256),'Universo Em Desencanto',1),
(null,'Mateus','mateus@gmail.com',sha2('12345678',256),'Imunização Racional',1),
(null,'Giovana','giovana@gmail.com',sha2('12345678',256),'Universo Em Desencanto',1),
(null,'Lucas','lucas@gmail.com',sha2('12345678',256),'Contacto Com o Mundo Racional',1),
(null,'Fernando','fernando@gmail.com',sha2('12345678',256),'Imunização Racional',1),
(null,'Sophia','sophia@gmail.com',sha2('12345678',256),'Universo Em Desencanto',1),
(null,'Paty','paty@gmail.com',sha2('12345678',256),'Bom Senso',1),
(null,'Murilo','murilo@gmail.com',sha2('12345678',256),'Bom Senso',1),
(null,'Ana','ana@gmail.com',sha2('12345678',256),'Bom Senso',1);

select * from usuario;
select * from contato;
select * from feedback;
desc usuario;

select musicaVotada,count(musicaVotada) as qntVoto from usuario
	group by musicaVotada order by musicaVotada;

update usuario set musicaVotada = null, jaVotou = 0 where id = 14;