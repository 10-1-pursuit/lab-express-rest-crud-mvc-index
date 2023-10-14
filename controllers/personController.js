const express = require('express');
const person = express.Router();
const personData = require('../models/personData.js')

person.get('/', (req,res)=>{
    res.send(personData)
});

module.exports = person;