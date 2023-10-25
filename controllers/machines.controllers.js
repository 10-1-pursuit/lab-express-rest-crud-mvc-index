const express = require("express");

const machines = express.Router();
const machineArray = require("../models/machine.model.js");

machines.get("/", (request, response) => {
  response.json(machineArray);
});
machines.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(machineArray[index]);
});

module.exports = machines;
