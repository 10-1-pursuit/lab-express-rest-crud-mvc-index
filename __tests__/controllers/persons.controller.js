const express = require("express");
const router = express.Router();

let persons = require("../models/person.model");

router.get("/", (request, response) => {
  response.json(persons);
});

module.exports = router;