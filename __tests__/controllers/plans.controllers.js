const express = require("express");
const router = express.Router();

let plans = require("../models/plan.model");

router.get("/", (request, response) => {
  response.json(plans);
});

module.exports = router;