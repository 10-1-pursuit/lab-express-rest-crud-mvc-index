const express = require("express");
const person = express.Router();
const personsArr = require("../models/person.model");

person.get("/", (req, res) => {
  res.json(personsArr);
});

module.exports = person;
