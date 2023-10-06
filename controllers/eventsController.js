const express = require('express');
const events = express.Router();
const eventsArr = require('../models/eventsModel');



events.get('/', (req, res) =>{
    res.json(eventsArr)
})




module.exports = events;
