var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.put("/votar/:musica/:id", function (req, res) {
    votoController.votar(req, res);
});

router.get("/votar/", function (req, res) {
    votoController.buscarVotos(req, res);
});

module.exports = router;