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
jaVotou char(1)
);

-- CRIAÇÃO DA TABELA DE FEEDBACK, DA QUAL UM USUÁRIO FAZZ UNICA E SOMENTE UM FEEDBACK
-- E UM FEEDBACK É UNICA E SOMENTE DE UM USUÁRIO
create table if not exists feedback (
id int auto_increment,
nota tinyint not null,
mensagem varchar(512) not null,
fkUsuario int,
	foreign key (fkUsuario) references usuario(id),
primary key (id,fkUsuario)
);

-- TABELA DE CONTATO QUE RECEBERÁ SUGESTÕES, REPORTS E ETC
-- SEM A NECESSIDADE DE ESTAR LOGADO OU DE UM CADASTRO
create table if not exists contato (
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(256) not null,
mensagem varchar(512) not null
);

-- CRIAÇÃO DA TABELA TOP3, NO QUAL UM USÚARIO TEM SOMENTE UM TOP 3
-- E UM TOP 3 PODE SER DE MAIS DE UM USUÁRIO
create table if not exists top3 (
id int primary key auto_increment,
nomeMusica1 varchar(45) not null,
nomeMusica2 varchar(45) not null,
nomeMusica3 varchar(45) not null,
fkUsuario int not null unique,
	foreign key (fkUsuario) references usuario(id)
);