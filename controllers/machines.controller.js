const express = require("express");
const machines = express.Router();
machinesArray = require("../models/machines.model.js");

machines.get("/", (req, res) => {
    res.json(machinesArray);
})