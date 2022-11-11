create database if not exists allabout;
use allabout;

create table if not exists usuario (
id int primary key auto_increment,
nome varchar(30),
email varchar(256) unique,
senha varchar(70)
);

create table if not exists votacao (
id int primary key auto_increment,
musicaVotada int,
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

create table if not exists feedback (
id int primary key auto_increment,
nota tinyint,
mensagem varchar(512),
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

create table if not exists contato (
id int primary key auto_increment,
email varchar(256),
mensagem varchar(512)
);

select * from usuario;