const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

persons.get("/persons", (req, res) => {
  res.send(personsArray);
});

module.exports = persons;