var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.post("/publicar/:id", function (req, res) {
    feedbackController.publicar(req, res)
})

router.get("/verificarFeedback/:id", function (req, res) {
    feedbackController.verificar(req, res)
})

module.exports = router;