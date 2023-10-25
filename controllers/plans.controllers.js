const express = require("express");

const Plans = express.Router();
const plansArray = require("../models/plan.model.js");

Plans.get("/", (request, response) => {
  response.json(plansArray);
});

Plans.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(plansArray[index]);
});
module.exports = Plans;
