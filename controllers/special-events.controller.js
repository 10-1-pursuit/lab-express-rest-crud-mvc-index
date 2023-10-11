const express = require("express");

const specialevents = express.Router();

const specialeventsArray = require("../models/special-event.model.js");


specialevents.get("/", (req, res) => {
    res.send(specialeventsArray);
})


module.exports = specialevents;