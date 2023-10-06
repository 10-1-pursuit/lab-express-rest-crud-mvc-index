const express = require('express');
const locations = express.Router();
const locationArr = require('../models/locationModel')


console.log(locationArr)

locations.get('/', (req, res) =>{
    res.json(locationArr)
})




module.exports = locations;
