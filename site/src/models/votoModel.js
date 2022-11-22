var database = require("../database/config");

function votar(musica,id) {

    instrucaoSql = `UPDATE usuario SET musicaVotada = '${musica}' WHERE id = ${id};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotos() {
    instruçãoSql = `select count(musicaVotada) as 'quantidade', musicaVotada as 'nome' from usuario;`;
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
