var topModel = require("../models/topModel");

function gravar(req, res) {
    
    var id = req.params.id;
    var musica1 = req.body.musica1;
    var musica2 = req.body.musica2;
    var musica3 = req.body.musica3;

    if (id == undefined) {
        res.status(400).send("O id está indefinido!");
    } else if (musica1 == undefined) {
        res.status(400).send("A musica1 está indefinido!");
    } else if (musica2 == undefined) {
        res.status(403).send("A musica2 está indefinido!");
    } else if (musica3 == undefined) {
        res.status(403).send("A musica3 está indefinido!");
    } else {
        topModel.gravar(musica1, musica2, musica3, id)
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

    topModel.verificar(id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar se já fez um top3.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    gravar,
    verificar
}