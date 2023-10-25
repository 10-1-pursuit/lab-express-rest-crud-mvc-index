const express = require("express");

const special_Events = express.Router();
const specialEventArray = require("../models/special-event.model.js");

special_Events.get("/", (request, response) => {
  response.json(specialEventArray);
});

special_Events.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(specialEventArray[index]);
});
module.exports = special_Events;
