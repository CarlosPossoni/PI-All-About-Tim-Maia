create database if not exists allabout;
use allabout;

create table if not exists usuario (
id int primary key auto_increment,
nome varchar(30) not null,
email varchar(256) unique not null,
senha varchar(70) not null,
musicaVotada tinyint,
	check (musicaVotada in(1,2,3,4))
);

create table if not exists feedback (
id int primary key auto_increment,
nota tinyint not null,
mensagem varchar(512) not null,
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

create table if not exists contato (
id int primary key auto_increment,
email varchar(256) not null,
mensagem varchar(512) not null,
fkUsuario int,
	foreign key (fkUsuario) references usuario(id)
);

select * from usuario;
select * from contato;
select * from feedback;

insert into usuario values
(null,'Carlos','carlos@gmail.com',sha2('12345678',256),1),
(null,'Eduardo','eduardo@gmail.com',sha2('12345678',256),1),
(null,'Oliveira','oliveira@gmail.com',sha2('12345678',256),2),
(null,'Possoni','possoni@gmail.com',sha2('12345678',256),3),
(null,'Yago','yago@gmail.com',sha2('12345678',256),2),
(null,'Mateus','mateus@gmail.com',sha2('12345678',256),4),
(null,'Giovana','giovana@gmail.com',sha2('12345678',256),2),
(null,'Lucas','lucas@gmail.com',sha2('12345678',256),3),
(null,'Fernando','fernando@gmail.com',sha2('12345678',256),4),
(null,'Sophia','sophia@gmail.com',sha2('12345678',256),2),
(null,'Paty','paty@gmail.com',sha2('12345678',256),1),
(null,'Murilo','murilo@gmail.com',sha2('12345678',256),1),
(null,'Ana','ana@gmail.com',sha2('12345678',256),1);

select count(musicaVotada) from usuario
	group by musicaVotada;