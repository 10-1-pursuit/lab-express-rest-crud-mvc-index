const express = require('express');
const router = express.Router();

const specialEventsArray = require('../models/specialEvents.js');

router.get('/', (req, res) => {
    res.json(specialEvents);
})

module.exports = specialEvents;