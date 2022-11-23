create database if not exists allabout;
use allabout;

create table if not exists usuario (
id int primary key auto_increment,
nome varchar(30) not null,
email varchar(256) unique not null,
senha varchar(70) not null,
musicaVotada varchar(45),
jaVotou char(1) default 0
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

insert into usuario values
(null,'Carlos','carlos@gmail.com',sha2('12345678',256),'Bom Senso'),
(null,'Eduardo','eduardo@gmail.com',sha2('12345678',256),'Bom Senso'),
(null,'Oliveira','oliveira@gmail.com',sha2('12345678',256),'Universo Em Densencanto'),
(null,'Possoni','possoni@gmail.com',sha2('12345678',256),'Rarional Culture'),
(null,'Yago','yago@gmail.com',sha2('12345678',256),'Universo Em Densencanto'),
(null,'Mateus','mateus@gmail.com',sha2('12345678',256),'Imunização Racional'),
(null,'Giovana','giovana@gmail.com',sha2('12345678',256),'Universo Em Densencanto'),
(null,'Lucas','lucas@gmail.com',sha2('12345678',256),'Rarional Culture'),
(null,'Fernando','fernando@gmail.com',sha2('12345678',256),'Imunização Racional'),
(null,'Sophia','sophia@gmail.com',sha2('12345678',256),'Universo Em Densencanto'),
(null,'Paty','paty@gmail.com',sha2('12345678',256),'Bom Senso'),
(null,'Murilo','murilo@gmail.com',sha2('12345678',256),'Bom Senso'),
(null,'Ana','ana@gmail.com',sha2('12345678',256),'Bom Senso');

select * from usuario;
select * from contato;
select * from feedback;

select musicaVotada, count(musicaVotada) from usuario
	group by musicaVotada;