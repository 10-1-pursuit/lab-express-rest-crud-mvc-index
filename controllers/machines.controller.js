const express = require("express");
const machines = express.Router();
const machinesArr = require("../models/machine.model");

machines.get("/", (req,res) => {
    res.json(machinesArr);
})

module.exports = machines;