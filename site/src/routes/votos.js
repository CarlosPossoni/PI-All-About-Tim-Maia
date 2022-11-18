var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.get("/ultimas/:id", function (req, res) {
    votoController.buscarUltimosVotos(req, res);
});

// router.get("/tempo-real/:id", function (req, res) {
//     votoController.buscarVotosEmTempoReal(req, res);
// })

module.exports = router;onclick="obterDadosGrafico(1)"