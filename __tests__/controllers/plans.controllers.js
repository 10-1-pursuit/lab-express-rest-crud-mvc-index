const express = require('express');
const plans = express.Router();
const plansArray = require('../models./plansModel.js');

person.get('/', (req,res)=>{
    res.send(plansArray)
})

module.exports = plans