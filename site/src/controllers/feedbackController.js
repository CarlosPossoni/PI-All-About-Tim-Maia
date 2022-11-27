var feedbackModel = require("../models/feedbackModel");

function publicar(req, res) {
    
    var id = req.params.id;
    var nota = req.body.notaForm;
    var mensagem = req.body.mensagem;

    if (id == undefined) {
        res.status(400).send("O id está indefinido!");
    } else if (nota == undefined) {
        res.status(400).send("O titulo está indefinido!");
    } else if (mensagem == undefined) {
        res.status(403).send("A mensagem está indefinido!");
    } else {
        feedbackModel.gravar(nota, mensagem, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }    
}

function verificar(req, res) {
    
    var id = req.params.id

    feedbackModel.verificar(id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar se já fez um feedback.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    publicar,
    verificar
}