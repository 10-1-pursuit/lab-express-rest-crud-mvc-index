const express = require('express');
const router = express.Router();

const people = require('../models/personsData')
const location = require('../models/locationModel');

router.get('/', (req, res) => {
    res.json(location);
})

const { groupPeopleByLocations } = require('../helper.js');

router.get('/people', (req, res) => {
    const organizedPeople = groupPeopleByLocations(location, people);
    res.json(organizedPeople)
})

module.exports = router;