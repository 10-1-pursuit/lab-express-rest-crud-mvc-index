const express = require("express");
const router = express.Router();

let locations = require("../models/location.model");

router.get("/", (request, response) => {
  response.json(locations);
});

module.exports = router;
