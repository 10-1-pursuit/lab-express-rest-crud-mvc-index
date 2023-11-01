const express = require('express')
const persons = express.Router()
const personsArray = require('../controllers/persons.controller')


persons.get("/persons", (req, res) => {
    res.json(personsArray)

  });

module.exports = persons