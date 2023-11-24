const express = require("express");

const router = express.Router();

const machinesModel = require("../models/machine.model");

router.get("/", (req, res) => {
  res.send(machinesModel);
});

module.exports = router;
