var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

router.post("/report/:id", function (req, res) {
    contatoController.report(req, res)
})

module.exports = router;