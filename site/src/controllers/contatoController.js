var contatoModel = require("../models/contatoModel");

function report(req, res) {
    
    var nome = req.body.nome;
    var email = req.body.email;
    var mensagem = req.body.mensagem;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("O titulo está indefinido!");
    } else if (mensagem == undefined) {
        res.status(403).send("A mensagem está indefinido!");
    } else {
        contatoModel.report(nome, email, mensagem)
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

module.exports = {
    report,
}