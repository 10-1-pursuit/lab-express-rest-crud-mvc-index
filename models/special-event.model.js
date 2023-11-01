const express = require('express')
const specialEvents = express.Router()
const specialEventsArray = require('../controllers/special-events.controller')


specialEvents.get("/special-events", (req, res) => {
    res.json(specialEventsArray)

  });

module.exports = specialEvents