var express = require("express");
var router = express.Router();

var topController = require("../controllers/topController");

router.post("/gravarPlaylist/:id", function (req, res) {
    topController.gravar(req, res)
})

router.get("/verificarPlaylist/:id", function (req, res) {
    topController.verificar(req, res)
})

module.exports = router;