const express = require("express");

const router = express.Router();

const planaModel = require("../models/plan.model");

router.get("/", (req, res) => {
  res.send(planaModel);
});

module.exports = router;
