const express = require('express');
const specialEvent = express.Router();
const specialEventArray = require('../models/specialEventModel');

specialEvent.get('/', (req,res)=>{
    res.json(specialEventArray)
})

module.exports = specialEvent