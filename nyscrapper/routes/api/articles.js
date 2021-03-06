const router = require("express").Router();
const articleController = require("../../controllers/articleControllers.js");
const axios = require("axios");


// Matches with "/api/books"
router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(articleController.findById)
    .put(articleController.update)
    .delete(articleController.remove);

module.exports = router;
