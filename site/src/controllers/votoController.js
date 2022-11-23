var votoModel = require("../models/votoModel");

function votar(req, res) {
    var id = req.params.id;
    var musica = req.params.musica;

    console.log(`Recuperando as musicas`);

    votoModel.votar(musica, id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar nos ultimos votos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarVotos(req, res) {
    votoModel.buscarVotos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }  
    )
}

function verificaVoto(req, res) {
    var id = req.params.id

    console.log(`Verificando se já votou`);

    votoModel.verificaVoto(id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar nos ultimos votos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    votar,
    buscarVotos,
    verificaVoto
}