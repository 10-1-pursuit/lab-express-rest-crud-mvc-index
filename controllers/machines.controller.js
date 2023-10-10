const express = require("express");
const router = express.Router();

let machines = require("../models/machine.model");

router.get("/", (request, response) => {
  response.json(machines);
});

module.exports = router;
