const express = require('express')
const plans = express.Router()
const plansArray = require('../controllers/plans.controller')


plans.get("/plans", (req, res) => {
    res.json(plansArray)

  });

module.exports = plans