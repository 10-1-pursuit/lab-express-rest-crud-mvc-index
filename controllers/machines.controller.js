const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.send(machinesArray);
});

module.exports = machines;
