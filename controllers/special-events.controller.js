const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
  res.send(specialEventsArray);
});

module.exports = specialEvents;
