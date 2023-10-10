const express = require("express");
const persons = express.Router();
const personssArray = require("../models/person.model.js");

persons.get("/", (req, res) => {
  res.send(personssArray);
});

module.exports = persons;
