const express = require('express');
const persons = express.Router();
const personsArr = require('../models/personsModel')



persons.get('/', (req, res) =>{
    res.json(personsArr)
})




module.exports = persons;
