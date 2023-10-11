const express = require('express');
const machines = express.Router();
const machinesArray = require('../models./machinesModel.js');

locations.get('/', (req,res)=>{
    res.send(machinesArray)
})

module.exports = machines