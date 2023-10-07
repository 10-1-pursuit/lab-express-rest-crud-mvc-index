const personModel = require('../models/persons.model')

function getAllPersons(req, res) {
    const persons = personModel.getAllPersons();
    res.json(persons)
}

module.exports = {getAllPersons}