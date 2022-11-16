var votoModel = require("../models/votoModel");

function buscarUltimosVotos(req, res) {

    const limite_linhas = 7;

    var id = req.params.id;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    votoModel.buscarUltimasVotos(id, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar nos ultimos votos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarVotosEmTempoReal(req, res) {

    var id = req.params.id;

    console.log(`Recuperando votos em tempo real`);

    votoModel.buscarVotoEmTempoReal(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar nos ultimos votos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosVotos,
    buscarVotosEmTempoReal
}