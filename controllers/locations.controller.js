const express = require("express");


const locations = express.Router();

const locationArray = require("../models/location.model.js")

locations.get("/", (req, res) => {
    res.send(locationArray);
})

module.exports = locations;