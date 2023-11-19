const express = require('express');
const persons = express.Router();
const personsArray = require('../models/persons');

persons.get('/' ,(req, res ) => {
    res.json(personsArray)
});



module.exports=persons