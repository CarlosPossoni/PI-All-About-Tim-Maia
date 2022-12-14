var database = require("../database/config");

function votar(musica,id) {
    instrucaoSql = `UPDATE usuario SET musicaVotada = '${musica}', jaVotou = 1 WHERE id = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotos() {
    instrucaoSql = `select musicaVotada as nome, count(musicaVotada) as qntVoto from usuario
	                group by musicaVotada order by nome;`;
    console.log(`EXECUTEI ISSO ${instrucaoSql}`);
    return database.executar(instrucaoSql); 
}

function verificaVoto(id) {
    instrucaoSql = `select jaVotou from usuario where id = ${id};`
    console.log(`EXECUTEI ISSO ${instrucaoSql}`)
    return database.executar(instrucaoSql)
}

module.exports = {
    votar,
    buscarVotos,
    verificaVoto
}
