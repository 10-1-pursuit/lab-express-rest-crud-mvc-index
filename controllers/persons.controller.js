const express = require("express");

const router = express.Router();

const personsModel = require("../models/person.model");

router.get("/", (req, res) => {
  res.send(personsModel);
});

module.exports = router
