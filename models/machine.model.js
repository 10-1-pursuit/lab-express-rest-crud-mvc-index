const express = require('express')
const machines = express.Router()
const machinesArray = require('../controllers/machines.controller')


machines.get("/machines", (req, res) => {
    res.json(machinesArray)

  });

module.exports = machines