const express = require('express');
const plan = express.Router();
const plansArr = require('../models/plan.model')



plan.get('/', (req, res) =>{
    res.json(plansArr)
})




module.exports = plan;
