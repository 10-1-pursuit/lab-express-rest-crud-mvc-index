const express = require("express");

const persons = express.Router();
const personArray = require("../models/person.model.js");

persons.get("/", (request, response) => {
  response.json(personArray);
});

persons.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(personArray[index]);
});
module.exports = persons;
