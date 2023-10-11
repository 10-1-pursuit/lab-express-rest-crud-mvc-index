const express = require('express');
const persons = express.Router();
const personsArray = require('../models./personModel.js');

person.get('/', (req,res)=>{
    res.send(personsArray)
})

module.exports = persons