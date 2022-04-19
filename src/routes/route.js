const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
const batchesController= require("../controllers/batchesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBatch",batchesController.createBatch)

router.post("/createDeveloper",batchesController.createDeveloper)

router.get("/scholarshipDevelopers",batchesController.scholarshipDevelopers)

router.get("/developers",batchesController.developers)



module.exports = router;