const express = require('express');
const machine = express.Router();
const machineData = require('../models/machineData.js')

machine.get('/', (req,res)=>{
    res.send(machineData)
});

module.exports = machine;