const express = require("express");
const special_events = express.Router();
special_eventsArray = require("../models/special-events.model.js");

special_events.get("/", (req, res) => {
    res.json(special_eventsArray);
})

module.exports = special_events;