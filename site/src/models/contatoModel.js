var database = require("../database/config");

function report(nome, email, mensagem) {
    var instrucaoSql = `
    INSERT INTO contato (id, nome, email, mensagem)VALUES 
    (null,'${nome}','${email}','${mensagem}');`;
    console.log(`EXECUTEI ISSO:${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    report
}