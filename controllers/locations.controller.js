const express = require("express");
const locations = express.Router();
locationsArray = require("../models/location.model.js");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});
