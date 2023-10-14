const express = require('express');
const plan = express.Router();
const planData = require('../models/planData.js')

plan.get('/', (req,res)=>{
    res.send(planData)
});

module.exports = plan;