const express = require("express");
const router = express.Router();

let specialEvents = require("../models/special-event.model");

router.get("/", (request, response) => {
  response.json(specialEvents);
});

module.exports = router;