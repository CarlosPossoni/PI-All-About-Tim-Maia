var database = require("../database/config");

function gravar(musica1, musica2, musica3, id) {
    var instrucaoSql = `
    INSERT INTO top3 (id, nomeMusica1, nomeMusica2, nomeMusica3, fkUsuario)VALUES 
    (null,'${musica1}','${musica2}','${musica3}',${id});`;
    console.log(`EXECUTEI ISSO:${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function verificar(id) {
    var instrucaoSql = `
        SELECT * from top3 where fkusuario = ${id};
    `
    return database.executar(instrucaoSql)
}

module.exports = {
   gravar,
   verificar
}