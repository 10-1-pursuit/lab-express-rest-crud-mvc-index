const express = require('express')
const location = express.Router()
const locationArray = require('../controllers/locations.controller')


location.get("/locations", (req, res) => {
    res.json(locationArray)

  });

module.exports = location