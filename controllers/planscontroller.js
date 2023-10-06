const express = require('express');
const plans = express.Router();
const plansArr = require('../models/plansModel')



plans.get('/', (req, res) =>{
    res.json(plansArr)
})




module.exports = plans;
