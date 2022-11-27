var database = require("../database/config");

function gravar(nota, mensagem, id) {
    var instrucaoSql = `
    INSERT INTO feedback (id, nota, mensagem, fkUsuario)VALUES 
    (null,${nota},'${mensagem}',${id});`;
    console.log(`EXECUTEI ISSO:${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function verificar(id) {
    var instrucaoSql = `
        SELECT fkUsuario from feedback where fkUsuario = ${id};
    `
    return database.executar(instrucaoSql)
}

module.exports = {
    gravar,
    verificar
}